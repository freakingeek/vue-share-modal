
## vue-share-modal

A pure, lightweight, and beautiful share modal for Vue 3  
  ‌

![screenshot](https://github.com/sttatusx/vue-share-modal/raw/master/screenshot.png)  

  ‌

## 🪁 Live version
You can see the live version here:  
[https://freakingeek.github.io/vue-share-modal/](https://freakingeek.github.io/vue-share-modal/)

  ‌

## 💾 Install

```shell
$ yarn add vue-share-modal
# npm install vue-share-modal
```
Or you can use any package manager you want

  ‌

## 🚀 Usage

You should import **share-modal** and **share-module** components from the vue-share-modal 
package and use them like this.  
  ‌

```vue
<template>
  <share-modal
    :show="showModal"
    @update:show="showModal = false"
    link="https://www.figma.com/community/file/999287868143091993"
  >
    <template v-for="(m, key) in modules" :key="key">
      <share-module tag="a" href="#" :name="m.name">
        <component :is="m.component" />
      </share-module>
    </template>
  </share-modal>
</template>

<script>
import ShareModal from "vue-share-modal";
import ShareModule from "vue-share-modal/src/components/share-module.vue";
import { ChatCircle, Instagram, Twitch, At, Share, Twitter } from "@salmon-ui/icons";

export default {
  name: "MyComponent",

  components: {
    At,
    Share,
    Twitch,
    Twitter,
    Instagram,
    ChatCircle,
    ShareModal,
    ShareModule,
  },

  data() {
    return {
      showModal: true,
    };
  },

  computed: {
    modules() {
      return [
        { name: "Chat", component: ChatCircle },
        { name: "Instagram", component: Instagram },
        { name: "Twitter", component: Twitter },
        { name: "Twitch", component: Twitch },
        { name: "E-mail", component: At },
        { name: "More", component: Share },
      ];
    },
  },
};
</script>
```
  ‌

> NOTE: vue-share-modal does not contain any icons by default. So we use **@salmon-ui/icons** package for example here

  ‌
  
## Options Or Props ( share-modal )

```show``` prop is used for showing modal with animation  
```@update:show``` event is used to update ```show``` value  

```vue
<share-modal
  :show="showModal"
  @update:show="showModal = false"
/>
```

  ‌
  
```link``` prop is used for showing link in the footer  

```vue
<share-modal
  link="https://www.figma.com/community/file/999287868143091993"
/>
```

  ‌
  
```mode``` prop is used for changing modal style ( ```normal``` / ```outline``` )  

```vue
<share-modal
  mode="outline"
/>
```

  ‌
  
```direction``` prop is used for changing modal direction ( ```ltr``` / ```rtl``` )  

```vue
<share-modal
  direction="rtl"
/>
```

  ‌
  
```title``` prop is used for changing modal title  

```vue
<share-modal
  title="Share with"
/>
```

  ‌
  
```footerHint``` prop is used for changing the footer text  

```vue
<share-modal
  footerHint="Or share with link"
/>
```

  ‌
  
```variables``` prop is used for changing the modal CSS variables ( like font-family and colors )  

```vue
<share-modal
  :variables="{
    fontFamily: 'Inter, sans-serif',
    red: '#ee4d4d',
    white: '#fefefe',
    primary: '#ee6c4d',
    primaryLight: '#ee6c4d08',
    secondary: '#3d5a80',
    secondaryLight: '#3d5a8096',
  }"
/>
```

  ‌
  

## Options Or Props ( share-module )

```tag``` generated tag for share-module component ( default: ```span``` )   

```vue
<share-module
  tag="a"
/>
```

  ‌
  
```name``` name of the module   

```vue
<share-module
  tag="a"
  name="Pinterest"
/>
```

  ‌
  

```iconClassName``` you can pass this prop to use font icons   

```vue
<share-module
  tag="a"
  name="Twitter"
  iconClassName="bi bi-twitter"
/>
```

  ‌
  
```mode``` you can pass this prop to overwrite share-modal ```mode``` prop   

```vue
<share-modal mode="outline">
  <share-module
    tag="a"
    mode="normal"
  />
</share-modal>
```

  ‌

## ✏ Todo

- [ ] Support for different themes

  ‌

## 📝 License

This project is under [ISC](https://github.com/sttatusx/vue-share-modal/blob/master/LICENSE) license
