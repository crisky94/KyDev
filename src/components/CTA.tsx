import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const CTA = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.PUBLIC_EMAILJS_USER_ID
      );
      console.log('Message sent:', result.text);

      toast.success('Message sent successfully!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');

      toast.error('Failed to send message. Please try again.', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className="flex justify-center items-center w-full h-auto mb-8 sm:pt-10">
      <div className="bg-gray-800 w-72 rounded-lg mx-auto p-3 sm:p-4">
        <h1 className="text-lg sm:text-xl text-center uppercase mb-4">
          <span className="bg-gradient-to-r from-pink-500 to-red-600 text-transparent bg-clip-text">
            Contact{' '}
          </span>
          <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text">
            Me!
          </span>
        </h1>
        <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
          <label className="font-bold text-sm text-gray-400" htmlFor="name">
            Name
          </label>
          <input
            className="border border-teal-500 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-teal-400 text-gray-700 placeholder-gray-400"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <label className="font-bold text-sm text-gray-400" htmlFor="email">
            Email
          </label>
          <input
            className="border border-purple-500 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-purple-400 text-gray-700 placeholder-gray-400"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <label className="font-bold text-sm text-gray-400" htmlFor="message">
            Message
          </label>
          <textarea
            className="border border-pink-500 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-pink-400 text-gray-700 placeholder-gray-400 resize-none"
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
          />
          {error && <div className="text-red-500 text-center mt-2 text-xs">{error}</div>}
          <div className="w-full flex justify-center mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-xs font-medium rounded-lg shadow-lg hover:scale-105 hover:text-black hover:from-cyan-600 hover:to-teal-500 transition-transform duration-200 text-white flex justify-center gap-2 items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 animate-spin">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Send
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Lado derecho con texto gracioso */}
      <div className="mr-12 text-center">
      <p className="text-md">If you're looking for creative and effective solutions for your business.</p>  
<p className="text-md mt-4">Together, we can achieve great things.</p>  
<p className="mt-4">Shall we talk?</p>  

  <img 
    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWU2YWNtbnpza2wyYXFtb2Q2OHVya2R2b20yMWVsZmgwZm1xMWc4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iz30qSwSKKCnC/giphy.gif" 
    alt="Funny Animation"
    className="mt-4 w-40 h-40 object-cover rounded-full mx-auto"
  />
</div>


      <ToastContainer />
    </div>
  );
};

export { CTA };
