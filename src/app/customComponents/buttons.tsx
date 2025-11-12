'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'tertiary-dark';
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  to,
  className = '',
  type = 'button',
}) => {
  const baseStyles =
    'px-6 py-3 font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles =
    variant === 'primary'
      ? 'bg-[#D7BFA4] text-[#1A1F24] hover:bg-[#C5AB8E] focus:ring-[#C5AB8E]'
      : variant === 'secondary'
      ? 'bg-transparent border border-[#1A1F24] text-[#1A1F24] hover:bg-[#1A1F24] hover:text-[#EDEDED] focus:ring-[#1A1F24]'
      : variant === 'tertiary'
      ? 'bg-transparent border border-[#EDEDED] text-[#EDEDED] hover:bg-[#EDEDED] hover:text-[#1A1F24] focus:ring-[#EDEDED]'
      : 'bg-[#1A1F24] text-[#EDEDED] hover:bg-[#2A2F35] focus:ring-[#EDEDED]'; // tertiary-dark

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