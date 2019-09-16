import Plyr from 'plyr';

export default {
  data() {
    return {
      plyrs: []
    };
  },
  mounted() {
    this.$el.querySelectorAll('video').forEach((element) => {
      let plyrElement = null;

      if (element.getAttribute('data-type') === 'youtube') {
        plyrElement = this.createYoutubePlyrElement(
          element.getAttribute('src')
        );
      }

      element.parentNode.replaceChild(plyrElement, element);
      this.plyrs.push(new Plyr(plyrElement));
    });
  },
  methods: {
    createYoutubePlyrElement(id) {
      const plyrElement = document.createElement('div');

      plyrElement.setAttribute('data-plyr-provider', 'youtube');
      plyrElement.setAttribute('data-plyr-embed-id', id);

      return plyrElement;
    }
  }
};
