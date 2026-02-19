
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'white-outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'lg',
  href, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false
}: ButtonProps) => {
  
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:-translate-y-1",
    secondary: "bg-gold-accent text-background-dark hover:bg-white hover:text-primary shadow-xl shadow-gold-accent/20 hover:-translate-y-1",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
    white: "bg-white text-primary hover:bg-gold-accent hover:text-white shadow-lg",
    'white-outline': "bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-primary hover:border-white shadow-lg"
  };

  const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg"
  }
  
  // Use size prop if we add it, defaulting for now
  const sizeStyles = sizes[size]; 

  const combinedClassName = `${baseStyles} ${sizeStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
