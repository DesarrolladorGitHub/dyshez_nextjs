"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

  const handleContinue = () => {
    setStep(1);
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-between shadow h-full">
      {step == 0 ? (
        <div className="h-full flex-1 shadow p-10">
          <div className="flex flex-row justify-between text-lg font-bold">
            <label className="text-black pb-2">Forgot Password</label>
          </div>
          <div className="text-sm text-gray">
            Enter the email associated with your account and we will send you an
            email with instructions for forgetting your password
          </div>
          <div className="mt-10 flex flex-col gap-5">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                >
                  <path
                    d="M16.5 3.35449V10.8545C16.5 11.3518 16.3025 11.8287 15.9508 12.1803C15.5992 12.5319 15.1223 12.7295 14.625 12.7295H3.375C2.87772 12.7295 2.40081 12.5319 2.04917 12.1803C1.69754 11.8287 1.5 11.3518 1.5 10.8545V3.35449"
                    stroke="#858585"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 3.35449C16.5 2.85721 16.3025 2.3803 15.9508 2.02867C15.5992 1.67704 15.1223 1.47949 14.625 1.47949H3.375C2.87772 1.47949 2.40081 1.67704 2.04917 2.02867C1.69754 2.3803 1.5 2.85721 1.5 3.35449L8.00625 7.41699C8.30425 7.60324 8.64859 7.702 9 7.702C9.35141 7.702 9.69575 7.60324 9.99375 7.41699L16.5 3.35449Z"
                    stroke="#858585"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
                placeholder="Email *"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="flex flex-row gap-2 bg-primary hover:bg-primary-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleContinue}
            >
              <span className="text-white">Continuar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M9.9043 2.6543L16.2499 8.99995L9.9043 15.3456"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2499 9L2.75 9"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center text-xs">
            Remember Password?
            <a href="/" className=" text-primary ml-1">
              Login
            </a>
          </div>
        </div>
      ) : (
        <div className="h-full flex-1 shadow p-10">
          <div className="flex flex-row justify-between text-lg font-bold">
            <label className="text-black pb-2">Reset Password</label>
          </div>
          <div className="text-sm text-gray">Enter new password</div>
          <div className="flex flex-col gap-5 mt-10">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M12.75 6.85449H5.25C4.21447 6.85449 3.375 7.69396 3.375 8.72949V14.3545C3.375 15.39 4.21447 16.2295 5.25 16.2295H12.75C13.7855 16.2295 14.625 15.39 14.625 14.3545V8.72949C14.625 7.69396 13.7855 6.85449 12.75 6.85449Z"
                    stroke="#858585"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M9 1.22949C8.00544 1.22949 7.05161 1.62458 6.34835 2.32784C5.64509 3.0311 5.25 3.98493 5.25 4.97949V6.85449H12.75V4.97949C12.75 3.98493 12.3549 3.0311 11.6517 2.32784C10.9484 1.62458 9.99456 1.22949 9 1.22949V1.22949Z"
                    stroke="#858585"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
                placeholder="Contraseña *"
              />
            </div>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M12.75 6.85449H5.25C4.21447 6.85449 3.375 7.69396 3.375 8.72949V14.3545C3.375 15.39 4.21447 16.2295 5.25 16.2295H12.75C13.7855 16.2295 14.625 15.39 14.625 14.3545V8.72949C14.625 7.69396 13.7855 6.85449 12.75 6.85449Z"
                    stroke="#858585"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M9 1.22949C8.00544 1.22949 7.05161 1.62458 6.34835 2.32784C5.64509 3.0311 5.25 3.98493 5.25 4.97949V6.85449H12.75V4.97949C12.75 3.98493 12.3549 3.0311 11.6517 2.32784C10.9484 1.62458 9.99456 1.22949 9 1.22949V1.22949Z"
                    stroke="#858585"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="verifyPassword"
                className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
                placeholder="Verificar contraseña *"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="flex flex-row gap-2 bg-primary hover:bg-primary-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <span className="text-white">Continuar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M9.9043 2.6543L16.2499 8.99995L9.9043 15.3456"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2499 9L2.75 9"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center text-xs">
            Remember Password?
            <a href="/" className=" text-primary ml-1">
              Login
            </a>
          </div>
        </div>
      )}

      <div className="h-full">
        <Image src={"/images/bg-login.png"} alt="" width={520} height={712} />
      </div>
    </main>
  );
}
