import { Input, Select, Toggle } from "nullwind";

const controls = {
  text: Input,
  select: Select,
  boolean: Toggle,
  number: Input,
  url: Input,
};

export default ({ ...props }) => {
  const Component = controls[props.type];

  if (!Component) {
    throw new Error(`Control type "${props.type}" is not supported.`);
  }

  if (props.type === "select" && props.options) {
    return (
      <Component {...props}>
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </Component>
    );
  }

  return <Component {...props} />;
};
