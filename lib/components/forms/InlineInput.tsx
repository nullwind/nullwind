import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseInlineInput = {
  base: "relative flex items-start gap-3",
  slots: {
    labelWrapper: "flex flex-col gap-1.5",
  },
};

interface InlineInputProps extends BaseProps {
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
}: NullstackClientContext<InlineInputProps>) {
  const inlineInput = tc(baseInlineInput, theme?.inlineInput);
  const { base, labelWrapper } = inlineInput();

  return (
    <div class={base({ class: klass })}>
      {children}
      <div class={labelWrapper()}>
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
