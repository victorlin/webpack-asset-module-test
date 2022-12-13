# webpack-asset-module-test
for https://github.com/nextstrain/auspice/issues/1617

## Steps

Install packages:

```
npm install
```

Build using webpack:

```
npm run build
```

Current output:

```
asset ca02a55e3febcf6cb01e.png 78 KiB [emitted] [immutable] [from: extensionDir/require.png] (auxiliary name: main)
asset bundle.js 1.65 KiB [emitted] [minimized] (name: main)
asset index.html 216 bytes [emitted]
runtime modules 1.72 KiB 5 modules
built modules 659 bytes (javascript) 156 KiB (asset) [built]
  javascript modules 575 bytes
    ./index.js 255 bytes [built] [code generated]
    ./extensionDir/ sync ^\.\/.*$ 230 bytes [built] [code generated]
    ./extensionDir/extension.js 90 bytes [optional] [built] [code generated]
  asset modules 84 bytes (javascript) 156 KiB (asset)
    ./extensionDir/require.png 42 bytes (javascript) 78 KiB (asset) [built] [code generated]
    ./extensionDir/import.png 42 bytes (javascript) 78 KiB (asset) [built] [code generated]
```

## Objective

Try to get output to display `[optional]` next to `require.png`, as that is observed to be problematic for Auspice.
