import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	const locale = cookies.lang || (request.headers["accept-language"] && request.headers["accept-language"].split(',')[0]);
	request.locals.locale = locale;

	// TODO https://github.com/sveltejs/kit/issues/1046
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}

	const response = await resolve(request);

	return response;
};

export function getSession(request) {
  console.log(`[INFO] Request received in getSession is ${JSON.stringify(request)}`);
  return { acceptedLanguage: request.locals.locale };
}