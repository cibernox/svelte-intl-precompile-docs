import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import * as babel from '@babel/core';
import buildPlugin from 'babel-plugin-precompile-intl';

const intlPrecompiler = buildPlugin('svelte-intl-precompile');

// POST /playground.json
export const post: RequestHandler<Locals, FormData> = async (request) => {
  try {
    let transformedCode = babel.transform('export default ' + request.body, { plugins: [intlPrecompiler] }).code;
    return {
      status: 200,
      body: {
        transformed: transformedCode
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
