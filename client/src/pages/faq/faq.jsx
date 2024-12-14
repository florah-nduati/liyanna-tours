import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the booking process?",
      answer:
        "Booking your tour with Liyanna Luxury Tours is easy! You can select your tour from our offerings, fill in the necessary details like preferred date, number of guests, and additional requests, and then proceed to secure payment. Afterward, you'll receive a booking confirmation email with all the details.",
    },
    {
      question: "Are the tours refundable?",
      answer:
        "Yes, our tours are refundable if canceled within 30 days before the scheduled date. However, if cancellation happens within 15 days of the tour date, only 50% of the booking amount will be refunded.",
    },
    {
      question: "Do I need to pay the full amount upfront?",
      answer:
        "Yes, for the majority of our tours, we require the full amount to be paid at the time of booking. However, we do offer flexible payment options in case of special requests or VIP packages.",
    },
    {
      question: "Can I customize my tour?",
      answer:
        "Absolutely! We offer customizable tours, including safari and beach vacation options. You can work with our concierge team to tailor your experience based on your interests, budget, and timeline.",
    },
    {
      question: "What should I bring for a safari tour?",
      answer:
        "For a safari tour, we recommend wearing comfortable clothes suitable for the weather. You should bring sunscreen, sunglasses, a hat, a camera, and a good pair of shoes. If you are going on a longer safari, we suggest packing light and bringing a small day bag.",
    },
    {
      question: "Is it safe to travel during the COVID-19 pandemic?",
      answer:
        "Yes, we adhere to strict health protocols to ensure the safety of all our guests. Our vehicles and accommodations are sanitized regularly, and we follow government guidelines for travel during COVID-19. Please contact us for more details regarding our safety measures.",
    },
    {
      question: "Do you offer transportation to the airport?",
      answer:
        "Yes, we offer airport pick-up and drop-off services as part of some of our tour packages. This can be arranged during the booking process or upon request for an additional fee.",
    },
    {
      question: "Do I need travel insurance?",
      answer:
        "While travel insurance is not mandatory, we highly recommend it for peace of mind during your trip. It can cover unexpected cancellations, medical emergencies, and lost luggage. We can help you find suitable options if needed.",
    },
    {
      question: "What are the age restrictions for the tours?",
      answer:
        "Our tours cater to guests of all ages. However, some safari tours may have age restrictions for younger children due to the nature of the experience. Please contact us to inquire about specific age limits for your selected tour.",
    },
    {
      question: "Do you offer discounts for large groups?",
      answer:
        "Yes, we offer special rates for large groups. Whether you're planning a family reunion, corporate retreat, or destination wedding, we can provide group discounts. Please contact us for more details and pricing.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              role="button"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <i className="faq-icon">{activeIndex === index ? "-" : "+"}</i>
              {faq.question}
            </div>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer ${activeIndex === index ? "show" : ""}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="policy-section">
        <h3>Terms & Conditions</h3>
        <p>
          By booking a tour with Liyanna Luxury Tours, you agree to the
          following terms and conditions:
        </p>

        <h4>1. Booking Process</h4>
        <p>
          All bookings should be made via our website or through our customer
          support. When you book a tour, you will be required to provide
          accurate details, including the number of participants, preferred tour
          date, and any additional requirements.
        </p>

        <h4>2. Payment Terms</h4>
        <p>
          Full payment is required at the time of booking to confirm your
          reservation. Payments can be made via our secure online payment
          gateway. We accept major credit cards, bank transfers, and other
          payment methods as available. Once payment is received, a booking
          confirmation will be sent to your registered email address.
        </p>

        <h4>3. Cancellation and Refund Policy</h4>
        <p>
          <strong>Cancellation:</strong> Cancellations made 30 days or more
          before the tour date are eligible for a full refund. Cancellations
          made within 15–29 days will be refunded 50% of the booking amount.
          Cancellations made less than 15 days before the tour date are
          non-refundable.
        </p>
        <p>
          In case of extreme circumstances, such as medical emergencies or
          government restrictions, we will provide options for rescheduling or a
          partial refund. Please contact us for assistance.
        </p>

        <h4>4. Modifications to Your Booking</h4>
        <p>
          If you wish to modify your booking (e.g., change the tour date or
          number of participants), please contact our customer support team at
          least 14 days before the scheduled departure. We will do our best to
          accommodate your requests, subject to availability. Additional charges
          may apply.
        </p>

        <h4>5. Insurance</h4>
        <p>
          We strongly recommend that all travelers purchase travel insurance to
          cover any unexpected circumstances. While we take every precaution to
          ensure your safety, Liyanna Luxury Tours will not be held responsible
          for personal injuries, lost belongings, or unforeseen events during
          the trip.
        </p>

        <h4>6. Health and Safety</h4>
        <p>
          By booking a tour with us, you confirm that you and all participants
          are in good health and able to participate in the tour activities. If
          you have any pre-existing medical conditions, please inform us in
          advance. We reserve the right to refuse participation in certain
          activities if we deem it unsafe for you or other participants.
        </p>

        <h4>7. Tour Modifications by Us</h4>
        <p>
          While we make every effort to deliver the tour as described, we
          reserve the right to modify the itinerary in the event of unforeseen
          circumstances such as weather conditions, safety concerns, or other
          operational reasons. If any significant changes occur, we will inform
          you as soon as possible and provide alternatives or a full refund if
          applicable.
        </p>

        <h4>8. Responsibility</h4>
        <p>
          Liyanna Luxury Tours is responsible for providing the tours as
          outlined in our brochure or website. However, we are not liable for
          any delays, accidents, injuries, or losses caused by external factors
          beyond our control, including but not limited to, natural disasters,
          transportation issues, or political unrest.
        </p>

        <h4>9. Privacy and Data Protection</h4>
        <p>
          We are committed to protecting your personal information. Any personal
          data provided during the booking process will be used solely for the
          purpose of booking and delivering the tour services. We will not share
          your information with third parties without your consent unless
          required by law.
        </p>

        <h4>10. Force Majeure</h4>
        <p>
          We will not be held responsible for any failure or delay in the
          performance of our services due to circumstances beyond our reasonable
          control (e.g., natural disasters, government regulations, strikes, or
          pandemics). In such cases, we will notify you promptly and make
          reasonable efforts to mitigate the impact.
        </p>

        <h4>11. Governing Law</h4>
        <p>
          These terms and conditions are governed by the laws of Kenya. Any
          disputes or claims arising from your booking with Liyanna Luxury Tours
          will be subject to the exclusive jurisdiction of the Kenyan courts.
        </p>

        <h4>12. Contact Us</h4>
        <p>
          If you have any questions about these terms and conditions or need
          further clarification, please feel free to contact us at{" "}
          <a href="mailto:info@liyannaluxurytours.com">
            info@liyannaluxurytours.com
          </a>{" "}
          or call us at +254 700 123 456.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
