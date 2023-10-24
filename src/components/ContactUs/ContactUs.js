import React, { forwardRef } from "react";
import ContactForm from "./ContactForm";
import Map from "../Maps/Map";

const ContactUs = forwardRef((props, ref) => (
  <section className="contact-us white-bg" id="contact" ref={ref}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 col-sm-12 col-12 col-lg-6 mb-4">
          <ContactForm title="ปรึกษาเราได้ที่" />
        </div>
        <div className="col-6 col-sm-12 col-12 col-lg-6" style={{height : '500px'}}>
          <iframe
            style={{ width: "100%", height: "100%" }}
            className="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ร้านป้ายลพบุรี บริษัท ทวิกานต์&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
));

export default ContactUs;

{
  /* <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ร้านป้ายลพบุรี บริษัท ทวิกานต์&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionsgame.org/">Connections Unlimited</a></div><style>.mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}</style></div>
   */
}
