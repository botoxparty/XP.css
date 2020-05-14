## XP.css

[![npm](https://98badges.now.sh/api/version)](http://npm.im/xp.css)
[![gzip size](https://98badges.now.sh/api/size)](https://unpkg.com/xp.css)

A design system for building faithful recreations of old UIs.

<img alt="a screenshot of a window with the title 'My First Program' and two buttons OK and Cancel, styled like a Windows XP dialog" src="https://github.com/botoxparty/XP.css/blob/master/docs/window.png?raw=true" height="133">

<img alt="a screenshot of a window with the title 'My First Program' and two buttons OK and Cancel, styled like a Windows 98 dialog" src="https://github.com/jdan/98.css/blob/master/docs/window.png?raw=true" height="133">

XP.css is an extension of 98.css. A CSS file that takes semantic HTML and makes it look pretty. It does not ship with any JavaScript, so it is compatible with your frontend framework of choice.

### Installation / Usage

The easiest way to use XP.css is to import it from [unpkg](https://unpkg.com/).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>XP.css example</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://unpkg.com/xp.css" />
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

Alternatively, you can grab XP.css from [the releases page](https://github.com/botoxparty/XP.css/releases) or [npm](https://www.npmjs.com/package/xp.css).

```
npm install xp.css
```

Here is an example of [XP.css being used with React](https://codesandbox.io/s/objective-chandrasekhar-t5t6h?file=/src/index.js), and [an example with vanilla JavaScript](https://codesandbox.io/s/late-sound-miqho?file=/index.html).

Refer to the [documentation page](https://jdan.github.io/98.css/) for specific instructions on this library's components.

### Developing

Clone the repo and run `npm install`.

The core styles are managed in [`gui`](https://github.com/botoxparty/XP.css/tree/master/gui).

To create your own theme for the GUI you can extend the core styles. See the XP and 98 [`themes`](https://github.com/botoxparty/XP.css/tree/master/themes)

You can use `npm start` to start a development environment that will watch for file changes and rebuild the files, reloading your browser in the process.

You can run a build manually with `npm run build`. This will write to the `dist/` directory.

### Issues, Contributing, etc.

Refer to [the GitHub issues page](https://github.com/jdan/98.css/issues) to see bugs in my CSS or report new ones. I'd really like to see your pull requests (especially those new to open-source!) and will happily provide code review. 98.css is a fun, silly project and I'd like to make it a fun place to build your open-source muscle.

Thank you for checking my little project out, I hope it brought you some joy today. Consider [starring/following along on GitHub](https://github.com/jdan/98.css/stargazers) and maybe subscribing to more fun things on [my twitter](https://twitter.com/jdan). 👋

### License

[MIT](https://github.com/botoxparty/XP.css/blob/master/LICENSE)
