import Nullstack from "nullstack";

import { Button, Dropdown } from "nullwind";

class Preview extends Nullstack {

  render() {
    return (
      <Dropdown>
        <Dropdown.Target>
          <Button class="bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <spam>Teste</spam>
            <svg
              class="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </Button>
        </Dropdown.Target>
        <Dropdown.Container>
          <Dropdown.Item index="test" href="https://google.com">
            <p href="https://google.com">Text</p>
          </Dropdown.Item>
          <Dropdown.Item>Text 2</Dropdown.Item>
          <Dropdown.Item type="none">
            <Button color="danger" type="submit" role="menuitem">Sign out</Button>
          </Dropdown.Item>
        </Dropdown.Container>
      </Dropdown>
    );
  }
}

export default Preview;
