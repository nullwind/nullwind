import Nullstack from "nullstack";

import { IconChevronDown, IconChevronRight } from "nullstack-feather-icons";
interface IBaseIframe {
  children?: any;
  title: any;
}
class BaseIframe extends Nullstack<IBaseIframe> {
  showContent = true;
  toogleContent() {
    this.showContent = !this.showContent;
  }
  render({ children, title }) {
    return (
      <div class="flex flex-col gap-4">
        <h2
          class="flex gap-2 cursor-pointer text-3xl font-bold items-center"
          onclick={this.toogleContent}
        >
          {this.showContent && <IconChevronDown size={24} />}
          {!this.showContent && <IconChevronRight size={24} />}
          {title}
        </h2>
        {this.showContent && <div class="flex flex-col gap-4">{children}</div>}
      </div>
    );
  }
}

export default BaseIframe;
