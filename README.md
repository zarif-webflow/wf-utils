# @taj-wf/utils

Some useful TypeScript utilities that can be used when working with Webflow.

## Installation

```bash
pnpm install @taj-wf/utils
```

## Usage

You can import the utilities you need directly.

```typescript
import { afterWebflowReady, getHtmlElement, setStyle } from "@taj-wf/utils";

// Example: Execute a function after Webflow has initialized
afterWebflowReady(() => {
  console.log("Webflow is ready!");
});

// Example: Set style on an element
const targetButton = getHtmlElement<HTMLButtonElement>({ selector: "[data-target-button]" });
if (targetButton) {
  const { revert } = setStyle(targetButton, {
    color: "white",
    backgroundColor: "blue",
  });

  // To revert the styles later
  // revert();
}
```

You can also import individual modules:

```typescript
import { getActiveScript } from "@taj-wf/utils/get-active-script";

const currentScript = getActiveScript();
console.log("Current script:", currentScript?.src);
```

## Available Scripts

The following scripts are available via `pnpm run <script_name>`:

- `build`: Bundles the library using tsup.
- `dev`: Watches for changes and rebuilds the library.
- `lint`: Lints the codebase using ESLint and Prettier.
- `lint:fix`: Fixes linting errors.
- `check`: Type-checks the project using TypeScript.
- `format`: Formats the code using Prettier.
- `test`: Runs Playwright tests.
- `test:ui`: Runs Playwright tests with the UI.
- `release`: Creates a new release version.
- `update`: Updates dependencies.

## License

MIT
