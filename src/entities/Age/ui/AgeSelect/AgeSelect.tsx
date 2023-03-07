import { Select, SelectOptions } from 'shared/ui/Select/Select';

interface AgeSelectProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const list = Array.from(Array(100).keys());

const optionsList: SelectOptions<string>[] = list.map((item) => ({
  value: `${item}`,
  label: `${item}`,
}));

export const AgeSelect = ({ className, value, onChange }: AgeSelectProps) => {
  return (
    <Select
      className={className}
      value={value}
      options={optionsList}
      onChange={onChange}
    />
  );
};
