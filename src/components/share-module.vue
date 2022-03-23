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
import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
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
});
</script>

<style scoped>
.share-module {
  all: unset;
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  color: var(--share-modal-secondary-color);
}

.share-module__icon-box {
  display: flex;
  width: 4.5rem;
  height: 4.5rem;
  align-items: center;
  border-radius: 50rem;
  justify-content: center;
  transition: ease 0.3s all;
}

.share-module__icon-box:hover + .share-module__title {
  color: var(--share-modal-primary-color);
}

.share-module__icon-box--normal {
  background-color: rgba(157, 157, 157, 0.04);
}

.share-module__icon-box--normal:hover {
  color: var(--share-modal-primary-color);
  background-color: var(--share-modal-primary-light-color);
}

.share-module__icon-box--outline {
  border: 1px solid rgba(157, 157, 157, 0.16);
}

.share-module__icon-box--outline:hover {
  color: var(--share-modal-primary-color);
  background-color: var(--share-modal-primary-light-color);
  border: 1px solid rgba(238, 108, 77, 0.08);
}

.share-module__icon {
  font-size: 1.5rem;
}

.share-module__title {
  font-weight: 600;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  transition: ease 0.3s all;
  color: var(--share-modal-secondary-color);
}
</style>
