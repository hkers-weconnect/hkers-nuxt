<template>
  <div class="event-block">
    <div class="media-news">
      <div class="banner-wrapper">
        <nuxt-link
          :to="localePath({ name: 'timeline-id', params: { id: id } })"
        >
          <div
            class="banner"
            :style="
              `background-image: url('${require('~/assets/images/demo/timeline-1.jpg')}')`
            "
          >
            <div class="overlay"></div>
            <div class="label">Side A</div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="official-news">
      <nuxt-link :to="localePath({ name: 'timeline-id', params: { id: id } })">
        <div
          class="banner"
          :style="
            `background-image: url('${require('~/assets/images/demo/timeline-2.jpg')}')`
          "
        >
          <div class="overlay"></div>
          <div class="label">Side B</div>
        </div>
      </nuxt-link>
    </div>

    <div class="title-block">
      <div class="date">{{ parseDate(datetime) }}</div>
      <nuxt-link :to="localePath({ name: 'timeline-id', params: { id: id } })">
        <div class="title" v-html="title" />
      </nuxt-link>
      <div class="tags">
        <div v-for="(tag, index) in tags" :key="index" class="tag">
          #{{ tag }}
        </div>
      </div>
    </div>
    <!-- {{ title }} -->
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    id: String,
    uuid: String,
    datetime: String,
    title: String,
    tags: Array
  },
  methods: {
    parseDate(date) {
      return moment(date).format("D MMMM YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
.event-block {
  position: relative;
  margin-bottom: 50px;
}

.banner {
  position: relative;
  width: 50%;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.label {
  position: absolute;
  font-weight: bold;
  right: 15px;
  font-size: 1.2rem;
  color: #fff;
}

.media-news {
  .banner {
    margin-left: 40%;
  }

  .label {
    top: 15px;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.64) 17.3%,
      rgba(0, 0, 0, 0) 65.84%,
      rgba(0, 0, 0, 0.64) 90.3%
    );
  }
}
.official-news {
  .banner {
    margin-left: 45%;
  }

  .label {
    bottom: 15px;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.64) 17.3%,
      rgba(0, 0, 0, 0) 65.84%
    );

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        -25deg,
        rgba(0, 0, 0, 0.64) 5.3%,
        rgba(0, 0, 0, 0) 34.84%
      );
    }
  }
}

.title-block {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 60%;

  .title {
    font-weight: 500;
    font-size: 20px;
    color: #fff;
  }

  .date {
    font-weight: 900;
    font-size: 16px;
    line-height: 28px;
    color: #980909;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    font-size: 14px;
    cursor: pointer;
    margin-right: 10px;
    color: $color-grey;
  }
}
</style>
