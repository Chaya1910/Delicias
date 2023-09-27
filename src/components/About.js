import { Component } from "react";
import Bg1 from '../assets/img/Bg1.jpg';

class About extends Component {
  constructor(props) {
    super(props);

}

componentDidMount() {
}

render() {
    return (
      <div className="flex flex-col" >
        <img className="h-screen w-full" src={Bg1}>

        </img>
        <div className="text-white absolute top-56 w-[500px] ml-28">
        <h2 className="font-bold text-xl mb-2">What’s In Store For The Future?</h2>
        <p className="font-semibold text-lg">Swiggy has grand plans to be India’s most loved hyperlocal player.
        It aims to be the most accessible platform on the network - reimagining
         the meaning of convenience in the country through a variety of service offerings.
         </p>
        </div>
      </div>
    );
  }
}


export default About;