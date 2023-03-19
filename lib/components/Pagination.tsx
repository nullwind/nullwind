import Nullstack, { NullstackClientContext, NullstackNode } from "nullstack";

import Button, { ButtonProps } from "./Button";
import ButtonGroup from "./ButtonGroup";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";

interface PaginationProps {
  count: number;
  onchange: () => void;
  pageParamKey?: string;
  params: Record<string, string>;
  perPage: number;
}

interface PaginationLinkProps extends ButtonProps {
  active?: boolean;
  linkParams?: Record<string, string | number>;
}

declare function Link(context: PaginationLinkProps): NullstackNode;

class Pagination extends Nullstack {
  renderLink({
    active,
    children,
    disabled,
    linkParams,
    onchange,
    positionInGroup,
  }: NullstackClientContext<PaginationProps & PaginationLinkProps>) {
    return (
      <Button
        color="secondary"
        params={!disabled && linkParams}
        disabled={disabled}
        positionInGroup={positionInGroup}
        active={active}
        onclick={onchange}
      >
        {children}
      </Button>
    );
  }

  render({
    count,
    onchange,
    pageParamKey = "page",
    params,
    perPage,
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
      <ButtonGroup>
        <Link linkParams={{ ...params, [pageParamKey]: page - 1 }} disabled={page == 1}>
          <span class="sr-only">Previous</span>
          <ChevronLeftIcon class="w-4.5 h-4.5" />
        </Link>
        {page != 1 && <Link linkParams={{ ...params, [pageParamKey]: "" }}>1</Link>}
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
          <Link linkParams={{ ...params, [pageParamKey]: page }} key={page}>
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
          <Link linkParams={{ ...params, [pageParamKey]: page + range + 1 }}>...</Link>
        )}
        <Link linkParams={{ ...params, [pageParamKey]: page + 1 }} disabled={page == total}>
          <span class="sr-only">Next</span>
          <ChevronRightIcon class="w-4.5 h-4.5" />
        </Link>
      </ButtonGroup>
    );
  }
}

export default Pagination;
