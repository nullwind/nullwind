import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { IconUser } from "nullstack-feather-icons";

import theme from "../theme";

interface AvatarProps {
  id?: string;
  src?: string;
  name?: string;
  description?: string;
  classes?: typeof theme.avatar;
}

function Avatar(props: NullstackClientContext<AvatarProps>) {
  const { id, src, name, description, classes = theme.avatar } = props;

  return (
    <div id={id} class={classes.base}>
      <div class={classes.imageWrapper}>
        {(src && <img class={classes.image} src={src} alt={name} />) || (
          <div class={classes.imageFallback}>
            <IconUser size={20} />
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
