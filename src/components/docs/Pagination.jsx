import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

import { routes } from "~/routes";

const Pagination = ({ router }) => {
  let prev;
  let next;

  const allRoutes = routes.map((section) => section.routes).flat();

  for (let i = 0; i < allRoutes.length; i++) {
    const route = allRoutes[i];

    if (route.path === router.path) {
      prev = allRoutes[i - 1];
      next = allRoutes[i + 1];
      break;
    }
  }

  if (!prev) {
    prev = allRoutes[allRoutes.length - 1];
  }

  if (!next) {
    next = allRoutes[0];
  }

  return (
    <div class="my-10 flex justify-between">
      <a
        class="flex items-center gap-1 font-medium capitalize hover:text-secondary-900 no-underline hover:underline"
        href={prev.path}
      >
        <ChevronLeftIcon class="w-4 h-4 stroke-2" />
        {prev.title}
      </a>
      <a
        class="flex items-center gap-1 font-medium capitalize hover:text-secondary-900 no-underline hover:underline"
        href={next.path}
      >
        {next.title}
        <ChevronRightIcon class="w-4 h-4 stroke-2" />
      </a>
    </div>
  );
};

export default Pagination;
