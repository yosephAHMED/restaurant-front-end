import React, { Component } from "react";
import "./App.css";
// import RoutesContainer from "../components/routes/RoutesContainer";
import RoutesView from "../components/routes/RoutesView"
import { Navbar, Footer } from "../components/functionComponents";
import AuthApi from "./AuthApi";
import Cookies from 'js-cookie';

export default function App() {

  const[auth, setAuth] = React.useState(false);
  const readCookie = () => {
    const user = Cookies.get("user");
    if(user){
      setAuth(true); 
    }
  }
  React.useEffect(()=>{
    readCookie();
  },[])

  return (
    <div>
      <AuthApi.Provider value ={{auth,setAuth}}>

        <Navbar/>
        <RoutesView />
        <Footer />

      </AuthApi.Provider>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     return (
//       <>
            

//       </>
//     );
//   }
// }

// export default App;
