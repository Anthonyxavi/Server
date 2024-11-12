import { user } from "../models/user";
/**
 * 
 * @param {Like<user} localhostUser 
 * @returns {user}
 */

export const localhostUserModel =(localhostUser)=>{
const{
    avatar,
    balance,
    first_name,
    gender,
    id,
    isActive,
    last_name,
}=localhostUser;
    return new user ({
        avatar,
        balance,
        firstName:first_name ,
        gender,
        id,
        isActive,
        lastName:last_name,})


}