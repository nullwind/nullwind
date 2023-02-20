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
          <Modal.Body>
            <h2 class="text-xl font-semibold mb-3">Some title</h2>
            <p class="text-base">
              Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis
              impedit.
            </p>
          </Modal.Body>
          <Modal.Footer class="space-x-2">
            <Button color="secondary" onclick={() => (this.visible = false)}>
              Close
            </Button>
            <Button color="primary" onclick={() => (this.visible = false)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Preview;
