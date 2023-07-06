import Nullstack, {
  NullstackClientContext,
  NullstackFunctionalComponent,
  NullstackNode,
} from "nullstack";

import tc from "../tc";
import type { BaseProps } from "../types";

export const baseDropdown = {
  slots: {
    wrapper: "relative inline-block",
    container:
      "hidden absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    item: {
      base: "text-gray-700 block px-4 py-2 text-sm",
      variants: {
        active: {
          true: "bg-red-500",
        },
      },
    },
  },
};

interface DropdownProps extends BaseProps {
  children: NullstackNode[];
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
  type?: "option" | "none";
}
class Dropdown extends Nullstack {
  visible: boolean;
  _targetRef: HTMLElement;
  _dropdownRef: HTMLElement;
  _currentIndex;
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
      item.attributes.active = Dropdown._currentIndex == item.attributes.index;
      return item;
    });
    return (
      <div
        ref={Dropdown._dropdownRef}
        key={Dropdown._currentIndex}
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
    active = false,
    children,
    class: klass,
    index,
    theme,
    type = "option",
  }: NullstackClientContext<DropdownItemProps>) => {
    const { item } = tc(baseDropdown, theme?.dropdown)();
    const child = children;
    return (
      <element
        tag={type == "option" ? "a" : "div"}
        role="none"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="0"
        onclick={() => type == "option" && Dropdown._selected({ index })}
        class={item({ class: klass, active })}
      >
        {child}
      </element>
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

  _selected({ index }) {
    this._currentIndex = index;
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
