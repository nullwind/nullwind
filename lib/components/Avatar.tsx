import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

interface AvatarProps extends ComponentProps {
  description?: string;
  name?: string;
  placeholder?: string;
  src?: string;
}

function Avatar(props: NullstackClientContext<AvatarProps>) {
  const {
    class: klass,
    description,
    id,
    name,
    placeholder,
    src,
    theme,
    useTheme = useThemeProvider(),
  } = props;
  const { base, slots } = useTheme(theme).avatar;
  const placeholderUrl = placeholder || `https://eu.ui-avatars.com/api/?name=${name}`;

  return (
    <div id={id} class={twMerge(base, klass)}>
      <div class={slots.imageWrapper}>
        {(src && <img class={slots.image} src={src} alt={name} />) || (
          <div class={slots.imageFallback}>
            <img src={placeholderUrl} alt={name} />
          </div>
        )}
      </div>
      <div>
        <div class={slots.name}>{name}</div>
        <div class={slots.description}>{description}</div>
      </div>
    </div>
  );
}

export default Avatar as NullstackFunctionalComponent<AvatarProps>;
