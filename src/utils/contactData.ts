import emailjs from "@emailjs/browser";

interface Contact extends Record<string, unknown>  {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface Email extends Contact {
    timeStamp: string;
}

export const onSubmit = async (data: Contact) => {
    try{
        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        if (!serviceID || !templateID || !userID) {
            throw new Error('Missing required environment variables');
        }

        const payload: Email = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            message: data.message,
            timeStamp: new Date().toLocaleString(),
        };

        await emailjs.send(serviceID, templateID, payload, {
            publicKey: userID
        });
    } catch(error) {
        console.error("Email sending failed:", error);
        throw error;
    }
};