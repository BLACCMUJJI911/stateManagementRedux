const initialState = {
    count: 0,
    user: [{
        email: "abc"
    }]

}

export default (state = initialState, action) => {

    switch (action.type) {

        case "Increment":
            return {

                ...state, count: state.count + 1

            }

        case "Decrement":
            return {
                ...state, count: state.count - 1
            }

        case "Reset":
            return {
                ...state, count: state.count = 0
            }

        default:
            return state
    }

}