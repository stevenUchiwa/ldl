import React from "react";
import Topbar from "../topbar/Topbar";
import './header.css';


const Header = ({pgIndex}) => {
    console.log('je suis index************',pgIndex)
    return(
      <>
          <Topbar pgIndex={pgIndex}/>
          <div className='topbarimgcontainer'>
               <section className='texttopbarcontainer'>
                 <p className='firtTexth1 cusfonttop'>Syndicat<br/>des<br/>Irréductibles Lidl-ois</p>
               </section>
            </div>
      </>
    );
}

export default Header;