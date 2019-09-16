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
      <sup v-if="hasRule('required')">*</sup>
    </label>
    <input
      :id="id || name"
      ref="field"
      v-model="value"
      class="form-field"
      :name="name"
      :type="type"
      :readonly="isValidating"
      :autocomplete="autocomplete ? 'on' : 'off'"
      @click="onFieldClick"
      @focus="focus"
      @blur="blur"
      @input="$emit('input', value)"
      @keydown="onkeydown"
    />

    <div v-if="icon" class="form-icon" :class="icon">
      <template v-if="icon === 'search'">
        <SearchSVG />
      </template>
    </div>

    <div v-for="(error, index) in errors" :key="index" class="error-msg">
      {{ error }}
    </div>
  </div>
</template>

<script>
import form from '@/components/forms/form';
import SearchSVG from '@/components/svg/icons/SearchSVG.vue';

export default {
  components: {
    SearchSVG
  },
  mixins: [form],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    autocomplete: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      value: ''
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
    },

    onkeydown(e) {
      // console.log(e);

      this.$emit('onkeydown', e);
    }
  }
};
</script>
