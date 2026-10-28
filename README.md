# fixture-app

A deliberately small TypeScript/React app. It is the test bench for
[claude-toolkit](https://github.com/VicJGs/claude-toolkit): the toolkit's CI
installs its plugins here on macOS, Linux and Windows before any real project
uses them. Keep it small; later toolkit checks plant violations in it on
throwaway branches, never on `main`.

```bash
npm ci
npm run check   # tsc --noEmit + vitest
```
