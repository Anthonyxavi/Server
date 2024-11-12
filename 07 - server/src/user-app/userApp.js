import userstores from "./store/user-stores";
import { renderTable } from "./presentation/render-table/render-table";

/**
 * 
 * @param {HTMLDivElement\} element 
 */


export const UserApp = async(element)=>{

    element.innerHTML ='loading...';
    await userstores.loadNextPage();
    element.innerHTML ='';

renderTable(element)
}