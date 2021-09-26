import './arrow-button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {SLIDER_LENGTH} from '../../const';

const ArrowButton = ({currentSlide, direction, legend, onButtonClick}) => {
  return (
    <button className={`slider-controls__arrow arrow arrow--${direction}
    ${currentSlide === 0 && direction === `left` || currentSlide === SLIDER_LENGTH - 1 &&
        direction === `right` ? ` arrow--block` : ``}`} onClick={() => onButtonClick()} >
      <span className="visually-hidden">{legend}</span>
      <svg width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.987 6.172 13.075.369m5.912 5.803L13.3 11.969m5.687-5.797-18.972.18" stroke="#48494D" />
      </svg>
    </button>
  );
};

ArrowButton.propTypes = {
  currentSlide: PropTypes.number,
  direction: PropTypes.string,
  legend: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default ArrowButton;
