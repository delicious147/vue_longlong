<template>
  <div>
    <a-modal
        title="编辑"
        :visible="visible"
        @ok="handleOk"
        :confirmLoading="confirmLoading"
        @cancel="handleCancel"
    >
        <a-form :form="form" >
            <div id="app">
                <template v-for="(column,index) in columns">
                    <template v-if="column.update==true ">
                        <template v-if="column.dataIndex!='operation' ">
                            <inputTemp :column="column" :key="index"></inputTemp>
                        </template>
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
    };
  },
  props: ["columns"],
  methods: {
    handleOk(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
        if (!err) {

                console.log('update')
                this.update(values)
                this.visible = false;
  
        }
    });
    },
    handleCancel() {
      this.visible = false;
    },
    update(params = {}) {
      this.$parent.update(params); //调用父组件的方法
    }
  }
};
</script>
