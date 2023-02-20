import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Helper from "./Helper";
import Label from "./Label";
import theme from "../../theme";
interface RadioProps {
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  classes?: typeof theme.radio;
}

function Radio({
  id,
  label,
  helper,
  disabled = false,
  classes = theme.radio,
  ...props
}: NullstackClientContext<RadioProps>) {
  return (
    <div class={classes.root}>
      <input id={id} type="radio" class={[classes.base]} disabled={disabled} {...props} />
      <div>
        {label && <Label for={id}>{label}</Label>}
        {helper && <Helper>{helper}</Helper>}
      </div>
    </div>
  );
}

export default Radio as NullstackFunctionalComponent<RadioProps>;
