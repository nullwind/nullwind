import { NullstackNode } from "nullstack";
import { IconX } from "nullstack-feather-icons";

interface ModalProps {
  children?: NullstackNode;
  visible: boolean;
}

const Modal = (props: ModalProps) => {
  const { visible, children } = props;

  return (
    <div
      class={["modal-transition fixed z-30 inset-0 overflow-y-auto", visible ? "block" : "hidden"]}
      role="dialog"
      aria-modal={visible}
    >
      <div class={["flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center"]}>
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />

        <div
          class={[
            "relative inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full",
          ]}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

interface CloseProps {
  onclick: () => void;
}

Modal.Close = ({ onclick }: CloseProps) => (
  <div class="absolute top-0 right-0 pt-4 pr-4" onclick={onclick && onclick}>
    <button
      type="button"
      class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
      <span class="sr-only">Close</span>
      <IconX />
    </button>
  </div>
);

interface ElementsProps {
  class?: string;
  children?: NullstackNode;
}

Modal.Body = ({ children, class: klass }: ElementsProps) => (
  <div class={["bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4", klass]}>{children}</div>
);

Modal.Footer = ({ children, class: klass }: ElementsProps) => (
  <div class={["bg-gray-50 px-4 py-3 flex justify-end sm:px-6", klass]}>{children}</div>
);

export default Modal;
