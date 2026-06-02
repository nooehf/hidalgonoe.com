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

    // 1. Enviar correo de notificación a Noé
    const notificationResult = await resend.emails.send({
      from: "Portfolio Contacto <onboarding@resend.dev>",
      to: "noehidalgofernandez@gmail.com",
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; background-color: #0f172a; color: #f1f5f9; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #1e293b; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
          <h2 style="color: #6366f1; border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-top: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">💼 Nuevo Contacto en tu Portfolio</h2>
          <p style="color: #94a3b8; font-size: 14px; margin-top: 16px; line-height: 1.6;">Has recibido una nueva consulta de un cliente potencial a través del formulario de contacto.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; width: 140px; font-weight: 600;">Nombre:</td>
              <td style="padding: 10px 0; color: #f1f5f9; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none; font-weight: bold;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Empresa:</td>
              <td style="padding: 10px 0; color: #f1f5f9;">${company || "No especificada"}</td>
            </tr>
          </table>
          <div style="margin-top: 28px;">
            <p style="color: #94a3b8; font-size: 14px; font-weight: 600; margin-bottom: 12px;">Mensaje recibido:</p>
            <div style="white-space: pre-wrap; padding: 20px; background-color: #1e293b; border-radius: 8px; border-left: 4px solid #6366f1; color: #f1f5f9; font-size: 14px; line-height: 1.6;">${message}</div>
          </div>
          <footer style="margin-top: 40px; border-top: 1px solid #1e293b; padding-top: 20px; font-size: 11px; color: #64748b; text-align: center;">
            Mensaje automático enviado desde hidalgonoe.com
          </footer>
        </div>
      `,
    });

    if (notificationResult.error) {
      return NextResponse.json({ success: false, error: notificationResult.error.message }, { status: 500 });
    }

    // 2. Enviar correo de confirmación al usuario (Graceful/Tolerante a sandbox)
    // El dominio onboarding@resend.dev en la cuenta gratuita de Resend solo permite enviar al correo del dueño.
    // Si falla por restricciones del sandbox de Resend, se registra en consola pero se devuelve éxito igualmente.
    try {
      await resend.emails.send({
        from: "Noé Hidalgo <onboarding@resend.dev>",
        to: email,
        subject: `Gracias por contactarme, ${name}`,
        html: `
          <div style="font-family: sans-serif; background-color: #0f172a; color: #f1f5f9; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #1e293b; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
            <div style="text-align: center; margin-bottom: 24px;">
              <h2 style="color: #6366f1; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">¡Hola, ${name}!</h2>
              <p style="color: #94a3b8; font-size: 14px; margin-top: 8px; margin-bottom: 0;">He recibido tu mensaje con éxito</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #1e293b; margin: 20px 0;" />
            <p style="font-size: 14px; line-height: 1.7; color: #cbd5e1; margin-bottom: 16px;">
              Muchas gracias por ponerte en contacto conmigo a través de mi portfolio. Valoro enormemente tu interés en que colaboremos juntos.
            </p>
            <p style="font-size: 14px; line-height: 1.7; color: #cbd5e1; margin-bottom: 20px;">
              Estoy revisando los detalles de tu consulta y <strong>me comunicaré contigo en menos de 24 horas hábiles</strong> para darte una respuesta detallada o coordinar una breve llamada de valoración.
            </p>
            <div style="background-color: #1e293b; border-radius: 8px; padding: 20px; margin: 24px 0; border-left: 4px solid #6366f1;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 8px;">Copia de tu consulta:</p>
              <div style="white-space: pre-wrap; font-size: 13px; color: #e2e8f0; font-style: italic; line-height: 1.5;">"${message}"</div>
            </div>
            <p style="font-size: 14px; line-height: 1.7; color: #cbd5e1; margin-bottom: 30px;">
              Mientras tanto, puedes echar un vistazo a mis últimos trabajos en mi <a href="https://www.hidalgonoe.com/proyectos" style="color: #6366f1; text-decoration: none; font-weight: 600;">sección de proyectos</a> o conectar conmigo en <a href="https://www.linkedin.com/in/no%C3%A9-hidalgo-fern%C3%A1ndez-67bb43231" style="color: #6366f1; text-decoration: none; font-weight: 600;">LinkedIn</a>.
            </p>
            <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #1e293b; font-size: 13px; color: #94a3b8;">
              <p style="margin: 0; font-weight: bold; color: #f1f5f9;">Noé Hidalgo</p>
              <p style="margin: 4px 0 0 0; font-size: 12px;">Estudiante de ADE & Desarrollador Full-Stack</p>
              <p style="margin: 2px 0 0 0; font-size: 12px;"><a href="https://www.hidalgonoe.com" style="color: #6366f1; text-decoration: none;">www.hidalgonoe.com</a></p>
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
