import Nullstack from "nullstack";

import { Avatar } from "nullwind";

import BaseIframe from "./BaseIframe";
interface IAvatarIframe {
  theme: object;
}
class AvatarIframe extends Nullstack<IAvatarIframe> {
  render({ theme }) {
    return (
      <BaseIframe title="Avatar">
        <div class="flex flex-col gap-4">
          <Avatar
            theme={theme}
            src="/avatar.avif"
            name="John Doe"
            description="Joined in April 1976"
          />
          <Avatar theme={theme} name="John Doe" description="Joined in April 1976" />
        </div>
      </BaseIframe>
    );
  }
}

export default AvatarIframe;
