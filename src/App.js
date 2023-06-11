import { Button } from "bootstrap";
import React from "react";
import { connect } from "react-redux";
import { inc_count, dec_count, reset } from "./Config/Store/Action/Increment";

function App(props) {
  console.log(props)
  return (
    <>
      <h1 className="text-center p-2">Store Value <br /> {(props.count)}</h1>
      <br />
      <div className="d-flex justify-content-center mt-5">
        <button variant="secondary" className="btn border w-50 rounded bg-success" onClick={() => props.increment()}>Increment</button>
      </div>
      <div className="d-flex justify-content-center mt-3 ">
        <button variant="secondary" className="btn border w-50 bg-secondary rounded" onClick={() => props.decrement()}>Decrement</button>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <button variant="secondary" className="btn border rounded bg-danger" onClick={() => props.reset()}>Reset</button>
      </div>
    </>
  )

}

const mapStateToProps = (state) => ({

  count: state.count,
  email: state.user

})

const mapDispatchToProps = (dispatch) => ({

  increment: () => dispatch(inc_count()),
  decrement: () => dispatch(dec_count()),
  reset: () => dispatch(reset())

})

export default connect(mapStateToProps, mapDispatchToProps)(App)