import Nullstack, { NullstackClientContext, NullstackNode } from "nullstack";

import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  type Placement,
  shift,
} from "@floating-ui/dom";

import tc from "../tc";
import type { BaseProps } from "../types";

export const basePopover = {
  slots: {
    dropdown:
      "hidden w-auto absolute top-0 left-0 py-1 rounded-md text-sm shadow-lg border bg-white z-50",
    arrow: "absolute bg-inherit w-2 h-2 rotate-45",
  },
};

type CustomChildren = NullstackNode & {
  attributes?: {
    Popover: Popover;
  };
  children?: CustomChildren;
  type: string;
};

interface PopoverProps extends BaseProps {
  children: CustomChildren;
  content: NullstackNode;
  offset?: number;
  opened?: boolean;
  placement?: Placement;
}

type PopoverContext<TProps = unknown> = Omit<NullstackClientContext, "children"> & TProps;

interface TargetProps extends BaseProps {
  Popover: Popover;
  children?: CustomChildren;
}

interface DropdownProps extends BaseProps {
  Popover: Popover;
  children?: CustomChildren;
}

class Popover extends Nullstack<PopoverProps> {
  _targetRef: HTMLElement;
  _dropdownRef: HTMLElement;
  _arrowRef: HTMLElement;

  static Target: (context: PopoverContext<TargetProps>) => NullstackNode;
  static Dropdown: (context: PopoverContext<DropdownProps>) => NullstackNode;

  get opened() {
    return this._dropdownRef?.style?.display === "block";
  }

  updatePosition(context?: NullstackClientContext<PopoverProps>) {
    computePosition(this._targetRef, this._dropdownRef, {
      placement: context.placement || "top",
      middleware: [
        offset(context.offset || 16),
        flip(),
        shift(),
        arrow({ element: this._arrowRef }),
      ],
    }).then(({ middlewareData, placement, x, y }) => {
      Object.assign(this._dropdownRef.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
      }[placement.split("-")[0]];

      Object.assign(this._arrowRef.style, {
        left: arrowX != null ? `${arrowX}px` : "",
        top: arrowY != null ? `${arrowY}px` : "",
        right: "",
        bottom: "",
        [staticSide]: "-4px",
      });
    });
  }

  _cleanup() {
    autoUpdate(this._targetRef, this._dropdownRef, this.updatePosition);
  }

  _show() {
    this._dropdownRef.style.display = "block";
    this.updatePosition();
  }

  _hide() {
    this._dropdownRef.style.display = "none";
    this._cleanup();
  }

  _toggle(opened = !this.opened) {
    opened ? this._show() : this._hide();
  }

  update({ opened }: NullstackClientContext<PopoverProps>) {
    if (opened !== this.opened) {
      this._toggle(opened);
    }
  }

  render({ children }: PopoverContext<PopoverProps>) {
    if (Array.isArray(children)) {
      return children?.map((child: CustomChildren) => {
        child.attributes.Popover = this;
        return child;
      });
    }

    children.attributes.Popover = this;

    return children;
  }
}

Popover.Target = ({ Popover, children }) => {
  const child = children[0];

  if (child) {
    child.attributes.ref = { object: Popover, property: "_targetRef" };

    if (!child.attributes.onclick) {
      child.attributes.onclick = () => Popover._toggle();
    }
  }

  return child;
};

Popover.Dropdown = ({ Popover, children, class: klass, id, theme }) => {
  const popover = tc(basePopover, theme?.popover);
  const { arrow, dropdown } = popover();
  const child = children?.[0];

  return (
    <div ref={Popover._dropdownRef} id={id} role="popover" class={dropdown({ class: klass })}>
      {typeof child === "function" ? child({ hide: () => Popover._hide() }) : child}
      <div ref={Popover._arrowRef} class={arrow()} />
    </div>
  );
};

export default Popover;
