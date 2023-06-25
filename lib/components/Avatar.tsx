import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import tc from "../tc";
import type { BaseProps } from "../types";

export const baseAvatar = {
  base: "flex flex-wrap items-center gap-3",
  slots: {
    imageWrapper: "h-10 w-10 flex-shrink-0",
    image: "h-full w-full rounded-full object-cover object-center ring ring-white",
    imageFallback:
      "flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-secondary-100 text-slate-500",
    name: "text-sm font-medium text-secondary-500",
    description: "text-xs text-secondary-400",
  },
};

interface AvatarProps extends BaseProps {
  description?: string;
  name?: string;
  placeholder?: string;
  src?: string;
}

function Avatar(props: NullstackClientContext<AvatarProps>) {
  const { class: klass, description, id, name, placeholder, src, theme } = props;
  const avatar = tc(baseAvatar, theme?.avatar);
  const {
    base,
    description: descriptionSlot,
    image,
    imageFallback,
    imageWrapper,
    name: nameSlot,
  } = avatar();
  const placeholderUrl = placeholder || `https://eu.ui-avatars.com/api/?name=${name}`;

  return (
    <div id={id} class={base({ class: klass })}>
      <div class={imageWrapper()}>
        {(src && <img class={image()} src={src} alt={name} />) || (
          <div class={imageFallback()}>
            <img src={placeholderUrl} alt={name} />
          </div>
        )}
      </div>
      <div>
        <div class={nameSlot()}>{name}</div>
        <div class={descriptionSlot()}>{description}</div>
      </div>
    </div>
  );
}

export default Avatar as NullstackFunctionalComponent<AvatarProps>;
