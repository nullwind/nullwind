import Nullstack, { NullstackNode } from "nullstack";
interface IListItem {
  label: string;
}

declare function ChevronRight(): NullstackNode;
declare function ChevronDown(): NullstackNode;

class ListItem extends Nullstack<IListItem> {
  expanded = false;

  toogleItem() {
    this.expanded = !this.expanded;
  }
  renderChevronDown() {
    // <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    return (
      <svg class="h-2 w-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
    );
  }
  renderChevronRight() {
    // <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    return (
      <svg class="h-2 w-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
    );
  }
  render({ children, label }) {
    return (
      <>
        <li
          class="flex flex-row cursor-pointer list-none items-center gap-2"
          onclick={this.toogleItem}
        >
          {this.expanded && <ChevronDown />}
          {!this.expanded && <ChevronRight />}
          {label}
        </li>
        {this.expanded && children}
      </>
    );
  }
}

export default ListItem;
