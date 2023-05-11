import React from "react";
import Giticon from "./Giticon";
import Wapicon from "./Wapicon";
import Linkicon from "./Linkicon";
import Mailicon from "./Mailicon";


function Contact(){
    const phoneNumber = '+573118548628';
    const user='camila-andrea-garcia';
    const userGit='milaca1991';
    const email='ing.camilagarcia@outlook.com';

    return (

        <>
        
        <div className="ContainerMedia">

       <Giticon userGit={userGit}/>     
       <Linkicon user={user}/>
       <Wapicon phoneNumber={phoneNumber}/>
       <Mailicon email={email}/>

       <h2 className="contact">Let's talk about you goals... <br /> And how can i help you to achieve them! </h2>
       </div>
        </>

    )
}

export default Contact;