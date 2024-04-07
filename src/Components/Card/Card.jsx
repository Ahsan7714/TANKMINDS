import React, { useState } from 'react';
import './Card.css';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import img1 from './../../images/img1.png';
import img2 from './../../images/img2.png';
import img3 from './../../images/img3.png';
import img4 from './../../images/img4.png';
import img5 from './../../images/img5.png';
import img6 from './../../images/img6.png';

const data = [
  {
    image: img1,
    heading: "tax",
    item1: "Become Filer",
    item2: "Submit return tax",
    item3: "Income tax & Sale tax",
    item4: "Property atx & excise tax"
  },
  {
    image: img2,
    heading: "divorce",
    item1: "Dower & Dowery Articles",
    item2: "Child Custody & Guardianship",
    item3: "Maintenance",
    item4: "Domestic Violence"
  },
  {
    image: img3,
    heading: "Civil Matters",
    item1: "Damages Claims",
    item2: "money recovery",
    item3: "Domestic Violence",
    item4: "Land and Property Dispute"
    
  },
  {
    image: img4,
    heading: " ⁠Registration",
    item1: "Company & Firm",
    item2: "LLC incorporation",
    item3: "mrt & export licensing",
    item4: "money recovery"
    
  },
  {
    image: img5,
    heading: "⁠Intellectual Property ",
    item1: "Trademark",
    item2: "Copyright",
    item3: "Patent",
    item4: "LLC incorporation",
    
  },
  {
    image: img6,
    heading: "Criminal Matters",
    item1: "Narcotics",
    item2: "Terrorism",
    item3: "Fraud & theft",
    item4: "Murder and abduction Cases",
  },
  // .... moreItem
];

const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='cards-container'>
      {data.map((item, index) => (
        <div className='card-body' key={index}>
          <div
            className='cards'
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className='card-content'>
              <div>
              <img src={item.image} alt="" />
              </div>
              <div>
              <p>{item.heading}</p>
              </div>
            </div>
            {hoveredCard === index && (
              <div className='dropdown-menu'>
                {/* Dropdown content here */}
                {/* For demonstration, showing sample content */}
                <ul>
                  <div className='dropdown-content'>
                    <span>{item.item1}</span>
                    <span><MdOutlineArrowRightAlt /></span>
                  </div>
                  <div className='dropdown-content'>
                    <span>{item.item2}</span>
                    <span><MdOutlineArrowRightAlt /></span>
                  </div>
                  <div className='dropdown-content'>
                    <span>{item.item3}</span>
                    <span><MdOutlineArrowRightAlt /></span>
                  </div>
                  <div className='dropdown-content'>
                    <span>{item.item4}</span>
                    <span><MdOutlineArrowRightAlt /></span>
                  </div>
                  
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
