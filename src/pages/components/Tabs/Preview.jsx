import Nullstack from "nullstack";

import { Tabs } from "nullwind";

class Preview extends Nullstack {
  idx = 0;

  render() {
    return (
      <Tabs class="max-w-xl w-full" onchange={(idx) => (this.idx = idx)}>
        <Tabs.Item title="Profile" active={this.idx === 0}>
          Tabs content 1
        </Tabs.Item>
        <Tabs.Item title="Notifications" active={this.idx === 1}>
          Tabs content 2
        </Tabs.Item>
        <Tabs.Item title="Settings" active={this.idx === 2}>
          Tabs content 3
        </Tabs.Item>
      </Tabs>
    );
  }
}

export default Preview;
