<template>
  <transition name="scale">
    <div v-if="show" class="share-modal-wrapper">
      <div :class="['share-modal', `share-modal--${direction}`]">
        <slot name="header">
          <header class="share-modal-header">
            <h4 class="share-modal-header__title">{{ title }}</h4>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              @click="onClose"
              class="share-modal-header__close-icon"
            >
              <path
                d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              />
            </svg>
          </header>
        </slot>

        <div class="share-modules">
          <slot />
        </div>

        <slot name="footer">
          <footer class="share-modal-footer">
            <h4 class="share-modal-footer__title">{{ footerHint }}</h4>

            <div
              @click="onCopy(link)"
              :class="['copy-link-section', `copy-link-section--${mode}`]"
            >
              <span class="copy-link-section__link">{{ link }}</span>

              <div class="copy-link-section__copy-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="copy-link-section__copy-icon"
                >
                  <path
                    v-if="!copied"
                    d="M16,20H8a3,3,0,0,1-3-3V7A1,1,0,0,0,3,7V17a5,5,0,0,0,5,5h8a1,1,0,0,0,0-2ZM21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0L14.06,2H10A3,3,0,0,0,7,5V15a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM19,15a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,3,3h3Z"
                  />

                  <path
                    v-else
                    d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"
                  />
                </svg>
              </div>
            </div>
          </footer>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { copyToClipboard } from "@/utils";

// Components
import ShareModule from "@/components/share-module.vue";

export default /*#__PURE__*/ defineComponent({
  name: "ShareModal",

  components: {
    ShareModule,
  },

  props: {
    show: {
      type: Boolean,
      default: true,
    },

    mode: {
      type: String,
      default: "normal", // normal | outline
    },

    direction: {
      type: String,
      default: "ltr", // ltr | rtl
    },

    link: {
      type: String,
    },

    title: {
      type: String,
      default: "Share with",
    },

    footerHint: {
      type: String,
      default: "Or share with link",
    },

    variables: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      copied: false,
    };
  },

  mounted() {
    this.setVariables();

    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.code === "Escape") this.onClose();
    });
  },

  methods: {
    onCopy(string = "") {
      this.copied = true;

      copyToClipboard(string);

      setTimeout(() => {
        this.copied = false;
      }, 3000);
    },

    onClose() {
      if (!this.show) return;
      this.$emit("update:show", this.show);
    },

    setVariables() {
      if (!document) return;

      const styleElement = document.createElement("style") as HTMLStyleElement;
      const headElement = document.querySelector("head") as HTMLHeadElement;

      if (!styleElement || !headElement) return;

      const variables: string = `
        .share-modal {
          --share-modal-font-family: ${
            this.variables.fontFamily || "Inter, sans-serif"
          };
  
          --share-modal-red-color: ${this.variables.red || "#ee4d4d"};
          --share-modal-white-color: ${this.variables.white || "#fefefe"};
  
          --share-modal-primary-color: ${this.variables.primary || "#ee6c4d"};
          --share-modal-primary-light-color:
            ${this.variables.primaryLight || "#ee6c4d08"};
  
          --share-modal-secondary-color: ${
            this.variables.secondary || "#3d5a80"
          };
          --share-modal-secondary-light-color:
            ${this.variables.secondaryLight || "#3d5a8096"};
        }
      `;

      styleElement.textContent = variables.replace(/\s/g, "");
      styleElement.type = "text/css";

      headElement.appendChild(styleElement);
    },
  },
});
</script>

<style scoped>
/* Reset */

.share-modal * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--share-modal-font-family);
}

.share-modal a {
  text-decoration: none;
}

/* Styles */

.share-modal-wrapper {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 99999;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
}

.share-modal {
  width: 32vw;
  padding: 2rem;
  position: relative;
  border-radius: 1rem;
  background-color: var(--share-modal-white-color);
}

.share-modal--ltr {
  direction: ltr;
  text-align: left;
}

.share-modal--rtl {
  direction: rtl;
  text-align: right;
}

@media screen and (max-width: 1750px) {
  .share-modal {
    width: 36vw;
  }
}

@media screen and (max-width: 1550px) {
  .share-modal {
    width: 42vw;
  }
}

@media screen and (max-width: 768px) {
  .share-modal {
    width: calc(100vw - 2rem);
  }
}

/* Header */

.share-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.share-modal-header__title {
  color: var(--share-modal-secondary-color);
}

.share-modal-header__close-icon {
  width: 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  transition: ease 0.3s fill;
  fill: var(--share-modal-secondary-light-color);
}

.share-modal-header__close-icon:hover {
  fill: var(--share-modal-red-color);
}

/* Share Modules */

.share-modules {
  display: grid;
  margin: 3rem 0;
  grid-gap: 1rem 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
}

/* Footer */

.share-modal-footer {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.share-modal-footer__title {
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: var(--share-modal-secondary-light-color);
}

.copy-link-section {
  width: 100%;
  display: flex;
  margin-top: 1rem;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  justify-content: space-between;
}

.copy-link-section--normal {
  background-color: rgba(157, 157, 157, 0.04);
}

.copy-link-section--outline {
  border: 1px solid rgba(157, 157, 157, 0.16);
}

.copy-link-section__link {
  width: 90%;
  overflow: hidden;
  font-size: 0.875rem;
  white-space: nowrap;
  line-height: 1.09rem;
  text-overflow: ellipsis;
  color: var(--share-modal-secondary-light-color);
}

.copy-link-section__copy-box {
  display: flex;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
  align-items: center;
  border-radius: 50rem;
  justify-content: center;
  transition: ease 0.3s background-color;
}

.copy-link-section__copy-box:hover {
  background-color: var(--share-modal-primary-light-color);
}

.copy-link-section__copy-icon {
  width: 1.5rem;
  fill: var(--share-modal-primary-color);
}

/* Animation */

.scale-enter-active,
.scale-leave-active {
  transition: ease 0.3s all;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(1.2);
  opacity: 0;
}
</style>
