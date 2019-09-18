import lodash from "lodash";
import { db } from "@/db";

export const state = () => ({
  // the display result
  detail: null,
  mediaDetail: null,
  officialDetail: null,

  relatedList: [],
  nextDetail: null
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
  },

  setRelatedList(state, list) {
    state.relatedList = list;
  },

  setNextDetail(state, detail) {
    state.nextDetail = detail;
  }
};

export const getters = {
  tags: state => {
    if (state.detail) {
      return state.detail.tags;
    }

    return [];
  },

  // get related list for timeline detail page, order by latest date
  getRelatedList: state => {
    const relatedList = state.relatedList;
    if (relatedList.length > 1) {
      relatedList.sort((a, b) => {
        return new Date(b.datetime) - new Date(a.datetime);
      });
    }
    return relatedList;
  }
};

export const actions = {
  // get api
  bind: ({ commit }, id) => {
    db.collection("timeline")
      .where("state", "==", "publish")
      // .orderBy("datetime")
      .get()
      .then(snapshot => {
        const document = snapshot.docs.find(doc => doc.id === id).data();
        commit("setDetail", document);
        commit("setMediaDetail", document.media_news[0]);
        commit("setOfficialDetail", document.offical_news[0]);

        const relatedDocs = snapshot.docs
          .filter(
            doc =>
              // intersection find same tags
              lodash.intersection(doc.data().tags, document.tags).length > 0 &&
              doc.id !== id
          )
          .map(doc => doc.data());
        commit("setRelatedList", relatedDocs);

        // if (snapshot.docs.length > 2) {
        console.log(document);
        // const nextDetail = snapshot.docs[1].data();
        // commit("setNextDetail", nextDetail);
        // }
      });
  }
};
