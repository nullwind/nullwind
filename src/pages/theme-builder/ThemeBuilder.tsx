import Nullstack, { NullstackNode } from "nullstack";

import { Textarea } from "nullwind";
import { Title } from "nullwind";
import { Button, theme } from "nullwind";

import ListItem from "./ListItem";

declare function Config(): NullstackNode;

class ThemeBuilder extends Nullstack {
  theme = theme;

  _formatString(str: string) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
  }

  renderConfig({ obj }) {
    return (
      <ul>
        {Object.keys(obj).map((key) => (
          <ListItem label={this._formatString(key)}>
            {typeof obj[key] === "object" && <Config obj={obj[key]} />}
            {typeof obj[key] === "string" && <Textarea bind={obj[key]} />}
          </ListItem>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        <h1>Theme Builder</h1>
        <div class="flex flex-row">
          <div class="basis-1/2">
            <Title h={3}>Configs</Title>
            <Config obj={this.theme} />
          </div>
          <div class="flex basis-1/2">
            <Button theme={this.theme}>Button</Button>
          </div>
        </div>
      </>
    );
  }
}

export default ThemeBuilder;
