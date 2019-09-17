import moment from "moment";

export default {
  beforeMount() {
    moment.locale("zh-tw");
  }
};
