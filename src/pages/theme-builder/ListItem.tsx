import Nullstack from "nullstack";

import { IconChevronDown, IconChevronRight } from "nullstack-feather-icons";
interface IListItem {
  label: string;
}

class ListItem extends Nullstack<IListItem> {
  expanded = false;

  toogleItem() {
    this.expanded = !this.expanded;
  }

  render({ children, label }) {
    return (
      <>
        <li
          class="flex flex-row cursor-pointer list-none items-center gap-2"
          onclick={this.toogleItem}
        >
          {this.expanded && <IconChevronDown size={18} />}
          {!this.expanded && <IconChevronRight size={18} />}
          {label}
        </li>
        {this.expanded && children}
      </>
    );
  }
}

export default ListItem;
