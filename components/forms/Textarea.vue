<template>
  <div
    v-click-outside="onClickOutside"
    class="form-field-wrapper"
    :class="{
      __focused: isFocused,
      __inputted: isInputted,
      __validating: isValidating
    }"
    @click="onFieldWrapperClick"
  >
    <label class="ef-label" :for="id || name">
      {{ label }}
      <sup v-if="required">*</sup>
    </label>
    <textarea
      :id="id || name"
      ref="field"
      v-model="value"
      class="form-field"
      :name="name"
      :rows="rows"
      :readonly="isValidating"
      @click="onFieldClick"
      @focus="focus"
      @blur="blur"
    />
    <div v-for="(error, index) in errors" :key="index" class="error-msg">
      {{ error }}
    </div>
  </div>
</template>

<script>
import form from '@/components/forms/form';

export default {
  mixins: [form],
  props: {
    rows: {
      type: String,
      default: '5'
    },
    required: Boolean
  },
  data() {
    return {
      value: '',
      isFocused: false
    };
  },
  watch: {
    value(value) {
      this.isInputted = !!value;
    }
  },
  methods: {
    // events
    onFieldWrapperClick() {
      this.focus();
      this.$emit('onFieldWrapperClick');
    },

    onFieldClick() {
      this.$emit('onFieldClick');
    },

    onClickOutside() {
      this.blur();
    },

    getValue() {
      return this.value;
    },

    reset() {
      this.value = '';
    }
  }
};
</script>
