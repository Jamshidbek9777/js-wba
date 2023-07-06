import React  from "react";

export class Navbar extends React.Component{
    render(){
        const {data} = this.props
        return <div>
        <div className="menu">
           
           {/* <h3>{this.props.data[0]}</h3>
            <h3>{this.props.data[1]}</h3>
            <h3>{this.props.data[2]}</h3>
            <h3>{this.props.data[3]}</h3> */}
            {
                data.map(item=>{
                    return <h1>{item}</h1>
                })
            }
           </div>
            <h1>{this.props.data.title}</h1>
            <h1>{this.props.data.name}</h1>
        </div>
}
}