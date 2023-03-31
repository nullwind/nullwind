import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";

interface AvatarProps extends ComponentProps {
  description?: string;
  name?: string;
  placeholder?: string;
  src?: string;
}

function Avatar(props: NullstackClientContext<AvatarProps>) {
  const { class: klass, description, id, name, placeholder, src, theme, useTheme } = props;
  const classes = useTheme(theme).avatar;
  const placeholderUrl = placeholder || `https://eu.ui-avatars.com/api/?name=${name}`;

  return (
    <div id={id} class={twMerge(classes.base, klass)}>
      <div class={classes.imageWrapper}>
        {(src && <img class={classes.image} src={src} alt={name} />) || (
          <div class={classes.imageFallback}>
            <img src={placeholderUrl} alt={name} />
          </div>
        )}
      </div>
      <div>
        <div class={classes.name}>{name}</div>
        <div class={classes.description}>{description}</div>
      </div>
    </div>
  );
}

export default Avatar as NullstackFunctionalComponent<AvatarProps>;
