import Nullstack from "nullstack";

import { Pagination } from "nullwind";

class Preview extends Nullstack {
  page = 1;

  render({ boundaries, nextLabel, pageSize, params, previousLabel, siblings, totalCount }) {
    return (
      <Pagination
        bind={this.page}
        onchange={(page) => (params.page = page)}
        siblings={siblings}
        boundaries={boundaries}
        totalCount={totalCount}
        pageSize={pageSize}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
      />
    );
  }
}

export default Preview;
