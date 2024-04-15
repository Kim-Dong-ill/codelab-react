import React from "react";
import "./assets/css/tStyle.scss";

function App() {
  return (
    <>
      {/* <div
        className="
      container mx-auto bg-screaminGreen-600 text-white rounded-md p-4 text-2xl hover:bg-screaminGreen-900 grid grid-cols-1 md:grid-cols-3 gap-3
      "
      >
        <div className="bg-screaminGreen-400 p-4 rounded-md">test1</div>
        <div className="bg-screaminGreen-400 p-4 rounded-md">test2</div>
        <div className="bg-screaminGreen-400 p-4 rounded-md">test3</div>
        <div className="bg-screaminGreen-400 p-4 rounded-md md:hidden">
          test4
        </div>
      </div> */}
      <section className="flex  mt-20 max-w-[400px] m-auto mb-10">
        <div className="bg-white shadow-md rounded-md border p-6 w-full">
          <h1 className="text-center text-2xl font-semibold mb-4">로그인</h1>
          <hr className="mb-6" />
          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-500 mb-2 flex"
            >
              이메일
            </label>
            <input
              type="text"
              id="email"
              className="w-full bg-white border rounded-md p-2 text-xs mb-6"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              htmlFor="pwd"
              className="text-sm font-semibold text-gray-500 mb-2 flex"
            >
              패쓰워드
            </label>
            <input
              type="text"
              id="password"
              className="w-full bg-white border rounded-md p-2 text-xs mb-6"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="w-full text-xs text-white bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-900">
              회원가입
            </button>
          </div>
        </div>
      </section>

      <table class="table-auto border-collapse border border-slate-300 border-spacing-2 border-separate">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-slate-300">Song</th>
            <th className="border border-slate-300">Artist</th>
            <th className="border border-slate-300">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border border-slate-300">Malcolm Lockyer</td>
            <td className="border border-slate-300">1961</td>
          </tr>
          <tr>
            <td className="border border-slate-300">Witchy Woman</td>
            <td className="border border-slate-300">The Eagles</td>
            <td className="border border-slate-300">1972</td>
          </tr>
          <tr>
            <td className="border border-slate-300">Shining Star</td>
            <td className="border border-slate-300">Earth, Wind, and Fire</td>
            <td className="border border-slate-300">1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
