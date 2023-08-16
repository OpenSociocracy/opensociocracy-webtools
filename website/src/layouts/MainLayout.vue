<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-h5">
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          OpenSociocracy
        </q-toolbar-title>
        <q-space />
        <q-btn
          size="md"
          dense
          icon="mdi-github"
          flat
          href="https://github.com/OpenSociocracy/opensociocracy-webtools"
          class="q-px-sm"
        ></q-btn>
        <q-btn
          size="md"
          dense
          icon="mdi-twitter"
          flat
          href="https://twitter.com/OpenSociocracy"
          class="q-px-sm"
        ></q-btn>
        <q-btn
          size="md"
          dense
          icon="mdi-facebook"
          flat
          href="https://www.facebook.com/OpenSociocracy/"
          class="q-px-sm"
        ></q-btn>
        <q-btn
          size="md"
          dense
          icon="mdi-mastodon"
          flat
          href="https://fosstodon.org/@opensociocracy"
          class="q-px-sm"
        ></q-btn>
        <q-btn
          size="md"
          dense
          icon="mdi-linkedin"
          flat
          href="https://www.linkedin.com/company/ultri/"
          class="q-px-sm"
        ></q-btn>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/circles" label="Circles" />
        <q-route-tab to="/canvas" label="Canvas" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <u-dynamic-footer />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import UDynamicFooter from "../components/footer/UDynamicFooter.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    UDynamicFooter
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
