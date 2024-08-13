const Login = () => {

    return (
        <div className="w-full h-screen flex">
            <div className='flex flex-col items-center justify-center w-96 mx-auto'>
            <div className='w-full p-6 rounded-xl border'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Email</span>
                        </label>
                        <input type='text' placeholder='Enter email' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <div>
                        <button className='btn btn-block btn-sm mt-4'>Login</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};
export default Login;