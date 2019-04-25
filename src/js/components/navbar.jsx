import React from "react";
import { useStateValue } from "../storeContext/storeContext.js"


 const NavBar =() => {
        
          const [{ testText }, dispatch] = useStateValue();
        
        
        return(
            <div>
                
              <nav className="navbar navbar-light bg-light">
                  <a className="navbar-brand" href="#">Navbar {testText}</a> <br/> <br/> <br/> 
                  <button type="button"  onClick={() => dispatch({
                        type: 'changeText',
                        newText:'my new text'
                      })}>Change text </button>
              </nav>
            </div>
            )
    }
    

export default NavBar