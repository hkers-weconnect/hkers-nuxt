// import lodash from "lodash";
import { db } from "@/db";

export const state = () => ({
  // the display result
  detail: null,
  mediaDetail: null,
  officialDetail: null
});

export const mutations = {
  setDetail(state, detail) {
    state.detail = detail;
  },

  setMediaDetail(state, detail) {
    state.mediaDetail = detail;
  },
  setOfficialDetail(state, detail) {
    state.officialDetail = detail;
  }
};

export const getters = {
  tags: state => {
    if (state.detail) {
      return state.detail.tags;
    }

    return [];
  },

  // get related event, used for timeline detail page
  relatedList: state => {
    console.log("get relatedList", state.detail);
  }
};

export const actions = {
  // get api
  bind: ({ commit }, id) => {
    db.collection("timeline")
      .doc(id)
      .get()
      .then(snapshot => {
        const document = snapshot.data();

        if (document) {
          commit("setDetail", document);
        }

        if (document.media_news.length) {
          commit("setMediaDetail", document.media_news[0]);
        }

        if (document.offical_news.length) {
          commit("setOfficialDetail", document.offical_news[0]);
        }

        console.log(document);
      });
  },

  bindRelated: ({ commit }, tags) => {
    db.collection("timeline")
      .where("tags", "array-contains", tags)
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data());
        console.log(documents);
      });
  }
};
