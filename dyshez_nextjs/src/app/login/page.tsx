"use client";
import Image from "next/image";
import { signInWithGoogle } from "../../utils/authProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { supabase } from "@/utils/supabaseClient";

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  
  const login = async () => {
    const data = {
      email,
      password,
    }
  
    const { error } = await supabase.auth.signInWithPassword(data)
  
    if (error) {
      toast.error(`Error auth ${error}`)
    }else{
      router.push("/home")
    }
  }

  return (
    <main className="flex flex-col md:flex-row items-center justify-between shadow h-full">
      <ToastContainer />
      <div className="h-full flex-1 shadow p-10">
        <div className="flex flex-row justify-between text-2xl font-bold">
          <a href="/login" className="border-b-2 text-black pb-2">
            Login
          </a>
          <a
            href="/login/register"
            className="hover:border-b-2 hover:text-black text-gray pb-2"
          >
            Register
          </a>
        </div>
        <div className="mt-10 text-center">
          Ingresa con tu correo electrónico o tu número de teléfono
        </div>
        <div className="mt-24 flex flex-col gap-5">
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
                  d="M12.5279 11.5538L12.1699 11.0426L11.7491 11.5035C11.0661 12.2517 10.0873 12.7188 9 12.7188C6.94528 12.7188 5.28125 11.0547 5.28125 9C5.28125 6.94528 6.94528 5.28125 9 5.28125C9.89355 5.28125 10.7103 5.59412 11.3477 6.11703L11.7792 6.47097L12.0838 6.00341C12.1478 5.90514 12.2544 5.84375 12.375 5.84375C12.5664 5.84375 12.7188 5.99606 12.7188 6.1875V9V9.98438C12.7188 11.1148 13.6352 12.0312 14.7656 12.0312C15.8961 12.0312 16.8125 11.1148 16.8125 9.98438V9C16.8125 4.6844 13.3156 1.1875 9 1.1875C4.6844 1.1875 1.1875 4.6844 1.1875 9C1.1875 13.3156 4.6844 16.8125 9 16.8125C9.19144 16.8125 9.34375 16.9648 9.34375 17.1562C9.34375 17.3477 9.19144 17.5 9 17.5C4.30505 17.5 0.5 13.695 0.5 9C0.5 4.30505 4.30505 0.5 9 0.5C13.695 0.5 17.5 4.30505 17.5 9V9.98438C17.5 11.4942 16.2754 12.7188 14.7656 12.7188C13.8419 12.7188 13.0217 12.2588 12.5279 11.5538ZM12.0312 9C12.0312 8.19606 11.7119 7.42505 11.1434 6.85658C10.5749 6.28811 9.80394 5.96875 9 5.96875C8.19606 5.96875 7.42505 6.28811 6.85658 6.85658C6.28811 7.42505 5.96875 8.19606 5.96875 9C5.96875 9.80394 6.28811 10.5749 6.85658 11.1434C7.42505 11.7119 8.19606 12.0312 9 12.0312C9.80394 12.0312 10.5749 11.7119 11.1434 11.1434C11.7119 10.5749 12.0312 9.80394 12.0312 9Z"
                  stroke="#858585"
                />
              </svg>
            </div>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
              placeholder="Correo o teléfono"
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
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={login}
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
        <div className="flex justify-center">
          <a href="/forgot-password" className="text-xs text-gray">
            ¿Cambiaste tu teléfono?
          </a>
        </div>
        <div className="flex justify-center flex-row mt-32 w-full gap-2">
          {/* <button
            type="button"
            className="w-1/3 justify-center flex flex-row gap-2 bg-light hover:bg-primary-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
            >
              <path
                d="M11.5125 2.08854C13.0894 0.0101326 15.2817 0 15.2817 0C15.2817 0 15.6078 1.95405 14.0412 3.83643C12.3685 5.84639 10.4673 5.5175 10.4673 5.5175C10.4673 5.5175 10.1102 3.93673 11.5125 2.08854ZM10.6678 6.88631C11.4791 6.88631 12.9847 5.77117 14.9444 5.77117C18.3179 5.77117 19.6449 8.17157 19.6449 8.17157C19.6449 8.17157 17.0494 9.49863 17.0494 12.7187C17.0494 16.3511 20.2827 17.603 20.2827 17.603C20.2827 17.603 18.0225 23.9648 14.9696 23.9648C13.5674 23.9648 12.4772 23.0198 10.9998 23.0198C9.49417 23.0198 8.00006 24 7.02694 24C4.23913 24.0001 0.717163 17.9653 0.717163 13.1143C0.717163 8.3417 3.69828 5.83804 6.49444 5.83804C8.3122 5.83804 9.7228 6.88631 10.6678 6.88631Z"
                fill="#0C0C0C"
              />
            </svg>
          </button> */}
          <button
            type="button"
            onClick={() => {
              //toast('Redirecting...')
              signInWithGoogle();
            }}
            className="w-1/3 justify-center flex flex-row gap-2 bg-light hover:bg-primary-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_4061_54375)">
                <path
                  d="M12.24 9.81836V14.4657H18.6982C18.4146 15.9602 17.5636 17.2257 16.2872 18.0766L20.1818 21.0985C22.4509 19.004 23.76 15.9276 23.76 12.273C23.76 11.4221 23.6836 10.6039 23.5418 9.81849L12.24 9.81836Z"
                  fill="#4285F4"
                />
                <path
                  d="M5.51487 14.2842L4.6365 14.9566L1.52734 17.3784C3.50189 21.2947 7.54889 24.0002 12.2398 24.0002C15.4797 24.0002 18.1961 22.9311 20.1816 21.0984L16.287 18.0766C15.2179 18.7966 13.8543 19.233 12.2398 19.233C9.11979 19.233 6.46894 17.1275 5.51978 14.2911L5.51487 14.2842Z"
                  fill="#34A853"
                />
                <path
                  d="M1.5273 6.62207C0.709157 8.23656 0.240112 10.0584 0.240112 12.0002C0.240112 13.942 0.709157 15.7639 1.5273 17.3784C1.5273 17.3892 5.52012 14.2802 5.52012 14.2802C5.28012 13.5602 5.13826 12.7966 5.13826 12.0001C5.13826 11.2036 5.28012 10.44 5.52012 9.72002L1.5273 6.62207Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.24 4.7782C14.0073 4.7782 15.5782 5.3891 16.8328 6.56731L20.2691 3.13097C18.1855 1.18917 15.4801 0 12.24 0C7.54914 0 3.5019 2.69456 1.52734 6.62186L5.52004 9.72007C6.46908 6.88366 9.12004 4.7782 12.24 4.7782Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_4061_54375">
                  <rect
                    width="23.52"
                    height="24"
                    fill="white"
                    transform="translate(0.23999)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          {/* <button
            type="button"
            className="w-1/3 justify-center flex flex-row gap-2 bg-light hover:bg-primary-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5 0C19.1281 0 24.5 5.37188 24.5 12C24.5 17.9906 20.1125 22.9547 14.375 23.8547V15.4688H17.1711L17.7031 12H14.375V9.75C14.375 8.80078 14.8391 7.875 16.3297 7.875H17.8438V4.92188C17.8438 4.92188 16.4703 4.6875 15.1578 4.6875C12.4156 4.6875 10.625 6.34922 10.625 9.35625V12H7.57812V15.4688H10.625V23.8547C4.8875 22.9547 0.5 17.9906 0.5 12C0.5 5.37188 5.87188 0 12.5 0Z"
                fill="#1877F2"
              />
            </svg>
          </button> */}
        </div>
      </div>
      <div className="h-full">
        <Image src={"/images/bg-login.png"} alt="" width={520} height={712} />
      </div>
    </main>
  );
}
