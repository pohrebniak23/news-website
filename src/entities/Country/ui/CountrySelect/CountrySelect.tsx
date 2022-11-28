import { useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
}

const optionsList = [
  {
    label: Country.UKRAINE,
    value: Country.UKRAINE,
  },
  {
    label: Country.POLAND,
    value: Country.POLAND,
  },
  {
    label: Country.FRANCE,
    value: Country.FRANCE,
  },
];

export const CountrySelect = ({
  className,
  value,
  onChange,
}: CountrySelectProps) => {
  const onChangeHandler = useCallback(
    (handledValue: string) => {
      onChange?.(handledValue as Country);
    },
    [onChange],
  );

  return (
    <Select
      className={className}
      value={value}
      options={optionsList}
      onChange={onChangeHandler}
    />
  );
};
