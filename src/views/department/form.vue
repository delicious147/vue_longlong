<template>
  <a-form :form="form" @submit="handleSubmit">
    <div id="app">
        <template v-for="(column,index) in columns">
            <inputTemp :column="column" :key="index"></inputTemp>
        </template>
    </div>
  </a-form>
</template>

<script>
import columns from "./columns.js";
import input from '../basic/input'
export default {
    components:{
        inputTemp:input,
    },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      columns:columns.columns
    };
  },
  methods: {
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>