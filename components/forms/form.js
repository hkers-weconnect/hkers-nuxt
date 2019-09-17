/**
 * Form JS
 * ----------------------------------------
 *
 * Only handling form validation and focus event
 *
 */
import { mapState } from "vuex";
import { CAN_SKIP_INPUT_TYPE, CAN_SKIP_FIELD } from "@/constants/form";

export default {
  props: {
    // real form field element id
    id: String,

    // real form field element name
    name: {
      type: String,
      required: true
    },

    // label or placeholder
    label: String,

    // default, should be override
    default: String,

    // validation rules
    rules: String,

    // icon
    icon: String
  },

  computed: {
    ...mapState("form", ["isValidating"]),
    getTagName() {
      return this.$refs.field.tagName.toLocaleLowerCase();
    }
  },

  data() {
    return {
      // is field focus
      isFocused: false,
      isInputted: false,

      // validation errors
      errors: []
    };
  },

  methods: {
    canSkipIfEmpty() {
      let check = false;

      if (CAN_SKIP_FIELD.indexOf(this.$refs.field.getTagName)) {
        check = true;
      }

      if (CAN_SKIP_INPUT_TYPE.indexOf(this.$refs.field.type)) {
        check = true;
      }

      return check;
    },

    getArrayStringForNova(array) {
      return `[${array.map(el => '"' + el + '"').join(",")}]`;
    },

    // used for server side validation
    addErrors(errors) {
      this.errors.push(...errors);
    },

    // actions
    focus() {
      this.isFocused = true;
      this.$refs.field.focus();

      this.$emit("onFieldFocus");
    },
    blur() {
      this.isFocused = false;

      this.$emit("onFieldBlur");
    },

    // validation
    resetErrors() {
      this.errors = [];
    },

    validate() {
      // before start
      this.resetErrors();

      // start
      let pass = true;

      if (this.hasRule("required")) {
        if (!this.isInputted) {
          this.errors.push(`This field is required`);
          pass = false;
        }
      }

      return pass;
    },
    hasRule(type) {
      let result = false;

      if (!this.rules) {
        return result;
      }

      this.rules.split("|").forEach(rule => {
        if (rule.startsWith(type)) {
          result = true;
        }
      });

      return result;
    }
  }
};
