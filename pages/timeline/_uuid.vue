<template>
  <div class="page-timeline-detail" :class="mode">
    <!-- layer one -->
    <div class="media-layer layer">
      <div class="layer-container">
        <div ref="scrollbar" class="scroll-container" ef-scrollbar>
          <DetailPage v-bind="detail.media_news" />
        </div>
      </div>
    </div>

    <!-- layer switcher -->
    <div ref="switcher" class="switcher" @click="switchMode">
      <div class="media-text">
        <span>Switch</span>
      </div>
      <div class="official-text">
        <span>Switch</span>
      </div>
    </div>

    <!-- layer two -->
    <div class="official-layer layer">
      <div class="layer-container">
        <div ref="scrollbar" class="scroll-container" ef-scrollbar>
          <DetailPage v-bind="detail.official_news" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { TweenLite } from 'gsap';
import { mapGetters } from "vuex";
import DetailPage from "@/components/timeline/DetailPage.vue";

import scrollbar from "@/mixins/scrollbar";

export default {
  name: "PageTimelineDetail",
  components: {
    DetailPage
  },
  mixins: [scrollbar],
  data() {
    return {
      // temp
      mode: "media-mode"
    };
  },
  computed: {
    ...mapGetters("api/timeline_detail", ["detail"]),
    uuid() {
      return this.$route.params.uuid;
    }
  },
  watch: {
    mode(state) {
      if (state === "media-mode") {
      } else if (state === "official-mode") {
      }
    }
  },
  created() {
    this.$store.dispatch("api/timeline_detail/bind", this.uuid);
  },
  methods: {
    switchMode() {
      if (this.mode === "media-mode") {
        this.mode = "official-mode";
      } else if (this.mode === "official-mode") {
        this.mode = "media-mode";
      }
    },

    goMediaMode() {
      // TweenLite.to(this.$refs.switcher, 0.5);
    },
    goOfficialMode() {}
  }
};
</script>

<style lang="scss" scoped>
$switcher-width: 50px;

.page-timeline-detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
}

.switcher {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200%;
  transform: translateX(50%) translateX(-$switcher-width);
  background-color: #000;
  transition: 1s $in-out-middle;
  z-index: 1;

  .media-text,
  .official-text {
    position: absolute;
    top: 0;
    width: $switcher-width;
    height: 100%;
    font-size: 1.2rem;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }

  .media-text {
    left: 0;
    transition: 0.3s ease 1s;

    span {
      transform: translate(-50%, -50%) rotate(-90deg);
    }
  }

  .official-text {
    right: 0;
    opacity: 0;
    transition: 0.2s ease;

    span {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
}

.media-layer,
.official-layer,
.layer-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

.official-layer {
  transform: translateX(100%);
  background-color: blue;
  transition: 1s $in-out-middle;

  .layer-container {
    transform: translateX(-100%);
    transition: 1s $in-out-middle;
  }
}

// go media mode
// .media-mode {
// }

// go official mode
.official-mode {
  .switcher {
    transform: translateX(100%) translateX(-200%) translateX($switcher-width);

    .media-text {
      left: 0;
      opacity: 0;
      transition: 0.2s ease;
    }
    .official-text {
      right: 0;
      opacity: 1;
      transition: 0.3s ease 1s;
    }
  }

  .official-layer {
    transform: translateX(0%);

    .layer-container {
      transform: translateX(0%);
    }
  }
}
</style>
