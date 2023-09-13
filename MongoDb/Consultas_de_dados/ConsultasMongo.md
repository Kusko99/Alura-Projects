#Consultas em MongoDB

######Obs: O MongoDB é case sentive, portanto cuidado com letras maisculas e minusculas

###Metódos Básicos de Busca

* Busca todas as instânicas de uma coleção

```
db.nomecolecao.find()
```

* Busca a primeira instância que ele encontrar de uma coleção

```
db.nomecolecao.findOne()
```

###Metódos de Comparação

* Igual a: $eq
* Maior que: $gt
* Maior ou igual a: $gte
* Menor que: $lt
* Menor ou igua a: $lte
* Possui um dos valores dentro de uma matriz: $in

#####Exemplos:

```
db.Clientes.find({genero : {$eq:"Masculino"}})
```

```
db.Contas.find({valor: {$gt:9000}})
```

```
db.Contas.find({valor: {$lt:1000}})
```

```
db.Clientes.find({status_civil: {$in:[
    "Viúvo(a)", "Casado(a)"]
    }})
```

```
db.produtos.find({preco: {$gt: 50, $lt: 100}})
```

```
db.produtos.find({preco:{$gt:50},preco:{$lt:100}})
```

```
db.clientes.find({ idade: { $gt: 26 } }, { nome: 1, email: 1, _id: 0 });
```

###Operadores Lógicos

* e/and: $and
* ou/or: $or
* diferente/not: $not

#####Exemplos:

```
db.Contas.find({$and:[{tipo:{$eq:"Conta salário"}},{valor:{$gt:9000}}]})
```

```
db.Contas.find({$or:[{tipo:{$eq:"Conta salário"}},{valor:{$gt:9000}}]})
```

```
db.Enderecos.find({estado: {$not: {$eq:"SP"}}})
```

```
db.alunos.find({ $or: [{ idade: { $lt: 20 } }, { nome: "John" }] })
```

###Operadores de Elementos

* Existe: {$exists: true}
* Não Existe: {$exists: true}
* Tipo igual a: {$type: "apelido_do_tipo"}

#####Exemplos:

```
db.Clientes.find({dependentes: {$exists: true}})
```

```
db.Clientes.find({dependentes: {$exists: false}})
```

```
db.Clientes.find({dependentes: {$exists: true}, seguros:{$exists: false}})
```

```
db.Clientes.find({seguros:{$type: "string"}})
```

###Operadores de Matriz

* Retorna todas as instâncias que tem pelo menos todos os campos indicados dentro daquela matriz : $all
* Retorna todas as instâncias que tem uma matriz com tamanho igual ao indicado: $size

#####Exemplos:

```
db.Clientes.find({seguros:{$all:["seguro de vida","seguro para carro"]}})
```

```
db.Clientes.find({dependentes: {$size: 2}})
```

###Operadores de Projeção

* Retorna somente uma quantidade pré-determinda de instâncias da matriz: $slice

#####Exemplos:

```
db.Clientes.find({dependentes: {$size: 2}},{dependentes:{$slice: 1}})
```

###Modificadores

* Limita a quantida de resultados que uma query retorna: .limit(10)
* Pula uma quantidade determinada de resultados e retorna o restante deles: .skip(50)
* Orderna o resultado de uma coleção por ordem crescente: .sort({"campo_para_ordernar": 1})
* Orderna o resultado de uma coleção por ordem decrescente: .sort({"campo_para_ordernar": -1})
* Conta quantos resultados sua query obteve: .count()
* Retorna todos os valores distintos que existem naquele campo: .distinct("campo")

#####Exemplos:

```
db.contas.find().limit(5)
```

```
db.contas.find().skip(200)
```

```
db.contas.find().limit(5).skip(10)
```

```
db.contas.find().skip(200).limit(20)
```

```
db.clientes.find().sort({"nome":1})
```

```
db.clientes.find().sort({"nome":-1})
```

```
db.clientes.find().count()
```

```
db.clientes.count()
```

```
db.contas.find({valor:{$gt:1500}}).count()
```

```
db.contas.distinct("tipo")
```

```
db.clientes.distinct("nome")
```

### Metódo Aggregate

* Agrupar valores de vários documentos
* Executar operações nos dados agrupados para retornar um único resultado
* Analisar as mudanças de dados ao longo do tempo

#### Estágios de Agregação:

##### Estágio count:

* Conta quantos forma os resultados recebidos, funciona como o metódo .count()

```
db.clientes.aggregate({$count: "Contagem de clientes"})
```

##### Estágio group:

* Agrupa os documentos de acordo com a chave de grupo, é necessário passar um id para que ele possa executar

```
db.contas.aggregate({$group: { _id: "$tipo"}})
```

```
db.contas.aggregate({$group: { _id: "$tipo",contagem:{$count:{}}}})
```

```
db.vendas.aggregate({$group: { _id: "$id_cliente"},quantidade_vendas:{$count:{}}})
```

##### Estágio limit:

* É utilizado para limitar a quantidade de documentos que queremos retornar

```
db.contas.aggregate({$limit: 10})
```

##### Estágio skip:

* É utilizado para informar a quantidade de documentos que se deve pular e depois começar o retorno da consulta

```
db.contas.aggregate({$skip: 20})
```

```
db.contas.aggregate([{$limit: 10},{$skip: 5}])
```

```
db.contas.aggregate([{$limit: 5},{$skip: 5}])
```

```
db.contas.aggregate([{$skip: 10},{$limit: 5}])
```


##### Estágio sort:

* Serve para ordernar o retorno da sua consulta

```
db.contas.aggregate([{$sort:{valor:1}}])
```

```
db.contas.aggregate([{$sort:{valor:-1}}])
```

```
db.contas.aggregate([{$skip: 10},{$limit: 5},{$sort:{valor:-1}}])
```

##### Estágio unwind:

* Com ele, conseguimos desconstruir as matrizes com mais de um documento, tendo um retorno para cada elemento das mastrizes no campo informado

```
db.clientes.aggregate([{$unwind: "$seguros"}])
```

##### Estágio sort by count:

* Faz o agrupamento de documentos recebidos com base no valor e calcula a contagem de documentos em cada grupo distinto

```
db.clientes.aggregate([{$unwind: "$seguros"},{$sortByCount: "$genero"}])
```

##### Estágio match:

```
db.enderecos.aggregate([{$match: {cidade : "Recife"}}])
//Exemplo do mesmo comando mais com find
db.enderecos.find({cidade:{$eq:"Recife"}})
```

```
db.enderecos.aggregate({$match: {cidade:"Aracaju"}})
```

```
db.contas.aggregate([{$match: {tipo:{$eq:"Conta corrente"}}},{$limit: 5}])
```

```
db.contas.aggregate([
    {$match:{$and:[{tipo:{$eq:"Conta salário"}}, {valor:{$gt: 3500}}]}}
    ])
```

```
db.contas.aggregate([
    {$match:{$and:[{tipo:{$eq:"Conta salário"}}, {valor:{$gt: 8500}}]}},
    {$group:{_id:"$tipo",contagem:{$count:{}}}}
    ])
```

```
db.vendas.aggregate([
  { $unwind: "$categorias" },
  { $match: { categorias: "Eletrônicos" } },
  { $count:"quantidade_vendida"} 
]);
```

```
db.clientes.aggregate( [
  { $match: { profissao:{ $eq:"Analista de sistemas"}} },
  {$group:{_id:"$profissao",contagem:{$count:{}}}}
] )
```

```
db.clientes.aggregate([ 
    {$match:{status_civil:"Solteiro(a)"}}, 
    {$limit:5}, 
    {$sort:{nome:1}}, 
    {$project:{_id:0, nome:1, status_civil:1}},
])
```

```
db.contas.aggregate( [
  { $match: { $or: [ { tipo: { $eq:"Conta salário" } }, { valor: { $lt: 2000 } } ] } },
  {$project:{_id:0, cpf:1, tipo:1, valor:1}},
  {$sort:{valor:1}}
] )
```
##### Estágio lookup (mesmo que o JOIN em SQL):

```
db.clientes.aggregate([{
    $lookup: {
        from: "contas",
        localField: "cpf",
        foreignField: "cpf",
        as: "clientes_contas"
    }}, 
    {$project: {_id:0, data_nascimento:0, genero:0, profissao:0}},
    {$limit: 5}
    ])
```

### Operadores de Agregação

##### Operadores aritméticas

* $rand -> gera números aleatórios do tipo float, entre 0 e 1 (n sei pq isso existe)
* $round -> aproxima valores floats para inteiros, ou com um números de casas decimais especificadas
* $trunc -> ele apenas trunca, ele não aproxima
* $divide -> realiza a divisão de um valor por outro
* $multiply -> realiza a multiplicação de um valor por outro

```
db.clientes.aggregate({
    $project: {
      valor: {$rand: {}}
    }
})
```

```
db.clientes.aggregate({
    $project: {
        _id:0, 
        valorRound:{
            $round:[{
                $rand:{}
            },3]
        }
    }
})    
```

```
db.clientes.aggregate({
    $project: {
        _id:0, 
        valorTruncado:{
            $trunc:[{
                $rand:{}
            },3]
        }
    }
})
```

```
db.contas.aggregate([{
   $project:{
        _id:0,
        valor:1,
        dividido:{
            $divide:["$valor",2]
        }
    }
}])
```

```
db.contas.aggregate([{
   $project:{
        _id:0,
        valor:1,
        multiplicado:{
            $multiply:["$valor",2]
        }
    }
}])
```