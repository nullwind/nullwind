import { NullstackNode } from "nullstack";

interface LabelProps {
  required?: boolean;
  children?: NullstackNode;
  class?: string;
  for?: string;
}

export default function Label(props: LabelProps) {
  const { for: receivedFor, class: klass, required, children } = props;

  return (
    <label
      for={receivedFor}
      class={[
        "block text-sm font-medium text-gray-700",
        required && "after:ml-0.5 after:text-red-500 after:content-['*']",
        klass,
      ]}
    >
      {children}
    </label>
  );
}
