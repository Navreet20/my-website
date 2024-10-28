import React from 'react';

function FAQPage() {
  const faqs = [
    {
      question: "What is IoT Data Repository?",
      answer: "IoT Data Repository is a platform for storing and analyzing agricultural sensor data."
    },
    {
      question: "How can I access the data?",
      answer: "You can view data through our Data Viewer page after logging in."
    }
  ];

  return (
    <div className="page">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
