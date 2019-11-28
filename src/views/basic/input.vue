<template>
<div>
    {{column.title}}
  <a-input placeholder="请输入" :name=column.dataIndex />
</div>
</template>


<script>
export default {
  props: ['column'],

};
</script>