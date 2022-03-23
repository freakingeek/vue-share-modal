<script lang="ts">
import { defineComponent } from "vue";
import ShareModal from "@/share-modal.vue";
import ShareModule from "@/components/share-module.vue";
import {
  ChatCircle,
  Instagram,
  Twitch,
  At,
  Share,
  Twitter,
} from "@salmon-ui/icons";

export default defineComponent({
  name: "ServeDev",

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
});
</script>

<template>
  <div id="app">
    <button @click="showModal = true">Show</button>
    <share-modal
      :show="showModal"
      @update:show="showModal = false"
      :variables="variables"
      link="https://www.figma.com/community/file/999287868143091993"
    >
      <template v-for="(m, key) in modules" :key="key">
        <share-module tag="a" href="#" :name="m.name">
          <component :is="m.component" />
        </share-module>
      </template>
    </share-modal>
  </div>
</template>
