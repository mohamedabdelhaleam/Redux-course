import {createStore} from 'redux'
const initState = {value: 20, show : true}
const counterReducer = (state = initState,action)=>{
    switch (action.type) {
        case ("increase"):
            return {...state , value:state.value + 1}
        case ("decrease"):
            return { ...state ,value:state.value - 1 }
        case ("increaseByFive"):
            return { ...state ,value:state.value + action.payload  }
        case ("toggle"):
            return { ...state , show:!state.show  }
        default:
            
    }
    return state
}


const store = createStore(counterReducer)

export default store