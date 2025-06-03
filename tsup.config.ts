import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/**.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  // https://github.com/egoist/tsup/issues/619
  //   noExternal: [/(.*)/],
  outDir: "dist",
  bundle: true,
  format: "esm",
  treeshake: true,
  platform: "browser",
  target: "esnext",
  dts: true,
});
