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
assets by status 78 KiB [cached] 1 asset
asset bundle.js 1.07 KiB [emitted] [minimized] (name: main)
asset index.html 216 bytes [compared for emit]
runtime modules 1.45 KiB 4 modules
cacheable modules 471 bytes (javascript) 156 KiB (asset)
  javascript modules 387 bytes
    ./index.js 255 bytes [built] [code generated]
    ./extensionDir/extension.js + 1 modules 132 bytes [built] [code generated]
  asset modules 84 bytes (javascript) 156 KiB (asset)
    ./extensionDir/require.png 42 bytes (javascript) 78 KiB (asset) [built] [code generated]
    ./extensionDir/import.png 42 bytes (javascript) 78 KiB (asset) [built] [code generated]
```

## Objective

Try to get output to display `[optional]` next to `require.png`, as that is observed to be problematic for Auspice.
