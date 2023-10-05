import React, { useState } from "react";
import Product5 from "../../assets/pseudomonas.png";

const ProductFive = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="product1">
        <div className="product1-img">
          <img src={Product5} alt="pseudomonas" />
        </div>
        <div className="product1-title" onClick={toggleModal}>
          <p>pseudomonas</p>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
              <h1>Pseudomonas</h1>
              <div className="about-product">
                <div className="product-intro">
                  <div className="productone">
                    <div className="one-content1">
                      <div className="one-content-left">
                        <ul>
                          <li>सुडोमोनास एक सूक्ष्म जीवाणु (Bacteria) हो ।</li>
                          <li>
                            यो जैविक नियन्त्रककाे प्रयोगले गर्दा रोगहरूको
                            विरुद्ध एन्टिबायोटिक उत्पादन गरी माटाेमा हुने
                            हानिकारक जीवाणुलाई नियन्त्रण गर्दछ ।
                          </li>
                          <li>
                            सुडोमोनास बिरुवाको जरा वरिपरि (root colonizer) जमेर
                            रहने जीवाणु भएकाेले यसले बिरुवाको बृद्धि र विकासमा
                            मद्दत गर्दछ ।
                          </li>
                        </ul>
                      </div>
                      <div className="one-content-right">
                        <ul>
                          <li>
                            इलमी एग्रो एण्ड टेक प्रा. लि. ले बजारमा रैथाने जैविक
                            नियन्त्रक सुडोमोनास झोलको रूपमा मात्र उपलब्ध गराएको
                            छ ।
                          </li>
                          <li>
                            सुडोमोनासले बिरुवालाई चाहिने भिटामिन, एमिनो एसिड,
                            हर्मोन आदि उत्पादन गरी बिरुवालाई फस्टाउन सहयोग गर्दछ
                            ।
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
                            ५-१० मि.लि. सुडाेमाेनास एक िलटर गाेबरकाे लेदाे अथवा
                            खुदाे वा सक्खरकाे घाेल बनाई बीउलाई २५-३० मिनेटसम्म
                            डुबाएर उपचार गर्नुपर्दछ । याे बीउलाई छायाँमा ओभानो
                            गराई छर्नुपर्दछ ।
                          </li>
                          <li>
                            ५-१० मि.लि. सुडाेमाेनास एक लिटर पानीमा मिसाई
                            बेर्नाकाे जरालाई २५-३० मिनेटसम्म डुबाएर उपचार
                            गर्नुपर्छ । बेर्नाकाे संख्या अनुसार सुडाेमाेनास र
                            पानीकाे मात्रा मिलाउनुहाेस ।
                          </li>
                          <li>
                            ३ लिटर सुडाेमाेनास १० किलाे कम्पाेष्टमा मिसाइ १०-१५
                            दिनसम्म प्लास्टिकले ढाके र राख्नुुपर्छ । ४-५ दिनकाे
                            अन्तरालमा कम्पाेष्टलाई पल्टाउनुपर्छ । यसरी तयार
                            भएपछि यसलाई एक हेक्टर तयारी जग्गामा प्रयाेग गर्न
                            सकिन्छ ।
                          </li>
                          <li>
                            २५० मि.लि. सुडाेमाेनास २५-३० लिटर पानीमा मिसाएर एक
                            राेपनी क्षेत्रफलमा भएका खडा बालीमा छर्न सकिन्छ ।
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

export default ProductFive;
