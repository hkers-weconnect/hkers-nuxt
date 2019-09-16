<template>
  <div class="page-timeline">
    <div ref="scrollbar" class="scroll-container" ef-scrollbar>
      <div class="container my-5 py-5">
        <div class="d-flex align-items-center justify-content-between">
          <h1>Timeline</h1>

          <!-- sort element -->
          <Select
            v-model="sortValue"
            class="sort-select"
            name="sort"
            :options="[
              { value: 'newest', label: 'Sort Newest to Oldest' },
              { value: 'oldest', label: 'Sort Oldest to Newest' }
            ]"
            default="newest"
          />
        </div>

        <!-- filter logic temp -->
        <SearchBox
          v-model="searchValue"
          class="mt-5"
          :all-tags="allTags"
          :matched-tags="matchedTags(searchValue)"
        />

        <div class="my-5">
          <!-- result element -->
          <div v-for="item in searchedList" :key="item.id">
            <EventBlock v-bind="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SearchBox from '@/components/forms/SearchBox.vue';
import EventBlock from '@/components/timeline/EventBlock.vue';
import Select from '@/components/forms/Select.vue';

import scrollbar from '@/mixins/scrollbar';

export default {
  name: 'PageTimeline',
  components: {
    SearchBox,
    EventBlock,
    Select
  },
  mixins: [scrollbar],
  data() {
    return {
      searchValue: '',
      sortValue: ''
    };
  },
  computed: {
    ...mapState('api/timeline', ['list']),
    ...mapGetters('api/timeline', ['searchedList', 'allTags', 'matchedTags'])
  },
  watch: {
    searchValue(value) {
      this.$store.commit('api/timeline/updateSearchTitle', value);
    },
    sortValue(value) {
      this.$store.commit('api/timeline/updateSort', value);
    }
  },
  created() {
    this.$store.dispatch('api/timeline/bind');
  }
};
</script>

<style lang="scss" scoped></style>
