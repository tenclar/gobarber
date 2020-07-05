 # Recuperação de senha
**RF**
- O ussuario deve poder recuparer sua senha informando o seu email;
o usuario deve receber um email com instrucoes de recuperação de senha;
- O usuario deve resetar ua senha;
**RNF**
- Utilizar mailtrap para tesar envios
- utiilizar amazon ses para envios em produção;
- envio de email deve acontercer em segundo plano;

**RN**
- o Link enviado por email pare resetar senha, deve expirar em 2h;
- o usuário prescisa confirmar a nova senha ao resetar sua senha;

# Atualização do Perfil
**RF**
  - o usuario deve poder atualizar seu perfil ( nome email senha)

**RN**
  - o usuário não pode alterar seu email para um email já utilizado;
  -Para atualizar sua senha, o usuário deve informa a senha antiga;
  - Para atuallizar sua senha o usuario precisa confirmar a nova senha;

# Painel do prestador

**RF**
os usuários deve poder listar seus agendamentos de um dia específico;
o Prestador deve receber uma notificação sempre que houver um novo agendamento;
o prestador deve poder visualizar as notificações não lidas
**RNF**
os agendamentos do prestador no dia  devem ser armazenados em cache;
as notificacoes do prestador devem ser armazenadas no MongoDB;
as notificcoes do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

a notificação deve ter um statos de lida nao lida para o prestador possa controlar;

# Agendamento de Serviços
**RF**
  o usuario deve poder listar todos prestaores de serviço cadastrados;
  o usuario deve poder listar os dias de um mes com pelo menos um horário disponivel de um prestador;
  o usuario deve poder listar horarios disponiveis em um dia específico de um prestador;
  o usuario deve poder realizar um novo agendamento com um prestador;

**RNF**
   - listagem de prestadores deve ser armazenada em cache;

**RN**
cadas agendamento deve duarar 1h exatamanete;
Os agendamentos devem estar disponiveis entre 8h às 18hs(Prieiro as 8h ultimo às 17hs);
o usuário não pode agendar um horario ja ocupado
o usuário não pode agendar um horario que ja passou;
o usuário não pode agendar serviços consigo mesmo;
