export default{
    api:"/department",
    columns :    [
                // {
                // title: "id",
                // dataIndex: "id",
                // inputData:['id']
                // },
                {
                    title: "部门",
                    dataIndex: "department_name",
                    inputData:['department_name'],
                    update:true,
                    add:true,
                },
                {
                    title: "简介",
                    dataIndex: "department_content",
                    inputData:['department_content'],
                    update:true,
                    add:true,
                },
                {
                    title: "创建时间",
                    dataIndex: "created_at",
                    inputData:['created_at'],
                    update:false,
                    add:false,
                },
                {
                    title: "更新时间",
                    dataIndex: "updated_at",
                    inputData:['updated_at'],
                    update:false,
                    add:false,
                },
                {
                    title: "人数",
                    dataIndex: "user_count",
                    inputData:['user_count'],
                    update:false,
                    add:false,
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    scopedSlots: { customRender: 'operation' },
                },
            ]
}
