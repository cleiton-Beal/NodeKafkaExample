const { Kafka } = require('kafkajs');

// Configuração do cliente Kafka
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'], // Ajuste conforme seu broker Kafka
});

// Criação do produtor
const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  let message = {
    urlBase: "hteste" ,
    username: "teste" ,
    password: "teste" ,
    licensePlate: "MIQ2104" ,
    hasExtension: false ,
    codeKey: "teste de codeKey" ,
    codeValue: "teste de codeValue" ,
    hashApp: "" ,
    infoApp: "teste de infoApp" ,
  }

  const messages = [
    JSON.stringify(message),
  ];

  // Enviar mensagens para o tópico
  const result = await producer.send({
    topic: 'teste-lulu',
    messages: messages.map(message => ({ value: message }))
  });

  console.log('Mensagens enviadas:', result);

  await producer.disconnect();
};

run().catch(e => {
  console.error('Erro ao enviar mensagens:', e);
  process.exit(1);
});
