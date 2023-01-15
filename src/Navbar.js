import React, {  useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, setShow] = useState(false);

  const backgroundchange = () =>{
    if(window.scrollY >= 100){
        setShow(true)
        
    }else{
        setShow(false)
    }
  }
  window.addEventListener("scroll",backgroundchange)

//   useEffect(() => {
//     window.addEventListener("scroll", ()=>{
//         if(window.screenY > 100 ) {
//             setShow(true)
//         }else setShow(false)
//     })
//     return () => {
//         window.removeEventListener("scroll", ()=>{
        
//         })
//     }
//   }, []);
  return (
    <div className={show ? " nav nav__black" : "nav"}>
      <img
        className="nav__logo"
        src="https://wallpaperaccess.com/full/6075689.png"
        alt="netflix-log"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="netflix-log"
      />
    </div>
  );
}

export default Navbar;
