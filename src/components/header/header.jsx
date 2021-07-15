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
                 <p className='firtTexth1 cusfonttop'>Votre nouveau Syndicat<br/><span className="textJauneAction">Action</span><br/><span className="textNoireAction">Syndicat des Irréductibles lidl-ois</span></p>
               </section>
            </div>
      </>
    );
}

export default Header;