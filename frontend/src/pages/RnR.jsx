import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RnR = () => {
  return (
    <div id="RnR">
      <div className="container">
        <h1 className="text-center pt-4 mb-5 position-relative col-12">
          {" "}
          Refunds &amp; Returns
        </h1>
        <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link active"
              id="return-tab"
              data-bs-toggle="tab"
              data-bs-target="#return"
              type="button"
              role="tab"
              aria-controls="return"
              aria-selected="true"
            >
              Return a product 
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link"
              id="policy-tab"
              data-bs-toggle="tab"
              data-bs-target="#policy"
              type="button"
              role="tab"
              aria-controls="policy"
              aria-selected="false"
            >
              Return Policy
            </Link>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="return"
            role="tabpanel"
            aria-labelledby="return-tab"
          >
           <div id="accordion" className="py-5">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0 ">
                    <button
                      className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                       <span> How do I Return a product? </span>
                      {/* <i class="fas fa-plus "></i> */}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  You will have to fill the Return Form available below. Quality evaluation will take 3 business days, once completed, we will give a call to customer for the result of the evaluation. If return is validated, you would get a refund or can exchange for another product of the same or above the order value by paying the difference. Pack your product according to the return conditions mentioned above. If return is invalid, then we will call and explain the issue and send the items back to the customer.
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0 ">
                    <button
                      className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span> How long it takes for product to be replaced? </span>
                      {/* <i class="fas fa-plus "></i> */}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  Depends on the product, person location. Usually it takes around 5 to 10 working days to get product replaced.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0 ">
                    <button
                      className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      <span> How long it takes to get refunded. </span>
                      {/* <i class="fas fa-plus "></i> */}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">Within 5 to 10 working days through Bank transfer only.</div>
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0 ">
                    <button
                      className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      <span> Which courier service works along with you for delivering and taking back parcels? </span>
                      {/* <i class="fas fa-plus "></i> */}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div className="card-body">TCS is our delivery partner, with lower than normal rates for easiness of customers who receive and return parcels, getting service to doorstep.</div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFifth">
                  <h5 className="mb-0 ">
                    <button
                      className="position-relative btn btn-link c w-100 mx-0 d-flex row align-items-center justify-content-between collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFifth"
                      aria-expanded="true"
                      aria-controls="collapseFifth"
                    >
                      <span> What are return conditions of product?  </span> 
                      {/* <i class="fas fa-plus "></i> */}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFifth"
                  className="collapse"
                  aria-labelledby="headingFifth"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  <p><b>1.</b> The Product is not what was shown on our Portal.</p>
                  <p><b>2.</b> The Product is of different color than what was ordered.</p>
                  <p><b>3.</b> The Product is damaged or defective piece.</p>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
          <div
            className="tab-pane fade"
            id="policy"
            role="tabpanel"
            aria-labelledby="policy-tab"
          >
            <p>
              <b>1.</b> The product must be unused, uninstalled and without any
              flaws. If a product is returned to us in an inadequate condition,
              we reserve the right to send it back to you.
            </p>
            <p>
              <b>2.</b> The product must include the original tags, user manual,
              and accessories.
            </p>
            <p>
              <b>3.</b> The product must be returned in the original and
              undamaged manufacturer packaging / box. It must be returned in the
              same condition with return shipping label attached. Do not put
              tape or stickers on the manufacturer's/item box.
            </p>
            <p className="mb-0 pb-3">
              <b>4.</b> Customer must pay for return delivery of product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RnR;
