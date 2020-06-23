import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HomePageView } from "../views";
import { Hero, Banner} from "../functionComponents";
// import AuthApi from "../../app/AuthApi";

class HomePageContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      // msg: ''
    }
  }
  componentDidMount() {
    // do something
    // this.setState({msg: useContext(AuthApi)})
    window.scrollTo(0, 0);
  }

  render() {
    const {msg} = this.state;
    return (
      <>
        <Hero>
          <Banner
            title="delish dream dish"
            subtitle="join us for lunch & dinner"
          >
            <Link to="/menu" className="btn-primary"> 
              View Our Menu
            </Link>
          </Banner>
        </Hero>
        <HomePageView />
      </>
    );
  }
}

export default HomePageContainer;

// export default function HomePageContainer() {

//   return (
//     <div>
//         <Hero>
//            <Banner
//               title="delish dream dish"
//               subtitle="join us for lunch & dinner"
//             >
            // <Link to="/menu" className="btn-primary"> 
            //   View Our Menu
            // </Link>
//             </Banner>
//           </Hero>
//           <HomePageView />
//     </div>
//   )
// }







