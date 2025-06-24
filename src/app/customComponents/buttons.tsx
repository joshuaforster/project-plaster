'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'tertiary-black';
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick, to, className = '', type = 'button' }) => {
  const baseStyles = 'px-4 py-2 mt-4 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles =
    variant === 'primary'
      ? 'bg-[#C58C49] text-white hover:bg-[#d4af37] focus:ring-[#d4af37]'
      : variant === 'secondary'
      ? 'bg-[#55B6D9] text-white hover:bg-[#138db8] focus:ring-[#138db8]'
      : variant === 'tertiary'
      ? 'bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white shadow-md'
      : 'bg-transparent border border-black text-black hover:bg-black hover:text-white focus:ring-black';

  const buttonClasses = `${baseStyles} ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link href={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;