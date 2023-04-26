import { Button } from '@react-email/button';
import { Tailwind } from '@react-email/tailwind';

export default () => {
  return (
    <Tailwind
      config={{
        plugins: [require("daisyui")],
        daisyui: {
          styled: false,
          themes: false,
          base: false,
          utils: false,
          logs: false,
          rtl: false,
          prefix: "",
          darkTheme: "dark",
        },
        theme: {
          extend: {
            colors: {
              brand: '#007291',
            },
          },
        },
      }}
    >
      <Button
        href="https://example.com"
        className="btn btn-primary"
      >
        Click me
      </Button>
    </Tailwind>
  );
};