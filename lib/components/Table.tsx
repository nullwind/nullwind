import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

interface DefaultProps extends ComponentProps {
  children?: NullstackNode;
}

const Table = ({
  children,
  class: klass,
  id,
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<DefaultProps>) => {
  return (
    <table id={id} class={twMerge(useTheme(theme).table.base, klass)}>
      {children}
    </table>
  );
};

Table.THead = ({
  children,
  class: klass,
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<DefaultProps>) => {
  return <thead class={twMerge(useTheme(theme).table.thead, klass)}>{children}</thead>;
};

Table.TH = ({
  children,
  class: klass,
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<DefaultProps>) => {
  return (
    <th scope="col" class={twMerge(useTheme(theme).table.th, klass)}>
      {children}
    </th>
  );
};

Table.TBody = ({
  children,
  class: klass,
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<DefaultProps>) => {
  return <tbody class={twMerge(useTheme(theme).table.tbody, klass)}>{children}</tbody>;
};

Table.TR = ({
  children,
  class: klass,
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<DefaultProps>) => (
  <tr class={twMerge(useTheme(theme).table.tr, klass)}>{children}</tr>
);

Table.TD = ({
  children,
  class: klass,
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<DefaultProps>) => {
  return <td class={twMerge(useTheme(theme).table.td, klass)}>{children}</td>;
};

export default Table as NullstackFunctionalComponent<DefaultProps>;
