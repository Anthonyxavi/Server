import { create } from "json-server";
import userStores from "../../store/user-stores";
import "./render-table.css";


let table;
/**
 * 
 * @returns 
 */

const createTable =()=>{ 
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML =` 
    <tr>
    <th>#ID</th>
    <th>Balance</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Active</th>
    <th>Actions</th>
    </tr>`;

    
    const tableBody = document.createElement('tbody')
    table.append(tableHeaders,tableBody)
    return table;
}
export const renderTable = (element)=>{
    const user = userStores.getUser();
    if (!table){
        table = createTable();
        element.append(table);
        //TODO listeners a la table
    }
}