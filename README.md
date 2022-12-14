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
assets by path *.png 94.8 KiB
  asset ca02a55e3febcf6cb01e.png 78 KiB [emitted] [immutable] [from: extensionDir/import.png] (auxiliary name: main)
  asset a62d5f5cf9ae222141d7.png 16.8 KiB [emitted] [immutable] [from: extensionDir/require.png] (auxiliary name: main)
asset bundle.js 2.19 KiB [emitted] [minimized] (name: main)
asset index.html 216 bytes [emitted]
runtime modules 1.72 KiB 5 modules
orphan modules 827 bytes [orphan] 2 modules
built modules 1.53 KiB (javascript) 94.8 KiB (asset) [built]
  javascript modules 1.4 KiB
    ./index.js + 2 modules 1.02 KiB [built] [code generated]
    ./extensionDir/ sync ^\.\/.*$ 255 bytes [built] [code generated]
    ./extensionDir/navbar.js 137 bytes [optional] [built] [code generated]
  asset modules 84 bytes (javascript) 94.8 KiB (asset)
    ./extensionDir/import.png 42 bytes (javascript) 78 KiB (asset) [built] [code generated]
    ./extensionDir/require.png 42 bytes (javascript) 16.8 KiB (asset) [built] [code generated]
  ./extensionDir/config.json 41 bytes [optional] [built] [code generated]

```

## Objective

Try to get output to display `[optional]` next to `require.png`, as that is observed to be problematic for Auspice.
