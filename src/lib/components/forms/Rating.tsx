import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import type { ComponentProps } from "../../types";
import StarIcon from "../icons/StarIcon";

interface RatingProps extends ComponentProps {
  averageRate?: number;
  bind?: object;
  disabled?: boolean;
}

function Rating(props: NullstackClientContext<RatingProps>) {
  const { averageRate, bind, class: klass, customTheme, disabled, useTheme } = props;
  const classes = useTheme(customTheme).rating;
  const rate = averageRate >= 0 ? averageRate : bind.object[bind.property];

  return (
    <div class={[classes.wrapper, klass]}>
      {Array.from({ length: 5 }, (_, i) => (
        <button onclick={() => (bind.object[bind.property] = i)} disabled={disabled}>
          <StarIcon
            title={i}
            class={[classes.star.base, rate >= i + 1 ? classes.star.filled : classes.star.empty]}
          />
        </button>
      ))}
    </div>
  );
}

export default Rating as NullstackFunctionalComponent<RatingProps>;
