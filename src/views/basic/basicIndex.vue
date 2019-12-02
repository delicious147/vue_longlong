
<template>
    <div>
        <h1>Test</h1>
        <a-button type="primary" @click="showAddModal">Add</a-button>
        <a-table
            :columns="columns"
            :rowKey="record => record.id"
            :dataSource="data"
            :pagination="pagination"
            :loading="loading"
            @change="handleTableChange"
        >
            <template slot="operation" slot-scope="text, record">
                <a href="javascript:;" @click="del(record.id)">Delete</a> 
                <a href="javascript:;" @click="showUpdateModal(record)">Updeat</a>
            </template>
        </a-table>
        <modal ref="Modal" :curd="curd" :columns="columns"></modal>
    </div>
</template>
<script>
import {get, post ,del,put} from '@/request/http'
import modal from './modalForm'//弹出层

export default {
    components:{
        modal:modal,
    },
    props: ["columns","api"],
    data(){
        return{
            data: [],
            pagination: {},
            loading: false,
            curd:'add'
        }
    },
    mounted() {
        this.fetch();
    },
    methods: {
        handleTableChange(pagination, filters, sorter) {
            console.log(pagination);
            const pager = { ...this.pagination };
            pager.current = pagination.current;
            this.pagination = pager;
            this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
            });
        },
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
            del(this.api,{
                id:key
            }).then(data => {
            this.loading = false;
            this.fetch()
            });
        },
        add(params = {}){
            post(this.api,{
                   ...params,
                }).then(data => {
                this.fetch();
                this.$refs.Modal.visible = false;
            });
        },
        update(params = {}){
            params.id=this.row_id
            console.log(params)
            put(this.api,{
                   ...params,
                }).then(data => {
                this.fetch();
                this.$refs.Modal.visible = false;
            });
        },
        fetch(params = {}) {
            this.loading = true;
            get(this.api,{
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
