export function commonWordPrefix(words: readonly string[]): string {
  if (!Array.isArray(words) || words.some((word) => typeof word !== 'string'))
    throw new TypeError('Expected string array');
  if (!words.length) return '';
  const first = Array.from(words[0]!);
  let length = first.length;
  for (const word of words.slice(1)) {
    const chars = Array.from(word);
    let i = 0;
    while (i < length && i < chars.length && first[i] === chars[i]) i++;
    length = i;
  }
  return first.slice(0, length).join('');
}
