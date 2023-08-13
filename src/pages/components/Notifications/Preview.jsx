import Nullstack from "nullstack";

import { CheckCircleIcon } from "nullstack-heroicons/24/solid";
import { Button, Notifications } from "nullwind";

class Preview extends Nullstack {
  render({ instances, placement }) {
    return (
      <main>
        <Notifications placement={placement} key="notifications" />
        <Button
          onclick={() =>
            instances.notifications.show({
              icon: () => <CheckCircleIcon class="h-6 w-6 text-success-500" />,
              title: "Successfully saved!",
              message: "Anyone with a link can now view this file.",
            })
          }
        >
          Show Notification
        </Button>
      </main>
    );
  }
}

export default Preview;
