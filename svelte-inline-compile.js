const fileRegex = /\.test\.js$/
import { transformSync } from '@babel/core';
import svelteInlineCompileBabelPlugin from 'babel-plugin-svelte-inline-compile';
const virtualModuleId = 'svelte-testing'
const resolvedVirtualModuleId = '\0' + virtualModuleId


export default function myPlugin() {
  return {
    name: 'svelte-inline-compile',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return '';
        // return `export const msg = "from virtual module"`
      }
    },
    transform(src, id) {
      if (fileRegex.test(id)) {
        let result = transformSync(src, {
          plugins: [
            svelteInlineCompileBabelPlugin
          ],
          ast: true,
          sourceMaps: true,
          sourceFileName: id
        });
        console.log(result.code);
        return result;
      }
    },
  }
}