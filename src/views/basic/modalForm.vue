<template>
  <div>
    <a-modal
        title="Title"
        :visible="visible"
        @ok="handleOk"
        :confirmLoading="confirmLoading"
        @cancel="handleCancel"
    >
        <a-form :form="form" >
            <div id="app">
                <template v-for="(column,index) in columns">
                    <template v-if="column.dataIndex!='operation'">
                        <inputTemp :column="column" :key="index"></inputTemp>
                    </template>
                </template>
            </div>
        </a-form>
    </a-modal>
  </div>
</template>
<script>
import input from './input'
export default {
  components: {
    inputTemp:input,
  },
  data() {
    return {
      visible: false,
      confirmLoading: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    //   columns:columns.columns
    };
  },
  props: ["title","curd","columns"],
  methods: {
    handleOk(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
        if (!err) {
            if(this.curd=='add'){
                console.log('add')
                this.add(values);
            }else if(this.curd=='update'){
                console.log('update')
                this.update(values)
            }
        }
    });
    },
    handleCancel() {
      this.visible = false;
    },
    add(params = {}) {
      this.$parent.add(params); //调用父组件的方法
    },
    update(params = {}) {
      this.$parent.update(params); //调用父组件的方法
    }
  }
};
</script>
