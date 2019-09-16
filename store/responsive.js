export const state = () => ({
  isMobile: false
});

export const mutations = {
  setIsMobile(state, bool) {
    state.isMobile = bool;
  }
};
