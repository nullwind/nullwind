import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";
import StarIcon from "../icons/StarIcon";

interface RatingProps extends ComponentProps {
  averageRate?: number;
  bind?: object;
  disabled?: boolean;
}

function Rating(props: NullstackClientContext<RatingProps>) {
  const { averageRate, bind, class: klass, disabled, theme, useTheme = useThemeProvider() } = props;
  const { base, slots, variants } = useTheme(theme).rating;
  const rate = averageRate >= 0 ? averageRate : bind.object[bind.property];

  return (
    <div class={twMerge(base, klass)}>
      {Array.from({ length: 5 }, (_, i) => (
        <button onclick={() => (bind.object[bind.property] = i)} disabled={disabled}>
          <StarIcon
            class={[
              slots.star,
              variants.disabled[disabled && "true"],
              rate >= i + 1 ? variants.star.filled : variants.star.empty,
            ]}
          />
        </button>
      ))}
    </div>
  );
}

export default Rating as NullstackFunctionalComponent<RatingProps>;
