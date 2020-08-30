import React, {Component} from 'react';
import Images from './../const/styles.js';
import './hairStyles.css'



function NewCard(props){

    return(
        <div  style={{marginTop:'3%', marginLeft:'8%', marginRight:'8%', paddingLeft:'6%', paddingRight:'6%', paddingTop:'1%', paddingBottom:'3%', background:props.color, boxShadow: '1px 1px 6px #a9a9a9'}}>
            <h5 style={{marginTop:'1%', marginBottom:'1%'}}>{props.name}</h5>
            <div style={{display:'inline-block', width:'100%', height:'fit-content'}}>
                <img  src={props.url1} alt="Logo" width="198" height="240" class='galleryImages'></img>
                <img  src={props.url2} alt="Logo" width="198" height="240" class='galleryImages'></img>
                <img  src={props.url3} alt="Logo" width="198" height="240" class='galleryImages'></img>
                <img  src={props.url4} alt="Logo" width="198" height="240" class='galleryImages'></img>
                <img  src={props.url5} alt="Logo" width="198" height="240" class='galleryImages'></img>
                <img  src={props.url6} alt="Logo" width="198" height="240" class='galleryImages'></img>
            </div>            
        </div>

    );
}


function ImageLoader(){
    var num = 0;
    const styleCards = Images.map(set =>{
        return(
            <NewCard url1={set.pic1} url2={set.pic2} url3={set.pic3} url4={set.pic4} url5={set.pic5} url6={set.pic6} color={set.color} name={set.name}/>
        );

    });
    return(
    <div>{styleCards}</div>
    );
}


function Header(){
    return(
        
        <div style={{width:'100%', backgroundColor:'#D7EFDC', paddingRight:'20px', paddingLeft:'20px', overflow:'hidden'}}>
            <img src='./Images/mainImage2.png' alt="Logo" width="223" height="350" class='bannerImage' ></img>
            <div  style={{minWidth:'200px', marginTop:'5%'}}>
                <p class='bannerHeader'>Gallery</p>
                <p class='bannerText'>Expert Hair Braiding Salon with Affordable Prices. We pride ourselves on our clean and comfortable atmosphere, with friendly hair technicians</p>
            </div>
        </div>
        
    ); 
}

class HairStyle extends Component{
    
    render(){
        return (
            <div>
                <Header/>
                <ImageLoader/>
            </div>
        );
    }
}

export default HairStyle;