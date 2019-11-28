export default{
   columns :    [
                // {
                // title: "id",
                // dataIndex: "id"
                // },
                {
                title: "部门",
                dataIndex: "department_name",
                width: 200,
                fixed: 'left',
                // key: 'department_name',
                },
                {
                title: "简介",
                dataIndex: "department_content",
                width: 400,
                },
                {
                title: "创建时间",
                dataIndex: "created_at",
                width: '20%',
                },
                {
                title: "更新时间",
                dataIndex: "updated_at",
                width: '20%',
                },
                {
                title: "人数",
                dataIndex: "user_count",
                width: '10%',
                },
            ]
}
