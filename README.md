# ShareModal component

![ShareModal prevue](https://github.com/sttatusx/vue-share-modal/raw/main/screenshot.png)

<br>

## About VueShareModal

lightweight single file component for vue v2.6 with no extra dependency

<br>
<br>

## How to use it?

you can use this component like any other vue native components.

<br>

```shell
# npm
npm install vue-share-modal

# yarn
yarn add vue-share-modal
```

<br>
<br>

### List of props:

<br>

| Props         | Type     | Default  | Properties       |
| ------------- | -------- | -------- | ---------------- |
| **Mode**      | _String_ | `normal` | normal / outline |
| **Link**      | _String_ | `none`   | \*               |
| **Titles**    | _Object_ | `none`   | \*               |
| **Colors**    | _Object_ | `none`   | \*               |
| **Modules**   | _Array_  | `none`   | \*               |
| **Direction** | _String_ | `ltr`    | rtl / ltr        |

<br>
<br>

### List of events:

<br>

| Events    | Name     |
| --------- | -------- |
| **Close** | on-close |

<br>

there is no default option for **Modules**, **Colors** Or **Titles** props but you can pass these options

<br>

**Link:** "https://www.figma.com/community/file/999287868143091993"

<br>

**Titles:** { header: 'Share with' footerShareText: 'Or share with link' }

<br>

**Modules:** [{ id: 0, name: "", icon: "bi bi-twitter" component: 'a', props: { href="#" }, events: { click: () => {} } }]
