<template>
  <a-form :form="form" >
    <div id="app">
        <template v-for="(column,index) in columns">
            <template v-if="column.dataIndex!='operation'">
                <inputTemp :column="column" :key="index"></inputTemp>
            </template>
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

  },
};
</script>