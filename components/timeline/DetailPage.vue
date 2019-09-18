<template>
  <div class="timeline-detail-page">
    <div
      class="banner"
      :style="
        `background-image: url(${require('~/assets/images/demo/timeline-detail.jpg')})`
      "
    />
    <div class="container">
      <section class="head-section">
        <div class="h2 title">{{ title }}</div>
        <div class="h4 datetime">DateTime: {{ parsedDatetime }}</div>
        <div class="h4 location">Location: Prince Edward Station</div>
        <div class="tags">
          <span v-for="(tag, index) in tags" :key="index" class="tag"
            >#{{ tag }}</span
          >
        </div>
      </section>

      <hr />

      <section class="detail-content">
        <div class="template-content">
          <!-- normal content -->
          <p>
            The MTR Corporation said shortly before the midnight that services
            were suspended to ensure staff and passenger safety “as equipment at
            Prince Edward, Mong Kok, and Yau Ma Tei stations is damaged and
            crowds gather near to stations”.
          </p>
          <p>
            Tear gas was released to disperse protesters on Nathan Road at about
            9.20pm on Friday, just after what appeared to be the firing of
            beanbag rounds from Mong Kok Police Station.
          </p>
          <p>
            The MTR Corporation said shortly before the midnight that services
            were suspended to ensure staff and passenger safety “as equipment at
            Prince Edward, Mong Kok, and Yau Ma Tei stations is damaged and
            crowds gather near to stations”.
          </p>
          <p>
            Tear gas was released to disperse protesters on Nathan Road at about
            9.20pm on Friday, just after what appeared to be the firing of
            beanbag rounds from Mong Kok Police Station.
          </p>

          <!-- image with caption component -->
          <div class="template-image-caption">
            <img src="@/assets/images/demo/timeline-detail-2.jpg" alt />
            <div class="caption">
              Protesters set up a fire pit on the street in Mong Kok. Photo:
              Winson Wong
            </div>
          </div>

          <!-- quote component -->
          <div class="template-quote">
            <div class="content">
              <p>
                <i>
                  Protesters built barricades on Nathan Road, close to Shantung
                  Street. Several fires were lit in the area but quickly put out
                  by firefighters.
                </i>
              </p>
              <p>
                <i>
                  Facilities were vandalised at Mong Kok and Yau Ma Tei stations
                  as protesters spread out in Kowloon. The MTR Corp announced
                  the closure of Prince Edward station at about 5.15pm, citing
                  safety reasons. The station remained closed into the night.
                </i>
              </p>
              <p>
                <i>
                  Mong Kok and Yau Ma Tei stations were also closed because of
                  damage, before the Tsuen Wan route was effectively taken
                  offline. Trains on both the Tsuen Wan and Kwun Tong lines
                  would run as normal, but would not stop at the affected
                  stations, the company said.
                </i>
              </p>
            </div>
            <div class="source">
              <a href="#" class="source-link">
                <div class="title">South China Morning Post</div>
                <div class="date">
                  5:28pm, 6 Sep, 2019
                  <div class="link-icon" />
                </div>
              </a>
            </div>
          </div>

          <p>
            The MTR Corporation said shortly before the midnight that services
            were suspended to ensure staff and passenger safety “as equipment at
            Prince Edward, Mong Kok, and Yau Ma Tei stations is damaged and
            crowds gather near to stations”.
          </p>
          <p>
            Tear gas was released to disperse protesters on Nathan Road at about
            9.20pm on Friday, just after what appeared to be the firing of
            beanbag rounds from Mong Kok Police Station.
          </p>

          <!-- callout component -->
          <div class="template-callout">
            <div class="link-icon" />
            <a href="#">
              Hong Kong’s double trouble: ratings downgrade and stock exchange
              cyberattacks
            </a>
          </div>

          <p>
            According to witnesses and footage from the scene, a middle-aged man
            in a red T-shirt was waving a cleaver and steel bar at protesters
            while a woman next to him, who was believed to be his wife, tried to
            stop him.
          </p>
          <p>“His wife got stabbed in the abdomen,” a witness told media.</p>
          <p>
            Another man told journalists he was injured by the man earlier. “It
            was too fast. I don't know if I was attacked by the steel bar or
            knife,” he said. A young man in a mask said he also suffered
            injuries to the back of his hand and neck. Paramedics arrived on
            Canton Road at around 11.30pm.
          </p>

          <!-- quote component -->
          <div class="template-quote">
            <div class="content">
              <p>
                <i>
                  <strong>
                    “Normally, our footage will be destroyed after 28 days. But
                    in the event of special incidents that will need to be
                    examined, the relevant footage will be kept for three
                    years.”
                  </strong>
                </i>
              </p>
            </div>
            <div class="source">
              <a href="#" class="source-link">
                <div class="title">Prince Edward MTR Spokeman</div>
                <div class="date">
                  5:28pm, 6 Sep, 2019
                  <div class="link-icon" />
                </div>
              </a>
            </div>
          </div>

          <!-- youtube component -->
          <div class="template-youtube">
            <video data-type="youtube" src="3OnkZMdJgVY" />
            <div class="caption">
              Protesters set up a fire pit on the street in Mong Kok. Photo:
              Winson Wong
            </div>
          </div>

          <hr />

          <div class="d-flex flex-wrap">
            <!-- related and refernce -->
            <!-- related articles -->
            <div class="related-list">
              <div class="title">Related Articles:</div>

              <div
                v-for="item in getRelatedList"
                :key="item.id"
                class="related-card"
              >
                <div
                  class="thumbnail bg-cover"
                  :style="`background-image: url('${item[mode][0].image}')`"
                ></div>
                <div class="content">
                  <div class="title">{{ item[mode][0].title }}</div>
                  <div class="datetime">DateTime: {{ item.datetime }}</div>
                  <div class="location">Location: temp</div>
                  <div class="tags">
                    <span
                      v-for="(tag, index) in item.tags"
                      :key="index"
                      class="tag"
                      >#{{ tag }}</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- reference -->
            <div class="reference-list">
              <div class="title">References:</div>

              <div
                v-for="item in getRelatedList"
                :key="item.id"
                class="related-card"
              >
                <div class="link-icon" />
                <div class="title">
                  Hong Kong protests: tear gas fired on Nathan Mong Kok and Yau
                  Ma Tei
                </div>
                <div class="name">South China Morning Post</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- next event -->
      <section v-if="nextDetail" class="next-detail">
        <div class="container">
          <div class="d-flex justify-content-between">
            <div class="content">
              <div class="title">{{ nextDetail.title }}</div>
              <div class="datetime">Datetime: {{ nextDetail.datetime }}</div>
              <div class="location">Location: Temp</div>
            </div>
            <div class="arrow"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import moment from "moment";

import { mapGetters, mapState } from "vuex";
import plyr from "@/mixins/plyr";

export default {
  mixins: [plyr],
  props: {
    mode: String,

    // detail field;
    title: String,
    content: String,
    datetime: String,
    image: String,
    video: String,
    sourceLink: Array,
    sourceName: String
  },
  computed: {
    ...mapState("api/timeline_detail", ["nextDetail"]),
    ...mapGetters("api/timeline_detail", ["tags", "getRelatedList"]),
    parsedDatetime() {
      return moment(this.datetime).format("ll");
    }
  }
};
</script>

<style lang="scss" scoped>
.timeline-detail-page {
  width: 100%;
  color: #000;
}

.banner {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:before {
    content: "";
    display: block;
    padding-top: calc(670 / 1770 * 100%);
  }
}

.head-section {
  padding-top: 3rem;
  padding-bottom: 3rem;

  .title {
    margin-bottom: 1.5rem;
  }

  .tags {
    margin-top: 3rem;

    .tag {
      margin-right: 0.5rem;
    }
  }
}

.detail-content {
  padding: 3rem 0;
}

.related-list {
  width: 60%;

  & > .title {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }

  .related-card {
    display: flex;

    .thumbnail {
      position: relative;
      width: 250px;
      min-width: 250px;

      &:before {
        content: "";
        display: block;
        padding-top: (130 / 230 * 100%);
      }
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 0.5rem;
    }

    .title {
      margin-bottom: 0.5rem;
    }

    .tags {
      margin-top: 0.5rem;

      .tag {
        margin-right: 0.5rem;
      }
    }
  }
}

.reference-list {
  width: 40%;

  & > .title {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }

  .related-card {
    position: relative;

    .title {
      padding-left: 2rem;
    }
    .name {
      padding-left: 2rem;
      margin-top: 0.5rem;
      @include h-small();
    }
  }

  .link-icon {
    position: absolute;
    left: 0rem;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-color: $template-grey;
  }
}
</style>
