import React, { useState } from "react";
import Product3 from "../../assets/psb.png";

const ProductThree = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="product1">
        <div className="product1-img">
          <img src={Product3} alt="phosphorus solubilizing bacteria" />
        </div>
        <div className="product1-title" onClick={toggleModal}>
          <p>p.s.b</p>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
              <h1>Phosphorus Solubilizing Bacteria</h1>
              <div className="about-product">
                <div className="product-intro">
                  <div className="productone">
                    <div className="one-content1">
                      <div className="one-content-left">
                        <ul>
                          <li>
                            फस्फोरस बिरुवालाई चाहिने दोस्रो प्रमुख खाद्यतत्व हो
                            ।
                          </li>
                          <li>
                            यो सूक्ष्म जीवाणु (पि.एस.बी.) ले माटोमा निस्कृय
                            अवस्थामा रहेको फस्फेट तत्वलाई जैविक प्रकृ याद्वारा
                            घुलाउँदछ र बिरूवाले प्रयाेग गर्न सक्ने बनाउछ ।
                          </li>
                          <li>
                            यो जैविक मलको प्रयोगले माटोमा घुलाईएको फस्फोरस खाद्य
                            तत्व बिरुवाले प्राप्त गर्दछ ।
                          </li>
                        </ul>
                      </div>
                      <div className="one-content-right">
                        <ul>
                          <li>
                            यो जैविक मल अन्न, दलहन, तेल, मसला, तरकारी, तथा फलफू
                            ल बालीमा प्रयोग गर्न सकिन्छ ।
                          </li>
                          <li>
                            यो जैविक मललाई बजारमा रैथाने इलमी जैविक मल पि.एस.बी.
                            (PSB) नामले चिनिन्छ ।
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
                            ४०-५० मि.लि. पी.एस.बी. मललाई एक लिटर गाेबरकाे लेदाे
                            अथवा खुदाे वा सक्खरकाे घाेल बनाई बीउलाई २५-३०
                            मिनेटसम्म डुबाएर उपचार गर्नुपर्दछ । याे बीउलाई
                            छायाँमा ओभानो गराई छर्नुपर्दछ ।
                          </li>
                          <li>
                            ४०-५० मि.लि. पी.एस.बी. मल २ लिटर पानीमा मिसाई
                            बेर्नाकाे जरालाई २५-३० मिनेटसम्म डुबाएर उपचार
                            गर्नुपर्छ । बेर्नाकाे संख्या अनुसार पि.एस.बी. र
                            पानीकाे मात्रा मिलाउनुहोस् ।
                          </li>
                          <li>
                            ३ लिटर पी.एस.बी. मल १०० किलाे कम्पाेष्टमा मिसाइ
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

export default ProductThree;
