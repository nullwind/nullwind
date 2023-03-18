import Nullstack from "nullstack";

import { Toggle } from "~/lib/components";

class Preview extends Nullstack {
  active = false;

  render() {
    return <Toggle bind={this.active} label="Preview" />;
  }
}

export default Preview;
