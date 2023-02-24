import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { IconStar } from "nullstack-feather-icons";

import theme from "../../theme";

interface RatingProps {
  readOnly?: boolean;
  averageRate?: number;
  bind?: object;
  size?: number;
  classes?: typeof theme.rating;
}

function Rating(props: NullstackClientContext<RatingProps>) {
  const { readOnly, averageRate, size = 24, classes = theme.rating, bind } = props;
  const rate = averageRate >= 0 ? averageRate : bind.object[bind.property];

  return (
    <div class={classes.wrapper}>
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
