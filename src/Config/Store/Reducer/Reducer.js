
const initialState = {
    count: 0,
    user:[{
        email: "abc"
    }]

}

export default (state = initialState, action) => {

    switch(action.type){

        case "Increment":
            return (
                ...state , count : state.count+1
                )
            
            default:
                return state
    }

}