<template>
  <component :is="tag" class="share-module">
    <div
      :class="['share-module__icon-box', `share-module__icon-box--${iconMode}`]"
    >
      <slot>
        <span :class="['share-module__icon', iconClassName]" />
      </slot>
    </div>

    <h6 class="share-module__title">{{ name }}</h6>
  </component>
</template>

<script>
export default {
  name: "ShareModule",

  props: {
    tag: {
      type: String,
      default: "span",
    },

    name: {
      type: String,
      default: "",
    },

    iconClassName: {
      type: String,
      default: "",
    },

    mode: {
      type: String,
      default: "normal",
    },
  },

  computed: {
    iconMode() {
      return this.$parent?.$parent?.mode || this.mode;
    },
  },
};
</script>

<style src="@/styles/share-module.css" scoped />
