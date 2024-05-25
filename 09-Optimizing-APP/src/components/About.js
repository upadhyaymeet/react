import React, {Component} from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends Component{
    constructor(props){
        super(props)
        // console.log("Parent Constructor callled")
    }

    componentDidMount(){
        // console.log("Parent component did mount")
    }

    render(){
        // console.log("Parent Render Called")
        return(
            <div>
                <h1>About Component</h1>
                <UserClass name="First" location="First"/>
                <UserClass name="Two" location="Two"/>
            </div>
        )
    }
}
export default About

/*
Life cycle of react class based component
-parent constructor
-parent render
    -first constructor
    -first render

    -second constructor
    -second render

    -first component did mount
    -second component did mount

-parent component did mount

*/


// const About = () =>{
//     return(
//         <div>
            
//             <h1>Hey this is about Page</h1>
//             {/* <User /> */}
//             <UserClass name={"First"} location={"India"} />
//             <UserClass name={"Second"} location={"India"} />
//         </div>
//     )
// }

// export default About