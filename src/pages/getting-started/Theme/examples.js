export const global = `
  import Nullstack from 'nullstack';

  class Application extends Nullstack {
    initiate(context) {
      context.theme = {
        button: {
          base: 'rounded-none',
        },
      }
    }

    render() {
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
`;
