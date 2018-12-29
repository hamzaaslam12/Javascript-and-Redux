// Reducer
const initialState = {count: 0}

function counter(state = initialState, action){
    let newState = {
        count: state.count 
    }
    switch(action.type) {
        case "ADD":
         newState.count = state.count + 1
         return newState
        break;

        case "MINUS":
         newState.count = state.count - 1
         return newState
        break;

        case "RESET":
         newState.count = 0
         return newState
        break;

        default: 
        return state
    }
}

// store
const store = Redux.createStore(counter)

let counterEl = document.getElementById("counter");

function render(){
    console.log("In render function");

    counterEl.innerHTML = store.getState().count
}

store.subscribe(render);

// Action
// FOR ADD ACTION
document.getElementById("add").addEventListener('click', function(){
    store.dispatch({type: "ADD"})
})

// FOR MINUS ACTION
document.getElementById("minus").addEventListener('click', function(){
    store.dispatch({type: "MINUS"})
})

// FOR RESET ACTION
document.getElementById("reset").addEventListener('click', function(){
    store.dispatch({type: "RESET"})
})
