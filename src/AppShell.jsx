import Nullstack from "nullstack";

import docsearch from "@docsearch/js";
import { IconGithub, IconMenu } from "nullstack-feather-icons";

import { Logo } from "./assets/Logo";
import { Breadcrumb, Pagination } from "./components";
import { routes } from "./routes";

export class AppShell extends Nullstack {
  menuOpen = false;

  startDocSearch(context) {
    docsearch({
      container: context.element,
      appId: "M02H11VP29",
      apiKey: "3c167fea00aecc19658aa30d0a98090b",
      indexName: "nullwind",
    });
  }

  renderHeader() {
    return (
      <header
        class="absolute top-0 left-0 right-0 z-50 py-4 md:fixed md:transition-all backdrop-blur bg-gray-900 shadow-sm"
        id="header"
      >
        <div class="container mx-auto justify-between px-6 md:flex 2xl:px-32">
          <div class="flex items-center justify-between">
            <a href="/" title="Nullwind" class="flex">
              <Logo />
            </a>
            <a
              href="#"
              id="toggleMenu"
              class="block md:hidden"
              onclick={{ menuOpen: !this.menuOpen }}
            >
              <IconMenu size={32} />
            </a>
          </div>
          <nav
            class="fixed inset-x-0 bottom-0 top-14 hidden items-center gap-8 bg-white px-6 text-white md:static md:flex md:bg-transparent md:p-0"
            id="mobile-menu"
          >
            <ul class="mt-5 items-center gap-8 space-y-6 font-medium md:mt-0 md:flex md:space-y-0">
              <li>
                <a href="/" class="block hover:text-primary-400">
                  Docs
                </a>
              </li>
              <li>
                <a href="/components/button" class="block hover:text-primary-400">
                  Components
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class=" flex w-full items-center gap-1 hover:text-primary-400"
                  target="_blank"
                >
                  Sections <small class="text-white/50">soon</small>
                </a>
              </li>
              <li>
                <div id="docsearch" ref={this.startDocSearch} />
              </li>
            </ul>
            <div class="hidden h-5 w-px bg-white/20 md:block"></div>
            <ul class="mt-6 items-center gap-5 space-y-6 font-medium md:mt-0 md:flex md:space-y-0">
              <li>
                <a
                  href="https://github.com/fccoelho7/nullwind"
                  target="_blank"
                  class="block hover:text-primary-400"
                  aria-label="GitHub"
                >
                  <span class="block md:hidden">GitHub</span>
                  <IconGithub />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  renderSidebar({ router }) {
    return (
      <aside class="sticky inset-0 right-auto z-20 -ml-6 -mr-6 shrink-0 overflow-y-auto border-y border-y-gray-100 bg-white px-6 lg:fixed lg:top-24 lg:left-[max(0px,calc(50%-30.5rem))] lg:m-0 lg:block lg:h-[calc(100vh-100px)] lg:w-64 lg:border-none lg:bg-transparent lg:px-0 xl:left-[max(0px,calc(50%-38.5rem))] 2xl:left-[max(0px,calc(50%-40rem))]">
        <div
          class={["-ml-2 lg:m-0 lg:block lg:pb-10 lg:pr-4", this.menuOpen ? "visible" : "hidden"]}
        >
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav class="text-sm">
              <ul class="space-y-4">
                {routes.map((group) => (
                  <li>
                    <h5 class="p-2 font-medium text-secondary-900">{group.title}</h5>
                    <ul class="mt-1 space-y-1">
                      {group.routes.map((route) => (
                        <li>
                          <a
                            class={[
                              "block rounded-lg p-2",
                              router.path === route.path
                                ? "bg-primary-50 font-bold text-primary-500"
                                : "hover:bg-secondary-50 hover:text-secondary-900",
                            ]}
                            href={route.path}
                            title={route.title}
                          >
                            {route.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    );
  }

  renderMain({ children }) {
    return (
      <div class="mt-4 w-full min-w-0 max-w-full lg:mt-0 lg:pl-72">
        <main class="flex-1">
          <div class="max-w-5xl mx-auto px-4 sm:px-6 md:px-0 prose">
            <div class="py-4">
              <Breadcrumb />
              {children}
              <Pagination />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  renderFooter() {
    return (
      <footer>
        <div class="container mx-auto">
          <div class="border-t py-12 text-center">
            Copyright © {new Date().getFullYear()} - Nullwind
          </div>
        </div>
      </footer>
    );
  }

  render({ children }) {
    return (
      <>
        <Header />
        <main>
          <section class="pt-14 lg:pt-24">
            <div class="container mx-auto px-6 2xl:px-32">
              <div class="relative w-full lg:flex">
                <Sidebar />
                <Main>{children}</Main>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
