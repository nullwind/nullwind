import Nullstack, {
  NullstackClientContext,
  NullstackFunctionalComponent,
  NullstackNode,
} from "nullstack";

import { computePosition, flip, offset, type Placement, shift } from "@floating-ui/dom";

import tc from "../tc";
import type { BaseProps } from "../types";

export const baseDropdown = {
  slots: {
    wrapper: "",
    container:
      "hidden absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    item: {
      base: "text-gray-700 block px-4 py-2 text-sm",
      variants: {
        type: {
          option: "hover:bg-gray-300 focus:bg-gray-300",
        },
        active: {
          true: "bg-gray-300",
        },
      },
    },
  },
};

interface DropdownProps extends BaseProps {
  children: NullstackNode[];
  offset?: number;
  placement?: Placement;
}

interface DropdownContainerProps extends BaseProps {
  Dropdown: Dropdown;
}

type CustonChildren = NullstackNode & {
  attributes: {
    Dropdown: Dropdown;
  };
};

type CustonChildrenTarget = NullstackNode & {
  attributes: {
    Dropdown: Dropdown;
    onclick: () => void;
    ref: { object: Dropdown; property: "_targetRef" };
  };
};

type CustonChildrenItem = NullstackNode & {
  attributes: {
    Dropdown: Dropdown;
    active?: boolean;
    index?: string | number;
  };
};

type DropdownTargetProps = DropdownContainerProps;

interface DropdownItemProps extends BaseProps {
  Dropdown: Dropdown;
  active: boolean;
  index?: string;
  onclick: (ref?: HTMLElement) => void;
  type?: "option" | "none";
}

class DropdownItem extends Nullstack {
  active = false;
  _elementRef: HTMLElement & CustonChildrenItem;
  render({
    children,
    class: klass,
    onclick,
    theme,
    type = "option",
  }: NullstackClientContext<DropdownItemProps>) {
    const { item } = tc(baseDropdown, theme?.dropdown)();
    const child = children;
    return (
      <element
        tag={type == "option" ? "a" : "div"}
        role="none"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="0"
        ref={this._elementRef}
        class={item({
          class: klass,
          type,
          active: type == "option" && this._elementRef?.attributes?.active,
        })}
        onclick={[() => onclick(this._elementRef), () => (this.active = !this.active)]}
      >
        {child}
      </element>
    );
  }
}

class Dropdown extends Nullstack {
  visible: boolean;
  _targetRef: HTMLElement;
  _dropdownRef: HTMLElement;
  _currentElement: HTMLElement;
  static Target: NullstackFunctionalComponent<DropdownTargetProps> = ({
    Dropdown,
    children,
  }: NullstackClientContext<DropdownTargetProps>) => {
    const child = children.map((childItem: CustonChildrenTarget) => {
      childItem.attributes.ref = { object: Dropdown, property: "_targetRef" };
      childItem.attributes.onclick = Dropdown.visible ? Dropdown._hide : Dropdown._show;

      return childItem;
    });

    return child;
  };

  static Container: NullstackFunctionalComponent<DropdownContainerProps> = ({
    Dropdown,
    children,
    class: klass,
    theme,
  }: NullstackClientContext<DropdownContainerProps>) => {
    const { container } = tc(baseDropdown, theme?.dropdown)();
    const child = children.map((item: CustonChildrenItem, index) => {
      item.attributes.Dropdown = Dropdown;
      if (!item.attributes.index) {
        item.attributes.index = `${index}`;
      }
      return item;
    });
    return (
      <div
        ref={Dropdown._dropdownRef}
        id="dropdown-container"
        role="presentation"
        class={container({ class: klass })}
      >
        {child}
      </div>
    );
  };

  static Item: NullstackFunctionalComponent<DropdownItemProps> = ({
    Dropdown,
    children,
    ...props
  }: NullstackClientContext<DropdownItemProps>) => {
    return (
      <DropdownItem
        {...{ ...props }}
        ref={Dropdown._currentElement}
        onclick={(ref) => Dropdown._selected({ ref })}
      >
        {children}
      </DropdownItem>
    );
  };

  _show() {
    this._dropdownRef.style.display = "block";
    this.visible = true;
  }

  _hide() {
    this._dropdownRef.style.display = "none";
    this.visible = false;
  }

  _selected({ ref }) {
    this._hide();
  }

  _outsideClick(event) {
    if (!this._dropdownRef.contains(event.target) && !this._targetRef.contains(event.target)) {
      this._hide();
    }
  }
  updatePosition(context?: NullstackClientContext<DropdownProps>) {
    computePosition(this._targetRef, this._dropdownRef, {
      placement: context.placement || "top",
      middleware: [offset(context.offset || 8), flip(), shift()],
    }).then(({ x, y }) => {
      Object.assign(this._targetRef.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
  hydrate() {
    document.addEventListener("click", this._outsideClick);
  }

  render({ children, class: klass, theme }: NullstackClientContext<DropdownProps>) {
    children = children?.map((child: CustonChildren) => {
      child.attributes.Dropdown = this;
      return child;
    });

    const { wrapper } = tc(baseDropdown, theme?.dropdown)();
    return (
      <div role="menu" id="menu" class={wrapper({ class: klass })}>
        {children}
      </div>
    );
  }
}

export default Dropdown;
