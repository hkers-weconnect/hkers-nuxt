<template>
  <div class="form-field-wrapper">
    <div
      class="checkbox"
      :class="{
        circle: circle,
        __checked: isChecked,
        __validating: isValidating
      }"
      @click="onCheckboxClick"
    >
      <label :for="id || name">
        <slot />
      </label>
      <div class="checkbox-box">
        <no-ssr>
          <font-awesome-icon icon="check" class="checkbox-tick" />
        </no-ssr>
      </div>
      <input
        :id="id || name"
        ref="field"
        :value="value"
        class="form-field"
        :name="name"
        type="checkbox"
        hidden
      />
    </div>
    <div v-for="(error, index) in errors" :key="index" class="error-msg">
      {{ error }}
    </div>
  </div>
</template>

<script>
import form from "@/components/forms/form";

export default {
  mixins: [form],
  props: {
    value: String,
    circle: Boolean
    // default: Boolean,
  },
  data() {
    return {
      isChecked: false,

      errors: []
    };
  },
  methods: {
    onCheckboxClick(e) {
      e.preventDefault();

      this.isChecked = !this.$refs.field.checked;
      this.$refs.field.checked = this.isChecked;
      this.isInputted = this.isChecked;

      this.$forceUpdate();
    },

    // actions
    getValue() {
      return this.isChecked ? this.value : null;
    },

    reset() {
      this.isChecked = false;
      this.$refs.field.checked = false;
      this.isInputted = false;
    }
  }
};
</script>
