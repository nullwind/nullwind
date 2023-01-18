import theme from "../theme";

function Button(props) {
  const {
    children,
    disabled,
    href,
    color = "primary",
    outline,
    rounded = true,
    fullSized,
    size = "md",
    class: klass,
  } = props;
  const { button } = theme;
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";

  return (
    <Component
      class={[
        button.base,
        outline ? button.outline[color || "primary"] : button.color[color],
        rounded && button.rounded,
        disabled && button.disabled,
        button.size[size],
        fullSized && button.fullSized,
        klass,
      ]}
      disabled={disabled}
      href={href}
      type={isLink ? undefined : "button"}
      onclick={props?.onclick}
    >
      {children}
    </Component>
  );
}

export default Button;
