import Nullstack, { NullstackClientContext, NullstackNode } from "nullstack";

import tc from "../tc";
import type { BaseProps } from "../types";

export const baseAvatar = {
  base: "h-10 w-10 flex-shrink-0 overflow-hidden rounded-full",
  slots: {
    image: "h-full w-full object-cover object-center",
    placeholder:
      "h-full w-full flex font-semibold items-center justify-center bg-gray-100 text-gray-500",
  },
};

interface AvatarProps extends BaseProps {
  icon?: NullstackNode;
  name?: string;
  src?: string;
}

function getInitialsFromName(name: string) {
  return name
    ?.split(" ")
    .map((n) => n.charAt(0).toUpperCase())
    .join("");
}

export default class Avatar extends Nullstack<AvatarProps> {
  error = false;

  prepare({ src }: NullstackClientContext<AvatarProps>) {
    this.error = !src;
  }

  render(props: NullstackClientContext<AvatarProps>) {
    const { class: klass, icon, id, name, src, theme } = props;
    const avatar = tc(baseAvatar, theme?.avatar);
    const { base, image, placeholder } = avatar();

    return (
      <div id={id} class={base({ class: klass })}>
        {this.error && <div class={placeholder()}>{icon || getInitialsFromName(name)}</div>}
        {!this.error && <img class={image()} src={src} alt={name} onerror={{ error: true }} />}
      </div>
    );
  }
}
