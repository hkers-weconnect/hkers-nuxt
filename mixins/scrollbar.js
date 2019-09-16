/**
 * Scrollbar mixin
 * -------------------------
 *
 * Handle pages smooth scrollbar global functions
 * !important. Only one instance created in each page. Other component instances need to created in their own file
 *
 */

// used for store the 'smooth-scrollbar' library
// let Scrollbar; ssr
import Scrollbar from 'smooth-scrollbar';

export default {
  data() {
    return {
      // the scrollbar instance for each pages
      scrollbars: []
    };
  },
  mounted() {
    this.initScrollbars();
  },
  beforeDestroy() {
    this.destroyScrollbars();
  },
  methods: {
    /**
     * call 'smooth-scrollbar',
     * init the scrollbar instance
     */
    initScrollbars() {
      this.$el.querySelectorAll('[ef-scrollbar]').forEach((scrollbar) => {
        this.scrollbars.push(Scrollbar.init(scrollbar));
      });
    },

    /**
     * destroy the scrollbar instance before destroy the component
     */
    destroyScrollbars() {
      this.scrollbars.forEach((scrollbar) => Scrollbar.destroy(scrollbar));
    }
  }
};
