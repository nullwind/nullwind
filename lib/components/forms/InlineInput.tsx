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
  error,
  helper,
  id,
  label,
  required,
  theme,
  useTheme,
}: NullstackClientContext<InlineInputProps>) {
  const { inlineInput } = useTheme(theme);

  return (
    <div class={[inlineInput.base, klass]}>
      {children}
      <div class={inlineInput.labelWrapper}>
        {label && (
          <Label for={id} required={required} theme={theme}>
            {label}
          </Label>
        )}
        {error ? (
          <Error theme={theme}>{error}</Error>
        ) : (
          helper && <Helper theme={theme}>{helper}</Helper>
        )}
      </div>
    </div>
  );
}

export default InlineInput as NullstackFunctionalComponent<InlineInputProps>;
