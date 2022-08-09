import type { RequestHandler } from './__types';
import * as babel from '@babel/core';
import { minify } from "terser";
import buildPlugin from 'babel-plugin-precompile-intl';

const intlPrecompiler = buildPlugin('svelte-intl-precompile');

// POST /playground.json
export const POST: RequestHandler = async ({ request, locals }) => {
  try {
    const body = await request.text();
    let transformed = babel.transform('export default ' + body, { plugins: [intlPrecompiler] }).code;
    let { code: minified } = await minify(transformed, {  
      mangle: {
        toplevel: true,
      },
    });
    return {
      status: 200,
      body: {
        transformed,
        minified
      }
    };    
  } catch {
    return {
      status: 422,
      body: {
        error: "Syntax error"
      }
    };
  }
};
