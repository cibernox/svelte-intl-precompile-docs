import cookie__default from "cookie";
const handle = ({ event, resolve }) => {
  const cookies = cookie__default.parse(event.request.headers.get("cookie") ?? "");
  const locale = cookies.lang || event.request.headers.get("accept-language") && event.request.headers.get("accept-language").split(",")[0];
  event.locals.locale = locale;
  return resolve(event);
};
function getSession(event) {
  return { acceptedLanguage: event.locals.locale };
}
export {
  getSession,
  handle
};
