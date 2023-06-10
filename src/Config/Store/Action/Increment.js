const inc_count = (dispatch) => {
    return (
        (dispatch) => {
            dispatch({

                type: "Increment"
            })
        }
    )
}   

export default inc_count