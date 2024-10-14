import LabeledInput from "../Elements/LabeledInput"

const FormSingIn = () => {
  return (
    <form action="">
            <div className="mb-6">
              <LabeledInput/>
            </div>
            <div className="mb-6">
              <LabeledInput/>
              <input
                type="password"
                className="py-3 ps-4 text-sm border rounded-md w-full bg-special-mainBg border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
                placeholder="************"
                name="password"
                id="password"
              />
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                className="text-sm accent-primary"
                name="status"
                id="status"
              />
              <label htmlFor="status" className="text-sm text-gray-01 ms-6">
                Keep me signed in
              </label>
            </div>
            <button
              className="h-12 rounded-md text-sm bg-primary w-full text-white"
              type="submit"
            >
              Login
            </button>
          </form>
  )
}

export default FormSingIn