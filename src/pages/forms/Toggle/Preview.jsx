import Nullstack from "nullstack";

import { Toggle } from "~/lib/components";

class Preview extends Nullstack {
  active = false;

  render() {
    return (
      <Toggle
        bind={this.active}
        label="I accept the terms and conditions"
        helper="You must accept the terms and conditions to continue"
      />
    );
  }
}

export default Preview;
