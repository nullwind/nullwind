import Nullstack from "nullstack";

import { ArrowPathIcon, CheckCircleIcon } from "nullstack-heroicons/24/solid";
import { Button } from "nullwind";

class Preview extends Nullstack {
  render({ instances }) {
    return (
      <main>
        <Button
          onclick={() => {
            const customId = Date.now();

            instances.notifications.show({
              id: customId,
              icon: () => <ArrowPathIcon class="h-5 w-5 animate-spin" />,
              title: "We're saving your changes!",
              message: "Please wait a moment while we save your changes.",
              duration: false,
            });

            setTimeout(() => {
              instances.notifications.updateData({
                id: customId,
                icon: () => <CheckCircleIcon class="h-6 w-6 text-success-500" />,
                title: "Successfully saved!",
                message: "Anyone with a link can now view this file.",
              });
            }, 3000);
          }}
        >
          Show Notification
        </Button>
      </main>
    );
  }
}

export default Preview;
