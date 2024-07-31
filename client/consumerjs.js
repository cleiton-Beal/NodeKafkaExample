const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'teste-lulu-group' })

const run = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic: 'teste-lulu', fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            let teste =JSON.parse(message.value);
            console.log({
                partition,
                offset: message.offset,
                value: JSON.parse(message.value),
            })
            if(teste.imprimir) {
                console.log('Mensagem recebida:', teste.mensagem)
            }
            await new Promise(resolve => setTimeout(resolve, 5000));
            console.log('Mensagem processada')
        },
    })
}
run().catch(console.error)