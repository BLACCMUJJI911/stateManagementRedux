const inc_count = (dispatch) => {
    return (
        (dispatch) => {
            dispatch({

                type: "Increment"
            })
        }
    )
}   

const dec_count = (dispatch) => {
    return (
        (dispatch) => {
            dispatch({

                type: "Decrement"
            })
        }
    )
} 
const reset = (dispatch) => {
    return (
        (dispatch) => {
            dispatch({

                type: "Reset"
            })
        }
    )
} 


export {inc_count,dec_count,reset}