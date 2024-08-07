import React from 'react';
import { useForm } from "react-hook-form"



function Contact  ()  {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,

        };
        try {
           await axios.post("https://getform.io/f/bkkgdpob", userInfo);
           toast.success("Your message has been sent");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
      }
   
    };  
  return (
   <>
    <div name="Contact" className='max-w-screen-6xl container mx-auto px-4 md:px-[600px] my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Please fill out the from below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5 '>
            <form onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bkkgdpob" method="POST"
             className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700 ' htmlFor='name'>
                        Full Name
                    </label>
                    <input input {...register("name", { required: true })} className='shadow rounded-lg appearance border rounded  py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                      name='name' id='name'
                    placeholder='Enter your fullname' />
                          {errors.name && <span>This field is required</span>}

                          

                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700 ' htmlFor='name'>
                        Email Address
                    </label>
                    <input  input {...register("email", { required: true })} className='shadow rounded-lg appearance border rounded  py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline'
                    type="text" name='email' id='name'
                    placeholder='Enter your email address' /> 
                          {errors.email && <span>This field is required</span>}

                        

                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700 ' htmlFor='name'>
                        Message
                    </label>
                    <textarea input {...register("message", { required: true })} className='shadow rounded-lg appearance border rounded  py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline'
                    type="text"  name='message' id='name'
                    placeholder='Enter your query' />
                          {errors.email && <span>This field is required</span>}

                          

                </div>
                <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300' >Send</button>
            </form>
        </div>

    </div>
   </>
  )
}

export default Contact
