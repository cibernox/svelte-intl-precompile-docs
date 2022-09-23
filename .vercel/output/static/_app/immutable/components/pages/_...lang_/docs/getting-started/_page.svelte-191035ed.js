import{S as be,i as he,s as Ee,a as n,k as _,q as u,v as K,T as je,R as He,h as l,c as f,l as $,m as v,r as m,w as N,U as we,n as T,b as s,I as g,x as O,u as k,f as Q,t as V,y as X,J as Pe,A as re}from"../../../../../chunks/index-cde7a64f.js";import{C as Y,s as Te}from"../../../../../chunks/Codeblock-65412bc8.js";import{e as de}from"../../../../../chunks/formatters-866ba037.js";function Me(r){let o;return{c(){o=u("npm install svelte-intl-precompile")},l(a){o=m(a,"npm install svelte-intl-precompile")},m(a,i){s(a,o,i)},d(a){a&&l(o)}}}function Le(r){let o;return{c(){o=u(`\u251C\u2500\u2500 locales
\u2502\xA0\xA0 \u251C\u2500\u2500 en.json
\u2502\xA0\xA0 \u251C\u2500\u2500 es.json
\u251C\u2500\u2500 src
...
\u251C\u2500\u2500 static
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 svelte.config.js`)},l(a){o=m(a,`\u251C\u2500\u2500 locales
\u2502\xA0\xA0 \u251C\u2500\u2500 en.json
\u2502\xA0\xA0 \u251C\u2500\u2500 es.json
\u251C\u2500\u2500 src
...
\u251C\u2500\u2500 static
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 svelte.config.js`)},m(a,i){s(a,o,i)},d(a){a&&l(o)}}}function Ce(r){let o=`{
	"recent.aria": "Find recently viewed tides",
	"menu": "Menu",
	"foot": "{count} {count, plural, =1 {foot} other {feet}}",
}`,a;return{c(){a=u(o)},l(i){a=m(i,o)},m(i,c){s(i,a,c)},p:re,d(i){i&&l(a)}}}function Ie(r){let o=`{
	"placeholders": {
		"fullname": "John Smith",
		"street-name": "13 Elm Street",
		"subject": "Re: Hello"
	},
	"welcome-hero": "Welcome to Goliath Bank!",
}`,a;return{c(){a=u(o)},l(i){a=m(i,o)},m(i,c){s(i,a,c)},p:re,d(i){i&&l(a)}}}function Se(r){let o=`import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";

const config = {
	kit: {
		target: '#svelte',
		vite: {
			plugins: [
				precompileIntl('locales') // if your translations are defined in /locales/[lang].json
			]			
		}		
	}
};

export default config;`,a;return{c(){a=u(o)},l(i){a=m(i,o)},m(i,c){s(i,a,c)},p:re,d(i){i&&l(a)}}}function qe(r){let o=`import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";

export default defineConfig({
  resolve: {
    dedupe: ["svelte"]
  },
  plugins: [
    svelte(),
    precompileIntl("locales"),
  ],
});`,a;return{c(){a=u(o)},l(i){a=m(i,o)},m(i,c){s(i,a,c)},p:re,d(i){i&&l(a)}}}function Je(r){let o,a,i,c=r[0]("getting-started.title")+"",ct,kt,d,Z=r[0]("getting-started.subsection.installation")+"",bt,ht,B,y=r[0]("getting-started.paragraph.installation-1")+"",Et,jt,b,Ht,M,x=r[0]("getting-started.subsection.create-translations")+"",wt,Pt,h,tt,Tt=r[0]("getting-started.paragraph.create-translations-1",{values:{dir1:"/messages",or:r[0]("common.or"),dir2:"/locales"}})+"",dt,et=r[0]("getting-started.paragraph.create-translations-2")+"",Mt,Lt,E,Ct,F,lt=r[0]("getting-started.paragraph.create-translations-3")+"",It,St,j,qt,G,st=r[0]("getting-started.paragraph.create-translations-4")+"",Jt,Rt,H,zt,L,at=r[0]("getting-started.paragraph.create-translations-5")+"",At,Bt,C,Ft=r[0]("getting-started.paragraph.create-translations-6")+"",Gt,I,it=r[0]("getting-started.paragraph.create-translations-7")+"",Ut,Wt,U,rt=r[0]("getting-started.paragraph.create-translations-8")+"",Dt,Kt,S,ot=r[0]("getting-started.paragraph.create-translations-9")+"",Nt,Ot,W,nt=r[0]("getting-started.paragraph.create-translations-10")+"",Qt,Vt,q,ft=r[0]("getting-started.subsection.hook-into-sveltekit")+"",Xt,Yt,J,Zt=r[0]("getting-started.paragraph.hook-into-sveltekit-1",{values:{path:"/svelte.config.js"}})+"",yt,w,xt,D,pt=r[0]("getting-started.paragraph.hook-into-sveltekit-2")+"",te,ee,R,ut=r[0]("getting-started.subsection.hook-into-vite")+"",le,se,z,ae=r[0]("getting-started.paragraph.hook-into-vite-1",{values:{path:"/vite.config.js"}})+"",ie,P,p;return document.title=o=r[0]("getting-started.title"),b=new Y({props:{$$slots:{default:[Me]},$$scope:{ctx:r}}}),E=new Y({props:{$$slots:{default:[Le]},$$scope:{ctx:r}}}),j=new Y({props:{lang:"js",$$slots:{default:[Ce]},$$scope:{ctx:r}}}),H=new Y({props:{lang:"js",$$slots:{default:[Ie]},$$scope:{ctx:r}}}),w=new Y({props:{lang:"js",$$slots:{default:[Se]},$$scope:{ctx:r}}}),P=new Y({props:{lang:"js",$$slots:{default:[qe]},$$scope:{ctx:r}}}),{c(){a=n(),i=_("h1"),ct=u(c),kt=n(),d=_("h2"),bt=u(Z),ht=n(),B=_("p"),Et=u(y),jt=n(),K(b.$$.fragment),Ht=n(),M=_("h2"),wt=u(x),Pt=n(),h=_("p"),tt=new je(!1),dt=n(),Mt=u(et),Lt=n(),K(E.$$.fragment),Ct=n(),F=_("p"),It=u(lt),St=n(),K(j.$$.fragment),qt=n(),G=_("p"),Jt=u(st),Rt=n(),K(H.$$.fragment),zt=n(),L=_("h3"),At=u(at),Bt=n(),C=_("p"),Gt=n(),I=_("h3"),Ut=u(it),Wt=n(),U=_("p"),Dt=u(rt),Kt=n(),S=_("h3"),Nt=u(ot),Ot=n(),W=_("p"),Qt=u(nt),Vt=n(),q=_("h2"),Xt=u(ft),Yt=n(),J=_("p"),yt=n(),K(w.$$.fragment),xt=n(),D=_("p"),te=u(pt),ee=n(),R=_("h2"),le=u(ut),se=n(),z=_("p"),ie=n(),K(P.$$.fragment),this.h()},l(t){He('[data-svelte="svelte-zaml19"]',document.head).forEach(l),a=f(t),i=$(t,"H1",{class:!0});var mt=v(i);ct=m(mt,c),mt.forEach(l),kt=f(t),d=$(t,"H2",{class:!0});var _t=v(d);bt=m(_t,Z),_t.forEach(l),ht=f(t),B=$(t,"P",{});var $t=v(B);Et=m($t,y),$t.forEach(l),jt=f(t),N(b.$$.fragment,t),Ht=f(t),M=$(t,"H2",{class:!0});var vt=v(M);wt=m(vt,x),vt.forEach(l),Pt=f(t),h=$(t,"P",{});var A=v(h);tt=we(A,!1),dt=f(A),Mt=m(A,et),A.forEach(l),Lt=f(t),N(E.$$.fragment,t),Ct=f(t),F=$(t,"P",{});var gt=v(F);It=m(gt,lt),gt.forEach(l),St=f(t),N(j.$$.fragment,t),qt=f(t),G=$(t,"P",{});var oe=v(G);Jt=m(oe,st),oe.forEach(l),Rt=f(t),N(H.$$.fragment,t),zt=f(t),L=$(t,"H3",{class:!0});var ne=v(L);At=m(ne,at),ne.forEach(l),Bt=f(t),C=$(t,"P",{});var ge=v(C);ge.forEach(l),Gt=f(t),I=$(t,"H3",{class:!0});var fe=v(I);Ut=m(fe,it),fe.forEach(l),Wt=f(t),U=$(t,"P",{});var pe=v(U);Dt=m(pe,rt),pe.forEach(l),Kt=f(t),S=$(t,"H3",{class:!0});var ue=v(S);Nt=m(ue,ot),ue.forEach(l),Ot=f(t),W=$(t,"P",{});var me=v(W);Qt=m(me,nt),me.forEach(l),Vt=f(t),q=$(t,"H2",{class:!0});var _e=v(q);Xt=m(_e,ft),_e.forEach(l),Yt=f(t),J=$(t,"P",{});var ce=v(J);ce.forEach(l),yt=f(t),N(w.$$.fragment,t),xt=f(t),D=$(t,"P",{});var $e=v(D);te=m($e,pt),$e.forEach(l),ee=f(t),R=$(t,"H2",{class:!0});var ve=v(R);le=m(ve,ut),ve.forEach(l),se=f(t),z=$(t,"P",{});var ke=v(z);ke.forEach(l),ie=f(t),N(P.$$.fragment,t),this.h()},h(){T(i,"class","text-4xl font-semibold"),T(d,"class","text-2xl font-semibold"),T(M,"class","text-2xl font-semibold"),tt.a=dt,T(L,"class","text-l font-semibold"),T(I,"class","text-l font-semibold"),T(S,"class","text-l font-semibold"),T(q,"class","text-2xl font-semibold"),T(R,"class","text-2xl font-semibold")},m(t,e){s(t,a,e),s(t,i,e),g(i,ct),s(t,kt,e),s(t,d,e),g(d,bt),s(t,ht,e),s(t,B,e),g(B,Et),s(t,jt,e),O(b,t,e),s(t,Ht,e),s(t,M,e),g(M,wt),s(t,Pt,e),s(t,h,e),tt.m(Tt,h),g(h,dt),g(h,Mt),s(t,Lt,e),O(E,t,e),s(t,Ct,e),s(t,F,e),g(F,It),s(t,St,e),O(j,t,e),s(t,qt,e),s(t,G,e),g(G,Jt),s(t,Rt,e),O(H,t,e),s(t,zt,e),s(t,L,e),g(L,At),s(t,Bt,e),s(t,C,e),C.innerHTML=Ft,s(t,Gt,e),s(t,I,e),g(I,Ut),s(t,Wt,e),s(t,U,e),g(U,Dt),s(t,Kt,e),s(t,S,e),g(S,Nt),s(t,Ot,e),s(t,W,e),g(W,Qt),s(t,Vt,e),s(t,q,e),g(q,Xt),s(t,Yt,e),s(t,J,e),J.innerHTML=Zt,s(t,yt,e),O(w,t,e),s(t,xt,e),s(t,D,e),g(D,te),s(t,ee,e),s(t,R,e),g(R,le),s(t,se,e),s(t,z,e),z.innerHTML=ae,s(t,ie,e),O(P,t,e),p=!0},p(t,[e]){(!p||e&1)&&o!==(o=t[0]("getting-started.title"))&&(document.title=o),(!p||e&1)&&c!==(c=t[0]("getting-started.title")+"")&&k(ct,c),(!p||e&1)&&Z!==(Z=t[0]("getting-started.subsection.installation")+"")&&k(bt,Z),(!p||e&1)&&y!==(y=t[0]("getting-started.paragraph.installation-1")+"")&&k(Et,y);const mt={};e&2&&(mt.$$scope={dirty:e,ctx:t}),b.$set(mt),(!p||e&1)&&x!==(x=t[0]("getting-started.subsection.create-translations")+"")&&k(wt,x),(!p||e&1)&&Tt!==(Tt=t[0]("getting-started.paragraph.create-translations-1",{values:{dir1:"/messages",or:t[0]("common.or"),dir2:"/locales"}})+"")&&tt.p(Tt),(!p||e&1)&&et!==(et=t[0]("getting-started.paragraph.create-translations-2")+"")&&k(Mt,et);const _t={};e&2&&(_t.$$scope={dirty:e,ctx:t}),E.$set(_t),(!p||e&1)&&lt!==(lt=t[0]("getting-started.paragraph.create-translations-3")+"")&&k(It,lt);const $t={};e&2&&($t.$$scope={dirty:e,ctx:t}),j.$set($t),(!p||e&1)&&st!==(st=t[0]("getting-started.paragraph.create-translations-4")+"")&&k(Jt,st);const vt={};e&2&&(vt.$$scope={dirty:e,ctx:t}),H.$set(vt),(!p||e&1)&&at!==(at=t[0]("getting-started.paragraph.create-translations-5")+"")&&k(At,at),(!p||e&1)&&Ft!==(Ft=t[0]("getting-started.paragraph.create-translations-6")+"")&&(C.innerHTML=Ft),(!p||e&1)&&it!==(it=t[0]("getting-started.paragraph.create-translations-7")+"")&&k(Ut,it),(!p||e&1)&&rt!==(rt=t[0]("getting-started.paragraph.create-translations-8")+"")&&k(Dt,rt),(!p||e&1)&&ot!==(ot=t[0]("getting-started.paragraph.create-translations-9")+"")&&k(Nt,ot),(!p||e&1)&&nt!==(nt=t[0]("getting-started.paragraph.create-translations-10")+"")&&k(Qt,nt),(!p||e&1)&&ft!==(ft=t[0]("getting-started.subsection.hook-into-sveltekit")+"")&&k(Xt,ft),(!p||e&1)&&Zt!==(Zt=t[0]("getting-started.paragraph.hook-into-sveltekit-1",{values:{path:"/svelte.config.js"}})+"")&&(J.innerHTML=Zt);const A={};e&2&&(A.$$scope={dirty:e,ctx:t}),w.$set(A),(!p||e&1)&&pt!==(pt=t[0]("getting-started.paragraph.hook-into-sveltekit-2")+"")&&k(te,pt),(!p||e&1)&&ut!==(ut=t[0]("getting-started.subsection.hook-into-vite")+"")&&k(le,ut),(!p||e&1)&&ae!==(ae=t[0]("getting-started.paragraph.hook-into-vite-1",{values:{path:"/vite.config.js"}})+"")&&(z.innerHTML=ae);const gt={};e&2&&(gt.$$scope={dirty:e,ctx:t}),P.$set(gt)},i(t){p||(Q(b.$$.fragment,t),Q(E.$$.fragment,t),Q(j.$$.fragment,t),Q(H.$$.fragment,t),Q(w.$$.fragment,t),Q(P.$$.fragment,t),p=!0)},o(t){V(b.$$.fragment,t),V(E.$$.fragment,t),V(j.$$.fragment,t),V(H.$$.fragment,t),V(w.$$.fragment,t),V(P.$$.fragment,t),p=!1},d(t){t&&l(a),t&&l(i),t&&l(kt),t&&l(d),t&&l(ht),t&&l(B),t&&l(jt),X(b,t),t&&l(Ht),t&&l(M),t&&l(Pt),t&&l(h),t&&l(Lt),X(E,t),t&&l(Ct),t&&l(F),t&&l(St),X(j,t),t&&l(qt),t&&l(G),t&&l(Rt),X(H,t),t&&l(zt),t&&l(L),t&&l(Bt),t&&l(C),t&&l(Gt),t&&l(I),t&&l(Wt),t&&l(U),t&&l(Kt),t&&l(S),t&&l(Ot),t&&l(W),t&&l(Vt),t&&l(q),t&&l(Yt),t&&l(J),t&&l(yt),X(w,t),t&&l(xt),t&&l(D),t&&l(ee),t&&l(R),t&&l(se),t&&l(z),t&&l(ie),X(P,t)}}}function Re(r,o,a){let i;return Pe(r,de,c=>a(0,i=c)),Te(),[i]}class Fe extends be{constructor(o){super(),he(this,o,Re,Je,Ee,{})}}export{Fe as default};
