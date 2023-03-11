import { getValidateErrors } from 'features/EditableProfileCard/models/selectors/getValidateErrors/getValidateErorrs';
import { ValidateProfileErrors } from 'features/EditableProfileCard/models/types/ProfileSchema';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';

interface ProfileValidateErrorProps {
  className?: string;
  error: ValidateProfileErrors;
  text: string;
}

export const ProfileValidateError = ({
  className,
  error,
  text,
}: ProfileValidateErrorProps) => {
  const validateError = useSelector(getValidateErrors);

  return validateError?.includes(error) ? (
    <Text className={className} theme="error">
      {text}
    </Text>
  ) : null;
};
