import Nullstack from "nullstack";

import { ClipboardIcon, CheckIcon } from "nullstack-heroicons/24/outline";

export default class CopyButton extends Nullstack {
  copied = false;

  onClickToCopy({ code }) {
    this.copied = true;
    navigator.clipboard.writeText(code);
    setTimeout(() => (this.copied = false), 1000);
  }

  render({ class: klass }) {
    return (
      <button
        class={["flex gap-1 rounded-md p-1.5 hover:bg-white/10", klass]}
        onclick={this.onClickToCopy}
      >
        {this.copied ? (
          <CheckIcon class="stroke-2 text-base text-success-400" />
        ) : (
          <ClipboardIcon class="stroke-2 text-base text-white" />
        )}
      </button>
    );
  }
}
