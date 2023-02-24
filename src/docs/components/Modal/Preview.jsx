import Nullstack from "nullstack";

import { Button, Modal } from "~/components";

class Preview extends Nullstack {
  visible = false;

  render() {
    return (
      <>
        <Button color="primary" onclick={() => (this.visible = true)}>
          Open modal
        </Button>
        <Modal visible={this.visible} onclose={() => (this.visible = false)}>
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 class="text-xl font-semibold mb-3">Some title</h2>
            <p class="text-base">
              Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis
              impedit.
            </p>
          </div>
          <footer class="bg-gray-50 px-4 py-3 flex justify-end sm:px-6 gap-2">
            <Button color="secondary" onclick={() => (this.visible = false)}>
              Close
            </Button>
            <Button color="primary" onclick={() => (this.visible = false)}>
              Save
            </Button>
          </footer>
        </Modal>
      </>
    );
  }
}

export default Preview;
