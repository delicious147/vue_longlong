<template>
  <div>
    <a-button type="primary" @click="showModal">Add</a-button>
    <a-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <formView ref="getFormVlaue"></formView>
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
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false
    };
  },
  props: ["title"],
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
        e.preventDefault();
      this.$refs.getFormVlaue.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            this.add(values);
        }
    });
    },
    handleCancel() {
      console.log("Clicked cancel button");
      this.visible = false;
    },
    add(params = {}) {
      this.$parent.add(params); //调用父组件的方法
    }
  }
};
</script>
