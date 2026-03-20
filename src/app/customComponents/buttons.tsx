'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'tertiary-dark';
  size?: 'default' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  children,
  onClick,
  to,
  className = '',
  type = 'button',
  ariaLabel,
  disabled = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-sm border border-transparent text-sm font-semibold uppercase tracking-[0.08em] shadow-sm transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]';

  const variantStyles =
    variant === 'primary'
      ? 'bg-[#D7BFA4] text-[#1A1F24] hover:bg-[#C5AB8E]'
      : variant === 'secondary'
      ? 'border-[#1A1F24] bg-transparent text-[#1A1F24] hover:bg-[#1A1F24] hover:text-[#EDEDED]'
      : variant === 'tertiary'
      ? 'border-[#D7BFA4] bg-transparent text-[#D7BFA4] hover:bg-[#D7BFA4] hover:text-[#1A1F24]'
      : 'bg-[#1A1F24] text-[#EDEDED] hover:bg-[#2A2F35]'; // tertiary-dark

  const sizeStyles =
    size === 'large' ? 'h-12 px-8 text-[0.84rem]' : 'h-11 px-6 text-[0.8rem]';

  const stateStyles = disabled ? 'cursor-not-allowed opacity-60 hover:translate-y-0' : '';

  const buttonClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${stateStyles} ${className}`.trim();

  if (to) {
    return (
      <Link href={to} className={buttonClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
