import{u as f,r as i,c as j,j as s,b as d,a as w,d as N}from"./index-e1fbee09.js";import{S as v,L as b}from"./Social-5430ae8a.js";const y=({Title:t,setIsRegistered:n})=>{const m=f(),[a,x]=i.useState({email:"",password:""}),[h,o]=i.useState(!1),p=j(),r=e=>{const{name:c,value:l}=e.target;x({...a,[c]:l})},u=async()=>{try{const e=await w.get("http://localhost:9003/Accounts");o(!1);let l=e.data.find(g=>g.Email===a.email);console.log(l.Password,a.password),l&&l.Password===a.password?(m({type:"LOGIN",payload:l}),p("/")):(console.log("sai"),o(!0))}catch(e){o(!0),console.log(e)}};return s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:"absolute top-6 right-14",children:["Don’t have an account?",s.jsx(d,{to:"/chooseRole",className:"text-[#000084] cursor-pointer",children:"Register now"})]}),s.jsxs("div",{className:"box-login w-[23rem] ",children:[s.jsx("h1",{className:"text-2xl font-semibold font-serif pb-7",children:t}),h&&s.jsx("p",{className:"text-red-600",children:"Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu."}),s.jsxs("div",{className:"form-login w-full ",children:[s.jsxs("div",{className:"flex flex-col py-2",children:[s.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Email"}),s.jsx("div",{className:"relative",children:s.jsx("input",{type:"email",name:"email",placeholder:"Email Address",className:"pl-3 w-full h-[40px] rounded-md",value:a.email,onChange:e=>r(e)})})]}),s.jsxs("div",{className:"flex flex-col py-2",children:[s.jsx("label",{htmlFor:"",className:"font-normal text-x",children:"Password"}),s.jsx("div",{className:"relative",children:s.jsx("input",{type:"password",name:"password",placeholder:"Your Password",className:"pl-3 w-full h-[40px] rounded-md",value:a.password,onChange:e=>r(e)})})]}),s.jsx(d,{to:"/forgotPass",className:"text-blue-600 text-sm font-normal",children:"Forgot Password?"}),s.jsx("button",{className:"bg-[#133FA0] w-full h-12 rounded-md text-white my-3 text-[1.2rem] font-normal",onClick:u,children:"Login"}),s.jsxs("div",{className:"flex items-center w-full ",children:[s.jsx("span",{className:"flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"}),s.jsx("span",{className:"uppercase font-semibold",children:"OR"}),s.jsx("span",{className:"flex-grow-[1] h-[1px] bg-slate-500 mx-2 opacity-40"})]})]}),s.jsx(v,{})]})]})},E=()=>{const t=N(n=>n.user);return console.log(t),s.jsx(b,{children:s.jsx(y,{Title:"Login",titleBtn:"Login"})})};export{E as default};
