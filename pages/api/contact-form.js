import nodemailer from 'nodemailer';
import * as yup from 'yup';


export default async (req, res) => {
    const {name, email, subject, message} = req.body;

    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email(),
        subject: yup.string().required(),
        message: yup.string().required()
    });

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });



    const isFormValid = await schema.isValid(req.body);
    // console.log('Message error 4', err);

    if (isFormValid) {
        // send the form and return success.
        try {
            const emailRes = await transporter.sendMail({
                from: email,
                to: process.env.SMTP_USER,
                subject: `contact form submission from ${name}`,
                html: `<p>You have a new message from: </p><br>
                <p><strong>Name: </strong> ${name} </p><br> 
                <p><strong>Email: </strong> ${email} </p><br> 
                <p><strong>Subject: </strong> ${subject} </p><br> 
                <p><strong>Message: </strong> ${message} </p><br>`,
            });

            res.status(200).json({
                code: 200,
                data: req.body,
                message: 'Message Sent: ' + emailRes.messageID
            });

        } catch (err) {
            res.status(400).json({
                code: 400,
                data: req.body,
                message: 'Message not sent'
            });
        }

    } else {
        res.status(400).json({
            code: 400,
            data: req.body,
            message: 'Error!! the validation is incorrect'
        });
    }

    // res.status(400).json({
    //     code: 400,
    //     data: req.body,
    //     message: 'Error!! the validation is incorrect'
    // });
};