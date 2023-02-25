import { Global, css } from "@emotion/react";

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
}
