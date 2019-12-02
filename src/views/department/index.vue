<template>
    <index  :columns="columns" :api="api"></index>
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
            columns:conf.columns,
            api:conf.api,
        }
    }
};
</script>
