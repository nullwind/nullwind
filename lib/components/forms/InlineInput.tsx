import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import type { ComponentProps } from "../../types";

interface InlineInputProps extends ComponentProps {
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

function InlineInput({
  children,
  class: klass,
  customTheme,
  error,
  helper,
  id,
  label,
  required,
  useTheme,
}: NullstackClientContext<InlineInputProps>) {
  const { inlineInput } = useTheme(customTheme);

  return (
    <div class={[inlineInput.base, klass]}>
      {children}
      <div class={inlineInput.labelWrapper}>
        {label && (
          <Label for={id} required={required} customTheme={customTheme}>
            {label}
          </Label>
        )}
        {error ? (
          <Error customTheme={customTheme}>{error}</Error>
        ) : (
          helper && <Helper customTheme={customTheme}>{helper}</Helper>
        )}
      </div>
    </div>
  );
}

export default InlineInput as NullstackFunctionalComponent<InlineInputProps>;
