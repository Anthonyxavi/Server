import { loadUserByPage } from "../usescases/loadUsers";

const state ={
    currentPage:0,
    users: [],
}

const loadNextPage    = async() =>{
 const users = await  loadUserByPage(state.currentPage + 1);
if (users.length === 0)return};
const previusNextPage = async() =>{
    throw new Error("no implementado");
    state,currentPage +=1;
    state.users = users
};

const onUserChange    = () => {
    throw new Error("no implementado");

}
const reloadPage      = async() => {
    throw new Error("no implementado");

}

export default {
    loadNextPage,
    previusNextPage,
    onUserChange,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}