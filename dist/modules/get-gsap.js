var u=(n=[],t)=>{let s=null,l=t==="debug"?console.debug:t==="error"?console.error:null;try{s=gsap;}catch{l?.("GSAP script needs to be imported before this script.",`
`,"Get it from here: https://gsap.com/docs/v3/Installation/ ");}let o=[s];for(let e=0;e<n.length;e++){let r=n[e],p=null;try{p=window[r]||null;}catch{l?.(`${r} plugin script needs to be imported before this script.`,`
`,"Get it from here: https://gsap.com/docs/v3/Installation/ ");}o[e+1]=p;}return o};
export{u as getGsap};