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

export const baseTooltip = {
  base: "hidden max-w-max absolute top-0 left-0 px-3 py-[5px] rounded-md text-sm shadow-lg border",
  variants: {
    color: {
      light: "bg-white text-gray-900 border-gray-200",
      dark: "bg-gray-900 text-white border-gray-900",
    },
  },
  slots: {
    arrow: "absolute bg-inherit w-2 h-2 rotate-45",
  },
};

interface TooltipProps extends BaseProps {
  color?: "light" | "dark";
  label: string | NullstackNode;
  offset?: number;
  placement?: Placement;
}

export default class Tooltip extends Nullstack {
  targetRef: HTMLElement = null;
  tooltipRef: HTMLElement = null;
  arrowRef: HTMLElement = null;

  updatePosition(context?: NullstackClientContext<TooltipProps>) {
    computePosition(this.targetRef, this.tooltipRef, {
      placement: context.placement || "top",
      middleware: [offset(context.offset || 8), flip(), shift(), arrow({ element: this.arrowRef })],
    }).then(({ middlewareData, placement, x, y }) => {
      Object.assign(this.tooltipRef.style, {
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

      Object.assign(this.arrowRef.style, {
        left: arrowX != null ? `${arrowX}px` : "",
        top: arrowY != null ? `${arrowY}px` : "",
        right: "",
        bottom: "",
        [staticSide]: "-4px",
      });
    });
  }

  _cleanup() {
    autoUpdate(this.targetRef, this.tooltipRef, this.updatePosition);
  }

  _show() {
    this.tooltipRef.style.display = "block";
    this.updatePosition();
  }

  _hide() {
    this.tooltipRef.style.display = "none";
    this._cleanup();
  }

  render({ children, class: klass, color, label, theme }: NullstackClientContext<TooltipProps>) {
    const tooltip = tc(baseTooltip, theme?.tooltip);
    const { arrow, base } = tooltip();

    return (
      <>
        <button
          ref={this.targetRef}
          aria-describedby="tooltip"
          onmouseenter={this._show}
          onmouseleave={this._hide}
          onfocus={this._show}
          onblur={this._hide}
        >
          {children}
        </button>
        <div
          ref={this.tooltipRef}
          id="tooltip"
          role="tooltip"
          class={base({ color, class: klass })}
        >
          {label}
          <div ref={this.arrowRef} class={arrow()} />
        </div>
      </>
    );
  }
}
