import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div id="AboutUs">
      <div className="container">
        <h1 class="text-center pt-4 mb-5 position-relative col-12">
          About PakDrive
        </h1>
        <div className="row flex-nowrap mb-5">
        <p className="mr-3 ">
          PakDrive is Pakistan's leading car search venture that helps users buy
          cars that are right for them. Its website and app carry rich
          automotive content such as expert reviews, detailed specs and prices,
          comparisons as well as videos and pictures of all car brands and
          models available in Pakistan. The company has tie-ups with many auto
          manufacturers, more than 4000 car dealers and numerous financial
          institutions to facilitate the purchase of vehicles.
        </p>
        <div >
            <img src="./images/car-manufacturer.jpg"  height={180} width={500} alt="car manufacturing" />
          </div>
        </div>
        <div className="row flex-nowrap mb-5">
        <div >
            <img src="./images/car-parts.jpg"  height={200} width={500} alt="car parts" />
          </div>
        <p className="ml-5">
          PakDrive has launched many innovative features to ensure that users
          get an immersive experience of the car model before visiting a dealer
          showroom. These include a Feel The Car tool that gives 360-degree
          interior/exterior views with sounds of the car and explanations of
          features with videos; search and comparison by make, model, price,
          features; and live offers and promotions in all cities. The platform
          also has used car classifieds wherein users can upload their cars for
          sale, and find used cars for buying from individuals and used car
          dealers.
        </p>
           
        </div>
        <div className="row flex-nowrap mb-5">
        <p className="mr-5">
          Besides the above consumer product features, PakDrive provides a rich
          array of tech-enabled tools to OE manufacturers and car dealers. These
          include apps for dealer sales executives to manage leads, cloud
          services for tracking sales performance, call tracker solution,
          digital marketing support, virtual online showroom and outsourced lead
          management operational process for taking consumers from enquiry to
          sale. Thats our showroom besides Tesla showroom, inaugrated by Elon Musk himself
          in Silicon Valley.
        </p>
        <div >
            <img src="./images/Showroom.jpg"  height={200} width={500} alt="car-manufacturing" />
          </div>
        </div>
        <div className="row flex-nowrap pb-5">
        <div >
            <img src="./images/Famous-car.jpg"  height={200} width={500} alt="car-manufacturing" />
          </div>
        <p className="ml-5">
          Our vision is to construct a complete ecosystem for consumers and car
          manufacturers, dealers and related businesses such that consumers have
          easy and complete access to not only buying and selling cars, but also
          manage their entire ownership experience, be it accessories, tyres,
          batteries, insurance or roadside assistance. Our sponsors are showin 
          in the picture behind us, they have supported us through our journey.
          Though, we have stopped getting more sponsors, as we can now finance ourselves.
        </p>
     
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
