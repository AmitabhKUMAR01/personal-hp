import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  title: ReactNode;
  variant?: 'primary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | string;
  bgColor?: string;
}

export default function Button({
  title,
  variant = 'primary',
  size = 'md',
  borderRadius,
  bgColor,
  className = '',
  ...props
}: ButtonProps) {
  const borderRadiusClass = ['sm', 'md', 'lg', 'xl'].includes(
    borderRadius ?? ''
  )
    ? styles[`border-${borderRadius}`]
    : '';

  const backgroundClass = bgColor ? '' : styles[variant];

  return (
    <button
      className={`${styles.button} ${backgroundClass} ${styles[size]} ${borderRadiusClass} ${className}`}
      style={{
        borderRadius:
          borderRadius && !borderRadiusClass ? borderRadius : undefined,
        backgroundColor: bgColor || undefined,
      }}
      {...props}
    >
      {title}
    </button>
  );
}
