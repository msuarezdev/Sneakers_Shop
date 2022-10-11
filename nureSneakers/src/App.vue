<template>
  <v-app>
      <MainLayout></MainLayout>
      <v-main>
        <router-view/>
        <!-- Aca iria el contenido central -->
      </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default defineComponent({
  name: "App",
  data() {
    return {

    };
  },
  components: { MainLayout }
})
</script>

<style lang="scss">
@import "@/assets/global.scss";
</style>