import { j as json } from "../../../chunks/index2.js";
import * as babel from "@babel/core";
import { minify } from "terser";
import buildPlugin from "babel-plugin-precompile-intl";
const intlPrecompiler = buildPlugin("svelte-intl-precompile");
async function POST({ request, locals }) {
  try {
    const body = await request.text();
    let transformed = babel.transform("export default " + body, { plugins: [intlPrecompiler] }).code;
    let { code: minified } = await minify(transformed, { mangle: { toplevel: true } });
    return json({ transformed, minified });
  } catch {
    return json({ error: "Syntax error" }, { status: 422 });
  }
}
export {
  POST
};
