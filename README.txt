Criação de uma API com Node.js 

utilizando o express:
    EXPRESS é um micro-framework que ajuda lidar com as rodas e as views(só que como vamos criar uma api nção vamos utilizar essa view)

Obs do Projeto:
- O arquivo package.json ele serve para guarda as informações das versions das depedencias
- O arquivo package-lock.json serve para ser uma referencia(seria um cache ) de depedencias já instaladas do nosso projeto
- O arquivo server.js é o nosso arquivo principal 
        
    //fazendo config quando toda vez q usuario acessar a rota indicada no 1º param da function get()
    //get() 1ºparam = seria a roda que no caso é a raiz que é o sinal de "/" "
    //get() 2ºparam = é uma função que recebe dois paramentros o request e a response
    //O param req vai conter todas as informações do request como: body, header (todas as config de um request)
    //O param res vai conter a response para o usuario que fez a solicitação 
    //Listen serve para escutar alguma porta do seu navegador
Obs do NPM:
- Toda vez que for intalar um depedencia para o desenvolvimento utilizamos o -D
    ex: npm install -D nodemon
    Com esse -D a gente especificou que essa depedencia não vai pra produção mas só vai ficar no projeto no desenvolvimento

utilizamos tambem o NODEMON :
    Onde ele faz a reinicialização do servidor para cada alteração no arquivo main(server.js) 

utilizamos o MongoDB: 
    Para instalar usaremos o Docker:
        Docker 
            - Software que permite fazer a containerização de recursos de Software ou de aplicação.
            - Termo de containerização seria armanezar os Software , aplicações em container (MAQUINAS VITUAIS)

PAREIO AQUI NA INSTALAÇÃO DO DOCKER...

UTILIZANDO O SEQUILIZE COM MYSQL
COMANDOS:
    Criar o Banco de Dados
        - yarn sequelize db:create
    Criar uma Estrtura para tabela com migrations
        -yarn sequelize migration:create --name=create-users 
        (aqui no --name pode colocar de acordo com oque a migrations vai fazer)
    Criando a tabela de acordo com a estrutura do migration
        -yarn sequelize db:migrate 
        obs: Quando ele vai criar ele cria uma tabela de sequelizemeta 
        (Onde registrar as outras migrations criadas)
    Revertendo a alteração da tabela
        -yarn sequelize db:migrate:undo
        obs1: Reverte a ultima migration criada
        obs2: Isso só funciona no ambiente de Dev 
        na Produção não da pra dar RollBack. Para isso 
        deve criar uma nova migration para colocar suas
        novas alterações.

ESTRUTURA:
    Cada Tabela criada de acordo com a estrutura montada com o migration
        - Criamos uma Classe Modelo da para essa Tabela 
        - Iniciamos essa Classe Modelo no database/index.js 