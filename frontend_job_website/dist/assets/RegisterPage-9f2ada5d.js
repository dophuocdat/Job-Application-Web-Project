import{r as d,j as e,e as b,f as g,a as f,c as j}from"./index-255c3937.js";import{L as u,S as N}from"./Social-bcbdbc2d.js";import{k as w,Q as a}from"./react-toastify.esm-37d10af7.js";const y=()=>{const l=["Please confirm your new account bt clicking on the link submitted","Go to Login enter new already account."];return d.useEffect(()=>{setTimeout(()=>{window.location.href="/login"},2e3)}),e.jsx(e.Fragment,{children:e.jsxs(u,{children:[e.jsxs("div",{className:"flex flex-col items-center justify-items-center",children:[e.jsxs("div",{className:"logo flex flex-col items-center justify-items-center",children:[e.jsx("img",{src:b,alt:"",className:"w-24 h-24"}),e.jsx("h2",{className:"font-mono text-[30px] tracking-widest",children:"Thanks for Register"})]}),e.jsx("div",{className:"py-2 w-2/3 text-center",children:e.jsx("span",{className:"font-thin tracking-widest",children:"Welcome to JobHunter! Your personal link activation has been sent to your Email address"})})]}),e.jsxs("div",{className:"grid place-content-center",children:[e.jsx("h1",{className:"py-4 pl-4 font-normal text-xl",children:"What is next ?"}),e.jsx("div",{className:"flex flex-col gap-10",children:e.jsx("div",{className:"flex gap-5 items-start flex-col w-[450px] max-sm:w-[300px]",children:l==null?void 0:l.map((r,o)=>e.jsxs("div",{className:"flex items-center gap-2 ",children:[e.jsx("span",{className:"w-[20px] h-[20px] mx-4 p-4 text-white rounded-full bg-[#000084] grid place-content-center",children:o+1}),e.jsx("span",{className:"font-normal leading-relaxed ",children:r})]},o))})})]})]})})},C=({setIsRegistered:l})=>{const r=g(),n=new URLSearchParams(r.search).get("role"),[s,h]=d.useState({name:"",email:"",password:""}),p=async()=>{const c=a.loading("Please wait...",{autoClose:!1});await j.post(`http://localhost:80/api/auth/register?role=${n}`,s).then(t=>{a.dismiss(c),a("🦄 Register Success!",{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),console.log("success",t.data),l(!0)}).catch(t=>{a.dismiss(c),a.error("🦄 Registration failed. Please try again.",{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),console.log(t)})},m=c=>{const{name:t,value:i}=c.target;h({...s,[t]:i})};return e.jsxs(e.Fragment,{children:[e.jsx(w,{position:"bottom-right",autoClose:1600,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsxs("span",{className:"absolute top-6 right-14",children:["Have already account?",e.jsx(f,{to:"/login",className:"text-[#000084] cursor-pointer",children:"Login"})]}),e.jsxs("div",{className:"box-login w-[23rem] ",children:[e.jsx("h1",{className:"text-2xl font-semibold font-serif pb-7",children:"Candidate"}),e.jsxs("div",{className:"form-login w-full ",children:[e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Name"}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"text",name:"name",placeholder:"Your name",className:"pl-3 w-full h-[40px] rounded-md",value:s.name,onChange:m})})]}),e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Email"}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"email",name:"email",placeholder:"Email Address",className:"pl-3 w-full h-[40px] rounded-md",value:s.email,onChange:m})})]}),e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Password"}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"password",name:"password",placeholder:"Your Password",className:"pl-3 w-full h-[40px] rounded-md",value:s.password,onChange:m})})]}),e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Re-enter Password"}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"password",name:"rePassword",placeholder:"Re-enter password",className:"pl-3 w-full h-[40px] rounded-md"})})]}),e.jsx("button",{className:"bg-[#133FA0] w-full h-12 rounded-md text-white my-3 text-[1.2rem] font-normal",onClick:p,children:"Register"}),e.jsxs("div",{className:"flex items-center w-full ",children:[e.jsx("span",{className:"flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"}),e.jsx("span",{className:"uppercase font-semibold",children:"OR"}),e.jsx("span",{className:"flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"})]})]}),e.jsx(N,{})]})]})},P=({setIsRegistered:l})=>{const r=g(),n=new URLSearchParams(r.search).get("role");console.log(n);const[s,h]=d.useState({name:"",email:"",password:""}),[p,m]=d.useState(!1),c=()=>{const i=a.loading("Please wait...",{autoClose:!1});j.post(`http://localhost:80/api/auth/register?role=${n}`,s).then(x=>{a.dismiss(i),a("🦄 Register Success!",{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),l(!0)}).catch(x=>{a.dismiss(i),a.error("🦄 Registration failed. Please try again.",{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),console.log(x)})},t=i=>{const{name:x,value:v}=i.target;h({...s,[x]:v})};return e.jsxs(e.Fragment,{children:[e.jsx(w,{position:"bottom-right",autoClose:1600,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsxs("span",{className:"absolute top-6 right-14",children:["Have already account?",e.jsx(f,{to:"/login",className:"text-[#000084] cursor-pointer",children:"Login"})]}),e.jsxs("div",{className:"box-login w-[23rem] ",children:[e.jsx("h1",{className:"text-2xl font-semibold font-serif pb-7",children:"Company"}),p&&e.jsx("p",{className:"text-red-600",children:"Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu."}),e.jsxs("div",{className:"form-login w-full ",children:[e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Name"}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"text",name:"name",placeholder:"Your name",className:"pl-3 w-full h-[40px] rounded-md",value:s.name,onChange:t})})]}),e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Email"}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"email",name:"email",placeholder:"Email Address",className:"pl-3 w-full h-[40px] rounded-md",value:s.email,onChange:t})})]}),e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Password"}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"password",name:"password",placeholder:"Your Password",className:"pl-3 w-full h-[40px] rounded-md",value:s.password,onChange:t})})]}),e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Re-enter Password"}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"password",name:"rePassword",placeholder:"Re-enter password",className:"pl-3 w-full h-[40px] rounded-md"})})]}),e.jsx("button",{className:"bg-[#133FA0] w-full h-12 rounded-md text-white my-3 text-[1.2rem] font-normal",onClick:c,children:"Register"}),e.jsxs("div",{className:"flex items-center w-full ",children:[e.jsx("span",{className:"flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"}),e.jsx("span",{className:"uppercase font-semibold",children:"OR"}),e.jsx("span",{className:"flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"})]})]}),e.jsx(N,{})]})]})},O=()=>{const l=g(),[r,o]=d.useState(!1),n=new URLSearchParams(l.search).get("role");let s;return r?s=e.jsx(y,{}):n==="Company"?s=e.jsx(u,{children:e.jsx(P,{setIsRegistered:o})}):s=e.jsx(u,{children:e.jsx(C,{setIsRegistered:o})}),e.jsx(e.Fragment,{children:s})};export{O as default};