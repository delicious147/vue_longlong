import { get, post ,del} from './http'
// import { get} from './http'

export const apiDepartment = p => get('/department', p);
export const apiDepartmentDel = p => del('/department', p);

export const apiLonglong = p => get('/product-kind/index2', p);
export const apiLonglong2 = p => get('/product-kind/index3', p);
export const apiList4 = p =>post('/product-kind/index4', p);