const initialstate = []

export default function orderreducer(state=initialstate,action){
    const {type,payload} = action;
    switch(type){
        case "ADD_ORDER":
            return [...state,payload];
        default:
            return state;
    }
}
