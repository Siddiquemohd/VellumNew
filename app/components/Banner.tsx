import { useEffect } from "react";
import $ from "jquery";
import "owl.carousel/dist/owl.carousel.min.js";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const Banner: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Manually attach jQuery to the global window object (if needed)
      window.$ = $; // This ensures the plugin can find jQuery globally
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
      });
    }
  }, []);

  return (
    <section className="hero-section-main">
      <div className="owl-carousel owl-theme">
        <div className="item">
          <img src="https://vallum.in/api/img/banner/202108031336037759.png" alt="Banner 1" />
        </div>
        <div className="item">
          <img src="https://vallum.in/api/img/banner/202108031334518682.png" alt="Banner 2" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
