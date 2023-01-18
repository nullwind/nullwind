const Tab = ({ onchange, children }) => {
  return (
    <div>
      <div class="border-b border-b-gray-100">
        <ul class="-mb-px flex items-center gap-4 text-sm font-medium">
          {children.map((child, idx) => {
            if (!child.attributes?.title) return false;

            const Icon = child.attributes?.icon;

            return (
              <li>
                <a
                  class={[
                    "inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-primary-600 hover:text-primary-600",
                    child.attributes?.active &&
                      "relative text-primary-600 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-600",
                  ]}
                  onclick={() => onchange && onchange(idx)}
                >
                  {Icon && <Icon size={18} />} {child.attributes?.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div class="py-3">{children.filter((child) => child.attributes?.active)}</div>
    </div>
  );
};

Tab.Item = ({ children }) => <div>{children}</div>;

export default Tab;
