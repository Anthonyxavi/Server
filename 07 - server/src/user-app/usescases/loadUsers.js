import { localhostUserModel } from "../mappers/localhost-user.mapper";
import { user } from "../models/user";
/**
 * @param {Number} page 
 * @returns {Promise<user>}
 */


export const loadUserByPage = async (page = 1) => {
  
      const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
      const res = await fetch(url);
      const data = await res.json();
      const user = data.data.map( localhostUserModel );
    
     
    return user;
}