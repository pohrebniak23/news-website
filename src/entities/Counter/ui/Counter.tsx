import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../models/selectors/getCounterValue/getCounterValue';
import { CounterActions } from '../models/slices/CounterSlice';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(CounterActions.increment());
  };

  const decrement = () => {
    dispatch(CounterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-label">{`value = ${counterValue}`}</h1>

      <button data-testid="counter-increment" type="button" onClick={increment}>
        {t('increment')}
      </button>

      <button data-testid="counter-decrement" type="button" onClick={decrement}>
        {t('decrement')}
      </button>
    </div>
  );
};
