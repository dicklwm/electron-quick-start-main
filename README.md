# electron-touch-bug-8725

## electron #8725 issue

[issue link](https://github.com/electron/electron/issues/8725)

## How to reproduce

[reproduce video](./20240122_230638.mp4)

1. Run the app, click the open url button, immediatedly hold until a new window apperas.
2. Retry to click the open url again.
3. If the bug occurs, the click event will not be triggered.
4. But touch event still trigger.

## how to fix?

```ts
const menu = new Menu();
menu.popup();
menu.closePopup();
```

I dont know why? but this code can fix this issue
