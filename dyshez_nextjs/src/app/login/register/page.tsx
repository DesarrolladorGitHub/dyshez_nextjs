
export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between shadow h-full">
      <div className="h-full flex-1 shadow p-10">
        <div className="flex flex-row justify-between text-2xl font-bold">
          <a
            href="/login"
            className="hover:border-b-2 hover:text-black text-gray pb-2"
          >
            Login
          </a>
          <a href="/login/registro" className="border-b-2 text-black pb-2">
            Register
          </a>
        </div>
        <div className="mt-10 text-center">
          Únete a la revolución, para comenzar a utilizar la plataforma ingresa
          los siguientes datos y se parte del movimiento de Dyshez.
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  d="M1.4375 16.5V15.5625C1.4375 14.7007 1.60724 13.8473 1.93704 13.0511C2.26684 12.2549 2.75023 11.5315 3.35961 10.9221C3.969 10.3127 4.69244 9.82934 5.48864 9.49954C6.28484 9.16974 7.1382 9 8 9C8.8618 9 9.71516 9.16974 10.5114 9.49954C11.3076 9.82934 12.031 10.3127 12.6404 10.9221C13.2498 11.5315 13.7332 12.2549 14.063 13.0511C14.3928 13.8473 14.5625 14.7007 14.5625 15.5625V16.5"
                  stroke="#858585"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 9C8.99456 9 9.94839 8.60491 10.6517 7.90165C11.3549 7.19839 11.75 6.24456 11.75 5.25C11.75 4.25544 11.3549 3.30161 10.6517 2.59835C9.94839 1.89509 8.99456 1.5 8 1.5C7.00544 1.5 6.05161 1.89509 5.34835 2.59835C4.64509 3.30161 4.25 4.25544 4.25 5.25C4.25 6.24456 4.64509 7.19839 5.34835 7.90165C6.05161 8.60491 7.00544 9 8 9V9Z"
                  stroke="#858585"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
              placeholder="Nombre(s) *"
            />
          </div>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  d="M1.4375 16.5V15.5625C1.4375 14.7007 1.60724 13.8473 1.93704 13.0511C2.26684 12.2549 2.75023 11.5315 3.35961 10.9221C3.969 10.3127 4.69244 9.82934 5.48864 9.49954C6.28484 9.16974 7.1382 9 8 9C8.8618 9 9.71516 9.16974 10.5114 9.49954C11.3076 9.82934 12.031 10.3127 12.6404 10.9221C13.2498 11.5315 13.7332 12.2549 14.063 13.0511C14.3928 13.8473 14.5625 14.7007 14.5625 15.5625V16.5"
                  stroke="#858585"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 9C8.99456 9 9.94839 8.60491 10.6517 7.90165C11.3549 7.19839 11.75 6.24456 11.75 5.25C11.75 4.25544 11.3549 3.30161 10.6517 2.59835C9.94839 1.89509 8.99456 1.5 8 1.5C7.00544 1.5 6.05161 1.89509 5.34835 2.59835C4.64509 3.30161 4.25 4.25544 4.25 5.25C4.25 6.24456 4.64509 7.19839 5.34835 7.90165C6.05161 8.60491 7.00544 9 8 9V9Z"
                  stroke="#858585"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="lastName"
              className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
              placeholder="Apellidos *"
            />
          </div>

          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M11.8125 1.5H6.1875C5.15197 1.5 4.3125 2.33947 4.3125 3.375V14.625C4.3125 15.6605 5.15197 16.5 6.1875 16.5H11.8125C12.848 16.5 13.6875 15.6605 13.6875 14.625V3.375C13.6875 2.33947 12.848 1.5 11.8125 1.5Z"
                  stroke="#797979"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="8.14551"
                  y1="13.1333"
                  x2="9.85376"
                  y2="13.1333"
                  stroke="#797979"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="celphone"
              className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
              placeholder="123 456 7890 *"
            />
          </div>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M11.0264 15.6465L11.0346 15.6522C11.743 16.1033 12.584 16.2991 13.4187 16.2074C14.2534 16.1158 15.0319 15.7421 15.6255 15.1481L16.1411 14.6324C16.2554 14.5182 16.346 14.3826 16.4079 14.2334C16.4697 14.0841 16.5015 13.9242 16.5015 13.7626C16.5015 13.6011 16.4697 13.4411 16.4079 13.2919C16.346 13.1426 16.2554 13.007 16.1411 12.8928L13.9662 10.7196C13.852 10.6053 13.7164 10.5146 13.5672 10.4528C13.4179 10.3909 13.2579 10.3591 13.0964 10.3591C12.9348 10.3591 12.7749 10.3909 12.6256 10.4528C12.4764 10.5146 12.3408 10.6053 12.2266 10.7196C11.996 10.9501 11.6833 11.0796 11.3572 11.0796C11.0311 11.0796 10.7184 10.9501 10.4878 10.7196L7.01026 7.24117C6.77973 7.01057 6.65022 6.69785 6.65022 6.37178C6.65022 6.04572 6.77973 5.733 7.01026 5.5024C7.12453 5.3882 7.21518 5.2526 7.27703 5.10336C7.33887 4.95412 7.37071 4.79415 7.37071 4.6326C7.37071 4.47104 7.33887 4.31108 7.27703 4.16183C7.21518 4.01259 7.12453 3.87699 7.01026 3.7628L4.83617 1.58953C4.60557 1.359 4.29285 1.22949 3.96678 1.22949C3.64071 1.22949 3.32799 1.359 3.09739 1.58953L2.58092 2.10518C1.98706 2.69885 1.6135 3.47737 1.52198 4.31208C1.43046 5.1468 1.62645 5.98776 2.07757 6.69601L2.08249 6.70421C4.46495 10.2291 7.50105 13.2647 11.0264 15.6465V15.6465Z"
                  stroke="#858585"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="phone"
              className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
              placeholder="123 456 7890"
            />
          </div>

          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9.00118 16.2295C10.4844 16.2293 11.9343 15.7892 13.1675 14.965C14.4007 14.1408 15.3618 12.9695 15.9293 11.5991C16.4968 10.2287 16.6453 8.72078 16.3558 7.26603C16.0664 5.81128 15.3521 4.47502 14.3033 3.42619C13.2545 2.37737 11.9182 1.66309 10.4635 1.37366C9.00872 1.08424 7.50082 1.23266 6.13042 1.80017C4.76002 2.36769 3.58867 3.3288 2.76447 4.56198C1.94027 5.79517 1.50023 7.24506 1.5 8.72832C1.49985 9.71343 1.69376 10.6889 2.07068 11.5991C2.44759 12.5092 3.00012 13.3362 3.6967 14.0328C4.39328 14.7294 5.22026 15.2819 6.13042 15.6588C7.04057 16.0357 8.01606 16.2296 9.00118 16.2295V16.2295Z"
                  stroke="#797979"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.87646 11.0811H15.9118"
                  stroke="#797979"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.87646 6.37549H15.9118"
                  stroke="#797979"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.38233 1.40479C6.03619 6.26177 6.23437 11.4172 7.94939 16.1565"
                  stroke="#797979"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6177 1.40479C11.2057 3.5185 11.5026 5.70257 11.5001 7.89655C11.506 10.7128 11.0187 13.5084 10.0601 16.1565"
                  stroke="#797979"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="web"
              className="bg-gray-50 border border-light text-gray-900 text-sm rounded-3xl block w-full ps-10 p-2.5"
              placeholder="Sitio web"
            />
          </div>
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
        <div className="flex justify-center mt-5">
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded"
            />
            <label className="ms-2 text-sm font-medium text-gray-900">
            Acepto los términos y condiciones
            </label>
          </div>
        </div>
        <div className="flex justify-center mt-5">
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
        <div className="flex justify-center mt-5">
          <a href="#" className="text-xs text-gray">
            Si ya tienes un restaurante en Dyshez y quieres agregar una nueva
            sucursal, conoce cómo hacerlo
          </a>
        </div>
      </div>
    </main>
  );
}
