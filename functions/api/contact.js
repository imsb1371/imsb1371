export async function onRequestPost(context) {
    try {
        const formData = await context.request.formData()

        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'onboarding@resend.dev', // change later
                to: 'imsb1371@gmail.com',
                subject: 'New Contact Message',
                html: `
          <h2>New message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p>${message}</p>
        `,
            }),
        })

        if (!res.ok) {
            return new Response('Email failed', { status: 500 })
        }

        return new Response('Success', { status: 200 })

    } catch (err) {
        return new Response('Error', { status: 500 })
    }
}