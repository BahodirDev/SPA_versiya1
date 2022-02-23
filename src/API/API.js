import { API_URL } from "./config"

export const getElementsById = async(itemId)=>{
    const response = await fetch(API_URL + 'lookup.php?i=' + itemId);
    return await response.json()
}

export const getElementByCategory = async ()=>{
    const response = await fetch(API_URL + 'categories.php');
    return response.json()
}

export const getElementByFilter = async(itemCategory)=>{
    const reponse =await fetch(API_URL + 'filter.php?c=' + itemCategory );
    return reponse.json();
}