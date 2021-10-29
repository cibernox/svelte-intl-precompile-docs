import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import * as babel from '@babel/core';
import { minify } from "terser";
import buildPlugin from 'babel-plugin-precompile-intl';

const intlPrecompiler = buildPlugin('svelte-intl-precompile');

// POST /playground.json
export const post: RequestHandler<Locals, FormData> = async (request) => {
  try {
    let transformed = babel.transform('export default ' + request.body, { plugins: [intlPrecompiler] }).code;
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
