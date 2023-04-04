import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import XIcon from "./icons/XIcon";
import type { ComponentProps } from "../types";

interface ModalProps extends ComponentProps {
  children?: NullstackNode;
  onclose?: () => void;
  visible?: boolean;
}

const Modal = ({
  children,
  class: klass,
  onclose,
  theme,
  useTheme,
  visible,
}: NullstackClientContext<ModalProps>) => {
  const classes = useTheme(theme).modal;

  return (
    <div
      class={twMerge(classes.base, classes.visible[visible ? "on" : "off"], klass)}
      role="dialog"
      aria-modal={visible}
    >
      <div
        class={classes.overlay}
        aria-hidden="true"
        onclick={typeof onclose === "function" && onclose}
      />
      <div class={classes.wrapper.base}>
        <div class={classes.wrapper.content.base}>
          {typeof onclose === "function" && (
            <div class={classes.wrapper.content.close.base} onclick={onclose && onclose}>
              <button type="button" class={classes.wrapper.content.close.button.base}>
                <XIcon class={classes.wrapper.content.close.button.icon} />
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal as NullstackFunctionalComponent<ModalProps>;
