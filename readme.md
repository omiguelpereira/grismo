![](/home/miguel/Downloads/Vector.png)

# Grismo - Operações do Prisma de forma simples e inteligente.

Faça as operações Crud do Prisma de forma mais inteligente, simples e orientada a objeto.

## Instalação

```
npm i  grismo
```

## Uso

O Grismo engloba todas as operações CRUD do Prisma em uma única função ``grismo.operation()`` que carrega como atributo um objeto com todas as informações da query e uma callback a ser executada.


```javascript
import { GrismoClient } from "grismo"

const grismo = GrismoClient()

const querySpecifications = grismo.createQuerySpecifications({
        requestData: {
            data: {
                name: "John Doe",
                email: "john@email.com"
            },
        },
        operationType: "POST",
        model: "users"
})

grismo.operation(querySpecifications,console.log)

```


### Objetos de I/O

A entrada e saida de dados do Grismo segue um padrão orientado a objeto, sendo o objeto de entrada contendo os atributos, do modelo a ser acessado, a operação a ser executada e os dados nescessarios para a operação

```javascript
const querySpecifications = {
    operationData:{
        data: {},
        where: {}
    },
    model: "users",
    operationType: "GET"
}
```

A partir do fim da operação o Grismo retorna a execução de uma callback levando o objeto de resultado da operação como argumento, o objeto de saida tem as seguintes propriedades

```javascript
 const queryResults = {
     operationData:{
         data: {},
         where: {}
     },
     data: {}
     model: "users",
     operationType: "GET"
     httpStatusCode: 200
 }
```


