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
      <div class={classes.wrapper}>
        <div
          class={classes.overlay}
          aria-hidden="true"
          onclick={typeof onclose === "function" && onclose}
        />
        <div class={classes.content}>
          {typeof onclose === "function" && (
            <div class={classes.close.root} onclick={onclose && onclose}>
              <button type="button" class={classes.close.button.root}>
                <span class="sr-only">Close</span>
                <XIcon class={classes.close.button.icon} />
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
