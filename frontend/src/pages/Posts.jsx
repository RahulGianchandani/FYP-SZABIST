import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { PendingCarContext } from "../reducer/carContext";

const Pending = () => {
  const [newCars, setNewCars] = useState([]);
  const [usedCars, setUsedCars] = useState([]);
  const { pendingCarCount, reportsCarCount, setReportsCarCount } =
    useContext(PendingCarContext);

  useEffect(() => {
    fetch("/report-cars")
      .then((res) => res.json())
      .then(({ data }) => {
        setReportsCarCount(data.length);
      });
  }, [setReportsCarCount]);

  /**
   * Get all cars
   */
  useEffect(() => {
    fetch("/cars")
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        setNewCars(data?.filter((car) => car.type === "New"));
        setUsedCars(data?.filter((car) => car.type === "Used"));
      });
  }, []);

  // Handle delete post
  const handleDeletePost = (carId) => {
    fetch(`/remove-car?carId=${carId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ success, data, error }) => {
        if (!success) {
          return alert(error);
        }
        console.log(data, success);

        // Remove deleted post
        if (data.type === "Used") {
          setUsedCars(usedCars.filter((e) => e._id !== data._id));
        } else {
          setNewCars(newCars.filter((e) => e._id !== data._id));
        }
      });
  };

  return (
    <div id="Pending">
      <div className="row">
        <div className="col-2 sideNav">
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/admProfile"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 mt-5 my-4 fa-solid fa-user"></i>Profile
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Users"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-users"></i>Users
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Posts"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-copy"></i>Posts
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Pending"
          >
           <h6 className="text-white position-relative ">
              <i className="ml-5 mr-3 my-4 fa-solid fa-bell"></i>Pending
              <span className="pendCount position-absolute "> {pendingCarCount} </span>
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Reports"
          >
             <h6 className="text-white position-relative">
              <i className="ml-5 mr-3 my-4 fa-solid fa-flag "></i>Reports
              <span className="repCount position-absolute">{reportsCarCount} </span>
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/AdvertiseParts"
          >
            <h6 className="text-white ">
              <i className="ml-5 mr-3 my-4 fas fa-car"></i>Ad Parts
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/Blogpost"
          >
            <h6 className="text-white ">
              <i class="ml-5 mr-3 my-4 fa-brands fa-blogger"></i>Blog Post
            </h6>
          </NavLink>
          <NavLink
            activeClassName=" active"
            className="nav-link position-relative"
            to="/VideoPost"
          >
            <h6 className="text-white ">
              <i class="ml-5 mr-2 my-4  fa-solid fa-play"></i>Video Post
            </h6>
          </NavLink>
        </div>
        <div className="col-10 Content">
          <ul class="nav nav-tabs my-4" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="NewCar-tab"
                data-toggle="tab"
                href="#NewCar"
                role="tab"
                aria-controls="NewCar"
                aria-selected="true"
              >
                NewCar
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="UsedCar-tab"
                data-toggle="tab"
                href="#UsedCar"
                role="tab"
                aria-controls="UsedCar"
                aria-selected="false"
              >
                UsedCar
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="NewCar"
              role="tabpanel"
              aria-labelledby="NewCar-tab"
            >
              {newCars.map((data, i) => (
                <div className="container py-5" key={i}>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeletePost(data._id)}
                  >
                    Delete
                  </button>
                  <div className="row justify-content-center bg-white p-5 ">
                    <div
                      id={data?._id}
                      className="carousel slide col-6"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        {data?.images.map((_, i) => (
                          <li
                            key={i}
                            data-target={`#${data?._id}`}
                            data-slide-to="0"
                            className={`${i === 0 && "active"}`}
                          ></li>
                        ))}
                      </ol>
                      <div className="carousel-inner">
                        {data?.images?.map((image, i) => (
                          <div
                            key={i}
                            className={`carousel-item ${i === 0 && "active"}`}
                          >
                            <img
                              className="d-block w-100"
                              src={`/${image}`}
                              alt="asdsasda"
                            />
                          </div>
                        ))}
                      </div>
                      <a
                        className="carousel-control-prev"
                        href={`#${data?._id}`}
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href={`#${data?._id}`}
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                    <div className="col-4 offset-1 info">
                      <h2 className="mb-0 font-weight-bold">Kia Sportage</h2>
                      <span className=" stars my-3  rounded">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="ml-2 text-dark">14 Reviews</span>
                      </span>
                      <p className="price my-3">PKR {data?.price} Lacs</p>

                      <div className="features mt-4">
                        <p>
                          <i className="mr-3  car-icons fas fa-cog"></i>
                          Manual/Automatic
                        </p>
                        <p>
                          <i className="mr-3  car-icons fas fa-closed-captioning"></i>
                          1200cc
                        </p>
                        <p>
                          <i class="mr-3 car-icons  fa-solid fa-gauge-high"></i>
                          {data?.mileage} K/M
                        </p>
                        <p>
                          <i className="mr-3  car-icons fas fa-gas-pump"></i>
                          Petrol/Gas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {newCars.length < 1 && <div>No post found</div>}
            </div>
            <div
              class="tab-pane fade"
              id="UsedCar"
              role="tabpanel"
              aria-labelledby="UsedCar-tab"
            >
              {usedCars.map((data, i) => (
                <div key={i} className="container">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeletePost(data._id)}
                  >
                    Delete
                  </button>
                  <div className="row pt-5">
                    <div className="col-9">
                      <div className=" ">
                        <div className="row justify-content-center">
                          <Carousel infiniteLoop>
                            {data?.images?.map((image, i) => (
                              <div key={i}>
                                <img src={image} alt={image} />

                                <p className="legend">{data?.model}</p>
                              </div>
                            ))}
                          </Carousel>
                        </div>
                      </div>

                      <div className="CarDetailCard col-6 offset-3 pb-1 ">
                        <h2 className="mb-0">
                          {data?.year} {data?.carBrand} {data?.model}
                          {data?.mileage}
                        </h2>
                        <i className="fas fa-map-marker-alt mr-2  "></i>
                        <Link to="#" className="city">
                          {data?.registeredIn}
                        </Link>
                        <h4 className=" mt-3 mb-5">PKR {data?.price} lacs</h4>
                        <div className="numBox col-5">
                          <i className=" fas fa-phone-alt mr-3"></i>
                          {/*  <span>View Number</span>   if user is Not logged in, dont show number */}
                          <span>{data?.phone}</span>
                          {/* if user is logged in, show him number */}
                        </div>

                        <div className="col-4 offset-9">
                          <i className="fas fa-flag mr-2"></i>
                          <Link to="#">Report Ad</Link>
                        </div>
                      </div>

                      <div className="CarGeneralCard col-6 offset-3 mt-2 ">
                        <h4 className="font-weight-bold mb-3">
                          General Details
                        </h4>
                        <div className="row">
                          <div className="col-6 details position-relative mb-1">
                            <p>
                              <i className="mr-3 fa fa-calendar-alt"></i>
                              {data?.year}
                            </p>
                          </div>
                          <div className="col-6 details position-relative mb-1">
                            <p>
                              <i className="mr-3 fa fa-road"></i>
                              {data?.mileage} Kms
                            </p>
                          </div>
                          <div className="col-6 details position-relative mb-1">
                            <p>
                              <i className="mr-3 fa fa-user-alt"></i> First
                              Owner
                            </p>
                          </div>
                          <div className="col-6 details position-relative mb-1">
                            <p>
                              <i className="mr-3 fas fa-cog"></i> Automatic
                            </p>
                          </div>
                          <div className="col-6 details position-relative mb-1">
                            <p>
                              <i className="mr-3 fas fa-gas-pump"></i> Petrol
                            </p>
                          </div>
                          <div className="col-6 details position-relative mb-1">
                            <p>
                              <i className="mr-3 fa-solid fa-fill-drip"></i>
                              Gray
                            </p>
                          </div>
                          <div className="col-6 details position-relative mb-1">
                            <p>
                              <i className="mr-3 fas fa-closed-captioning"></i>
                              1200cc
                            </p>
                          </div>
                          <div className="col-6 details position-relative mb-1">
                            <p>
                              <i class="mr-3 fa-solid fa-car-side"></i> SUV
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 remarks">
                          <h4 className="font-weight-bold">Seller's Remarks</h4>
                          {/*if seller wants to write comment or say something  */}
                          {data?.description}
                        </div>
                      </div>
                    </div>
                    <div className="col3 bidPlace ">
                      <h3>Bidding Place</h3>
                      <form>
                        <div class="form-group">
                          <label for="bid" class="">
                            Place a bid
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="bid"
                            placeholder="Bid in PKR Lacs"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">
                          Place!
                        </button>
                      </form>

                      <div className=" bidList row justify-content-between mt-3">
                        <div>
                          <h6 className="mb-4">UserProfile</h6>
                          {/* Id of user profile with name, click on it to go see user id*/}
                          <p>
                            <Link target="_blank" to="#">
                              Rahul
                            </Link>
                          </p>
                          <p>
                            <Link target="_blank" to="#">
                              Tayyab
                            </Link>
                          </p>
                          <p>
                            <Link target="_blank" to="#">
                              Abu Raihan
                            </Link>
                          </p>
                          <p>
                            <Link target="_blank" to="#">
                              Shah Rukh Khan
                            </Link>
                          </p>
                        </div>

                        <div>
                          <h6 className="mb-4">Bid</h6>
                          {/* bid done by the user*/}
                          <p>25 Lacs</p>
                          <p>36 Lacs</p>
                          <p>4.2 Lacs</p>
                          <p>15 Lacs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {newCars.length < 1 && <div>No post found</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pending;
