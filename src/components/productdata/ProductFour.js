import React, { useState } from "react";
import Product4 from "../../assets/kmb.png";

const ProductFour = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="product1">
        <div className="product1-img">
          <img src={Product4} alt="potassium mobilizing bacteria" />
        </div>
        <div className="product1-title" onClick={toggleModal}>
          <p>k.m.b</p>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
              <h1>Potassium Mobilizing Bacteria</h1>
              <div className="about-product">
                <div className="product-intro">
                  <div className="productone">
                    <div className="one-content1">
                      <div className="one-content-left">
                        <ul>
                          <li>
                            यो रैथाने शूक्ष्म जीवाणुको प्रयाेगशालामा बनाईएको
                            जैविक झाेल मल हो ।
                          </li>
                          <li>
                            पोटासियम विरुवालाई चाहिने तेस्राे प्रमुख तत्व हो जुन
                            नेपालको धेरै ठाँउको माटोमा निकै कम मात्रामा पाइन्छ ।
                          </li>
                          <li>
                            माटोमा पोटासियम तत्व अघुलनशील अवस्थामा रहेको हुन्छ ।
                          </li>
                        </ul>
                      </div>
                      <div className="one-content-right">
                        <ul>
                          <li>
                            यो जैविक मलले (के .एम.बी.) अघुलनशील अवस्थामा रहेको
                            पोटासलाई परिचालन गरी बिरुवालाई आवश्यक मात्रामा पोटास
                            (Available K) तत्व उपलब्ध गराउँदछ ।
                          </li>
                          <li>
                            यसलाई बजारमा illami native biofertilizer KMB (के
                            .एम.बी.) मलको नामले चिनिन्छ ।
                          </li>
                          <li>
                            के .एम.बी.जैविक मलले बिरुवालाई चाहिने भिटामिन, एमिनो
                            एसिड, हर्मोन आदि उत्पादन गर्न सहयोग गर्दछ ।
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
                            ४०-५० मि.लि. के .एम.बी. मललाई एक लिटर गाेबरकाे लेदाे
                            अथवा खुदाे वा सक्खरकाे घाेल बनाई बीउलाई २५-३०
                            मिनेटसम्म डुबाएर उपचार गर्नुपर्दछ । याे बीउलाई
                            छायाँमा ओभानाे गराई छर्नुपर्दछ ।
                          </li>
                          <li>
                            ४०-५० मि.लि. के .एम.बी. मल २ िलटर पानीमा िमसार्इ
                            बेर्नाकाे जरालार्इ २५-३० मिनेटसम्म डुबाएर उपचार
                            गर्नुपर्छ । बेर्नाकाे संख्या अनुसार के .एम.बी र
                            पानीको मात्रा मिलाउनुहोस् ।
                          </li>
                          <li>
                            ३ लिटर के .एम.बी. मल १०० किलो कम्पाेष्टमा मिसाइ
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

export default ProductFour;
