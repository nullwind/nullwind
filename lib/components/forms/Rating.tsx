import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import type { ComponentProps } from "../../types";
import getUseTheme from "../../useTheme";
import StarIcon from "../icons/StarIcon";

interface RatingProps extends ComponentProps {
  averageRate?: number;
  bind?: object;
  disabled?: boolean;
}

function Rating(props: NullstackClientContext<RatingProps>) {
  const { averageRate, bind, class: klass, disabled, theme, useTheme = getUseTheme() } = props;
  const classes = useTheme(theme).rating;
  const rate = averageRate >= 0 ? averageRate : bind.object[bind.property];

  return (
    <div class={[classes.base, klass]}>
      {Array.from({ length: 5 }, (_, i) => (
        <button onclick={() => (bind.object[bind.property] = i)} disabled={disabled}>
          <StarIcon
            class={[classes.star.base, rate >= i + 1 ? classes.star.filled : classes.star.empty]}
          />
        </button>
      ))}
    </div>
  );
}

export default Rating as NullstackFunctionalComponent<RatingProps>;
