import './App.css'
import './index.css'


function App() {
  return (
    <>
      <div className="mt-20">
        <h2 className="mt-10 mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-rose-950">
          Sign in to your account
        </h2>
        <form
          className="flex flex-col items-center justify-center"
          // onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-rose-950 text-left"
            >
              Your email
            </label>
            <input
              // value={loginForm.email}
              // onChange={(e) =>
              //   setLoginForm({ ...loginForm, email: e.target.value })
              // }
              type="email"
              id="email"
              className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-slate-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rose-950 hover:border-rose-300"
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-rose-950 text-left"
            >
              Your password
            </label>
            <input
              // value={loginForm.password}
              // onChange={(e) =>
              //   setLoginForm({ ...loginForm, password: e.target.value })
              // }
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block p-2.5 dark:bg-slate-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rose-950 dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-rose-300"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-2 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-80 px-5 py-2.5 text-center dark:bg-rose-950 dark:hover:bg-rose-950 dark:focus:ring-slate-900"
            // disabled={loading}
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  )
}

export default App
