import { ChangeEvent } from 'react';
import { Coupon } from '../model/types';
import { Select } from '../../../shared/ui/Select';
import { getCouponLabel } from '../lib';

interface CouponSelectProps {
  coupons: Coupon[];
  selectedCoupon: Coupon | null;
  onChange: (coupon: Coupon) => void;
  className?: string;
}

export const CouponSelect = ({
  coupons,
  selectedCoupon,
  onChange,
  className,
}: CouponSelectProps) => {
  // select의 onChange 이벤트(문자열 인덱스)를 받아서 -> 쿠폰 객체로 변환
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value);
    // 선택된 쿠폰을 찾아서 부모에게 전달
    if (coupons[index]) {
      onChange(coupons[index]);
    }
  };

  // 현재 선택된 값 찾기 (selectedCoupon 객체와 일치하는 인덱스 찾기)
  const selectedValue = selectedCoupon
    ? coupons.findIndex((coupon) => coupon.code === selectedCoupon.code)
    : '';

  return (
    <Select onChange={handleChange} value={selectedValue} className={className}>
      <option value="" disabled>
        쿠폰 선택
      </option>

      {coupons.map((coupon, index) => (
        <option key={coupon.code} value={index}>
          {coupon.name} - {getCouponLabel(coupon)}
        </option>
      ))}
    </Select>
  );
};
