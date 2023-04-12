# NodeKafkaExample
isso é um exemplo de producer/ consumer em node.js, utilizando kafka

# Requisitos 
*Ter JAVA JVM instalado na sua máquina local.<br>
*Ter Node.js instalado na sua máquina local.

# Uso
Faça download do projeto utilizando o seguinte código:
```
  git clone https://github.com/cleiton-Beal/NodeKafkaExample.git
```
Entre no projeto kafka a partir do terminal:
```
  cd kafka-3.4.0-src
```
Após execute o seguinte comando:
```
  bin/zookeeper-server-start.sh config/zookeeper.properties
```

Mantenha o servidor executado acima aberto, logo após abra outro terminal na mesma pasta e execute o seguinte código:
```
bin/kafka-server-start.sh config/server.properties
```
Dessa forma, nosso apache kafka estará funcionando, após isso, entre na pasta client, e execute nosso consumer.js, para ele ficar lendo nosso servidor kafka, e logo após execute o index.js, para enviar uma mensagem.
```
node consumer.js
```
```
node index.js
```

