# electron-touch-bug-8725

## electron #8725 issue

[issue link](https://github.com/electron/electron/issues/8725)

## How to reproduce

[reproduce video](./20240122_230638.mp4)


https://github.com/dicklwm/electron-touch-bug-8725/assets/19289258/e4f7d8ce-dc23-42fc-92c1-bd0bf7c25b95



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
