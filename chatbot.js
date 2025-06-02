// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|bom|Bom|boa|Boa|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Sou o assistente virtual da Academia M2. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Musculação\n2 - Valores dos planos\n3 - Muay Thai\n4 - Natação\n5 - Hidroginástica\n6 - Outras perguntas'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Musculação\n\n Transforme seu corpo, sua saúde e sua autoestima.\n\n• Aumento de força muscular • Melhora da massa muscular • Aumento do metabolismo • Melhora da postura e prevenção de lesões • O fortalecimento muscular proporciona mais estabilidade');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);



    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Plano Mensal:* R$100,00 por mês.\n\n*Plano Musculação + Muay Thai:* R$130,00 por mês.\n\n*Plano Muay Thai:* R$95,00 por mês.\n*Plano Natação 1x por semana:* R$120,00 por mês.\n*Plano Natação 2x por semana:* R$145,00 por mês.\n*Plano Hidroginástica 1x por semana:* R$120,00 por mês.\n*Plano Hidroginástica 2x por semana:* R$140,00 por mês.\n*Plano Hidroginástica 3x por semana:* R$160,00 por mês.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);

    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Aulas de Muay Thai.\n\nAprimore sua resistência física e habilidades de combate.\n\n • Aumento da resistência e condicionamento cardiovascular • Fortalecimento muscular • Desenvolvimento da coordenação e agilidade • Aprimora defesa pessoal • Autodisciplina e controle emocional\n\nToda Terça e Quinta às 20h e Sábados às 09h.\n');    
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);


    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Natação.\n\nA natação melhora sua saúde, resistência e oferece relaxamento.\n\n• Melhora da condição cardiorrespiratória • Desenvolvimento muscular • Aumento da flexibilidade • Aumento da capacidade respiratória • Melhora da coordenação motora • Reduz a sobrecarga nas articulações');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);



    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Hidroginástica.\n\nCuide do seu corpo, melhore sua saúde e divirta-se na água, sem impacto nas articulações.\n\n• Melhora a flexibilidade e o equilíbrio • Alívio do estresse e relaxamento • Aumento da resistência muscular • Aumento da resistência física • Ajuda a reduzir o impacto nas articulações');
    }


    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp e em breve um atendente falará com você');


    }






});