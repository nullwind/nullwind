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
          option: "hover:bg-gray-200",
        },
        active: {
          true: "bg-gray-400",
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
  href?: string;
  index: number;
  onclick?: (index: number) => void;
  title?: string;
  type?: "option" | "none";
}
class Dropdown extends Nullstack {
  visible: boolean;
  _targetRef: HTMLElement;
  _dropdownRef: HTMLElement;
  _currentElement: HTMLElement;
  _currentElementIndex = null;

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
      item.attributes.index = `${index}`;
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
    class: klass,
    href,
    index,
    onclick,
    theme,
    title,
    type = "option",
  }: NullstackClientContext<DropdownItemProps>) => {
    const { item } = tc(baseDropdown, theme?.dropdown)();
    return (
      <element
        tag={type == "option" ? "a" : "div"}
        role="none"
        aria-orientation="vertical"
        title={title}
        href={type == "option" ? href : undefined}
        aria-labelledby="menu-button"
        tabindex="0"
        class={item({
          class: `${klass} dropdown-item`,
          type,
        })}
        onclick={[
          () => Dropdown._selected(index),
          () => {
            if (onclick) {
              onclick(index);
            }
          },
        ]}
      >
        {children}
      </element>
    );
  };

  _elementsRef() {
    return this._dropdownRef.querySelectorAll<HTMLTableRowElement>(".dropdown-item");
  }

  _show() {
    this._dropdownRef.style.display = "block";
    this.updatePosition();
    this.visible = true;
  }

  _hide() {
    this._deactiveElement(this._currentElement);
    this._currentElement = null;
    this._currentElementIndex = null;
    this._dropdownRef.style.display = "none";
    this.visible = false;
  }

  _selected(index: number) {
    this._updateCurrentElement(index);
    this._hide();
  }

  _outsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (event?.target) {
      if (!this._dropdownRef.contains(target) && !this._targetRef.contains(target)) {
        this._hide();
      }
    }
  }

  _activeClass() {
    // TODO: implement dynamic change for theme oevrlay
    return baseDropdown.slots.item.variants.active.true;
  }

  _activeElement(element?: HTMLElement) {
    if (element) {
      element.classList.add(this._activeClass());
    }
  }

  _deactiveElement(element?: HTMLElement) {
    if (element) {
      element.classList.remove(this._activeClass());
    }
  }

  _onArrowDown() {
    let index = this._currentElementIndex;
    if (index === null || index + 1 >= this._elementsRef().length) {
      index = 0;
    } else {
      index = index + 1;
    }
    this._updateCurrentElement(index);
  }

  _onArrowUp() {
    let index = this._currentElementIndex;
    if (index == 0) {
      index = this._elementsRef().length - 1;
    } else {
      index = index - 1;
    }
    this._updateCurrentElement(index);
  }

  _updateCurrentElement(index: number) {
    this._deactiveElement(this._currentElement);
    this._currentElement = this._elementsRef()[index];
    this._currentElementIndex = index;
  }
  _onKeyDown(event: KeyboardEvent) {
    const key = event.key; // Preferred way to get the key value
    if (this.visible) {
      switch (key) {
        case "Enter":
          event.preventDefault();
          if (this._currentElement) {
            this._activeElement(this._currentElement);
            if (this._currentElement?.click) {
              this._currentElement.click();
            }
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          this._onArrowDown();
          break;
        case "ArrowUp":
          event.preventDefault();
          this._onArrowUp();
          break;
      }
      this._activeElement(this._currentElement);
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
    document.addEventListener("keydown", this._onKeyDown);
  }

  terminate() {
    document.removeEventListener("click", this._outsideClick);
    document.removeEventListener("keydown", this._onKeyDown);
    this._currentElementIndex = null;
    this._currentElement = null;
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
