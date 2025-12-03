import { HTMLAttributes, ReactNode } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: keyof typeof variants;
  children: ReactNode;
}

const variants = {
  // 재고 상태 배지 (조건부 색상은 className으로 전달)
  stock:
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',

  discount:
    'absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded',

  best: 'absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded',

  coupon:
    'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-indigo-700',
};

const Badge = ({ variant, children, className = '', ...props }: BadgeProps) => {
  return (
    <span className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
