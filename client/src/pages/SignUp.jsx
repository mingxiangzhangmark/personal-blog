import { Link, useNavigate } from "react-router-dom";
import {  Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      // toast.error("Please fill out all fields.");
      setLoading(false);
      return setErrorMessage('Please fill out all fields.');
      
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // toast.error("An error occurred. Please try again.");
        setLoading(false);
        return setErrorMessage('Account already exists. Please sign in.');
        
      }
      setLoading(false);
      if(res.ok) {
        navigate('/signIn');
        toast.success("Account created successfully.");
      }
    } catch (error) {
      // toast.error("An error occurred. Please try again.");
      console.log(error);
      setErrorMessage('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center  gap-5">
          {/* left */}
          <div className="flex-1">
             <Link to="/" className="whitespace-nowrap font-bold dark:text-white text-4xl">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Mark&apos;s</span>
                Blog
            </Link>
            <p className="mt-5 pr-2 text-xl font-light italic ">
            &quot;Join our IT community and stay ahead with the latest tech insights, tutorials, and industry trends. Sign up today to unlock exclusive content!&quot;
            </p>
          </div>

          {/* right */}
          <div className="flex-1">
            <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
              <div>
                 <Label value="Your username"/>
              <TextInput placeholder="Username" type='text' id="username" onChange={handleChange} />
              </div>
             <div>
              <Label value="Your email"/>
              <TextInput placeholder="Email" type='email' id="email" onChange={handleChange} />
             </div>
              <div>
                <Label value="Your password"/> 
              <TextInput placeholder="Password" type='password' id="password" onChange={handleChange} />
              </div>
              
              {/* <Label value="Confirm password"/>
              <TextInput placeholder="Confirm password" type='password' id="confirm-password" className="mb-3"/> */}
              <Button gradientDuoTone="purpleToPink" type="submit" className="mt-2" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
              </Button>
            </form>
            <div className="mt-3 flex gap-2">
              <span className="text-sm">Already have an account?</span>
              <Link to="/signIn" className="text-blue-500 text-sm hover:text-blue-700 ">
               Sign In
              </Link>
            </div>
                {errorMessage && (
                  <Alert className='mt-5' color='failure'>
                    {errorMessage}
                  </Alert>
                )}
         
          </div>
      </div>
  </div>
  )
}
