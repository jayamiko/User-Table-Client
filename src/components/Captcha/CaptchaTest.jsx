import React, { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const CaptchaText = ({ onCaptchaStatus }) => {
  const [chaptchaInput, setChaptchaInput] = useState("");

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const doSubmit = (e) => {
    e.preventDefault();
    if (validateCaptcha(chaptchaInput)) {
      onCaptchaStatus(true);
      setChaptchaInput("");
    } else {
      onCaptchaStatus(false);
      setChaptchaInput("");
    }
  };

  return (
    <div className="">
      <div className="mt-3">
        <LoadCanvasTemplate />
      </div>

      <div className="my-3 space-x-2">
        <input
          id="user_captcha_input"
          name="user_captcha_input"
          type="text"
          className="border py-1 px-5"
          onChange={(e) => setChaptchaInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={doSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CaptchaText;
