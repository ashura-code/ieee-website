import "./App.css";
import {message} from "./sign.js";
import { useState,useEffect } from "react";

function App() {

    console.log("--------------------------------");
    message();

  return (
    <div className="App" role="main">
      <nav className='navbar'>
       <ul className='list_content'>
        <li className='logo'>
          MTTS
        </li>
        <li href="#home" className="end"><a className="end navi" href="#home">Home</a></li>
        <li href="#about" className="end"><a className="end navi" href="#about">About</a></li>
        <li className='about end'><a className="end navi" href="#info">Info</a></li>
        <li class="what_we_do end"><a className="end navi" href="#contact">Contact</a></li>
       </ul>
     </nav>
  


    <div id="home" className="container-area">
       <div className="container one">

  
        
        {/* <pre className="text" dangerouslySetInnerHTML={{ __html: `
       IEEE 
       Microwave Theory 
       and 
       Techniques Society 
       Student Chapter.
     ` }}></pre> */}

     <h1 className="text">
         IEEE<br/>
         Microwave Theory <br />
         and <br />
         Techniques Society <br />
         Student Chapter. <br />
     </h1>

       </div>

       <div id="about" className="container two">
 
         <h1 className="about_title">About IEEE-MTTS</h1>
         <span className="about_content_wrapper">

         <center className="about_content">
          The IEEE Microwave 
         Theory and Techniques Society (MTT-S) is a professional 
         organization dedicated to the advancement of microwave theory 
         and its practical applications. The society boasts a diverse membership of engineers, scientists, educators, and students from around the world who are involved in various aspects of microwave technology, including design, modeling, testing, and application.</center>

         </span>
        
       </div>



       <div id="info" className="container three">
          <p className="about2_content">
          The <b>MTT-S</b> local chapter connects
           individuals interested in microwave 
           technology globally and facilitates 
           knowledge exchange and professional 
           development at the regional level through seminars,
            workshops, and other events. VIT Vellore is a group of 
            enthusiasts committed to organizing additional activities, including industry visits 
            and hands-on projects, 
            to complement the chapter's efforts. Together, we aim to promote excellence in microwave technology and create opportunities for learning and growth for all members.
          </p>
      
       </div>
       <div id="contact" className="container four">

         <section className="logoo">
          <img  width="100px" height="100px" src="https://uc2f76edb773d9e3c13bb0528677.previews.dropboxusercontent.com/p/thumb/AB1RwQnPgk_ePLcInFNskYwRk-vsD_N4Xbm2Vxr8_ir2MejAP_F_L25azxSEdOMBMe1Qthj9ly6EASgFlIKIHVMSuawln4akK-bTaPNhpRxnkapP_SGupNcrSBEhAF3TRJmJTl0EwfOQU-e3mfqZeV6aNe-2y8Nxs94A4To0A2jeV63AF7Ap6ItVBfopwstkDQzX2gJclsTUKSx7vtg9fcoeBF_cTD1ORBlNC1cLpy8ittWqkDo9K50Bn_lL4ucFEGP5kyjelfl6ssoLpShmeStYBeV_1Lnbp2jdFKUOC9v_zN54NqdIHtM4LMgueE7tMy00z40iZUUzqfs7AFg03iaW1TLZZ0L-IYcMVtdNC5H9Iwoif25TtEMUCaWkeUgfG00/p.png"/>
      </section>

       <a className="lin" href="https://www.instagram.com/vit.ieee.mtts/" target="_blank">Instagram</a>
       <a className="lin" href="https://www.linkedin.com/company/ieee-mtts-vit/about/?viewAsMember=true" target="_blank">Linkedin</a>
       <a  className="lin" href="https://www.youtube.com/channel/UCQVSJkuN6HDlqb41e71nbKw" target="_blank">Youtube</a>



       </div>
    </div>



    {/* <footer>
      <div className="container footer"></div>
    </footer> */}
    </div>
  );
}

export default App;