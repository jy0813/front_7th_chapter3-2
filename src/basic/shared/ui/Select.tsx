import { SelectHTMLAttributes, ReactNode } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant: keyof typeof variants;
  children: ReactNode;
}

const variants = {
  // 간단한 select (쿠폰 선택 등)
  simple:
    'text-sm border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500',

  // 폼 select (관리자 폼 등)
  form: 'border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2',
};

const Select = ({
  variant,
  children,
  className = '',
  ...props
}: SelectProps) => {
  return (
    <select
      className={`w-full border ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
