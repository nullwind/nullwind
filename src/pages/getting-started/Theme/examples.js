export const global = `
  import Nullstack from 'nullstack';
  import { useTheme } from 'nullwind';

  const theme = {
    button: {
      base: 'rounded-none',
    },
  };

  class Application extends Nullstack {
    initiate(context) {
      context.useTheme = useTheme(theme);
    }

    render(context) {
      // wait for the theme to be ready
      if (!context.useTheme) return false;

      return (
        <Button>My Custom Button</Button>
      );
    }
  }
`;

export const component = `
  import { Button } from 'nullwind';

  const theme = {
    button: {
      base: 'rounded-none',
    },
  };

  return (
    <Button theme={theme}>My Custom Button</Button>
  );
`;

export const classes = `
  <Button class="mt-4">My Custom Button</Button>
`