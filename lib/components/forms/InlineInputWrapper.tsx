import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseInlineInputWrapper = {
  base: "relative flex items-start gap-3",
  slots: {
    labelWrapper: "flex flex-col gap-2",
  },
};

interface InlineInputWrapperProps extends BaseProps {
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

function InlineInputWrapper({
  children,
  class: klass,
  error,
  helper,
  id,
  label,
  required,
  theme,
}: NullstackClientContext<InlineInputWrapperProps>) {
  const inlineInputWrapper = tc(baseInlineInputWrapper, theme?.inlineInputWrapper);
  const { base, labelWrapper } = inlineInputWrapper();

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

export default InlineInputWrapper as NullstackFunctionalComponent<InlineInputWrapperProps>;
