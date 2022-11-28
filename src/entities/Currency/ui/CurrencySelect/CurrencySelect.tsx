import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (currency: Currency) => void;
}

const optionsList = [
  {
    label: Currency.UAH,
    value: Currency.UAH,
  },
  {
    label: Currency.EUR,
    value: Currency.EUR,
  },
  {
    label: Currency.USD,
    value: Currency.USD,
  },
];

export const CurrencySelect = memo(
  ({ value, onChange, className }: CurrencySelectProps) => {
    const onChangeHandler = useCallback(
      (handledValue: string) => {
        onChange?.(handledValue as Currency);
      },
      [onChange],
    );

    return (
      <Select
        className={className}
        value={value}
        onChange={onChangeHandler}
        options={optionsList}
      />
    );
  },
);
