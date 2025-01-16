import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      console.log('Message sent: ', result.text);
      toast('Email enviado con éxito', {
        autoClose: 1000,
        position: 'bottom-center',
        theme: 'light',
        transition: Flip,
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message: ', error);
      toast.error('Failed to send message.');
    }
  };

  return (

    <div className='w-full h-auto mb-20 pt-20'>
      <div className='bg-gray-800 w-5/12 rounded-lg mx-auto '>

        <h1 className="text-3xl sm:text-4xl pt-8 text-center uppercase mb-2">
          <span className=" bg-gradient-to-r from-pink-500 to-red-600 text-transparent bg-clip-text">
            contact{' '}
          </span>
          <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text">
            Me!
          </span>{' '}
        </h1>
        <div className="flex justify-center mb-12">
          <form
            className="flex flex-col w-full sm:w-9/12"
            onSubmit={handleSubmit}
          >
            <label
              className="font-bold text-lg sm:text-xl text-gray-400"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border border-teal-500 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 placeholder-gray-400 mb-4"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            <label
              className="font-bold text-lg sm:text-xl  text-gray-400"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-purple-500 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 placeholder-gray-400 mb-4"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <label
              className="font-bold text-lg sm:text-xl  text-gray-400"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="border border-pink-500 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700 placeholder-gray-400 resize-none mb-4"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
            />
            <div className=" w-full p-2 flex gap-5 mb-10">

              <button type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600  text-sm font-medium rounded-lg shadow-lg hover:scale-105 hover:text-black hover:from-cyan-600 hover:to-teal-500 transition-transform duration-200 text-white flex justify-center gap-2 items-center p-3 cursor-pointer"
                disabled>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Send
              </button>
            </div>

          </form>
        </div>
        <ToastContainer />
      </div>
    </div>

  );
};

export { CTA };
