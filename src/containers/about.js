import React, {Component} from 'react';
import './about.css'
import Owner from "./../ly.png"
import FaceBookIcon from "./../fb.png"
import InstaIcon from "./../insta.png"
import GoogleMap from './../components/Map'

function AboutDiv(){
    return(
        <div className='About'>
            <h4 style={{color:'#03302E', marginTop:'10px'}}>About Us</h4> 
            <p>Ly's African Hair Braiding is a local braiding salon committed to provide an optimum service to its customers. We specialize in a variety of hairstyle, like crochets, tree braids, twists, individual braids, and weave. We pride ourselves on our clean and comfortable atmosphere, with friendly hair technicians. We are open all days a week from 9:00 am to 7:00 pm. To schedule an appointment  you can  call us at (404)-508-0679 . Walk-ins are also Welcomed! </p>
            <img src={Owner} alt="Logo" width="130" height="145" style={{borderRadius:'50%', marginBottom:'10px', marginTop:'5px'}}></img>
            <h6>Ly, Stylist and Owner</h6>
        </div>
    );
}

function ContactAndLocationDiv(){
    return(
        <div className = 'LocationAndContact'>
            <h4 style={{color:'#03302E', marginTop:'10px'}}>Location and Contact Info</h4> 
            <div class='LocationAndContactContainer'>
                <Location/>
                <Contact/>
            </div>

        </div>
    );
}

function Contact(){
    return(
        <div className='Contact'>
            <h6> Address: </h6>
            <p> 1115 Rock Chapel Rd. Lithonia GA 30058</p>

            <h6>Telephone Number</h6>
            <p>(404) - 508 - 0103</p>

            <h6> Social Media</h6>
            <a href="https://www.facebook.com/lysbraiding">
                <img src={FaceBookIcon} alt="Logo" width="50" height="50" style={{marginTop:'1px', padding:'5px', marginRight:'10px'}}></img>
            </a>
            
            <a href="https://www.w3schools.com">
               <img src={InstaIcon} alt="Logo" width="50" height="50" style={{marginTop:'1px', padding:'5px'}}></img> 
            </a>
            

        </div>
    );
}

function Location(){
    return(
        <div className = 'Location'>
            <GoogleMap/>
        </div>
    );
}


class About extends Component{
    
    render(){
        return (
            <div>
                <AboutDiv/>
                <ContactAndLocationDiv/>
            </div>
        );
    }
}

export default About;