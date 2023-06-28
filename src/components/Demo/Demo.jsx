import Nullstack from "nullstack";

import Control from "./Control";
import Code from "../Code";

class Demo extends Nullstack {
  configurator = {};

  prepare({ configurator }) {
    configurator?.forEach((control) => (this.configurator[control.name] = control));
  }

  get props() {
    let props = {};

    const currentState = JSON.parse(JSON.stringify(this.configurator));

    for (const name in currentState) {
      const field = currentState[name];
      props[name] = field.value;
    }

    return props;
  }

  _propToString({ defaultValue, name, type, value }) {
    if (value === defaultValue) {
      return "";
    }

    if (type === "string" && value.trim().length === 0) {
      return "";
    }

    if (type === "boolean") {
      return value ? name : `${name}={false}`;
    }

    if (type === "number") {
      return `${name}={${value}}`;
    }

    return `${name}="${value}"`;
  }

  get templateProps() {
    return Object.keys(this.configurator)
      .map((name) => this._propToString(this.configurator[name]))
      .join(" ");
  }

  render({ component: Component, configurator, template }) {
    return (
      <div class="my-12 border">
        <div class="flex w-full">
          <div class="w-full md:border-r">
            <div class="not-prose flex h-full min-h-[320px] flex-col items-center justify-center px-8 py-4">
              <Component {...this.props} bind={this.data} />
            </div>
          </div>
          {configurator && (
            <div class="hidden w-1/3 flex-col gap-6 px-4 py-6 md:flex">
              {configurator?.map((control) => (
                <Control
                  type={control.type}
                  label={control.name}
                  bind={this.configurator[control.name].value}
                  options={control.options}
                  helper={control.helper}
                  theme={{
                    textInput: {
                      base: "py-1.5 text-sm",
                    },
                    select: {
                      base: "py-1.5 text-sm",
                    },
                    helper: "text-xs",
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <Code code={template(this.templateProps)} />
      </div>
    );
  }
}

export default Demo;
