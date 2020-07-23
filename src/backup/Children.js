import React from "react"


const Children = (props) => {
    // props = {state: {}, fn : ()=>}
    const { state, fn } = props; 
    return <> <br /> Child component {state.name}<br />
        <button onClick={() => { 
            let data = prompt("change name"); fn(data) 
            }}> child button</button>
    </>
}

export default Children

export class ChildrenClass extends React.Component {
    // constructor{super(props) this.props = porps}
    // this.props = {state: {}, fn : ()=>}
    state = {}
   
    render() {
        const { state, fn } = this.props;
        return (<>
            <br /> Child component {state.name}<br />
            <button onClick={() => { 
                let data = prompt("change name"); 
                fn(data) 
                }}> child button</button>
        </>)
    }
}
