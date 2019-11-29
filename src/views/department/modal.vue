<template>
  <div>
    <a-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <formView ref="Form"></formView>
    </a-modal>
  </div>
</template>
<script>
import form from "./form";
export default {
  components: {
    formView: form
  },
  data() {
    return {
      visible: false,
      confirmLoading: false
    };
  },
  props: ["title","curd"],
  methods: {
    handleOk(e) {
        e.preventDefault();
        this.$refs.Form.form.validateFields((err, values) => {
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
        console.log(params)
      this.$parent.add(params); //调用父组件的方法
    },
    update(params = {}) {
        console.log(params)
      this.$parent.update(params); //调用父组件的方法
    }
  }
};
</script>
