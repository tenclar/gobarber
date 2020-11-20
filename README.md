# gobarber
Sistema Desenvolvido bootcamp 11

### 🔽 Requisitos
1. Ter o NodeJs e Yarn instalado
2. Ter banco de dados do Redis e PostgreSQL, Mongodb em execução , pode ser com docker
3. Um dispositivo ou emulador Android conectado ao computador


### :docker: Iniciando docker
1. ``docker run --name posrgresdb -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres``
2. ``docker run --name mongodb -p 27017:27017 -d -t mongo``
3. ``docker run --name redis -p 6379:6379 -d -t redis:alpine``
4. ``docker start all``
5. ``docker ps -a``


### :rocket: Iniciando com o backend
1. ``cd api``
2. ``yarn para instalar as bibliotecas do projeto``
3. ``Criar o arquivo .env com base no .env.example``
4. ``yarn typeorm  migration:run```
5. ``yarn dev:server``


### 💻 Iniciando com o Front-end 
1. ``cd web``
2. ``yarn``
3. ``yarn start``

Existe um usuário administrador padrão: admin@fastfeet.com / 123456

### 📱Iniciando com o Mobile (Apenas Android)
1. ``cd appgobarber``
2. ``yarn - para instalar as bibliotecas ``
3. ``adb reverse tcp:9090 tcp:9090 (Reactotron)``
4. ``adb reverse tcp:3333 tcp:3333 (Acesso a API no emulador)``
5. ``yarn android``
6. ``npm start - abrir bundle``
