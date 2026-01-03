const KEY="evaData";
export const getData=()=>
    JSON.parse(localStorage.getItem(KEY))||[];
export const saveData=(data)=>
    localStorage.setItem(KEY,JSON.stringify(data));