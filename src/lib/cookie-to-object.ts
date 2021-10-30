export function cookieToObject(str: string): Record<string, string> {
  return str.split(';').reduce((acc, entry) => {
    let [key, value] = entry.split('=');
    acc[key] = value;
    return acc;
  }, {});
}
export function parseCookie() {
  if (typeof document === 'undefined') return;
  return cookieToObject(document.cookie);
}