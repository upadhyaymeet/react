import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:2,
            userInfo:{
                name:"Default"
            }
        }
        // console.log(this.props.name + "constructor called")
    }

    async componentDidMount(){
        // console.log(this.props.name + "Component did mount called")
        // const data = await fetch("https://api.github.com/users/akshaymarch7")
        // const json = await data.json()
        // console.log(json)
        // this.setState({
        //     userInfo:json
        // })

        
    }

    componentDidUpdate(){
        // console.log(this.props.name + "component did update")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        // console.log(this.props.name + "component will unmount")
    }

    render(){
        // console.log(this.props)
        // destructure 
        // console.log(this.state)
        const {count2} = this.state
        const {location} = this.props
        // console.log("render")
        // console.log(this.props.name + "render called")
        return(
            <div>
                <h1>Classbased Component</h1>
                {/* example props */}
                <h1>Name: {this.props.name}</h1>
                <h1>Name: {this.state.userInfo.name}</h1>
                <p>Location : {location}</p>
                <h2>Count 2 value is {count2}</h2>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>
                    {
                        this.setState({
                            count:this.state.count + 1
                        }
                        )
                    }
                }>Count Increase</button>
            </div>
        )
    }
}

export default UserClass