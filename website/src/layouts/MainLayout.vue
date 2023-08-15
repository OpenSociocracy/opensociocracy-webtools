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
        <q-btn size="md" dense icon="mdi-github" flat to="https://github.com/OpenSociocracy/opensociocracy-webtools" class="q-px-sm"></q-btn>
        <q-btn size="md" dense icon="mdi-twitter" flat to="https://twitter.com/OpenSociocracy" class="q-px-sm"></q-btn>
        <q-btn size="md" dense icon="mdi-facebook" flat to="https://www.facebook.com/OpenSociocracy/" class="q-px-sm"></q-btn>
        <q-btn size="md" dense icon="mdi-mastodon" flat to="https://fosstodon.org/@opensociocracy" class="q-px-sm"></q-btn>
        <q-btn size="md" dense icon="mdi-linkedin" flat to="https://www.linkedin.com/company/ultri/" class="q-px-sm"></q-btn>
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


    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-center justify-center">Built with <q-icon name="mdi-heart" color="red"></q-icon> by <a href="https://www.ultri.com" class="navbar-text-link">Ultri</a></div>
        </q-toolbar-title>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
