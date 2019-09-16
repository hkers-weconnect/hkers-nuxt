import { firestoreAction } from "vuexfire";
import lodash from "lodash";
import { db } from "@/db";

export const state = () => ({
  // the display result
  list: [],

  // search values
  search: {
    title: "",
    sort: "newest",
    tags: []
  }
});

export const mutations = {
  // sync search title value for filtering the result
  updateSearchTitle(state, value) {
    state.search.title = value;
  },

  // sync search sort value for filtering the result
  updateSort(state, value) {
    state.search.sort = value;
  },

  // sync search tags value for filtering the result
  addSearchTag(state, tag) {
    state.search.tags.push(tag);
  },
  removeSearchTag(state, tag) {
    state.search.tags = state.search.tags.filter(value => value !== tag);
  },

  // initial the temo data
  setList(state, list) {
    state.list = list;
  }
};

export const getters = {
  // get all tags, used for the search tags of timeline index page
  allTags(state) {
    const tagsArray = state.list.map(item => item.tags);
    let mergedArray = [];
    tagsArray.forEach(arr => (mergedArray = lodash.union(arr, mergedArray)));

    return mergedArray;
  },

  // get matched search tags, used for the search tags of timeline index page
  matchedTags: (state, getters) => value => {
    let matched = getters.allTags
      .filter(tag => tag.includes(value) || state.search.tags.includes(tag))
      .map(tag => {
        return { tag, selected: state.search.tags.includes(tag) };
      });

    matched = lodash.orderBy(matched, ["selected"], ["desc"]);

    // console.log('matchedTags', matched);

    return matched;
  },

  // get searched list, used by timeline index page
  searchedList(state) {
    let matchedList = [];

    // filter title
    matchedList = state.list.filter(item =>
      item.title.includes(state.search.title)
    );

    // filter tags
    if (state.search.tags.length) {
      matchedList = matchedList.filter(item =>
        item.tags.some(tag => state.search.tags.includes(tag))
      );
    }

    matchedList = matchedList.sort((a, b) => {
      if (state.search.sort === "oldest") {
        return new Date(a.datetime) - new Date(b.datetime);
      } else if (state.search.sort === "newest") {
        return new Date(b.datetime) - new Date(a.datetime);
      }
    });

    console.log("searchedList", matchedList);
    return matchedList;
  }
};

export const actions = {
  // get api
  bind: firestoreAction(context => {
    return context.bindFirestoreRef("list", db.collection("timeline"));
  })
};
