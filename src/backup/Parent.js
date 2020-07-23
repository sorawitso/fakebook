import React from 'react'
import Children , {ChildrenClass} from './Children'

class Parent extends React.Component {
   
state = {
    name : "AAAA",
    user : [{name: "1111", age : "111"},{name: "222", age : "222"},{name: "333", age : "333"}]

}

changeName = (data) => { 
    // let promp = prompt("add new name")
    this.setState({name : data})
}
changeUser = (index) =>{
    let name = prompt("add name");
    let age = prompt("add age");
    let user = [...this.state.user, {name,age}];
    // [user[index]] = [{name, age}];
    // user.splice(index,1,{name, age})
    // user = user.map((obj , idx)=> idx===index? {name,age}:obj)
    //delete
    // user = user.filter((obj,idx) => index !== idx )
    //user.splice(index,1)
    this.setState({user});
}

render(){
    return(<>
    {this.state.user.map((item, index)=> {
        return (<div>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <button onClick={()=>this.changeUser(index)}>changeUser</button>
        </div>)
    })}
    
    <button onClick={()=>this.changeName("bbbbb")}>changeName</button>
    <Children state= {this.state} fn={this.changeName}/><br/>
    <ChildrenClass state= {this.state} fn={this.changeName}/>
    </>)
}
}

export default Parent