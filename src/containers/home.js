import React, {Component} from 'react';
import './home.css'
import CardImageList from './../const/cardImages';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'



function Banner(){
    return(
        <div class='Banner1'>
            <img src='./Images/mainImage.png' alt="Logo" width="281" height="350" class='Banner1Image'></img>
            <div  style={{ marginTop:'5%'}}>
                <p style={{fontSize:'35px'}}>Welcome</p>
                <p class='para2'>Ly's African Hair Braiding</p>
                <p class='para3'>Expert Hair Braiding Salon with Affordable Prices</p>
            </div>
        </div>
    );
}

function ImageCard(props){
    return(
        <div class='ImageCard'>
            <img src={props.url} alt="Logo" width="187" height="250" class='ImageCardImg'></img>
            <h5 style={{paddingTop:'6%', paddingBottom:'8%'}}>{props.name}</h5>
        </div>
    );
}

function LoadCards(){
    
    const cards = CardImageList.map(val=>{
        return(
            <ImageCard name={val.name} url={val.url} mRight={val.marginRight}/>
        );
    });

    return(
    <div style={{marginTop:'4%'}}>{cards}</div>
    );
}

function AboutUs(){
    return(
        <div class='column1' >
            <h5>About Us</h5>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  We pride ourselves on our clean and comfortable atmosphere, with friendly hair technicians</p>
            <h5>We look forward to seeing you!</h5>
        </div>
    );
}


class Slider extends Component{

    constructor(){
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
          current: 0
        };
    }

    back() {
        this.slideRef.current.goBack();
      }
    
      next() {
        this.slideRef.current.goNext();
      }    


    render(){

        const properties = {
            duration: 5000,
            autoplay: true,
            transitionDuration: 500,
            arrows: false,
            infinite: true,
          };

        const slideImages = [ 
            "/Images/slide1.jpg",
            "/Images/slide2.jpg",
            "/Images/kids1.jpg",
            "/Images/slide3.jpg",
            "/Images/slide4.jpg",

        ]

        return(

            <div class='column2'>

                <div style={{flex:1}}>
                    <a onClick={this.back} class='slideButton'>&#8249;</a>                  
                </div>


                <div className="slide-container slide">
                    <Slide ref={this.slideRef} {...properties}>
                        {slideImages.map((each, index) => (
                        <div key={index} className="each-slide">
                            <img className="lazy" src={each} alt="sample" width="187" height="250" />
                        </div>
                        ))}
                    </Slide>
                </div>
                <div style={{flex:1}}>
                    <a onClick={this.next} class='slideButton' >&#8250;</a>                
                </div>


            </div>

        );
    }
}

function SlideAndAboutUsComponent(){
    return(
        <div class='row1'>
            <AboutUs/>
            <Slider/>
        </div>
    );
}

function ReviewCard(props){
    return(
        <div class='ReviewCard'>
            <img src='./Images/doubleQoutes.png' alt="sample" width="20px" height="20px" class='Quotes' />
            <p style={{display:'block', marginTop:'30px'}}>{props.text}</p>
            <img src='./Images/doubleQoutesRev.png' alt="sample" width="20px" height="20px" class='Quotes1'/>
        </div>
    );
}

function Reviews(){

    const reviews = [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ", 
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ", 
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ", 
    ];

    const cards = reviews.map(val=>{
        return(
            <ReviewCard text={val}/>
        );
    });

    return(
        <div style={{marginTop:'3%'}}>
            <h4 class='ReviewCardHeader'>What Our Customers Are Saying</h4>
            {cards}
        </div>
    );
}

class Home extends Component{
    
    render(){
        return (
            <div>
                <Banner/>
                <LoadCards/>
                <SlideAndAboutUsComponent/>
                <Reviews/>

            </div>
        );
    }
}

export default Home;