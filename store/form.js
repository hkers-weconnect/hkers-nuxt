export const state = () => ({
  form: null,
  isValidating: false
});

export const mutations = {
  setIsValidating(state, bool) {
    state.isValidating = bool;
  },

  selectForm(state, form) {
    state.form = form;
  }
};
