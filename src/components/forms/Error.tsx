import { NullstackNode } from "nullstack";

interface ErrorProps {
  children?: NullstackNode;
  class?: string;
}

function Error(props: ErrorProps) {
  const { class: klass, children } = props;

  return <p class={["mt-2 text-sm text-danger-600", klass]}>{children}</p>;
}

export default Error;
