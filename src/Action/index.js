export const settablenumber = (value) => async dispatch =>{
    dispatch({
        type : "SETTABLENUMBER",
        payload : value
    })
}

export const resettablenumber = () => async dispatch =>{
    dispatch({
        type : "RESETTABLENUMBER"
    })
}

export const setfilter = (value) => async dispatch =>{
    dispatch({
        type : "SETFLTER",
        payload : value
    })
}

export const resetfilter = () => async dispatch =>{
    dispatch({
        type : "RESETFILTER"
    })
}
