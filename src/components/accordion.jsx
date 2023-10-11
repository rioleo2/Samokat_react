import React, { useState } from 'react';
import './accordion.css'
// AccordionItem Component
function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="catalog-tree-section-card">
      <div className="catalog-tree-section-card-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && <div className="catalog-tree-section-card-content">{children}
      </div>}
    </div>
  );
}

// Accordion Component
function Accordion({ items }) {
  return (
    <div className="catalog-tree-accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content.map(item => {
            return (<div className='catalog-tree-section-card-category'>{item}</div>)
      })}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;


