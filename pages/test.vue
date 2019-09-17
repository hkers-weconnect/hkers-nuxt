<template>
  <div>
    <client-only>
      <full-page id="fullpage" ref="fullpage" :options="options">
        <div class="section">
          <h1 ef-fp-parallax ef-fp-depth="40">First section ...</h1>
        </div>
        <div class="section">
          <h1 ef-fp-parallax>Second section ...</h1>
        </div>
        <div class="section">
          <h1 ef-fp-parallax>Third section ...</h1>
        </div>
      </full-page>
    </client-only>
  </div>
</template>

<script>
import { TweenLite } from "gsap";

export default {
  name: "Test",
  data() {
    return {
      options: {
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
        scrollingSpeed: 1000,
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        afterRender: this.afterRender
      }
    };
  },
  methods: {
    onLeave(origin, destination, direction) {
      console.log("onLeave - origin", origin);
      console.log("onLeave - destination", destination);
      console.log("onLeave - direction", direction);

      if (direction === "down") {
        const depth = this.getDepthAttr(origin.item);

        // animate origin elements
        TweenLite.to(origin.item.querySelectorAll("[ef-fp-parallax]"), 0.5, {
          y: depth
        });

        console.log(
          "down",
          depth,
          origin.item.querySelectorAll("[ef-fp-parallax]")
        );
      }
    },
    afterLoad() {
      // console.log('afterLoad');
    },

    getDepthAttr(element) {
      if (element.hasAttribute("ef-fp-depth")) {
        const depth = parseInt(element.getAttribute("ef-fp-depth"));

        if (!isNaN(depth)) {
          return depth;
        }
      }

      return 50;
    }
  }
};
</script>
