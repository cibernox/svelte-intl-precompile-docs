import cookie from 'cookie';

export function getSession(request) {
	// const cookies = cookie.parse(request.headers.cookie || '');
  let acceptedLanguage = JSON.stringify(request); // 		cookies.lang || (request.headers["accept-language"] && request.headers["accept-language"].split(',')[0]);
  return { acceptedLanguage };
}