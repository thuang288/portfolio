import React from "react";
import emailjs from "emailjs-com";
import lights from "../lights.jpg";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_USER_ID"
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
  }

  return (
    <main className="relative">
      <img src={lights} alt="City Lights" className="absolute w-full" />
      <div className="p-5 lg:pt-40 container mx-auto relative">
        <section className="container mx-auto rounded-lg shadow-2xl lg:flex">
          <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-white">
          <div className="card-header bg-transparent border-0 text-center text-uppercase display-block"><h3 className="cursive p-5">Send a Message</h3></div>
            <form className="p-5 contact-form" onSubmit={sendEmail} >
                <div className="col-8 form-group mx-auto">
                  <input
                    type="text"
                    className="form-control border-bottom p-2 bg-dark"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto rounded-lg">
                  <input
                    type="email"
                    className="form-control border-bottom p-2"
                    placeholder="Email Address"
                    name="email"
                  ></input>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control border-bottom p-2"
                    placeholder="Subject"
                    name="subject"
                  ></input>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <textarea
                    className="form-control border p-2"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                  <input
                    type="submit"
                    className="btn btn-info bg-blue-200 border"
                    value="Send Message"
                  ></input>
                </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
