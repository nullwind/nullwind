import Nullstack, { NullstackClientContext, NullstackNode } from "nullstack";

import { IconChevronLeft, IconChevronRight } from "nullstack-feather-icons";

interface PaginationProps {
  params: Record<string, string>;
  count: number;
  perPage: number;
  onchange: () => void;
  pageParamKey?: string;
}

interface PaginationLinkProps {
  disabled?: boolean;
  active?: boolean;
  class?: string;
  linkParams?: Record<string, string | number>;
  onclick?: () => void;
  children?: NullstackNode;
}

declare function Link(context: PaginationLinkProps): NullstackNode;

class Pagination extends Nullstack {
  renderLink({
    disabled,
    active,
    class: klass,
    linkParams,
    onclick,
    children,
  }: NullstackClientContext<PaginationProps & PaginationLinkProps>) {
    return (
      <a
        href="#"
        class={[
          "relative inline-flex items-center border px-4 py-2 text-sm font-medium transition border-gray-300 text-gray-500",
          disabled && "cursor-not-allowed",
          !disabled && !active && "hover:bg-gray-50",
          active && "z-10 bg-gray-100",
          klass,
        ]}
        onclick={() => {
          if (disabled || active) {
            return false;
          }

          onclick();
        }}
        params={!disabled && linkParams}
      >
        {children}
      </a>
    );
  }

  render({
    params,
    count,
    perPage,
    onchange,
    pageParamKey = "page",
  }: NullstackClientContext<PaginationProps>) {
    if (count <= perPage) {
      return false;
    }

    const page = parseInt(params[pageParamKey]) || 1;
    const total = Math.ceil(count / perPage);
    const range = 3;
    const prev = [];

    for (let i = page - range; i < page; i++) {
      if (i > 1) {
        prev.push(i);
      }
    }

    const next = [];

    for (let i = page + 1; i <= page + range; i++) {
      if (i <= total) {
        next.push(i);
      }
    }

    return (
      <div class="flex items-center justify-between py-3">
        <nav
          class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm bg-white"
          aria-label="Pagination"
        >
          <Link
            onclick={onchange}
            linkParams={{ ...params, [pageParamKey]: page - 1 }}
            disabled={page == 1}
            class="rounded-l-md px-2.5"
          >
            <span class="sr-only">Previous</span>
            <IconChevronLeft size={18} />
          </Link>
          {page != 1 && (
            <Link onclick={onchange} linkParams={{ ...params, [pageParamKey]: "" }}>
              1
            </Link>
          )}
          {page > range + 2 && (
            <Link
              onclick={onchange}
              linkParams={{ ...params, [pageParamKey]: page - range - 1 }}
              disabled
            >
              ...
            </Link>
          )}
          {prev.map((page) => (
            <Link onclick={onchange} linkParams={{ ...params, [pageParamKey]: page }} key={page}>
              {page}
            </Link>
          ))}
          <Link active>{page}</Link>
          {next.map((page) => (
            <Link onclick={onchange} linkParams={{ ...params, [pageParamKey]: page }} key={page}>
              {page}
            </Link>
          ))}
          {page < total - range - 1 && (
            <Link onclick={onchange} linkParams={{ ...params, [pageParamKey]: page + range + 1 }}>
              ...
            </Link>
          )}
          <Link
            onclick={onchange}
            linkParams={{ ...params, [pageParamKey]: page + 1 }}
            disabled={page == total}
            class="rounded-r-md px-2.5"
          >
            <span class="sr-only">Next</span>
            <IconChevronRight size={18} />
          </Link>
        </nav>
      </div>
    );
  }
}

export default Pagination;
