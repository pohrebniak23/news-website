import { Select } from 'shared/ui/Select';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
  className?: string;
  value: Country;
  label: string;
  onChangeCountry?: (value: Country) => void;
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
  label,
  onChangeCountry,
}: CountrySelectProps) => {
  return (
    <Select<Country>
      className={className}
      value={value}
      label={label}
      options={optionsList}
      onChange={onChangeCountry}
    />
  );
};
