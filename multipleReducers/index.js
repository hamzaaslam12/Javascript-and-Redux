// Reducer
const initialState = {todo: []}

function counter(state = initialState, action){

    var newState = Object.assign({}, state)
    switch(action.type) {
        case "NEW":
        newState.todo.push(action.payload)
        return newState
        break;

        case "DELETE":
         newState.todo.pop()
         return newState
        break;

        default: 
        return state
    }
}

// store
const store = Redux.createStore(counter)
var ele = document.getElementById("text");
var list = document.getElementById("list");

function render(){
    var state = store.getState();

    console.log("In render function");
    
    renderList(state)
}

renderList = state => {
    list.innerHTML = ''
    for (let i = 0; i < state.todo.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = state.todo[i]
        list.appendChild(li);
    }
}
store.subscribe(render);

// Action
// FOR NEW TODO ACTION
document.getElementById("new").addEventListener('click', function(){
    store.dispatch({type: "NEW", payload: ele.value})
})

// FOR DELETE TODO ACTION
document.getElementById("delete").addEventListener('click', function(){
    store.dispatch({type: "DELETE"})
})
