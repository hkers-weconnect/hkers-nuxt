<template>
  <div ref="radio-group" class="form-field-wrapper radio-field-wrapper">
    <div class="row">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="col-12 col-md-6 col-lg-4"
      >
        <div
          class="radio-button"
          :class="{
            __selected: selectedValue === option.value,
            __validating: isValidating
          }"
          @click="onRadioClick(option.value)"
        >
          <label :for="option.value">{{ option.label }}</label>
          <div class="radio-circle">
            <span class="radio-dot" />
          </div>
          <input
            :id="option.value"
            ref="field"
            class="form-field"
            :name="name"
            type="radio"
            :value="option.value"
            hidden
          />
        </div>
      </div>
    </div>

    <div v-for="(error, index) in errors" :key="index" class="error-msg">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: {
      type: String,
      required: true
    },
    options: Array,
    // default: String,
    required: Boolean
  },
  data() {
    return {
      selectedValue: '',
      skipIfEmpty: true
    };
  },
  methods: {
    // actions
    getValue() {
      return this.$refs['radio-group'].querySelector('input:checked').value;
    },

    reset() {
      this.isInputted = false;
      this.selectedValue = '';
      this.$refs['radio-group']
        .querySelectorAll('input')
        .forEach((element) => (element.checked = false));
    },

    // events
    onRadioClick(value) {
      this.$refs['radio-group'].querySelector(`#${value}`).checked = true;
      this.selectedValue = value;

      this.isInputted = true;
    }
  }
};
</script>
