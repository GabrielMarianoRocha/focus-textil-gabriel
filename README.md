# Backend 
Repositorio para o teste para o cargo de desenvolvedor fullstack pleno

# Passos

* Após clonar o projeto, execute yarn ou npm install para instalar as dependencias do projeto.
* Em config/db.js está as informações a respeito do nosso banco de dados que no caso será o Mongo DB.
* Em /controllers/ está os arquivos controllers para Clientes e Pedidos (clientController.js e orderController.js).
* Em /models/ estão os arquivos para os modelos utilizados, note que optei por utilizar tipagem mesmo se tratando de JavaScript.
* em /routes/ estão as rotas da nossa api.

# Execução

* Para iniciar a api execute node server.js ou yarn start.
* A api rodará conforme a configuração em server.js, no caso por padrão em localhost:3000.

# Endpoints

* GET = http://localhost:3000/clients - Retorna todos clientes no banco em formato JSON.

* POST = http://localhost:3000/clients - Insere um novo cliente no banco de dados, lembre - se de passar as informações em formato JSON no body da requisição.

    Ex: 
    ```
    {
        "name": "brick de araujo",
        "email": "asd@gmail.com",
        "phone": "65996875543",
        "birthDate": "1990-01-01",
        "address": "Rua Exemplo, 123",
        "complement": "Apto 101",
        "neighborhood": "Bairro Central",
        "zipCode": "12345-678"
    }```

* PUT = http://localhost:3000/clients/6785888192e72dc1662c3351 - Atualiza um cliente com o id especificado na requisição e os novos dados no corpo da requisição.

    Ex:

        ```
            {
                "email": "teste@gmail.com" // Atualiza o campo email
            }
        ```

* GET = http://localhost:3000/orders - Retorna todos pedidos em formato JSON

* POST = http://localhost:3000/orders - Insere um novo pedido o banco de dados para o id do cliente especificado no corpo da requisição.

    Ex:
    ```
    {
        "clientId": "678591e812b687f0e1301f27", // Id do cliente
        "orderSummary": "25 camisas da adidas"
}
    ```

* PUT = http://localhost:3000/orders/6785922212b687f0e1301f2a - Atualiza pedido com o id especifico do pedido.

    Ex:
    ```
        {
            "orderSummary": "64 camisas da adidas" // Atualiza o pedido
        }
    ```

* DELETE = http://localhost:3000/clients/678588a292e72dc1662c3355 - Deleta cliente através do id na requisição.

* DELETE = http://localhost:3000/orders/6785922212b687f0e1301f2a - Deleta pedido através do id do pedido na requisição.

* GET = http://localhost:3000/clients/search?email=asd@gmail.com - Localiza cliente através do parametro ?email na requisição.

#### A api utiliza o Basic authentication, login: admin. Verificar senha em server.js

#### Exportarei tambem um arquivo Postman para que facilite os testes localmente.