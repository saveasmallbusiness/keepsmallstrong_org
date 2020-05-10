/* eslint-disable react/button-has-type */
import React from 'react';

const sizes = {
  sm: 'py-2 px-6',
  default: 'py-3 px-8',
  lg: 'py-4 px-12',
  xl: 'py-5 px-16 text-lg',
};

const renderLinkColor = (color) => {
  switch (color) {
    case 'secondary': {
      return 'bg-secondary text-light hover:bg-secondary-darker';
    }
    case 'dark': {
      return 'bg-dark text-light hover:bg-primary-darker';
    }
    default: {
      return 'bg-primary text-light hover:bg-primary-darker';
    }
  }
};

const renderButtonColor = (color) => {
  switch (color) {
    case 'primary': {
      return 'bg-primary text-light hover:bg-primary-darker';
    }
    case 'dark': {
      return 'bg-dark text-light hover:bg-primary-darker';
    }
    default: {
      return 'bg-secondary text-light hover:bg-secondary-darker';
    }
  }
};

const Button = ({
  children,
  className = '',
  size,
  color = 'primary',
  type = 'button',
  disabled = false,
  onClick,
  href,
}) => (href ? (
  <a
    href={href}
    className={`
        ${sizes[size] || sizes.default}
        ${className}
        ${renderLinkColor(color)}
        rounded
    `}
  >
    {children}
  </a>
) : (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`
        ${sizes[size] || sizes.default}
        ${className}
        ${renderButtonColor(color)}
        rounded
    `}
  >
    {children}
  </button>
));

export default Button;
