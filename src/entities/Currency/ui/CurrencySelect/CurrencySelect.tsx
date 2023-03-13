import { memo } from 'react';
import { Select } from 'shared/ui/Select';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
  className?: string;
  value: Currency;
  label: string;
  onChangeCurrency: (currency: Currency) => void;
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
  ({ className, value, label, onChangeCurrency }: CurrencySelectProps) => {
    return (
      <Select<Currency>
        className={className}
        value={value}
        label={label}
        options={optionsList}
        onChange={onChangeCurrency}
      />
    );
  },
);
