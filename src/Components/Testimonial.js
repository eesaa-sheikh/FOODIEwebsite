import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {

  const reviews = [

    {
        title: "Testimonial : 1",
        primaryHeading: "What They Are Saying",
        primaryText: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit Dolor turpis molestie dui magnis facilisis at fringilla quam",
        imageProfile : <img src={ProfilePic} alt="" />,
        userName : "John Doe",
        starRevviews:[<AiFillStar />,<AiFillStar />,<AiFillStar />,<AiFillStar />,<AiFillStar />]
    },
    {
      title: "Testimonial : 2",
      primaryHeading: "What They Are Saying",
      primaryText: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit Dolor turpis molestie dui magnis facilisis at fringilla quam",
      imageProfile : <img src={ProfilePic} alt="" />,
      userName : "John Doe",
      starRevviews:[<AiFillStar />,<AiFillStar />,<AiFillStar />,<AiFillStar />]
  },

  ]


  return (
    <div className="work-section-wrapper">
      <h1 className='mainTitle'>Testimonials</h1>

{reviews.map((data) => (
          <div className="work-section-info" key={data.title} >
            <div className="info-boxes-img-container">
            <h1 className='primary-subheading'>{data.title}</h1>
            <h2 className='userName'>{data.userName}</h2>
            <h1 className='testimonial-section-bottom'>{data.imageProfile}</h1>
            <br/>
            <p className="primary-text">{data.primaryText}</p>
            <br/>
            <h1 className="testimonials-stars-container">{data.starRevviews}</h1>
            </div> 
            </div>
        ))}
  </div>
);
};
export default Testimonial
