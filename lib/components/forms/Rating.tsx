import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import tc from "../../tc";
import type { BaseProps } from "../../types";
import StarIcon from "../icons/StarIcon";

export const baseRating = {
  base: "flex items-center",
  slots: {
    star: {
      variants: {
        disabled: {
          true: "cursor-not-allowed",
        },
      },
    },
    starIcon: {
      base: "h-6 w-6 text-slate-300",
      variants: {
        filled: {
          true: "text-yellow-400",
        },
      },
    },
  },
};

interface RatingProps extends BaseProps {
  averageRate?: number;
  bind?: object;
  disabled?: boolean;
}

function Rating(props: NullstackClientContext<RatingProps>) {
  const { averageRate, bind, class: klass, disabled, theme } = props;
  const rating = tc(baseRating, theme?.rating);
  const { base, star, starIcon } = rating();
  const rate = averageRate >= 0 ? averageRate : bind.object[bind.property];

  return (
    <div class={base({ class: klass })}>
      {Array.from({ length: 5 }, (_, i) => (
        <button
          class={star({ disabled })}
          onclick={() => (bind.object[bind.property] = i)}
          disabled={disabled}
        >
          <StarIcon class={starIcon({ filled: rate >= i + 1 })} />
        </button>
      ))}
    </div>
  );
}

export default Rating as NullstackFunctionalComponent<RatingProps>;
