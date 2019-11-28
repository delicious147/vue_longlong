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
    <formView></formView>
    </a-modal>
  </div>
</template>
<script>
import form from './form'
  export default {
    components:{
        formView:form
    },
    data() {
      return {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
      };
    },
    props: ["title"],
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk() {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 2000);
      },
      handleCancel() {
        console.log('Clicked cancel button');
        this.visible = false;
      },
    },
  };
</script>
