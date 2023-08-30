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
    <TheMain />
</template>

<style lang="scss">
i{
  color: white;
  font-size: 2rem;
  z-index: 1200;
  position: absolute;

}
</style>
