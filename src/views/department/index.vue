
<template>
    <div>
        <h1>Test</h1>
        <a-button type="primary" @click="showAddModal">Add</a-button>
        <a-table
            :columns="columns"
            :rowKey="record => record.id"
            :dataSource="data"
            :loading="loading"
        >
            <template slot="operation" slot-scope="text, record">
                <a href="javascript:;" @click="del(record.id)">Delete</a> 
                <a href="javascript:;" @click="showUpdateModal(record)">Updeat</a>
            </template>
        </a-table>
        <modal ref="Modal" :curd="curd"></modal>
    </div>
</template>
<script>
import basicTable from "../basic/basicTable";
import columns from "./columns.js";
import {apiDepartment} from '@/request/api';// 导入我们的api接口
import {apiDepartmentDel} from '@/request/api';// 导入我们的api接口
import {apiDepartmentAdd} from '@/request/api';// 导入我们的api接口
import {apiDepartmentUpdate} from '@/request/api';// 导入我们的api接口

import modal from './modal'//弹出层
// import modal from '../basic/modalDemo'//弹出层

export default {
    extends: basicTable,

    components:{
        modal:modal,
    },
    data(){
        var fields=columns.columns
        return{
            columns:fields,
            curd:'add'
        }
    },
    methods: {
        showAddModal() {
            this.$refs.Modal.visible = true;
            this.curd='add'
            this.$nextTick(() => {
                this.$refs.Modal.form.resetFields();
            });
        },
        showUpdateModal(record={}){
            this.$refs.Modal.visible = true;
            this.curd='update'
            this.row_id=record.id
            console.log(this.row_id)
            this.$nextTick(() => {
                this.$refs.Modal.form.setFieldsValue(record);
            });
        },
        del(key){
            this.loading = true;
            apiDepartmentDel({
                id:key
            }).then(data => {
            this.loading = false;
            this.fetch()
            });
        },
        add(params = {}){
            apiDepartmentAdd({
                   ...params,
                }).then(data => {
                this.fetch();
                this.$refs.Modal.visible = false;
            });
        },
        update(params = {}){
            params.id=this.row_id
            console.log(params)
            apiDepartmentUpdate({
                   ...params,
                }).then(data => {
                this.fetch();
                this.$refs.Modal.visible = false;
            });
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
        },
};
</script>
