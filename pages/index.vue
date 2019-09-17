<template>
  <div ref="scene" class="container">
    <h1>Coming Soon...</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  fetch({ params, redirect }) {
    redirect(301, "/timeline");
  }
};
</script>
