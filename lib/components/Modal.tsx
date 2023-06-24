import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import XIcon from "./icons/XIcon";
import type { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

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
  useTheme = useThemeProvider(),
  visible,
}: NullstackClientContext<ModalProps>) => {
  const { base, slots, variants } = useTheme(theme).modal;

  return (
    <div
      class={twMerge(base, variants.visible[visible && "true"], klass)}
      role="dialog"
      aria-modal={visible}
    >
      <div
        class={slots.overlay}
        aria-hidden="true"
        onclick={typeof onclose === "function" && onclose}
      />
      <div class={slots.wrapper}>
        <div class={slots.content}>
          {typeof onclose === "function" && (
            <div class={slots.close} onclick={onclose && onclose}>
              <button type="button" class={slots.closeButton}>
                <XIcon class={slots.closeButtonIcon} />
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
