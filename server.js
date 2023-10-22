// Servidor node para enviar informações de contato
// para o email

// Express facilita a criação de rotas backend
const express = require('express');
const bodyParser = require('body-parser');
// Para administrar o envio do email
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Servir o form html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Envio
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // Criando um transporte nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'lucasclaudino@alu.ufc.br', 
            pass: 'lugaro26'
        }
    });

    const mailOptions = {
        from: email,
        to: 'lucasclaudinocc@gmail.com', // Your email address
        subject: `New message from ${name}`,
        text: message
    };

    // Enviar o email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Erro: nao foi possivel ler a mensagem');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('Message enviada com sucesso!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
