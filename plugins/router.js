export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, nuxt) => {
    // console.log(app);

    nuxt();
  });
};
