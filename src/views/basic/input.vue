<template>
        <a-form-item :label=column.title :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator=column.inputData />
        </a-form-item>
</template>


<script>
export default {
  props: ['column'],

};
</script>