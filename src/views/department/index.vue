<template>
    <index  :title="title" :columns="columns" :api="api"></index>
</template>
<script>
import basicIndex from "../basic/basicIndex";
import conf from "./conf.js";
export default {
    components:{
        index:basicIndex,
    },
    data(){
        return{
            title:"Department",
            columns:conf.columns,
            api:conf.api,
        }
    }
};
</script>
