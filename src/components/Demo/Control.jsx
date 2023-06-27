import { Select, TextInput, Toggle } from "nullwind";

const controls = {
  text: TextInput,
  select: Select,
  boolean: Toggle,
  number: TextInput,
  url: TextInput,
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
