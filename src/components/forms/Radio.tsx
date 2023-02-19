import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Helper from "./Helper";
import Label from "./Label";
import theme from "../../theme";
interface RadioProps {
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
}

function Radio({
  id,
  class: klass,
  label,
  helper,
  disabled = false,
  ...props
}: NullstackClientContext<RadioProps>) {
  const classes = theme.radio;

  return (
    <div class={classes.root}>
      <input id={id} type="radio" class={[classes.base, klass]} disabled={disabled} {...props} />
      <div>
        {label && <Label for={id}>{label}</Label>}
        {helper && <Helper>{helper}</Helper>}
      </div>
    </div>
  );
}

export default Radio as NullstackFunctionalComponent<RadioProps>;
