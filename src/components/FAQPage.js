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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
