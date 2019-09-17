import { mapState } from "vuex";
import { TweenLite } from "gsap";

export default {
  data() {
    return {
      // build for kill all created tweens before destroy the component
      tweens: []
    };
  },
  computed: {
    ...mapState("responsive", ["isMobile"])
  },
  created() {
    this.addListener();
  },
  beforeDestroy() {
    this.removeListener();

    // destroy all tweens
    this.tweens.forEach(tween => tween.kill());
  },
  watch: {
    isMobile(state) {
      if (state) {
        // when go mobile
        this.removeListener();
      } else {
        // when go desktop
        this.addListener();
      }
    }
  },
  methods: {
    addListener() {
      window.addEventListener("mousemove", this.onMouseMove);
    },
    removeListener() {
      window.removeEventListener("mousemove", this.onMouseMove);
      this.resetIt();
    },

    onMouseMove(e) {
      const elements = this.$refs.scene.querySelectorAll("[ef-mouse-parallax]");

      elements.forEach(element => {
        let movement = element.hasAttribute("ef-depth") || 50;
        movement = parseInt(element.getAttribute("ef-depth"));

        // validate ef-depth value is int number value
        if (isNaN(movement)) {
          console.log(
            "[error] ef-mouse-parallax depth is not a float number!",
            element
          );
          return;
        }

        this.parallaxIt(e, element, movement);
      });
    },

    // parallax elements
    parallaxIt(e, element, movement) {
      const container = this.$refs.scene;
      const relX = e.pageX - container.offsetLeft;
      const relY = e.pageY - container.offsetTop;

      this.tweens.push(
        TweenLite.to(element, 2, {
          x:
            ((relX - container.offsetWidth / 2) / container.offsetWidth) *
            movement,
          y:
            ((relY - container.offsetHeight / 2) / container.offsetHeight) *
            movement
        })
      );
    },

    // reposition the element to origin place
    resetIt() {
      const elements = this.$refs.scene.querySelectorAll("[ef-mouse-parallax]");

      elements.forEach(element => {
        TweenLite.to(element, 0.5, {
          x: 0,
          y: 0
        });
      });
    }
  }
};
