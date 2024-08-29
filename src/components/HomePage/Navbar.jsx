// import azadi from "../../assets/azadi.png";
// import g20 from "../../assets/g20_logo.png";
import sih from "../../assets/sih.png"
import cgwb from "../../assets/cgwb.png";
import jalShakti from "../../assets/Jal_shakti_logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../fonts.css";

const Navbar = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    // Check if the script already exists before appending
    if (!document.getElementById("google-translate-script")) {
      var addScript = document.createElement("script");
      addScript.setAttribute("id", "google-translate-script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);

  return (
    <>
      <div className="flex justify-between font-poppins-400 px-[5%] bg-bg-color">
        <div className="flex">
          <img src={jalShakti} alt="" className="w-30 h-20 py-2 px-1" />
          <img src={cgwb} alt="azadi" className="w-20 h-20 px-2" />
          <img src={sih} alt="azadi" className="w-30 h-20 my-auto px-3" />
        </div>
        {/* logo */}

        <ul className="flex">
          <Link to="/" className="p-2 my-5 mx-2 hover:border-b-2 border-black">
            Home
          </Link>
          <Link to="/" className="p-2 my-5 mx-2 hover:border-b-2 border-black">
            About
          </Link>
          <Link to="/" className="p-2 my-5 mx-2 hover:border-b-2 border-black">
            Contact
          </Link>
        </ul>
        <div className="flex items-center justify-center">
          <Link
            to="/login"
            className="p-2 m-5 rounded-3xl bg-dark-brown text-white px-4"
          >
            Login
          </Link>
          <div id="google_translate_element"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
