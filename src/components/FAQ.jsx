import React, { useState, useRef } from 'react';
import clsx from 'clsx';

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "I work on UI/UX design, frontend development, brand identity, and video editing projects. I'm most energized by early-stage products, SaaS interfaces, and brands that have a clear point of view. I also collaborate with agencies and studios on larger scopes."
  },
  {
    q: "Do you work remotely or on-site?",
    a: "Fully remote and globally available. I'm based in India (IST) but regularly work with clients across Europe, the US, and Southeast Asia. Async-first works great for me, with syncs when needed."
  },
  {
    q: "Can you handle both design and development?",
    a: "Yes — that's actually my strongest offering. I can take a product from wireframes to shipped code, which cuts down handoff friction and keeps the design intent intact all the way through. I work in Figma for design and React/Tailwind for the frontend."
  },
  {
    q: "What's your typical turnaround time?",
    a: "It depends on scope. A landing page or brand identity can be done in 1–2 weeks. A full product UI or multi-page build typically runs 3–6 weeks. I always share a timeline estimate before starting, and I respect deadlines."
  },
  {
    q: "Are you open to long-term collaborations?",
    a: "Absolutely — I prefer them. Ongoing retainer work, product partnerships, or being an embedded creative on a team are all things I'm open to. The best work usually happens when there's enough context and trust built over time."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-wrapper">
        <div className="faq-header">
          <div className="section-label">
            <div className="red-sq"></div>
            <span>Common Questions</span>
          </div>
          <h2>FAQ</h2>
        </div>
        
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={clsx("faq-item", openIndex === i && "open")}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-question">
              <span>{faq.q}</span>
              <div className="faq-toggle"></div>
            </div>
            <div 
              className="faq-answer"
              style={{ maxHeight: openIndex === i ? `${contentRefs.current[i]?.scrollHeight}px` : '0px' }}
            >
              <div className="faq-answer-inner" ref={el => contentRefs.current[i] = el}>
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}