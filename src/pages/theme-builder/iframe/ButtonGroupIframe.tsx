import Nullstack from "nullstack";

import { Button, ButtonGroup } from "nullwind";

import BaseIframe from "./BaseIframe";
interface IButtonGroupIframe {
  theme: object;
}
class ButtonGroupIframe extends Nullstack<IButtonGroupIframe> {
  render({ theme }) {
    return (
      <BaseIframe title="Button Group">
        <div class="flex flex-col gap-4">
          <ButtonGroup theme={theme}>
            <Button color="secondary">Button 1</Button>
            <Button color="secondary">Button 2</Button>
            <Button color="secondary">Button 3</Button>
          </ButtonGroup>
        </div>
      </BaseIframe>
    );
  }
}

export default ButtonGroupIframe;
