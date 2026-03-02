import React, { forwardRef, useState, useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

const MAPS_SRC =
  "https://maps.google.com/maps?width=600&height=400&hl=en&q=ร้านป้ายลพบุรี บริษัท ทวิกานต์&t=&z=17&ie=UTF8&iwloc=B&output=embed";

const ContactUs = forwardRef((props, ref) => {
  const mapRef = useRef();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-us white-bg" id="contact" ref={ref}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-sm-12 col-12 col-lg-6 mb-4">
            <ContactForm title="ปรึกษาเราได้ที่" />
          </div>
          <div
            ref={mapRef}
            className="col-6 col-sm-12 col-12 col-lg-6"
            style={{ height: "500px" }}
          >
            {showMap && (
              <iframe
                style={{ width: "100%", height: "100%" }}
                className="gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={MAPS_SRC}
                title="Google Maps"
                loading="lazy"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactUs;
