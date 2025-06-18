import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center bg-blue-600 h-[100vh] ">
      <div className="w-[433px] h-[374px] flex flex-col items-center border  border-[#FB2E86]">
        <div className="my-3 text-center">
            <p className="text-[32px] font-bold">
                Login
            </p>
            <p>Please login using account detail bellow.</p>
        </div>
        <div>inputs</div>

        <button className="primary-btn">button</button>
      </div>
    </div>
  );
}

export default Login;
