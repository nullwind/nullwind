import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Helper from "./Helper";
import Label from "./Label";
import type { ComponentProps } from "../../types";
interface RadioProps extends ComponentProps {
  disabled?: boolean;
  helper?: string;
  label?: string;
}

function Radio({
  class: klass,
  customTheme,
  disabled = false,
  helper,
  id,
  label,
  useTheme,
  ...props
}: NullstackClientContext<RadioProps>) {
  const classes = useTheme(customTheme).radio;

  return (
    <div class={[classes.root, klass]}>
      <input id={id} type="radio" class={[classes.base]} disabled={disabled} {...props} />
      <div>
        {label && <Label for={id}>{label}</Label>}
        {helper && <Helper>{helper}</Helper>}
      </div>
    </div>
  );
}

export default Radio as NullstackFunctionalComponent<RadioProps>;
