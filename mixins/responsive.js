/**
 * Responsive
 * -------------------------
 *
 * this mixin is used to check window is mobile screen or not
 *
 */
import { mapState } from "vuex";
import variables from "@/assets/styles/_variables.scss";

export default {
  computed: {
    ...mapState("responsive", ["isMobile"])
  },
  created() {
    window.addEventListener("resize", this.checkIsMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkIsMobile);
  },
  mounted() {
    this.checkIsMobile();
  },
  methods: {
    // resize show/hide this effect
    checkIsMobile() {
      if (
        window.innerWidth <= parseInt(variables.mobileMax.replace("px", ""))
      ) {
        // is mobile
        if (!this.isMobile) {
          this.$store.commit("responsive/setIsMobile", true);
        }
      } else if (this.isMobile) {
        // is desktop
        this.$store.commit("responsive/setIsMobile", false);
      }
    }
  }
};
