const Corousel = () => {
  return (
    <div id="slideshow">
      <div className="slide-wrapper">
        <div className="slide">
          <h1 className="slide-number">
            <img
              src="https://image.slidesdocs.com/responsive-images/background/wedding-romantic-warm-illustration-scene-powerpoint-background_829e3217f9__960_540.jpg"
              className="img-fluid"
              alt=""
            ></img>
          </h1>
        </div>
        <div className="slide">
          <h1 className="slide-number">
            <img
              src="https://png.pngtree.com/background/20230401/original/pngtree-wedding-couple-watercolor-illustration-scene-picture-image_2248157.jpg"
              className="img-fluid"
              alt=""
            ></img>
          </h1>
        </div>
        <div className="slide">
          <h1 className="slide-number">
            <img
              src="https://png.pngtree.com/background/20230401/original/pngtree-wedding-stage-center-background-picture-image_2248445.jpg"
              className="img-fluid"
              alt=""
            ></img>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Corousel;
