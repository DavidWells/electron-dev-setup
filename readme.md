# Electron Dev Setup

Setup for building an electron app with React

Useful electron examples: https://github.com/hokein/electron-sample-apps

# Technologies used

- photon
- electron
- react
- react-router
- webpack

![screenshot]

## Dev

```sh
# install dependencies
$ npm install

# support for reloading views, restarting electron
# if app/* and/or index.js, electron/* are changed
$ npm start
```

### Build

```sh
$ npm run build      # all
$ npm run build-osx  # osx(64)
$ npm run build-win  # win(32, 64)
```

## Prior Art

This is forked from https://github.com/react-photonkit/epp

MIT © react-photonkit

[screenshot]: assets/screenshot.png
