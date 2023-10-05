import React, { useState } from "react";
import Product6 from "../../assets/tricho.png";

const ProductSix = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="product1">
        <div className="product1-img">
          <img src={Product6} alt="trichoderma" />
        </div>
        <div className="product1-title" onClick={toggleModal}>
          <p>trichoderma</p>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
              <h1>Trichoderma</h1>
              <div className="about-product">
                <div className="product-intro">
                  <div className="productone">
                    <div className="one-content1">
                      <div className="one-content-left">
                        <ul>
                          <li>
                            ट्राईकोडर्मा एउटा बहुगुणी र बहु उपयोगी ढुसी हो ।
                            सह्जीबी गुणका कारण यसको प्रयाेगले बालीको रोग कीरा
                            प्रतिरोघी क्षमता बिकास हुन्छ, यसले माटोमा भएका
                            हानिकारक ढुसी, जीवाणु इत्यादिलाई दबाउछ र बाली सप्रिन
                            मदत गर्छ । साथै यसले बालीमा प्रयोग गरिएको मल खादको
                            उपयोगिता र प्रभावकारिता बढाउछ ।
                          </li>
                          <li>
                            ट्राईकोडर्मा एक प्रकारको सूक्ष्म ढुसी हो जसलाई जैविक
                            रोग तथा कीरा नियन्त्रकको रूपमा प्रयोग गर्न सकिन्छ ।
                          </li>
                          <li>
                            यसले बिरुवामा लाग्ने ढुसीजन्य, व्याक्टेरियाजन्य रोग
                            तथा कीराहरूलाई नियन्त्रण गर्दछ ।
                          </li>
                        </ul>
                      </div>
                      <div className="one-content-right">
                        <ul>
                          <li>
                            बिरुवाको डाँठ र जरा कु हाउँने (stem and root rot)
                            रोगका लागि ट्राईकोडर्मानिकै प्रभावकारी देखिएको छ ।
                          </li>
                          <li>
                            ट्राईकोडर्मा ढुसीको रंग हल्का हरियो हुन्छ तर सबै
                            हरियो ढुसी ट्राईकोडर्माहुँदैन ।
                          </li>
                          <li>
                            यसलाई इलमी एग्रो एण्ड टेक प्रा. लि. ले झोलको रूपमा
                            मात्र उत्पादन गरेको छ ।
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
                            ५-१० मि.लि. ट्राईकोडर्मा एक लिटर गाेबरकाे लेदाे अथवा
                            खुदाे वा सक्खरकाे घाेल बनाई बीउलाई २५-३० मिनेटसम्म
                            डुबाएर उपचार गर्नुपर्दछ । याे बीउलाई छायाँमा ओभानो
                            गराई छर्नुपर्दछ ।
                          </li>
                          <li>
                            ५-१० मि.लि. ट्राईकोडर्मा एक लिटर पानीमा मिसाई
                            बेर्नाकाे जरा (नर्सरी र उखुकाे कटिङ तथा आलु, अदुवा,
                            पिँडालुकाे चाना) लाई २५-३० मिनेटसम्म डुबाएर उपचार
                            गर्नुपर्छ । नर्सरी वा कटिङकाे मात्रा हेरी
                            ट्राईकोडर्मा र पानीकाे मात्रा मिलाउनुहाेस ।
                          </li>
                          <li>
                            ३ लिटर ट्राईकोडर्मा १० किलाे कम्पाेष्टमा मिसाउने र
                            प्लास्टिकले १०-१५ दिनसम्म ढाके र राख्नुुपर्दछ । ४-५
                            दिनकाे अन्तरालमा कम्पाेष्टलाई पल्टाउनुपर्छ । यसरी
                            तयार भएपछि यसलाई एक हेक्टर तयारी जग्गामा प्रयाेग
                            गर्न सकिन्छ ।
                          </li>
                          <li>
                            २५० मि.लि. ट्राईकोडर्मा २५-३० लिटर पानीमा मिसाएर एक
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

export default ProductSix;
