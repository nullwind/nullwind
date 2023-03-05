import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { IconStar } from "nullstack-feather-icons";

import type { ComponentProps } from "../../types";

interface RatingProps extends ComponentProps {
  averageRate?: number;
  bind?: object;
  readOnly?: boolean;
  size?: number;
}

function Rating(props: NullstackClientContext<RatingProps>) {
  const { averageRate, bind, class: klass, customTheme, readOnly, size = 24, useTheme } = props;
  const classes = useTheme(customTheme).rating;
  const rate = averageRate >= 0 ? averageRate : bind.object[bind.property];

  return (
    <div class={[classes.wrapper, klass]}>
      {Array.from({ length: 5 }, (_, i) => (
        <button
          class={[
            readOnly && classes.readOnly,
            rate >= i + 1 ? classes.star.filled : classes.star.empty,
          ]}
          onclick={() => !readOnly && (bind.object[bind.property] = i)}
        >
          <IconStar size={size} />
        </button>
      ))}
    </div>
  );
}

export default Rating as NullstackFunctionalComponent<RatingProps>;
