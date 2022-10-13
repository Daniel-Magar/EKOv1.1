import ekofooter from "../../img/ekofooter.png";
// import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import twitter from "../../img/socialmedia/twitter.png";
import fb from "../../img/socialmedia/fb.png";
import insta from "../../img/socialmedia/insta.png";
import linkedin from "../../img/socialmedia/linkedin.png";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nm433gh",
        "template_3chsh03",
        form.current,
        "q6yVnf9mQo16AMr9k"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className=" bg-main-black py-3" id="aboutus">
      <footer className="  ">
        <div className="text-white flex flex-col lg:flex-row justify-between items-start mx-6 md:mx-10 lg:pt-6 xl:pt-8">
          <div className=" w-full py-4 lg:py-2 ">
            <div>
              <img
                src={ekofooter}
                alt=""
                className="object-contain w-[14rem] md:w-[16rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem]"
              />
            </div>

            <div className="mt-6 ">
              <a
                href="https://goo.gl/maps/EexKuS4jUW3TKAUR7"
                target="_blank"
                className="md:text-[0.8em] lg:text-[1.2rem] 2xl:text-[1.5em]"
              >
                <h1>India</h1>
                <p className="">
                  No.76, 7th A cross, 4th B Block, Koramangala, Bangalore,
                  Karnataka 560034.
                </p>
              </a>
            </div>
            <div className="mb-6 mt-8 ">
              <a
                href="https://goo.gl/maps/D77hHcNhb3k4HA23A"
                target="_blank"
                className="md:text-[0.8em] lg:text-[1.2rem] 2xl:text-[1.5em]"
              >
                <h1>USA</h1>
                <p>
                  USA EKO INFOMATICS SOLUTIONS INC. 171 Sylvan St Rutherford NJ
                  07070-2433 US
                </p>
              </a>
            </div>
          </div>
          <div className=" w-full hidden md:flex">
            <h1 className="text-black">2</h1>
          </div>
          <div className=" w-full ">
            <div className=" flex flex-col justify-center items-center md:justify-start md:items-start md:mx-8 lg:items-center">
              <h1 className="uppercase text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0085FE] to-[#29E5FF]">
                talk to our expert
              </h1>
            </div>
            <div className="flex justify-center items-center md:justify-start md:items-start lg:justify-center lg:items-center">
              <div class="wrapper">
                <form ref={form} onSubmit={sendEmail}>
                  {/* <div class="btn-box">
                    <a
                      class="btn btn-link"
                      href="https://material.google.com/components/text-fields.html"
                      target="_blank"
                    >
                      Design Docs
                    </a>
                  </div>
                  <hr class="sep" /> */}
                  <div class="group">
                    <input type="text" required="required" name="user_name" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Name</label>
                  </div>
                  <div class="group">
                    <input type="email" required="required" name="user_email" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                  </div>
                  {/* <div class="group">
                    <input type="password" required="required" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Password</label>
                  </div> */}
                  <div class="group">
                    <input
                      type="tel"
                      required="required"
                      name="user_number"
                      maxLength="10"
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Number</label>
                  </div>
                  <div class="group">
                    <textarea
                      type="textarea"
                      name="message"
                      rows="5"
                      required="required"
                    ></textarea>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Message</label>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex">
                      <div>1</div>
                      <div>2</div>
                    </div>

                    <p className="py-6">
                      We'll use it to show more relevant ads and avoid showing
                      you ads of content/service you will not be interested in.
                    </p>
                  </div>
                  <div class="btn-box">
                    <button
                      // class="btn btn-submit"
                      type="submit"
                      className="border border-[#1ECAFF] py-[1rem] px-[4.5rem] rounded-[4rem]"
                    >
                      submit
                    </button>
                    {/* <button class="btn btn-cancel" type="button">
                      cancel
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center mb-5">
              <div className="w-full flex justify-center items-center">
                <a href="#">
                  <img
                    src={fb}
                    alt="facebook"
                    className="w-[3rem] max-w-[5rem] md:w-[6rem]"
                  />
                </a>
              </div>
              <div className="w-full flex justify-center items-center">
                <a href="#">
                  <img
                    src={insta}
                    alt="instagram"
                    className="w-[3rem] max-w-[5rem] md:w-[6rem]"
                  />
                </a>
              </div>
              <div className="w-full flex justify-center items-center">
                <a href="#">
                  <img
                    src={linkedin}
                    alt="in"
                    className="w-[3rem] max-w-[5rem] md:w-[6rem]"
                  />
                </a>
              </div>
              <div className="w-full flex justify-center items-center">
                <a href="#">
                  <img
                    src={twitter}
                    alt="twitter"
                    className="w-[3rem] max-w-[5rem] md:w-[6rem]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
