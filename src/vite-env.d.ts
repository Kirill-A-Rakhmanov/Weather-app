/// <reference types="vite/client" />

declare module "*.svg" {
  import * as React from "react";

  const SVG: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;

  export = SVG;
}
