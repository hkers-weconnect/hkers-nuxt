<template>
  <button class="submit-button" type="submit">
    Submit
    <div class="icon-wrapper ml-3">
      <transition name="fade" mode="out-in" :duration="200">
        <div v-if="isValidating" class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ArrowRight v-else />
      </transition>
    </div>
  </button>
</template>

<script>
import { mapState } from "vuex";
import ArrowRight from "@/components/svg/icons/ArrowRight.vue";

export default {
  components: { ArrowRight },
  computed: {
    ...mapState("form", ["isValidating"])
  }
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button svg {
  @media (max-width: $lg-max) {
    height: 20px;
    width: 20px;
  }
}

.submit-button:hover {
  cursor: pointer;
}

.lds-roller {
  transform: scale(0.7);
  transform-origin: center;
}
</style>
