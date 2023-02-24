import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { IconX } from "nullstack-feather-icons";

import theme from "../theme";

interface ModalProps {
  children?: NullstackNode;
  visible?: boolean;
  onclose?: () => void;
  classes?: typeof theme.modal;
}

const Modal = ({
  classes = theme.modal,
  visible,
  onclose,
  children,
}: NullstackClientContext<ModalProps>) => {
  return (
    <div
      class={[classes.base, classes.visible[visible ? "on" : "off"]]}
      role="dialog"
      aria-modal={visible}
    >
      <div class={classes.wrapper}>
        <div class={classes.overlay} aria-hidden="true" />
        <div class={classes.container}>
          {typeof onclose === "function" && (
            <div class={classes.close.base} onclick={onclose && onclose}>
              <button type="button" class={classes.close.button}>
                <span class="sr-only">Close</span>
                <IconX />
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
