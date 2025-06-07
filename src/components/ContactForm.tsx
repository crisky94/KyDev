// src/components/ContactForm.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/contactForm.css"
// Importa el CSS si lo manejas por separado para el componente React
// import '../styles/ContactForm.css'; // Si tienes estilos específicos para el formulario aquí

interface FormData {
  name: string;
  email: string;
  subject: string; // Asegúrate de que el campo subject esté aquí
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '', // Inicializar subject
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
    // Lógica para agregar/quitar la clase 'focused' si el campo tiene contenido
    if (e.target.value) {
      e.target.parentElement?.classList.add('focused');
    } else {
      e.target.parentElement?.classList.remove('focused');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.PUBLIC_EMAILJS_USER_ID
      );
      console.log('Message sent:', result.text);
  toast.success('✓ Message sent successfully!', {
        position: "top-right", // Cambiado a top-right para que se vea mejor
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark", // Puedes mantener 'dark' o 'light' según el resto de tu tema
        className: 'custom-toast-success', // Clase CSS personalizada
        bodyClassName: 'custom-toast-body', // Clase CSS para el contenido del texto
        progressClassName: 'custom-toast-progress', // Clase CSS para la barra de progreso (aunque hideProgressBar sea true)
      });

      setFormData({ name: '', email: '', subject: '', message: '' }); // Limpiar también el subject
      // Remover la clase 'focused' de todos los campos después de limpiar
      const inputs = document.querySelectorAll('.contact-form .form-group input, .contact-form .form-group textarea');
      inputs.forEach(input => {
          input.parentElement?.classList.remove('focused');
      });

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
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Aquí usamos las mismas clases CSS de tu esqueleto original
    <form className="contact-form text-reveal" onSubmit={handleSubmit}>
        <div className="form-header">
            <h3>Send me a message</h3>
            <p>Let's discuss your next project</p>
        </div>

        <div className="form-row">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <span className="form-line"></span>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <span className="form-line"></span>
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />
            <span className="form-line"></span>
        </div>

        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <span className="form-line"></span>
        </div>

        {error && <div style={{ color: 'red', textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>{error}</div>}

        <button type="submit" className="btn btn-primary magnetic" disabled={isSubmitting}>
            <span className="btn-text">
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <span className="btn-icon">
                {isSubmitting ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 animate-spin">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 0 0121.485 12 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                ) : (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                )}
            </span>
        </button>
        <ToastContainer />
    </form>
  );
};

export default ContactForm;