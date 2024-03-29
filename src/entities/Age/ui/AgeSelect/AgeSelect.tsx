import { Select, SelectOption } from 'shared/ui/Select';

interface AgeSelectProps {
  className?: string;
  value: string;
  onChange?: (value: string) => void;
}

const list = Array.from(Array(100).keys());

const optionsList: SelectOption<string>[] = list.map((item) => ({
  value: `${item}`,
  label: `${item}`,
}));

export const AgeSelect = ({ className, value, onChange }: AgeSelectProps) => {
  return (
    <Select
      className={className}
      value={value}
      label={value}
      options={optionsList}
      onChange={onChange}
    />
  );
};
