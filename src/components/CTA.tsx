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

      // Mostrar notificación de éxito
      toast.success('Message sent successfully!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
      });

      // Limpiar el formulario
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');

      // Mostrar notificación de error
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
    <div id='contact' className="flex flex-col items-center w-full h-auto mb-8 sm:pt-10 p-6 md:p-12 gap-6 pt-20">
      {/* Texto introductorio */}
      <div className="text-center">
        <h2 className=" font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
          Let's Build Something Amazing! 
        </h2>
        <p className=" text-gray-300 mt-3">
          Looking for creative solutions? Let's connect and turn ideas into reality!
        </p>
      </div>

      {/* Formulario */}
      <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg border border-gray-700 shadow-2xl w-full max-w-lg rounded-xl mx-auto p-6 sm:p-8">
        <h1 className=" text-center font-bold uppercase tracking-wide mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Get In
          </span>
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">
            Touch
          </span>
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border border-cyan-400 rounded-lg py-2 px-4 bg-gray-800 text-white focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 transition duration-300"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            className="border border-purple-400 rounded-lg py-2 px-4 bg-gray-800 text-white focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition duration-300"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            className="border border-pink-400 rounded-lg py-2 px-4 bg-gray-800 text-white focus:ring-2 focus:ring-pink-400 placeholder-gray-400 transition duration-300 resize-none"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          {error && <div className="text-red-500 text-center mt-2 text-xs">{error}</div>}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-500 border border-white to-cyan-600 font-medium rounded-lg shadow-lg hover:scale-105 hover:from-cyan-600 hover:to-teal-500 transition-transform duration-200 text-white  flex justify-center items-center gap-2"
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
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export { CTA };