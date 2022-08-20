## XP.css

[![npm](https://img.shields.io/npm/v/xp.css)](http://npm.im/xp.css)
[![gzip size](https://img.shields.io/bundlephobia/minzip/xp.css)](https://unpkg.com/xp.css)

A design system for building faithful recreations of old UIs.

<img alt="a screenshot of a window with the title 'My First Program' and two buttons OK and Cancel, styled like a Windows XP dialog" src="https://github.com/botoxparty/XP.css/blob/main/docs/window.png?raw=true" height="133">

<img alt="a screenshot of a window with the title 'My First Program' and two buttons OK and Cancel, styled like a Windows 98 dialog" src="https://github.com/jdan/98.css/blob/main/docs/window.png?raw=true" height="133">

XP.css is an extension of 98.css. A CSS file that takes semantic HTML and makes it look pretty. It does not ship with any JavaScript, so it is compatible with your frontend framework of choice.

### Installation / Usage

The easiest way to use XP.css is to import it from [unpkg](https://unpkg.com/).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>XP.css example</title>
    <meta charset="UTF-8" />

    <!-- Windows XP Theme (include only one theme at a time) -->
    <link rel="stylesheet" href="https://unpkg.com/xp.css" />

    <!-- Windows 98 Theme (include only one theme at a time) -->
    <link rel="stylesheet" href="https://unpkg.com/xp.css@0.2.3/dist/98.css" />
  </head>

  <body>
    <div class="window" style="margin: 32px; width: 250px">
      <div class="title-bar">
        <div class="title-bar-text">
          My First Program
        </div>
      </div>
      <div class="window-body">
        <p>Hello, world!</p>
      </div>
    </div>
  </body>
</html>
```

Alternatively, you can grab XP.css from [npm](https://www.npmjs.com/package/xp.css).

```
npm install xp.css

Usage:

// For XP
import "xp.css/dist/XP.css";

// For 98
import "xp.css/dist/98.css";
```

Here is an example of [XP.css being used with React](https://codesandbox.io/s/silly-bas-dln9t?file=/src/index.js), and [an example with vanilla JavaScript](https://codesandbox.io/s/vigilant-night-2jkz3?file=/index.html).

Refer to the [documentation page](https://botoxparty.github.io/XP.css/) for specific instructions on this library's components.

### Developing

Clone the repo and run `npm install`.

The core styles are managed in [`gui`](https://github.com/botoxparty/XP.css/tree/main/gui).

To create your own theme for the GUI you can extend the core styles. See the XP and 98 [`themes`](https://github.com/botoxparty/XP.css/tree/main/themes)

You can use `npm start` to start a development environment that will watch for file changes and rebuild the files, reloading your browser in the process.

You can run a build manually with `npm run build`. This will write to the `dist/` directory.

### Issues, Contributing, etc.

I would love to see other people's work on gui.css, if anyone else if up for creating a theme for another OS using this framework. Also new components and bugs/issues are also welcome! Feel free to contribute in whatever way you like!

Also please refer to [the GitHub issues page](https://github.com/jdan/98.css/issues) for [jdan's](https://twitter.com/jdan) 98.css.

### License

[MIT](https://github.com/botoxparty/XP.css/blob/main/LICENSE)
