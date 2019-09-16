<template>
  <div>
    <!-- <ul style="position: fixed; z-index: 999;">
      <li>
        <nuxt-link to="/">home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/test">test</nuxt-link>
      </li>
    </ul> -->

    <nuxt />
  </div>
</template>

<script>
import responsive from '@/mixins/responsive';

export default {
  name: 'App',
  mixins: [responsive]
};
</script>
