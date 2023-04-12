const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const producer = new Producer(client);
client.setMaxListeners(2000); //
producer.on('ready', function () {
  console.log('Producer está pronto para enviar mensagens.');

  const message = {
    topic: 'meu-topico1',
    messages: ['Testando se isso da certo','e não é que deu!']
  };
  for (let i = 0; i < 1000; i++) {
    producer.send([message], function (err, result) {
      console.log(err || result);
      process.exit();
    });
  }
});

producer.on('error', function (err) {
  console.error('Erro ao iniciar o Producer:', err);
  process.exit(1);
});
