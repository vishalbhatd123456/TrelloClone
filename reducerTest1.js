const initialState = 0;

const counterReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
};

let state = 0;
state = counterReducer(state,{type:'INCREMENT'});
console.log(state); //ouuput : 1

state = counterReducer(state,{type:'DECREMENT'});
console.log(state); //output : 0

state = counterReducer(state,{type:'DECREMENT'});
console.log(state); //output : -1

