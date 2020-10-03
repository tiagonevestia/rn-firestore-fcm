## Como funciona uma notificação:

1. O servidor identifica o celular(token) e envia uma mensagem para este celular.
  * Nofiticações.
  * Notificação + dados.
  * Dados.

2. Dependendo do estado atual do aplicativo, ele vai reagir diferente:
 * Quando o app está ABERTO.
 * Quando o app está ativo mas minimizado. (exibe notificação)
 * Quando o app está FECHADO. (exibe notificação)


 ## Como funciona o envio da notificações

O envio ocorre por QUALQUER servidor(próprio - terceiros)

1. Se eu tiver o TOKEN de um dispositivo, consigo mandar mensagem DIRETAMENTE para ele.
2. Eu posso também enviar mensagens para TODOS os dispositivos que tiverem meu app.
3. Eu posso também enviar mensagens para dispositivos cadastrados em determinado tópico.
