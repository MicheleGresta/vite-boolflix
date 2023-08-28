<script>
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"
import { storage } from "./store.js"
export default {
  components: {
    TheMain,
    TheHeader,

  },
  data() {
    return {
      storage
    }

  },
}
</script>

<template>
  <TheHeader />
</template>

<style lang="scss"></style>
