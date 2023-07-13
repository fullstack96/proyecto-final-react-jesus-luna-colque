import "animate.css";
import logo from "../assets/logo.png";

const Welcome = () => {
  return (
    <>
      <div className="welcomeContainer">
        <div className="welcome animate__animated animate__fadeIn">
          <div className="welcomeLogo animate__animated animate__fadeIn animate__slow">
            <img src={logo} alt="logo" />
          </div>

          <div className="welcomeMessage animate__animated animate__fadeIn animate__slow">
            <p className="textP animate__animated animate__fadeIn animate__slower animate__delay-1s">
              Welcome to <span className="altWord">UFurniture</span>, the online
              destination for stylish and affordable furniture. We believe that
              every home should be a reflection of its owner's personality, and
              that's why we offer a wide selection of furniture in various
              styles, colors, and designs. From sleek and modern to rustic and
              traditional, our collections are curated to suit your unique taste
              and elevate your living space.
            </p>
            <p className="textP animate__animated animate__fadeIn animate__slower animate__delay-1s">
              We understand that shopping for furniture can be overwhelming,
              which is why we've made our website user-friendly and easy to
              navigate. Browse our inventory at your own pace, and take
              advantage of our detailed product descriptions and high-quality
              images to make informed purchasing decisions.
            </p>
            <p className="textP animate__animated animate__fadeIn animate__slower animate__delay-1s">
              At <span className="altWord">UFurniture</span>, we're committed to
              providing top-notch customer service. From the moment you place
              your order to the day your furniture arrives at your doorstep,
              we'll be there to answer your questions and ensure a smooth and
              stress-free shopping experience.
            </p>
            <p className="textP animate__animated animate__fadeIn animate__slower animate__delay-1s">
              Thank you for choosing <span className="altWord">UFurniture</span>
              . We look forward to helping you create your dream home!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
