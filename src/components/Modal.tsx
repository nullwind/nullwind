import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { IconX } from "nullstack-feather-icons";

import theme from "../theme";

interface ModalProps {
  children?: NullstackNode;
  visible?: boolean;
  onclose?: () => void;
}

const Modal = ({ visible, onclose, children }: NullstackClientContext<ModalProps>) => {
  const classes = theme.modal;

  return (
    <div class={[classes.base, visible ? "block" : "hidden"]} role="dialog" aria-modal={visible}>
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

interface ElementsProps {
  class?: string;
  children?: NullstackNode;
}

Modal.Body = ({ children, class: klass }: NullstackClientContext<ElementsProps>) => (
  <div class={[theme.modal.body, klass]}>{children}</div>
);

Modal.Footer = ({ children, class: klass }: NullstackClientContext<ElementsProps>) => (
  <div class={[theme.modal.footer, klass]}>{children}</div>
);

export default Modal as NullstackFunctionalComponent<ModalProps>;
