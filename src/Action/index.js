export const settablenumber = (value) => async dispatch =>{
    dispatch({
        type : "SET_TABLE_NUMBER",
        payload : value
    })
}

export const resettablenumber = () => async dispatch =>{
    dispatch({
        type : "RESET_TABLE_NUMBER"
    })
}

export const setfilter = (value) => async dispatch =>{
    dispatch({
        type : "SET_FLTER",
        payload : value
    })
}

export const resetfilter = () => async dispatch =>{
    dispatch({
        type : "RESET_FILTER"
    })
}

export const addorder = (id, name, prize, table_number, url) => async dispatch =>{
    dispatch({
        type : "ADD_ORDER",
        payload : {
            id : id,
            name : name,
            prize : prize,
            table_number : table_number,
            url : url
        }
    })
}
