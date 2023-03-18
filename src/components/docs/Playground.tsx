import Nullstack, {
  NullstackClientContext,
  NullstackFunctionalComponent,
  NullstackNode,
} from "nullstack";

interface PlaygroundProps {
  title: string;
  children: NullstackNode[];
}

interface PlaygroundTabProps {
  activeTab: string;
  children: NullstackNode[];
}

interface TabButtonProps {
  label: string;
  icon: (props: { size: number }) => NullstackNode;
}

declare function TabButton(context: TabButtonProps): NullstackNode;

class Playground extends Nullstack<PlaygroundProps> {
  activeTab = "preview";
  state = false;

  static Preview = ({ activeTab, children }: NullstackClientContext<PlaygroundTabProps>) => {
    if (activeTab !== "preview") return false;

    return (
      <div
        class={["p-4 bg-white border border-slate-200 rounded-md not-prose w-full overflow-auto"]}
      >
        {children}
      </div>
    );
  };

  static Code = ({ activeTab, children }: NullstackClientContext<PlaygroundTabProps>) =>
    activeTab === "code" && children;

  renderTabButton({ label }) {
    return (
      <button
        class={[
          "flex items-center rounded-lg py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3",
          this.activeTab === label && "bg-white shadow",
        ]}
        role="tab"
        type="button"
        onclick={{ activeTab: label }}
      >
        <span
          class={[
            "sr-only lg:not-sr-only lg:ml-1.5 capitalize",
            this.activeTab === label ? "text-slate-900" : "text-slate-600",
          ]}
        >
          {label}
        </span>
      </button>
    );
  }

  render({ title, children }) {
    return (
      <div class="mb-12">
        <div class="flex full-w items-center justify-between mb-4">
          <div>
            <h3 class="truncate text-lg font-medium text-secondary-900">{title}</h3>
          </div>
          <div
            class="flex space-x-1 rounded-lg bg-slate-100 p-0.5"
            role="tablist"
            aria-orientation="horizontal"
          >
            <TabButton label="preview" />
            <TabButton label="code" />
          </div>
        </div>
        <div>
          {children.map((child) => {
            child.attributes.activeTab = this.activeTab;
            return child;
          })}
        </div>
      </div>
    );
  }
}

export default Playground as unknown as NullstackFunctionalComponent<PlaygroundProps>;
