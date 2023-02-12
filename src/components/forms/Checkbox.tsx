import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";

import theme from "../../theme";

interface CheckboxProps {
  class?: string;
  helper?: string;
  error?: string;
  required?: boolean;
  id?: string;
  label?: string;
}

const Checkbox = ({
  label,
  helper,
  error,
  required,
  id,
  class: klass,
  ...props
}: NullstackClientContext<CheckboxProps>) => {
  const classes = theme.checkbox;

  return (
    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          class={[classes.base, klass]}
          required={required}
          {...props}
        />
      </div>
      <div class="ml-3 text-sm">
        {label && (
          <Label class="cursor-pointer" for={id} required={required}>
            {label}
          </Label>
        )}
        {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
      </div>
    </div>
  );
};

export default Checkbox as NullstackFunctionalComponent<CheckboxProps>;
