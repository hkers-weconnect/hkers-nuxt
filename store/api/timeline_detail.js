import { firestoreAction } from "vuexfire";
// import lodash from "lodash";
import { db } from "@/db";

export const state = () => ({
  // the display result
  detail: null
});

export const mutations = {};

export const getters = {
  // get detail item, used for timeline detail page
  detail: state => {
    if (state.detail.length) {
      console.log("getters", state.detail[0]);
      return state.detail[0];
    }

    return {
      datetime: "",
      description: "",
      media_news: "",
      offical_news: "",
      state: "",
      tags: "",
      title: "",
      uuid: ""
    };
  },

  // get related event, used for timeline detail page
  relatedList: state => {
    console.log("get relatedList", state.detail);
  }
};

export const actions = {
  // get api
  bind: firestoreAction((context, payload) => {
    return context.bindFirestoreRef(
      "detail",
      db
        .collection("timeline")
        .where("uuid", "==", payload)
        .limit(1)
    );
  })
};
