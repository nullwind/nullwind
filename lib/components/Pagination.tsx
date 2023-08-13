import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import tc from "../tc";
import type { BaseProps } from "../types";

export const basePagination = {
  base: "isolate inline-flex -space-x-px rounded-md shadow-sm",
  slots: {
    control: {
      base: "relative flex gap-1 items-center px-4 py-2 ring-1 ring-inset ring-gray-300 text-sm font-semibold text-gray-900 inline-flex hover:bg-gray-50 focus:z-20 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
      variants: {
        previous: {
          true: "rounded-l-md",
        },
        next: {
          true: "rounded-r-md",
        },
        active: {
          true: "z-10 bg-secondary-500 text-white hover:bg-secondary-700",
        },
      },
    },
  },
};

interface PaginationProps extends BaseProps {
  bind?: object;
  boundaries?: number;
  nextLabel?: string;
  onchange?: (page: number) => void;
  pageSize?: number;
  previousLabel?: string;
  siblings?: number;
  totalCount?: number;
}

const DOTS = "dots";

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

const Pagination = ({
  bind,
  boundaries = 1,
  class: klass,
  nextLabel = "Next",
  onchange,
  pageSize = 10,
  previousLabel = "Previous",
  siblings = 1,
  theme,
  totalCount = 100,
}: NullstackClientContext<PaginationProps>) => {
  const pagination = tc(basePagination, theme?.pagination);
  const { base, control } = pagination();

  const currentPage = bind ? bind.object[bind.property] : 1;

  const total = Math.ceil(totalCount / pageSize);

  const onChange = (page: number) => {
    if (bind) {
      bind.object[bind.property] = page;
    }

    onchange?.(page);
  };

  const setPage = (pageNumber: number): void => {
    if (pageNumber <= 0) {
      onChange(1);
    } else if (pageNumber > total) {
      onChange(total);
    } else {
      onChange(pageNumber);
    }
  };

  const next = (): void => setPage(currentPage + 1);
  const previous = (): void => setPage(currentPage - 1);

  const calculatePaginationRange = (): (number | string)[] => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;

    if (totalPageNumbers >= total) {
      return range(1, total);
    }

    const leftSiblingIndex = Math.max(currentPage - siblings, boundaries);
    const rightSiblingIndex = Math.min(currentPage + siblings, total - boundaries);

    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1);

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [...range(1, leftItemCount), DOTS, ...range(total - (boundaries - 1), total)];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [...range(1, boundaries), DOTS, ...range(total - rightItemCount, total)];
    }

    return [
      ...range(1, boundaries),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(total - boundaries + 1, total),
    ];
  };

  const paginationRange = calculatePaginationRange();

  const Control = ({
    active = false,
    children,
    disabled = false,
    next = false,
    previous = false,
    ...rest
  }) => (
    <button class={control({ active, previous, next })} disabled={disabled} {...rest}>
      {children}
    </button>
  );

  return (
    <nav class={base({ class: klass })}>
      <Control previous disabled={currentPage === 1} onclick={previous}>
        {previousLabel}
      </Control>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <Control disabled>...</Control>;
        }

        return (
          <Control
            active={pageNumber === currentPage}
            onclick={() => setPage(pageNumber as number)}
          >
            {pageNumber}
          </Control>
        );
      })}
      <Control next disabled={currentPage === total} onclick={next}>
        {nextLabel}
      </Control>
    </nav>
  );
};

export default Pagination as NullstackFunctionalComponent<PaginationProps>;
