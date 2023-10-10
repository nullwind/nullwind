import Nullstack, { NullstackClientContext } from "nullstack";

import type { BaseProps } from "../types";

interface CopyButtonProps extends BaseProps {
  text?: string;
  timeout?: number;
}

type CopyButtonContext<TProps = unknown> = Omit<NullstackClientContext, "children"> &
  TProps & {
    children: (context: { copied: boolean; copy: Promise<void> }) => void;
  };

export default class CopyButton extends Nullstack<CopyButtonProps> {
  copied = false;

  async copy({ text, timeout = 500 }) {
    if (!text) {
      throw new Error("CopyButton must have a text");
    }

    await navigator.clipboard.writeText(text);

    this.copied = true;

    setTimeout(() => (this.copied = false), timeout);
  }
  /* */
  popover({ children }: CopyButtonContext<CopyButtonProps>) {
    const child = children?.[0];

    if (typeof child !== "function") {
      throw new Error("CopyButton must have a function as a child");
    }

    return child({ copied: this.copied, copy: this.copy });
  }

  render(context) {
    return this.popover(context);
  }
}
