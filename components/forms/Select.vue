<template>
  <div class="temp-select">
    <select
      id=""
      v-model="selected"
      :name="name"
      @change="$emit('input', selected)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    options: Array,
    default: String
  },
  data() {
    return {
      selected: this.default
    };
  }
};
</script>
