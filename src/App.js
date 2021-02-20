import React,{useState}  from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chat from "./Chat.js"
import Login from "./Login"
import { useStateValue} from "./StateProvider";

function App() {
  /*const [user , setUser] = useState(null); */
  const [ {user} , dispatch] = useStateValue();


  return (
    <div className="app">
      <Router>

        {!user ? (
         
          <Login/>

        ) : (
            <>
              <Header />                                  {/* Header */}
              <div className="app_body">
                <Sidebar />                              {/* Slide bar */}

                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">

                    <Chat />
                  </Route>
                </Switch>

                {/* React -Router -> cheat screen*/}
              </div>
            </>
          )}


      </Router>
    </div>
  );
}

export default App;
