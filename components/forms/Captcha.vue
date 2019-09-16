<template>
  <div class="d-flex align-items-center">
    <Reload class="reload-img" @click.native="loadCaptcha" />
    <img class="captcha-img mx-3" :src="captcha.img" alt="" />
    <Input
      ref="field"
      class="captcha-input"
      name="captcha"
      label="Captcha"
      :rules="rules"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Reload from '@/components/svg/icons/Reload.vue';
import Input from '@/components/forms/Input.vue';

export default {
  components: {
    Reload,
    Input
  },
  props: {
    rules: String
  },
  computed: {
    ...mapState('api/form', ['captcha']),
    getTagName() {
      return this.$refs.field.getTagName;
    }
  },
  created() {
    this.loadCaptcha();
  },
  methods: {
    loadCaptcha() {
      this.$store.dispatch('api/form/fetchCaptcha');
    },

    validate() {
      return this.$refs.field.validate();
    },

    getValue() {
      return this.$refs.field.getValue();
    },

    canSkipIfEmpty() {
      return this.$refs.field.canSkipIfEmpty();
    },

    addErrors(errors) {
      this.$refs.field.errors.push(...errors);
    },

    reset() {
      this.$refs.field.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.captcha-input {
  max-width: 100%;
}

img {
  width: 100px;
}

.reload-img {
  width: 20px;
  cursor: pointer;
}
</style>
