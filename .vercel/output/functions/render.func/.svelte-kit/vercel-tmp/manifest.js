export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","flags/en.svg","flags/es.svg","flags/gl.svg","flags/ja.svg","overpass-300.woff","overpass-300.woff2","overpass-400.woff","overpass-400.woff2","overpass-600.woff","overpass-600.woff2","prism.css","prism.js","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".js":"application/javascript",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-ce9e2083.js","imports":["_app/immutable/start-ce9e2083.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-cde7a64f.js","_app/immutable/chunks/singletons-ac5d4f5f.js","_app/immutable/chunks/index-610e31c8.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js')
		],
		routes: [
			{
				id: "playground",
				pattern: /^\/playground\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/playground/_server.ts.js')
			},
			{
				id: "[...lang]/docs/configuration",
				pattern: /^(?:\/(.*))?\/docs\/configuration\/?$/,
				names: ["lang"],
				types: [null],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
