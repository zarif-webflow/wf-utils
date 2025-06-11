import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/types/**.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: false,
  // https://github.com/egoist/tsup/issues/619
  //   noExternal: [/(.*)/],
  outDir: "dist",
  bundle: true,
  format: "esm",
  treeshake: true,
  platform: "browser",
  target: "es2022",
  dts: true,
});
