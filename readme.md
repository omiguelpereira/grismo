![](https://lh3.googleusercontent.com/pw/AM-JKLV8ue9Rfw8sB_EgkMDDbtO-7YQdj9I8vmvhn43v08A9t_M6PosKJ5wq7V4QI4VxU2zptIRGpr2bi3_vzTz_O9QNpujlMJl0KC7lRKwkccUxy6qguwWxi7YOmk_reV5J7jAjMCUCS-qVeLk_BXOiXYA=w66-h114-no?authuser=0)

# Grismo - Operações do Prisma de forma simples e inteligente.

Faça as operações Crud do Prisma de forma mais inteligente, simples e orientada a objeto.

## Instalação

```
npm i grismo
```

## Uso

O Grismo engloba todas as operações CRUD do Prisma em uma única função ``grismo.operation()`` que carrega como atributo um objeto com todas as informações da query e uma callback a ser executada.

Você também pode criar o objeto de especificações da query com a função `grismo.createQuerySpecifications`


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

A entrada e saída de dados do Grismo segue um padrão orientado a objeto, sendo o objeto de entrada contendo os atributos, do modelo a ser acessado, a operação a ser executada e os dados necessários para a operação

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

A partir do fim da operação o Grismo retorna a execução de uma callback levando o objeto de resultado da operação como argumento, o objeto de saída tem as seguintes propriedades

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



## Contribua

Sou apenas uma pessoa tentando criar um pacote que vai me poupar trabalho futuro utilizando o Prisma, se você acredita que pode melhorar esse trabalho ou desfazer os erros fique a vontade para abrir uma issue, toda ajuda é bem vinda!

## Licença
[MIT](https://choosealicense.com/licenses/mit/)