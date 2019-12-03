
<template>
    <div>
        <h1>{{title}}</h1>
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
        <addModal ref="addModal"  :columns="columns" ></addModal>
        <updateModal ref="updateModal"  :columns="columns" ></updateModal>
    </div>
</template>
<script>
import {get, post ,del,put} from '@/request/http'
import addModal from './addModalForm'//弹出层
import updateModal from './updateModalForm'//弹出层

export default {
    components:{
        addModal:addModal,
        updateModal:updateModal
    },
    props: ["title","columns","api"],
    data(){
        return{
            data: [],
            pagination: {},
            loading: false,
            row_id:'',
        
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
            this.$refs.addModal.visible = true;
            this.$nextTick(() => {
                this.$refs.addModal.form.resetFields();
            });
        },
        showUpdateModal(record={}){
            this.row_id=record.id
            this.$refs.updateModal.visible = true;
            this.$nextTick(() => {
                this.$refs.updateModal.form.setFieldsValue(record);
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
            });
        },
        update(params = {}){
            params.id=this.row_id
            console.log(params)
            put(this.api,{
                   ...params,
                }).then(data => {
                this.fetch();
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
