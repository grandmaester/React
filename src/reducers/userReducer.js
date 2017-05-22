export default function(state=[],action){
    switch(action.type)
    {
        case 'AddTrade':
                let newState=[...state];
                return newState;
        default:return state;
    }
};