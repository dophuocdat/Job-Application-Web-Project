import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex max-md:h-screen ">
        <div className="left w-1/3 h-screen bg-blue-500 object-cover drop-shadow-2xl max-md:hidden">
          <div className="logo w-full flex items-center justify-center py-10">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="right w-2/3 bg-slate-300 grid place-content-center relative max-md:w-full">
          <FormContent
            Title={Title}
            titleInput={titleInput}
            titleBtn={titleBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;