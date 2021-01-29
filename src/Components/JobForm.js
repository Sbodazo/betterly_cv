import React from "react";
import "../style/Popup.css";
import emailjs from "emailjs-com";

export default function JobForm({state}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
    .then((result) => {
      console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }
    );
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
  }

  return (
    <div className="popup">
      <div className="popup_inner">
        {/* <form onSubmit={handleSubmit}>
          <label className="jobFormLabel">Send me a job offer!</label>
          <textarea onChange={e => setContent(e.target.value)} value={content} placeholder="Type your job offer here." />
          <button>Send.</button>
        </form> */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="contact_number" />
          <label className="jobFormLabel">Name</label>
          <input type="text" name="user_name" />
          <label className="jobFormLabel">Email</label>
          <input type="email" name="user_email" />
          <label className="jobFormLabel">Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        <button onClick={() => state.setClick(false)}>Go back</button>
      </div>
    </div>
  );
}