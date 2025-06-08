import emailjs from 'emailjs-com';

export const post = async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
        // Enviar correo a través de EmailJS
        await emailjs.send(
            import.meta.env.PUBLIC_EMAILJS_SERVICE_ID, // ID del servicio
            import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID, // ID de la plantilla
            {
                name,
                email,
                message,
            },
            import.meta.env.PUBLIC_EMAILJS_USER_ID // ID de usuario de EmailJS
        );

        // Respuesta exitosa
        return new Response(
            JSON.stringify({ message: 'Correo enviado exitosamente' }),
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error('Error enviando el correo:', error);

        // Respuesta de error
        return new Response(
            JSON.stringify({ message: 'Hubo un problema al enviar el correo' }),
            {
                status: 500,
            }
        );
    }
};