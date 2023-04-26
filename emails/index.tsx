import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';
import { Tailwind } from '@react-email/tailwind';

export default () => {
  return (
    <Html>
      <Head>
        <title>My email title</title>
      </Head>
      <Tailwind
        config={{
          plugins: [require("daisyui")],
          corePlugins: { container: false },
          daisyui: {
            styled: true,
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
    </Html>
  );
};