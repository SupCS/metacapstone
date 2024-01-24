import React, { useState } from "react";
import "./CustomSelect.css";
import arrowdown from "../../assets/img/arrowdown.svg";
import arrowwhite from "../../assets/img/arrowwhite.svg";

const CustomSelect = ({
  options,
  placeholder,
  icon,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option, event) => {
    event.preventDefault();
    onSelect(option); // Обновляем состояние в родительском компоненте
    setIsOpen(false);
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
        className={`dropbtn ${selectedOption ? "dropbtn-selected" : ""}`}
        onClick={toggleDropdown}
      >
        <img
          src={icon}
          alt="Icon"
          className={`icon ${selectedOption ? "icon-hidden" : ""}`}
        />
        {selectedOption ? selectedOption : placeholder}
        <img
          src={selectedOption ? arrowwhite : arrowdown}
          alt="Arrow"
          className="arrow"
        />
      </button>

      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {options &&
          Array.isArray(options) &&
          options.map((option, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={(event) => handleSelect(option, event)}
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CustomSelect;
