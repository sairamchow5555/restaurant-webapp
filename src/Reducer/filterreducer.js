const initialState = {
    filter_name : "All Items"
}

export default function filterreducer(state=initialState,action){
    const {type,payload} = action;

    switch(type){
        case "SET_FLTER":
            return {...state,filter_name:payload}
        case "RESET_FILTER":
            return {...state,filter_name: "All Items"}
        default:
            return state;
    }
}
