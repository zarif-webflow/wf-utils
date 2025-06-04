var u=(t=[],s)=>{let l=null,o=s==="debug"?console.debug:s==="error"?console.error:null;try{l=gsap;}catch{o?.("GSAP script needs to be imported before this script.",`
`,"Get GSAP from here: https://gsap.com/docs/v3/Installation/ ");}let p=[l];for(let e=0;e<t.length;e++){let n=t[e],r=null;try{r=window[n]||null;}catch{o?.(`${n} plugin script needs to be imported before this script.`,`
`,`Get ${n} plugin from here: https://gsap.com/docs/v3/Installation/ `);}p[e+1]=r;}return p};
export{u as getGsap};