import { Button } from "bootstrap";
import React from "react";
import { connect } from "react-redux";

function App(props) {
console.log(props)
  return (
    <>
      <h1 className="text-center">Store Value</h1>
      <br/>

      <Button variant="secondary" className="btn" onClick={()=>props.inc()}>Increment</Button>
    </>
  )

}

const mapStateToProps = (state) => ({

  count: state.count,
  email: state.user

})

const mapDispatchToProps = (dispatch) => ({

  increment: () => dispatch(inc_count())

})

export default connect(mapStateToProps, mapDispatchToProps)(App)