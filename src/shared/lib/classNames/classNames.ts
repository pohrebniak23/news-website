type TMods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: TMods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      // eslint-disable-next-line
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
