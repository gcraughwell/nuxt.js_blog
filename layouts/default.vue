<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav
    :show="displaySidenav"
    @close="displaySidenav = false"/>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>

<style>
/* open sans with a fall back of san-serif
open sans comes from nuxt.config link */
html {
  font-family: "Open Sans", "san-serif";
}
body {
  margin: 0;
}
</style>
