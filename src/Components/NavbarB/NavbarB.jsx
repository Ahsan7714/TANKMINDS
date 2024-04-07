import React, { useState } from 'react';
import './NavbarB.css';
import { Link } from 'react-router-dom';
import image1 from './../../images/image 1.png';
import image2 from './../../images/image 2.png';
import image3 from './../../images/image 3.png';
import image4 from './../../images/image 4.png';
import buttonIcon from './../../images/Vector.svg';
import image2_1 from './../../images/image2-1.png';
import image2_2 from './../../images/image2-2.png';
import image2_3 from './../../images/image2-3.png';
import image2_4 from './../../images/image2-4.png';
import image3_1 from './../../images/image3-1.png';
import image3_2 from './../../images/image3-2.png';
import image3_3 from './../../images/image3-3.png';
import image4_1 from './../../images/image4-1.png';
import image4_2 from './../../images/image4-2.png';
import image4_3 from './../../images/image4-3.png';
import image5_1 from "./../../images/image5-1.png";
import image5_2 from "./../../images/image5-2.png";
import image5_3 from "./../../images/image5-3.png";
import image6_1 from "./../../images/image6-1.png";
import image6_2 from "./../../images/image6-2.png";
import image6_3 from "./../../images/image6-3.png";
import image6_4 from "./../../images/image6-4.png";



const NavbarB = () => {
  const [hoveredItem, setHoveredItem] = useState({
    TAX: false,
    DIVORCE: false,
    CIVIL_MATTERS: false,
    REGISTRATION: false,
    LINK4: false,
    LINK5: false
  });

  // Dummy data for cards
  const dummyCards = {
    TAX: [
      { title: "Card 1", description: "Become Filer", image: image1 },
      { title: "Card 2", description: "Submit tax Return", image: image2 },
      { title: "Card 3", description: "Income Tax / Sales Tax", image: image3 },
      { title: "Card 4", description: "Property Tax & Excise", image: image4 }
    ],
    DIVORCE: [
      { title: "Card A", description: "Dower & Dowery Articles ", image: image2_1 },
      { title: "Card B", description: "Child Custody & Guardianship", image: image2_2 },
      { title: "Card C", description: "Maintenance", image: image2_3 },
      { title: "Card D", description: "Domestic Violence", image: image2_4 }
    ],
    CIVIL_MATTERS: [
      { title: "Card X", description: "Land & Property Dispute", image: image3_1 },
      { title: "Card Y", description: "Damages Claims", image: image3_2 },
      { title: "Card Z", description: "Money Recovery", image: image3_3 },
      
    ],
    REGISTRATION: [
      { title: "Card A", description: "Company & Firms", image: image4_1 },
      { title: "Card B", description: "LLC incorporation", image: image4_2 },
      { title: "Card C", description: "Import & export licensing", image: image4_3 },
    ],
    INTELLECTUAL_PROPERTY: [
      { title: "Card A", description: "Trademark", image: image5_1 },
      { title: "Card B", description: "Copyright", image: image5_2 },
      { title: "Card C", description: "Patent", image: image5_3 },
      
    ],
    Criminal_Matters : [
      { title: "Card A", description: "Narcotics", image: image6_1 },
      { title: "Card B", description: "Terrorism", image: image6_2 },
      { title: "Card C", description: "Fraud & theft", image: image6_3 },
      { title: "Card D", description: "Murder & abduction Cases", image: image6_4 }
    ],
  };

  // Function to render cards based on hovered item
  const renderCards = (hoveredItemKey) => {
    if (hoveredItem[hoveredItemKey]) {
      return dummyCards[hoveredItemKey].map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={`Image ${index + 1}`} />
          <p>{card.description}</p>
        </div>
      ));
    }
    return null;
  };

  return (
    <div className='nav_c'> 
      <div className='left-nav'>
        <ul>
          {/* Render the "TAX" link */}
          <li onMouseEnter={() => setHoveredItem({ ...hoveredItem, TAX: true })} onMouseLeave={() => setHoveredItem({ ...hoveredItem, TAX: false })}>
            <Link to="">TAX</Link>
            {hoveredItem.TAX && (
              <div className="dropdown">
                {/* Render cards */}
                {renderCards("TAX")}
              </div>
            )}
          </li>
          {/* Render the "DIVORCE" link */}
          <li onMouseEnter={() => setHoveredItem({ ...hoveredItem, DIVORCE: true })} onMouseLeave={() => setHoveredItem({ ...hoveredItem, DIVORCE: false })}>
            <Link to="">DIVORCE</Link>
            {hoveredItem.DIVORCE && (
              <div className="dropdown">
                {/* Render cards */}
                {renderCards("DIVORCE")}
              </div>
            )}
          </li>
          {/* Render the "CIVIL MATTERS" link */}
          <li onMouseEnter={() => setHoveredItem({ ...hoveredItem, CIVIL_MATTERS: true })} onMouseLeave={() => setHoveredItem({ ...hoveredItem, CIVIL_MATTERS: false })}>
            <Link to="">CIVIL MATTERS</Link>
            {hoveredItem.CIVIL_MATTERS && (
              <div className="dropdown">
                {/* Render cards */}
                {renderCards("CIVIL_MATTERS")}
              </div>
            )}
          </li>
          {/* Repeat for other links */}
          <li onMouseEnter={() => setHoveredItem({ ...hoveredItem, REGISTRATION: true })} onMouseLeave={() => setHoveredItem({ ...hoveredItem, REGISTRATION: false })}>
            <Link to="">REGISTRATION</Link>
            {hoveredItem.REGISTRATION && (
              <div className="dropdown">
                {/* Render cards */}
                {renderCards("REGISTRATION")}
              </div>
            )}
          </li>
          {/* Repeat for other links */}
          <li onMouseEnter={() => setHoveredItem({ ...hoveredItem, INTELLECTUAL_PROPERTY: true })} onMouseLeave={() => setHoveredItem({ ...hoveredItem, INTELLECTUAL_PROPERTY: false })}>
            <Link to="">INTELLECTUAL PROPERTY</Link>
            {hoveredItem.INTELLECTUAL_PROPERTY && (
              <div className="dropdown">
                {/* Render cards */}
                {renderCards("INTELLECTUAL_PROPERTY")}
              </div>
            )}
          </li>
          {/* Repeat for other links */}
          <li onMouseEnter={() => setHoveredItem({ ...hoveredItem, Criminal_Matters: true })} onMouseLeave={() => setHoveredItem({ ...hoveredItem, Criminal_Matters: false })}>
            <Link to="">CRIMINAL MATTERS</Link>
            {hoveredItem.Criminal_Matters && (
              <div className="dropdown">
                {/* Render cards */}
                {renderCards("Criminal_Matters")}
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className='right-nav'>
        <button>Tax return</button>
        <button>Bail</button>
        <button>Emergency Click 
          <img src={buttonIcon} alt="" />
        </button>
      </div> 
    </div> 
  );
};

export default NavbarB;
