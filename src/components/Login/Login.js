import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {user,loginUser, isLoading, authError} = useAuth()
  const [data,setData] =useState({})
  // let navigate=useNavigate()
  const handleOnBlur = (e)=>{

      const field = e.target.name;
      const value = e.target.value;
      const newData ={...data};
      newData[field] =value;
      setData(newData);
      console.log(newData)

  }
  const handleSubmit = e =>{
      loginUser(data.email,data.password)
      // .then(()=>navigate('/'))
      e.preventDefault()
  }
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center bg-white">
  <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
            <form onSubmit={handleSubmit}>
   
    <input onBlur={handleOnBlur} type="email" name="email" className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="E-Mail" />
    <div className="flex flex-col space-y-1">
      <input onBlur={handleOnBlur} type="password" name="password" className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password" />
      <p className="font-bold text-[#0070ba]">Forgot password?</p>
    </div>
    <div className="flex flex-col space-y-5 w-full">
      <button type="submit" className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Log in</button>
      <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
        <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
      </div>
    </div>
 
</form>
      <Link to="/register" className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">Sign Up</Link>
  </div>

</div>
        </div>
    );
};

export default Login;