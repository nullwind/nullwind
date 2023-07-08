import Nullstack from "nullstack";

import { Tabs } from "nullwind";

class Preview extends Nullstack {
  idx = 0;

  render() {
    return (
      <Tabs class="max-w-xl w-full" onchange={(idx) => (this.idx = idx)}>
        <Tabs.Tab title="Profile" active={this.idx === 0}>
          Tabs content 1
        </Tabs.Tab>
        <Tabs.Tab title="Notifications" active={this.idx === 1}>
          Tabs content 2
        </Tabs.Tab>
        <Tabs.Tab title="Settings" active={this.idx === 2}>
          Tabs content 3
        </Tabs.Tab>
      </Tabs>
    );
  }
}

export default Preview;
