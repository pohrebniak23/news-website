import { classNames } from 'shared/lib/classNames/classNames';

describe('className', () => {
  test('Test only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
});
