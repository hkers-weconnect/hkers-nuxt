<template>
  <div
    ref="checkbox-group"
    class="form-field-wrapper checkbox-field-wrapper ml-3"
  >
    <div class="row">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="col-12 col-md-6 col-lg-4"
      >
        <div
          class="checkbox"
          :class="{
            circle: circle,
            __checked: checked.indexOf(option.value) !== -1,
            __validating: isValidating
          }"
          @click="onCheckboxClick(option.value)"
        >
          <label :for="id || name">
            {{ option.label }}
          </label>
          <div class="checkbox-box">
            <no-ssr>
              <font-awesome-icon icon="check" class="checkbox-tick" />
            </no-ssr>
          </div>
          <input
            :id="option.value"
            ref="field"
            :value="option.value"
            class="form-field"
            :name="name"
            type="checkbox"
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
import lodash from 'lodash';
import form from '@/components/forms/form';

export default {
  mixins: [form],
  props: {
    circle: Boolean,
    options: Array
  },
  data() {
    return {
      checked: [],
      skipIfEmpty: true
    };
  },
  methods: {
    onCheckboxClick(value) {
      const checked = this.$refs['checkbox-group'].querySelector(`#${value}`)
        .checked;
      this.$refs['checkbox-group'].querySelector(
        `#${value}`
      ).checked = !checked;

      if (!checked) {
        this.addChecked(value);
      } else {
        this.removeChecked(value);
      }

      this.$forceUpdate(); // TODO: why checked[] removed not re-render?
    },

    // actions
    addChecked(value) {
      if (!this.hasChecked(value)) {
        this.checked.push(value);
      }
    },
    removeChecked(value) {
      if (this.hasChecked(value)) {
        lodash.remove(this.checked, (el) => el === value);
      }
    },
    hasChecked(value) {
      return this.checked.includes(value);
    },

    getValue() {
      return this.checked.length !== 0
        ? this.getArrayStringForNova(this.checked)
        : null;
    },

    reset() {
      this.checked = [];
      this.$refs.field.forEach((el) => (el.checked = false));
    }
  }
};
</script>
