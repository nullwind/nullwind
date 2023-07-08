import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseInputWrapper = {
  base: "flex flex-col gap-1.5",
  slots: {
    labelWrapper: "flex justify-between",
  },
};

interface InputWrapperProps extends BaseProps {
  corner?: string;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

function InputWrapper({
  children,
  class: klass,
  corner,
  error,
  helper,
  id,
  label,
  required,
  theme,
}: NullstackClientContext<InputWrapperProps>) {
  const input = tc(baseInputWrapper, theme?.input);
  const { base, labelWrapper } = input();

  return (
    <div class={base({ class: klass })}>
      <div class={labelWrapper()}>
        <Label required={required} for={id} theme={theme}>
          {label}
        </Label>
        {corner && <Corner theme={theme}>{corner}</Corner>}
      </div>
      {children}
      {error ? (
        <Error theme={theme}>{error}</Error>
      ) : (
        helper && <Helper theme={theme}>{helper}</Helper>
      )}
    </div>
  );
}

export default InputWrapper as NullstackFunctionalComponent<InputWrapperProps>;
