
<template>
<div>
    <h1>Test</h1>
        <addModal></addModal>
    <!-- <a-button class="editable-add-btn" @click="handleAdd">Add</a-button> -->
    <a-table
        :columns="columns"
        :rowKey="record => record.id"
        :dataSource="data"
        :loading="loading"
    >
    <template slot="operation" slot-scope="text, record">
        <a href="javascript:;" @click="del(record.id)">Delete</a>
        <a href="javascript:;" @click="update(record.id)">Updeat</a>
    </template>
  </a-table>
  </div>
</template>
<script>
import basicTable from "../basic/basicTable";
import columns from "./columns.js";
import {apiDepartment} from '@/request/api';// 导入我们的api接口
import {apiDepartmentDel} from '@/request/api';// 导入我们的api接口
import {apiDepartmentAdd} from '@/request/api';// 导入我们的api接口

import modal from './modal'//弹出层
// import modal from '../basic/modalDemo'//弹出层

export default {
    extends: basicTable,

    components:{
        addModal:modal,
    },
    data(){
        var fields=columns.columns
        fields.push(
            {
                title: 'operation',
                dataIndex: 'operation',
                scopedSlots: { customRender: 'operation' },
            }
        );
        return{
            columns:fields
        }
    },
    methods: {
        del(key){
            // alert(key)
            this.loading = true;
            apiDepartmentDel({
                id:key
            }).then(data => {
            this.loading = false;
            // this.data = data.data;
            console.log(data)
            });
        },
        add(params = {}){
            apiDepartmentAdd({
                   ...params,
                }).then(data => {
                this.loading = false;
                this.fetch()
                // this.data = data.data;
                // console.log(data)
            });
        },
        update(key){
            console.log(key)
        },
        fetch(params = {}) {
            this.loading = true;
            apiDepartment({
                // type: 0,                    
                // sort: 1,
                ...params,
            }).then(data => {
            // const pagination = { ...this.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            // pagination.total = 200;
            this.loading = false;
            this.data = data.data;
            // this.pagination = pagination;
            });
        },
        edit(){
            alert('ddd')
        }
        },
};
</script>
