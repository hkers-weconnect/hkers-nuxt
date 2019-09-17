<template>
  <div class="search-box position-relative">
    <Input
      v-model="value"
      name="search"
      type="text"
      label="Keywords"
      :autocomplete="false"
      icon="search"
      @input="onInput"
      @onFieldFocus="onFocus"
      @onFieldBlur="onBlur"
      @onkeydown="onkeydown"
    />

    <div ref="tags" class="matched-tags-block">
      <template v-for="(item, index) in matchedTags">
        <span
          v-if="index <= limitedTags"
          :key="index"
          class="matched-tag tag"
          :class="{
            __hovered: hoveredTag === index,
            __selected: item.selected
          }"
          :data-tag="item.tag"
          :selected="item.selected"
          @click="onTagClick(index)"
        >
          <template v-if="index === limitedTags"
            >more</template
          >
          <template v-else>
            #{{ item.tag }}
            <Cross />
          </template>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Input from "@/components/forms/Input.vue";
import Cross from "@/components/svg/icons/Cross.vue";

export default {
  name: "SearchBox",
  components: {
    Input,
    Cross
  },
  props: {
    searchValue: String,
    allTags: Array,
    matchedTags: Array
  },
  data() {
    return {
      value: "",
      canSelectTags: false,
      hoveredTag: -1,
      limitedTags: 10
    };
  },
  methods: {
    ...mapMutations("api/timeline", ["addSearchTag", "removeSearchTag"]),

    updateSearchTag(index) {
      // stop when press Enter on "more" tag
      if (index === this.limitedTags) {
        // add limited
        this.limitedTags = this.limitedTags + 10;
        return;
      }

      const tag = this.$refs.tags.querySelectorAll(".tag")[index];

      if (tag.hasAttribute("selected")) {
        this.removeSearchTag(tag.getAttribute("data-tag"));

        // console.log(index, length);
        if (index >= length - 1) {
          index = index - 1;
        }
      } else {
        this.addSearchTag(tag.getAttribute("data-tag"));
      }
    },

    onFocus() {
      this.canSelectTags = true;
    },
    onBlur() {
      this.canSelectTags = false;
    },
    onInput() {
      // reset hovered tag
      this.hoveredTag = -1;
      this.$emit("input", this.value);
    },

    onTagClick(index) {
      this.updateSearchTag(index);
    },

    onkeydown({ code }) {
      // exit when non-focus on search input box
      if (!this.canSelectTags) {
        return;
      }

      const length = this.$refs.tags.querySelectorAll(".tag").length;
      // console.log(code, this.hoveredTag);

      if (code === "Enter") {
        // continue if hover any tag
        if (this.hoveredTag !== -1) {
          this.updateSearchTag(this.hoveredTag);
        }
      }

      if (code === "ArrowDown") {
        if (this.hoveredTag < length - 1) {
          this.hoveredTag = this.hoveredTag + 1;
        }
      }

      if (code === "ArrowUp") {
        if (this.hoveredTag > -1) {
          this.hoveredTag = this.hoveredTag - 1;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.matched-tags-block {
  margin-top: 30px;

  .help-text {
    color: $color-grey;
    margin-right: 5px;
  }

  .tag {
    position: relative;
    display: inline-block;
    background: #1c1c1c;
    color: #b1b1b1;
    padding: 0.25em 0.4em;
    font-size: 16px;
    font-weight: 900;
    line-height: 19px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 1rem;
    cursor: pointer;

    svg {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1rem;
    }

    &.__hovered {
      color: #fff;
    }

    &.__selected {
      color: yellow;
      padding-right: 2.5rem;

      svg {
        display: block;

        /deep/ line {
          stroke: yellow;
        }
      }
    }

    &.__hovered.__selected {
      color: #cece00;

      svg /deep/ line {
        stroke: #cece00;
      }
    }
  }
}
</style>
