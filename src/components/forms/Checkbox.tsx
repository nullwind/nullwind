import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Helper from "./Helper";
import Label from "./Label";

import theme from "~/theme";

interface CheckboxProps {
  class?: string;
  description?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
}

const Checkbox = ({
  label,
  description,
  disabled,
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
          disabled={disabled}
          {...props}
        />
      </div>
      <div class="ml-3 text-sm">
        <>
          {label && (
            <Label class="cursor-pointer" for={id}>
              {label}
            </Label>
          )}
          {description && <Helper>{description}</Helper>}
        </>
      </div>
    </div>
  );
};

export default Checkbox as NullstackFunctionalComponent<CheckboxProps>;
