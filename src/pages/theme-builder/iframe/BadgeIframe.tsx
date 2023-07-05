import Nullstack from "nullstack";

import { Badge } from "nullwind";

import BaseIframe from "./BaseIframe";
interface IBadgeIframe {
  theme: object;
}
class BadgeIframe extends Nullstack<IBadgeIframe> {
  render({ theme }) {
    return (
      <BaseIframe title="Badge">
        <div class="flex flex-row gap-4">
          <Badge theme={theme}>Primary</Badge>
          <Badge theme={theme} color="secondary">
            Secondary
          </Badge>
          <Badge theme={theme} color="info">
            Info
          </Badge>
          <Badge theme={theme} color="success">
            Success
          </Badge>
          <Badge theme={theme} color="warning">
            Warning
          </Badge>
          <Badge theme={theme} color="danger">
            Danger
          </Badge>
        </div>
      </BaseIframe>
    );
  }
}

export default BadgeIframe;
