export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        `[Axios] [${config.method}] ${config.baseURL + config.url} ${
          config.params ? JSON.stringify(config.params) : ''
        }`
      );
    }
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    console.log('[Axios] [Error] ' + code, error);
    // if (code === 400) {
    //   redirect("/400");
    // }
  });
}
