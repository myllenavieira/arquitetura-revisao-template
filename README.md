# Arquitetura - Revisão

O foco aqui é a arquitetura em camadas. Veremos como planejar e montar uma API do zero com os conceitos abstratos vistos até aqui.

# Check list backend

O que pretendemos rever nessa dinâmica:

- **Criação de uma API usando arquitetura.**

### CRIAR PASTAS
     [X]  src
         [X]  controller
         [X]  business
         [X]  database
         [X]  errors
         [X]  models
         [X]  router
         [X]  dtos
### src/index.ts
     [X]  express
     [X]  cors
     [X]  servidor
     [ ]  caminho das entidades que levará ao Router
    
### database
     [X]  Criar o documento .sql com as tabelas
     [X]  Criar o documento .db
     [X]  Criar documento 'BaseDatabase'  que receberá uma classe abstrata e criará uma conexão com o banco de dados usando knex.
### router
     [ ]  criar um router pra cada entidade
     [ ]  CRUD da entidade
### models
     [ ]  Criar uma classe para cada entidade
     [ ]  Constructor deve conter os atributos da entidade no privado
     [ ]  Criar metodos públicos  para acessar ou alterar os atributos.
    
### dtos
     [ ]  Criar um documento para ações do crud
[ ]  Criar uma interface para dados de entrada
     [ ]  Criar uma interface para dados de saída
     [ ]  criar um schema com a biblioteca zod que valide as informaçãoe dos dados de entrada.

  

### controller
     [ ]  Criar classe da entidade
     [ ]  Injeção de dependencia no constuctor recebendo como parâmetro a camada business
     [ ]  Criar método que realizara uma das ações do CRUD
     [ ]  Receber como parâmetro  deste método requisição e resposta
     [ ]  Pegar dados da requisilça
### database (outra vez)
     [ ]  Criar classe da entidade extendendo o BaseDatabase para utilizar a connection
     [ ]  Criar métodos que realizara uma das ações do CRUD
        [ ]  Receber por parâmetro do método os dados que serão enviados ou requeridos do banco de dados
        [ ]  Retornar o dado recebido do banco de dados ( se for uma requisição)