
const Register = () => {
    
    return (
        <div className="p-8 rounded shadow-md w-96">
          <h2 className="text-4xl font-semibold mb-4 text-gray-300">Register</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-200">Username</label>
              <input type="text" id="username" name="username" className="border border-gray-300 w-full p-2 rounded bg-brown-primary2 focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-200">Password</label>
              <input type="password" id="password" name="password" className="border border-gray-300 w-full p-2 rounded bg-brown-primary2 focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-200">Confirm Password</label>
              <input type="password" id="password" name="password" className="border border-gray-300 w-full p-2 rounded bg-brown-primary2 focus:outline-none" />
            </div>
            <button
              type="submit"
              className="text-lg bg-red-accent1 font-semibold hover:bg-brown-600 text-brown-primary1 py-2 px-4 rounded">
              Sign up
            </button>
          </form>
        </div>
    );
  };
  
  export default Register;
  