import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import theme from "~/theme";
interface RadioProps {
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
}

const Radio = ({
  id,
  class: klass,
  label,
  helper,
  disabled = false,
  ...props
}: NullstackClientContext<RadioProps>) => {
  const classes = theme.radio;

  return (
    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input id={id} type="radio" class={[classes.base, klass]} disabled={disabled} {...props} />
      </div>
      <div class="ml-3 text-sm">
        <>
          {label && (
            <label for={id} class="font-medium text-gray-700 cursor-pointer">
              {label}
            </label>
          )}
          {helper && <p class="text-gray-500">{helper}</p>}
        </>
      </div>
    </div>
  );
};

export default Radio as NullstackFunctionalComponent<RadioProps>;
