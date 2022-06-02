## Objetivo

Criar um serviço de API RESTFUL usando nodejs express

- Criar 4 endpoints GET/POST/PUT/DELETE
- Documentação utilizando swagger.
- docker/compose.
- postgres.

</br>

## Premissas

- JAVASCRIPT.
- Salvar (email, senha).
- Cada usuário deverá ter um ID único
- Gravar as informações no banco.
- Ter cuidado com validações.
- Knex
- Express
- Postgres

</br>

## Documentação

##### http://localhost:3000/api/v1/docs/

| HTTP   | ROUTE                 | BODY               | DESCRIÇÃO              |
| ------ | --------------------- | ------------------ | ---------------------- |
| GET    | /api/v1/users         |                    | Listar todos usuarios  |
| GET    | /api/v1/users/user_id |                    | Listar único usuário   |
| POST   | /api/v1/users         | JSON (email,senha) | Criar único usuário    |
| PUT    | /api/v1/users/user_id | JSON (email,senha) | Alterar único usuário  |
| DELETE | /api/v1/users         |                    | Deletar todos usuarios |
| DELETE | /api/v1/users/user_id |                    | Deletar único usuário  |

</br>


## Instalação e execução do projeto

        //clonar o repositório
        git clone https://github.com/Marcelovqvd/desafio_fullstack.git
        
        //acessar o diretório
        cd desafio_fullstack
        
        //executar os comandos
        yarn install
        docker-compose -up -d
        npx knex migrate:latest
        
</br>

## Autor

[Marcelo Vasques Vedroni](https://github.com/Marcelovqvd)

</br>
        
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

