export default{
   columns :    [
                // {
                // title: "id",
                // dataIndex: "id",
                // inputData:['id']
                // },
                {
                title: "部门",
                dataIndex: "department_name",
                inputData:['department_name']
                },
                {
                title: "简介",
                dataIndex: "department_content",
                inputData:['department_content']
                },
                {
                title: "创建时间",
                dataIndex: "created_at",
                inputData:['created_at']
                },
                {
                title: "更新时间",
                dataIndex: "updated_at",
                inputData:['updated_at']
                },
                {
                title: "人数",
                dataIndex: "user_count",
                inputData:['user_count']
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    scopedSlots: { customRender: 'operation' },
                },
            ]
}
