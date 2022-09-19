import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') ?? '');
	const locale = cookies.lang || (event.request.headers.get("accept-language") && event.request.headers.get("accept-language").split(',')[0]);
	// console.log('Locale extracted from the cookies is:', locale);
	// console.log('request is:', JSON.stringify(request));
	event.locals.locale = locale;
	return resolve(event);
};

export function getSession(event) {
  return { acceptedLanguage: event.locals.locale };
}