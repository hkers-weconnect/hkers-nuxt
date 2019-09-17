<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import responsive from "@/mixins/responsive";
import appinit from "@/mixins/appinit";

export default {
  name: "App",
  mixins: [responsive, appinit]
};
</script>
