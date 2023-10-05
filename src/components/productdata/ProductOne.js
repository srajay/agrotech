import React, { useState } from "react";
import "./productone.css";
import Product1 from "../../assets/azotobacter.png";

const ProductOne = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="product1">
        <div className="product1-img">
          <img src={Product1} alt="azotobacter" />
        </div>

        <div className="product1-title" onClick={toggleModal}>
          <p>azotobacter</p>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
              <h1>Azotobacter</h1>
              <div className="about-product">
                <div className="product-intro">
                  <div className="productone">
                    <div className="one-content1">
                      <div className="one-content-left">
                        <ul>
                          <li>
                            एजोटोबेक्टर एक प्रकारको रैथाने लाभदायक शूक्ष्म
                            जीवाणु (bacteria) हो ।
                          </li>
                          <li>
                            याे रैथाने शूक्ष्म जीवाणुको प्रयाेगशालामा तयार
                            पारिएको झोल मल हो ।
                          </li>
                          <li>
                            एजोटोबेक्टर जीवाणुले हावामा स्वतन्त्र रूपमा भएको
                            नाईट्रोजनलाई स्थिरीकरण गर्दछ ।
                          </li>
                          <li>
                            एजोटोबेक्टर बिरुवाको जरा वरिपरि माटोमा रहेको हुन्छ ।
                          </li>
                        </ul>
                      </div>
                      <div className="one-content-right">
                        <ul>
                          <li>
                            एजोटोबेक्टरले नाईट्रोजनलाई एमोनिया नाईट्रोजनमा
                            परिवर्तन गरी बिरुवालाई उपलब्ध गराउँदछ ।
                          </li>
                          <li>
                            एजोटोबेक्टरले बिरुवालाई चाहिने भिटामिन, एमिनो एसिड,
                            हर्मोन बिरुवामा नै उत्पादन गर्दछ ।
                          </li>
                          <li>
                            यसको प्रयोगले प्राङ्गारीक पदार्थको बिघटन गरी माटोमा
                            कार्बन, नाईट्रोजन, फस्फोरस र सल्फर जस्ता तत्वहरू
                            उपलब्ध गराउँदछ ।
                          </li>
                          <li>
                            यो जैविक मल अन्न, तरकारी र फलफूलबालीको लागि निकै
                            उपयोगी भएको पाईएको छ ।
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="one-content2">
                      <h1>प्रयोग विधि</h1>
                      <h4>बीउ उपचार</h4>
                      <div className="one-content-left">
                        <ul>
                          <li>
                            ३ लिटर एजाेटाेबेक्टर १०० किलाे कम्पाेष्टमा मिसाइ
                            १०-१५ दिनसम्म प्लास्टिकले ढाकेर राख्नुुपर्छ । ४-५
                            दिनकाे अन्तरालमा कम्पाेष्टलाई पल्टाउनुपर्छ । यसरी
                            तयार भएपछि यसलाई एक हेक्टर तयारी जग्गामा प्रयाेग
                            गर्न सकिन्छ ।
                          </li>
                          <li>
                            ३ लिटर एजाेटाेबेक्टर १०० किलाे कम्पाेष्टमा मिसाइ
                            १०-१५ दिनसम्म प्लास्टिकले ढाके र राख्नुुपर्छ । ४-५
                            दिनकाे अन्तरालमा कम्पाेष्टलाई पल्टाउनुपर्छ । यसरी
                            तयार भएपछि यसलाई एक हेक्टर तयारी जग्गामा प्रयाेग
                            गर्न सकिन्छ ।
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductOne;
