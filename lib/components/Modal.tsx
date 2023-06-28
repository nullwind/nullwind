import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import XIcon from "./icons/XIcon";
import tc from "../tc";
import type { BaseProps } from "../types";

export const baseModal = {
  base: "modal-transition fixed z-30 inset-0 overflow-y-auto hidden",
  variants: {
    visible: {
      true: "block",
    },
  },
  slots: {
    overlay: "fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity",
    wrapper: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center",
    content:
      "relative inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full",
    close: "absolute top-4 right-4",
    closeButton: "bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none",
    closeButtonIcon: "h-5 w-5",
  },
};

interface ModalProps extends BaseProps {
  children?: NullstackNode;
  onclose?: () => void;
  visible?: boolean;
}

const Modal = ({
  children,
  class: klass,
  onclose,
  theme,
  visible,
}: NullstackClientContext<ModalProps>) => {
  const modal = tc(baseModal, theme?.modal);
  const { base, close, closeButton, closeButtonIcon, content, overlay, wrapper } = modal();

  return (
    <div class={base({ visible, class: klass })} role="dialog" aria-modal={visible}>
      <div
        class={overlay()}
        aria-hidden="true"
        onclick={typeof onclose === "function" && onclose}
      />
      <div class={wrapper()}>
        <div class={content()}>
          {typeof onclose === "function" && (
            <div class={close()} onclick={onclose && onclose}>
              <button type="button" class={closeButton()}>
                <XIcon class={closeButtonIcon()} />
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
