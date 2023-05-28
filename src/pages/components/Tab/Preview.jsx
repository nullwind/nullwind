import Nullstack from "nullstack";

import { Tab } from "nullwind";

class Preview extends Nullstack {
  idx = 0;

  render() {
    return (
      <Tab onchange={(idx) => (this.idx = idx)}>
        <Tab.Item title="Profile" active={this.idx === 0}>
          Tab content 1
        </Tab.Item>
        <Tab.Item title="Notifications" active={this.idx === 1}>
          Tab content 2
        </Tab.Item>
        <Tab.Item title="Settings" active={this.idx === 2}>
          Tab content 3
        </Tab.Item>
      </Tab>
    );
  }
}

export default Preview;
