import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

}

componentDidMount() {
    //console.log("Parent Component Did Mount");
}

render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Dehradun Class"} />
      </div>
    );
  }
}


// const About = () => {
//     return (<div>
//         <h1>About us</h1>
//         <p>This is about us page</p>
//     </div>)
// }

// export default About;