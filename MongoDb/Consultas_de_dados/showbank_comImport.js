//Criação do Banco
use showbank
//ELiminar o banco se necessário
db.dropDatabase()
//Comandos utils
db.version()
db.hostInfo()
db.getName()
db.stats()
db.listCommands()
db.help()
//Criação de uma coleção vazia
db.createCollection("")

//comandos do MongoImport
// --db=showbank --collection=Contas --type=csv --headerline --file=C:\Users\ferna\Downloads\projeto\Contas.csv
// --db=showbank --collection=Endereco --type=csv --headerline --file=C:\Users\ferna\Downloads\projeto\Endereco.csv
// --db=showbank --collection=Clientes --file=C:\Users\ferna\Downloads\projeto\Clientes.json --jsonArray

//Consultas(FINALMENTE)

//Busca todos as instâncias da coleção clientes
db.Clientes.find()
db.Contas.find()
db.Endereco.find()
db.Enderecos.find()

//Busca a primeira instância que ele encontrar da coleção clientes
db.Clientes.findOne()

//Renomendo uma coleção
db.Endereco.renameCollection("Enderecos")

//Operadores de Comparação
//igual a -> $eq, maior que $gt, maior ou igual a $gte, menor que $lt, maior ou igual que $lte

db.Clientes.find({genero:"Masculino"})

db.Clientes.find({genero : {$eq:"Masculino"}})

db.Contas.find({valor: {$gt:9000}})
db.Contas.find({valor: {$lt:1000}})

db.Clientes.find({status_civil: {$in:[
    "Viúvo(a)", "Casado(a)"
    ]}})

db.Contas.find({valor:{$lt:9000}, valor:{$gt: 8800}})

//Operadores Lógicos
db.Contas.find({$and:[{tipo:{$eq:"Conta salário"}},{valor:{$gt:9000}}]})
db.Contas.find({$or:[{tipo:{$eq:"Conta salário"}},{valor:{$gt:9000}}]})
db.Enderecos.find({estado: {$not: {$eq:"SP"}}})

//Operadores de Elementos
db.Clientes.find({dependentes: {$exists: true}})
db.Clientes.find({dependentes: {$exists: false}})
db.Clientes.find({dependentes: {$exists: true}, seguros:{$exists: false}})
db.Clientes.find({seguros:{$type: "string"}})

//Operadores de Matriz
db.Clientes.find({seguros:{$all:["seguro de vida","seguro para carro"]}})
db.Clientes.find({dependentes: {$size: 2}})

//alterando os nomes das coleçoes
db.Clientes.renameCollection("clientes")
db.Contas.renameCollection("contas")
db.Enderecos.renameCollection("enderecos")

//Modificadores
db.contas.find().limit(5)
db.contas.find().skip(200)
db.contas.find().limit(5).skip(10)
db.contas.find().skip(200).limit(20)
db.clientes.find().sort({"nome":1})
db.clientes.find().sort({"nome":-1})
db.clientes.find().count()
db.contas.find({valor:{$gt:1500}}).count()
db.contas.distinct("tipo")
db.clientes.distinct("nome")

//desafios
db.clientes.find({status_civil:{$eq:"Separado(a)"}})
db.contas.find({valor:{$exists: false}})
db.clientes.find({dependentes: {$size: 1}}).limit(5)
db.contas.find({$or:[{valor:{$gte:8500}},{tipo:{$in:["Conta salário","Conta poupança"]}}]})
db.clientes.find({$and:[{status_civil:{$eq:"Solteiro(a)"}},{seguros:{$exists: true}}]}).sort({"nome":1})

//aggregate
db.clientes.aggregate({$count: "Contagem de clientes"})
db.contas.aggregate({$group: { _id: "$tipo",contagem:{$count:{}}}})
db.vendas.aggregate({$group: { _id: "$id_cliente"},quantidade_vendas:{$count:{}}})
db.contas.aggregate({$limit: 10})
db.contas.aggregate({$skip: 20})
db.contas.aggregate([{$sort:{valor:1}}])
db.contas.aggregate([{$sort:{valor:-1}}])
db.contas.aggregate([{$limit: 10},{$skip: 5}])
db.contas.aggregate([{$limit: 5},{$skip: 5}])
db.contas.aggregate([{$skip: 10},{$limit: 5}])
db.contas.aggregate([{$skip: 10},{$limit: 5},{$sort:{valor:-1}}])
db.clientes.aggregate([{$unwind: "$seguros"}])
db.clientes.aggregate([{$unwind: "$seguros"},{$sortByCount: "$genero"}])
db.enderecos.aggregate([{$match: {cidade : "Recife"}}])
db.enderecos.find({cidade:{$eq:"Recife"}})
db.contas.aggregate([
    {$match:{$and:[{tipo:{$eq:"Conta salário"}}, {valor:{$gt: 3500}}]}}
    ])
db.contas.aggregate([
    {$match:{$and:[{tipo:{$eq:"Conta salário"}}, {valor:{$gt: 8500}}]}},
    {$group:{_id:"$tipo",contagem:{$count:{}}}}
    ])


//desafios

db.enderecos.aggregate({$match: {cidade:"Aracaju"}})
db.contas.aggregate([{$match: {tipo:{$eq:"Conta corrente"}}},{$limit: 5}])
db.vendas.aggregate([
  { $unwind: "$categorias" },
  { $match: { categorias: "Eletrônicos" } },
  { $count:"quantidade_vendida"} 
]);
db.clientes.aggregate( [
  { $match: { profissao:{ $eq:"Analista de sistemas"}} },
  {$group:{_id:"$profissao",contagem:{$count:{}}}}
] )
db.clientes.aggregate([ 
    {$match:{status_civil:"Solteiro(a)"}}, 
    {$limit:5}, 
    {$sort:{nome:1}}, 
    {$project:{_id:0, nome:1, status_civil:1}},
])
db.contas.aggregate( [
  { $match: { $or: [ { tipo: { $eq:"Conta salário" } }, { valor: { $lt: 2000 } } ] } },
  {$project:{_id:0, cpf:1, tipo:1, valor:1}},
  {$sort:{valor:1}}
] )

//Operadores Aritemeticos
db.clientes.aggregate({
    $project: {
      valor: {$rand: {}}
    }
})

db.clientes.aggregate({
    $project: {
        _id:0, 
        valorRound:{
            $round:{
                $rand:{}
            }
        }
    }
})
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
  

db.contas.aggregate([{
   $project:{
        _id:0,
        valor:1,
        dividido:{
            $divide:["$valor",2]
        }
    }
}])

db.contas.aggregate([{
   $project:{
        _id:0,
        valor:1,
        multiplicado:{
            $multiply:["$valor",2]
        }
    }
}])







