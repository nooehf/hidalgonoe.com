import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Validaciones del lado del servidor
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Todos los campos obligatorios (nombre, email, mensaje) son requeridos." },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { success: false, error: "El mensaje supera el límite máximo permitido de 1000 caracteres." },
        { status: 400 }
      );
    }

    // 1. Enviar correo de notificación a Noé (Diseño Centrado Premium)
    const notificationResult = await resend.emails.send({
      from: "Portfolio Contacto <no-reply@hidalgonoe.com>",
      to: "noehidalgofernandez@gmail.com",
      subject: `Nuevo contacto: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fafafa; padding: 60px 20px; margin: 0; text-align: center;">
          <!-- Google Fonts Import -->
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
          
          <div style="max-width: 520px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; padding: 48px; border-radius: 0px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01); text-align: center;">
            
            <!-- Logo Header -->
            <div style="margin-bottom: 40px; text-align: center;">
              <a href="https://www.hidalgonoe.com" style="text-decoration: none; font-size: 18px; font-weight: 700; color: #09090b; letter-spacing: -0.5px; font-family: 'Outfit', -apple-system, sans-serif; display: inline-block;">noé hidalgo.</a>
            </div>

            <!-- Title & Subtitle -->
            <h2 style="font-size: 26px; font-weight: 800; color: #09090b; letter-spacing: -0.8px; margin: 0 0 6px 0; font-family: 'Outfit', -apple-system, sans-serif; text-align: center;">💼 Nuevo Lead Registrado</h2>
            <p style="font-size: 10px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 40px 0; font-family: 'Outfit', -apple-system, sans-serif; text-align: center;">Ficha de contacto de la web</p>

            <!-- Table of Fields (Centered content) -->
            <div style="margin: 0 auto 32px auto; max-width: 400px; text-align: left; border-top: 1px solid #f4f4f5;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #09090b; font-family: 'Inter', sans-serif;">
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 14px 0; color: #71717a; width: 100px; font-weight: 500;">Nombre</td>
                  <td style="padding: 14px 0; font-weight: 600; color: #09090b; text-align: right;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 14px 0; color: #71717a; font-weight: 500;">Email</td>
                  <td style="padding: 14px 0; text-align: right;"><a href="mailto:${email}" style="color: #09090b; text-decoration: underline; font-weight: 600;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 14px 0; color: #71717a; font-weight: 500;">Empresa</td>
                  <td style="padding: 14px 0; color: #09090b; text-align: right;">${company || "No especificada"}</td>
                </tr>
              </table>
            </div>

            <!-- Message Block -->
            <div style="background-color: #fafafa; border: 1px solid #e4e4e7; padding: 24px; margin: 32px auto; max-width: 440px; text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #71717a; font-weight: 600; font-family: 'Outfit', sans-serif;">Mensaje</p>
              <div style="white-space: pre-wrap; font-size: 14px; color: #09090b; line-height: 1.6; font-style: italic; font-family: 'Inter', sans-serif; display: inline-block; text-align: left; width: 100%;">"${message}"</div>
            </div>

            <!-- Action Button to Reply -->
            <div style="margin-top: 32px; margin-bottom: 16px;">
              <a href="mailto:${email}" style="background-color: #09090b; color: #ffffff; text-decoration: none; padding: 12px 28px; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; display: inline-block; border-radius: 0px; font-family: 'Outfit', sans-serif;">Responder al Correo</a>
            </div>

            <!-- Footer matching site style -->
            <div style="margin-top: 48px; border-top: 1px solid #e4e4e7; padding-top: 24px; font-size: 10px; color: #a1a1aa; text-align: center; font-family: 'Inter', sans-serif; letter-spacing: 0.5px;">
              Mensaje automático enviado desde <a href="https://www.hidalgonoe.com" style="color: #71717a; text-decoration: underline;">hidalgonoe.com</a>
            </div>
          </div>
        </div>
      `,
    });

    if (notificationResult.error) {
      return NextResponse.json({ success: false, error: notificationResult.error.message }, { status: 500 });
    }

    // 2. Enviar correo de confirmación al usuario (Diseño Centrado Premium)
    try {
      await resend.emails.send({
        from: "Noé Hidalgo <no-reply@hidalgonoe.com>",
        to: email,
        subject: `He recibido tu mensaje, ${name}`,
        html: `
          <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fafafa; padding: 60px 20px; margin: 0; text-align: center;">
            <!-- Google Fonts Import -->
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
            
            <div style="max-width: 520px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; padding: 48px; border-radius: 0px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01); text-align: center;">
              
              <!-- Header Logo matching Navbar -->
              <div style="margin-bottom: 40px; text-align: center;">
                <a href="https://www.hidalgonoe.com" style="text-decoration: none; font-size: 18px; font-weight: 700; color: #09090b; letter-spacing: -0.5px; font-family: 'Outfit', -apple-system, sans-serif; display: inline-block;">noé hidalgo.</a>
              </div>

              <!-- Greeting & Subtext -->
              <h2 style="font-size: 28px; font-weight: 800; color: #09090b; letter-spacing: -0.8px; margin: 0 0 6px 0; font-family: 'Outfit', -apple-system, sans-serif; text-align: center;">¡Hola, ${name}!</h2>
              <p style="font-size: 10px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 32px 0; font-family: 'Outfit', -apple-system, sans-serif; text-align: center;">Mensaje recibido con éxito</p>

              <!-- Body Copy (Centered and readable) -->
              <div style="max-width: 440px; margin: 0 auto; text-align: center; font-family: 'Inter', sans-serif;">
                <p style="font-size: 15px; line-height: 1.8; color: #18181b; margin: 0 0 16px 0;">
                  Muchas gracias por ponerte en contacto conmigo a través de mi portfolio. Valoro enormemente tu interés en que colaboremos juntos.
                </p>
                <p style="font-size: 15px; line-height: 1.8; color: #18181b; margin: 0 0 32px 0;">
                  Estoy revisando los detalles de tu consulta y <strong>me comunicaré contigo en menos de 24 horas hábiles</strong> para darte una respuesta detallada o coordinar una breve llamada de valoración.
                </p>
              </div>

              <!-- Minimalist Centered Quote Box for Lead Reference -->
              <div style="background-color: #fafafa; border: 1px solid #e4e4e7; padding: 24px; margin: 32px auto; max-width: 440px; text-align: center;">
                <p style="margin: 0 0 8px 0; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #71717a; font-weight: 600; font-family: 'Outfit', sans-serif;">Copia de tu consulta</p>
                <div style="white-space: pre-wrap; font-size: 14px; color: #09090b; line-height: 1.6; font-style: italic; font-family: 'Inter', sans-serif; display: inline-block;">"${message}"</div>
              </div>

              <!-- Closing CTA Centered Link -->
              <div style="margin-top: 32px; margin-bottom: 24px; text-align: center; font-family: 'Inter', sans-serif;">
                <p style="font-size: 14px; color: #71717a; margin-bottom: 16px; margin-top: 0;">¿Quieres echar un vistazo a mis últimos trabajos mientras tanto?</p>
                <a href="https://www.hidalgonoe.com/proyectos" style="background-color: #09090b; color: #ffffff; text-decoration: none; padding: 12px 28px; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; display: inline-block; border-radius: 0px; font-family: 'Outfit', sans-serif;">Ver Proyectos</a>
              </div>

              <!-- Center Social/Contact Bar -->
              <div style="margin-top: 40px; margin-bottom: 24px; text-align: center; font-family: 'Inter', sans-serif;">
                <p style="margin: 0 0 16px 0; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #71717a; font-weight: 600; font-family: 'Outfit', sans-serif;">o contacta conmigo directamente</p>
                <div style="display: inline-block; text-align: center; line-height: 24px;">
                  
                  <!-- WhatsApp -->
                  <a href="https://wa.me/34644215725" target="_blank" rel="noopener noreferrer" style="text-decoration: none; display: inline-block; margin: 0 16px; vertical-align: middle;">
                    <img src="https://img.icons8.com/material-outlined/24/09090b/whatsapp.png" alt="WhatsApp" width="20" height="20" style="display: block; border: 0;" />
                  </a>

                  <!-- Email -->
                  <a href="mailto:noehidalgofernandez@gmail.com" style="text-decoration: none; display: inline-block; margin: 0 16px; vertical-align: middle;">
                    <img src="https://img.icons8.com/material-outlined/24/09090b/mail.png" alt="Email" width="20" height="20" style="display: block; border: 0;" />
                  </a>

                  <!-- LinkedIn -->
                  <a href="https://www.linkedin.com/in/no%C3%A9-hidalgo-fern%C3%A1ndez-67bb43231" target="_blank" rel="noopener noreferrer" style="text-decoration: none; display: inline-block; margin: 0 16px; vertical-align: middle;">
                    <img src="https://img.icons8.com/material-outlined/24/09090b/linkedin--v1.png" alt="LinkedIn" width="20" height="20" style="display: block; border: 0;" />
                  </a>

                </div>
              </div>

              <!-- Editorial Signature Perfectly Centered -->
              <div style="border-top: 1px solid #e4e4e7; padding-top: 32px; margin-top: 40px; text-align: center;">
                <p style="margin: 0; font-size: 16px; font-weight: 700; color: #09090b; letter-spacing: -0.3px; font-family: 'Outfit', sans-serif;">noé hidalgo.</p>
                <p style="margin: 6px 0 0 0; font-size: 10px; color: #71717a; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; font-family: 'Inter', sans-serif;">Estudiante de ADE & Desarrollador Full-Stack</p>
                <p style="margin: 12px 0 0 0; font-size: 12px; font-family: 'Inter', sans-serif;"><a href="https://www.hidalgonoe.com" style="color: #09090b; text-decoration: underline; font-weight: 600;">www.hidalgonoe.com</a></p>
              </div>

              <!-- Automated Message Notice -->
              <div style="margin-top: 24px; font-size: 10px; color: #a1a1aa; text-align: center; font-family: 'Inter', sans-serif; letter-spacing: 0.5px;">
                Este es un mensaje automático, por favor no respondas a este correo.
              </div>

            </div>
          </div>
        `,
      });
    } catch (confirmationError: any) {
      console.warn("No se pudo enviar el correo de confirmación debido a restricciones de sandbox de Resend:", confirmationError.message);
    }

    return NextResponse.json({ success: true, data: notificationResult.data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
