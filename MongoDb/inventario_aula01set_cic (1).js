// aula 18/agosto 
use inventario_cic
// exibindo os databases e coleções
show databases
show collections
// criando a coleção empresa
db.empresa.drop()
db.empresa.insertOne( { razao_social : "IBM do Brasil Ltda", cnpj: 123456789,
   endereço : {rua : 'Tutóia', numero : 100, bairro : 'Paraíso', cidade: 'São Paulo'},
   fones : [11998877665, 11991234567] }  )
// consultando - similar ao SELECT * FROM
db.empresa.find({})
// excluindo a IBM duplicada
db.empresa.deleteOne({_id:  ObjectId("64df7550e9442dfa73e00c14") })  
// inserindo mais de um docto por vez 
db.empresa.insertMany( [ {razao_social : 'Microsoft do Brasil Ltda' ,
tipo_empresa : 'Fabricante', endereço : 'Av. Engenheiro Berrini, 500- Vila Olímpia-São Paulo',
fone : [{ddd: 11, numero : 987654321}, {ddd: 11, numero: 980000234}] }   ,
{razao_social : 'ABCD equipamentos eletrônicos SA' , cnpj : 123000999,
 inscrição_estadual : 'ISENTO' } ]  )
// aula 25/agosto - consultas, manipulação de vetores
db.empresa.find () 
db.empresa.find ({razao_social : 'Microsoft do Brasil Ltda'}) 
// similar ao like - / equivale ao % do SQL  - i= insensitive
db.empresa.find ({razao_social : /miCROsoft/i })
db.empresa.findOne ({razao_social : /ltda/i })
db.empresa.updateOne ({razao_social : /miCROsoft/i }, 
                      {$set: {razao_social: "Microsoft Corporation do Brasil Ltda."}})
// incluindo um novo campo ano de fundação
db.empresa.updateOne ({razao_social : /miCROsoft/i }, {$set: {ano_fundação : 1975}} )
db.empresa.updateOne ({razao_social : /iBm/i }, {$set: {ano_fundação : 1911}} )
db.empresa.find()
// consultas com operadores numéricos 
db.empresa.find({ano_fundação : 1975})
db.empresa.find({ano_fundação : {$eq: 1975} } ) // $eq = equal
db.empresa.find({ano_fundação : {$ne: 1975} } ) // $ne not equal 
db.empresa.find({ano_fundação : {$gt: 1900} } ) // $gt greater than (maior que) 
db.empresa.find({ano_fundação : {$gte: 1911} } ) // $gte greater than or equal (maior que ou igual) 
db.empresa.find({ano_fundação : {$lt: 1990} } ) // $lt lower than (maior que) 
db.empresa.find({ano_fundação : {$lte: 1911} } ) // $lte lower than or equal (maior que ou igual)
db.empresa.find ({razao_social : {$not:  /ltda/i } }) // não é ltda, caracter
// consulta com operador OR e AND
db.empresa.find ( {$or: [ {razao_social : /ltda/i }, {ano_fundação : {$lt: 1900} },
                          {tipo_empresa : /fabricante/i} ] } ) 
db.empresa.find ( {$and: [ {razao_social : /ltda/i }, {ano_fundação : {$gt: 1900} },
                          {tipo_empresa : /fabricante/i} ] } ) 
db.empresa.find ({razao_social: /ltda/i, ano_fundação: {$gt: 1900}, tipo_empresa : /fabricante/i }) 
// CRUD em vetores 
db.empresa.find({razao_social : /ibm/i} , {_id : 0 , razao_social : 1, fones: 1 } )
// adicionando novo fone
db.empresa.updateOne({razao_social : /ibm/i} , {$set: {fones: [11990123980] } }) // substituiu todos
db.empresa.updateOne({razao_social : /ibm/i} , {$push: {fones: [11998877665] } }) // $push deu erro []
// excluir um elemento do vetor
db.empresa.find( {"fones": [11998877665] })
db.empresa.updateOne( {razao_social : /ibm/i, "fones": [11998877665]  } , {$pull: {"fones": [11998877665] } } )
// inserção correta usando $each
db.empresa.find({razao_social : /ibm/i} , {_id : 0 , razao_social : 1, fones: 1 } )
db.empresa.updateOne({razao_social : /ibm/i} , {$push: {fones: {$each : [11998877665] } } })
db.empresa.updateOne({razao_social : /ibm/i} , {$push: {fones: {$each : [11998811223, 11991230009 } } })
// atualizar um fone 
db.empresa.updateOne( {"fones": 11998877665 }, {$set: {"fones.$" : 11998877666 }})
//consultas com posição dos caracteres
// string termina com ltda  -- operador $ no final
db.empresa.find({razao_social : /ltda/i } )
db.empresa.find({razao_social : /ltda$/i } )
db.empresa.find({razao_social : /ltda.$/i } )
// string começando com algum caracter ^ 
db.empresa.find({endereço: /^av/i })
// consultar empresas em São Paulo
db.empresa.find({})
db.empresa.find({$or: [ {endereço: /s.*o paulo/i } , {"endereço.cidade": /^s.*o paulo$/i} ] })
db.empresa.find({$and: [{razao_social: /ltda/i}, 
       {$or: [ {endereço: /para.*so/i } , {"endereço.bairro": /^para.*so/i} ] } ] } ) 

// Atividade 1
//a)	Insira uma nova empresa fornecedora com razão social, tipo, cnpj, endereço (com campos para cada característica) e fone com campos para ddd e número.
db.empresa.insertOne({razao_social : 'Faisca Equipamentos e Software Ltda ', cnpj: 22334455, tipo_empresa : 'Fornecedor',
endereço : {rua : 'Cerro Corá', numero : 1000, bairro : 'Lapa', cidade : 'São Paulo'},
fone :  [{DDD: 11, numero : 995001234} , {DDD: 11, numero : 957890000}] })
db.empresa.find({razao_social: /Fa.*sca/i})
//b)	Após incluir o novo documento atualize o bairro da empresa.
db.empresa.updateOne({razao_social: /Fa.*sca/i}, {$set: {"endereço.bairro" : 'Alto da Lapa'}})
//c)	Inclua um novo número de telefone e posteriormente atualize este número.
db.empresa.updateOne({razao_social: /Faisca/i}, {$push: {"fone": {$each: [{DDD:11, numero: 11990987654}] } } } )
db.empresa.updateOne({razao_social: /Fa.*sca/i, "fone.numero" : 11990987654 } ,
{$set: {"fone.$" : {DDD:11, numero: 990987622}}})
//d)	Mostre razão social, endereço e fones de empresas que não estão localizadas no bairro Lapa.
db.empresa.find()
db.empresa.find({$and: [ {endereço: {$not: /lapa/i }} , { "endereço.bairro" : {$not: /lapa/i } } ] },
{_id : 0 , razao_social : 1 , endereço : 1 , fone: 1 , fones: 1 })
// e)	Mostre os mesmos dados de d) mas para as empresas que tenham a palavra
// Equipamento na razão social, 
// mas que não se localizem em cidades com nome de santo (São, Santo, Santa).
db.empresa.find({$and: [ {razao_social : /equipamento/i}, 
                         {endereço: {$not: /sant/i }} ,
                         { "endereço.cidade" : {$not: /sant/i }},
                         {endereço: {$not: /s.*o/i }} ,
                         { "endereço.cidade" : {$not: /s.*o/i }} ] },
{_id : 0 , razao_social : 1 , "endereço.cidade": 1, fone: 1 , fones: 1 })

// aula 01/set - Relacionando coleções 
db.equipamento.insertOne({num_patrimonio : 100, marca : 'Dell',
        tipo: 'Computador', caracteristicas : {processador: 'I7' ,
        memória_GB: 16, armazenamento_GB : 512, tipo_computador: 'Notebook'} } )
db.equipamento.insertOne({num_patrimonio: 101, marca: 'LG', tipo: 'Periférico',
    caracteristicas: {resolução: '1900x1200', tamanho_pol : 27, 
                      tipo_periférico : 'Monitor LED' } } )
db.equipamento.find()                     
//  relacionando equipamento e empresa fornecedora pelo CNPJ 
db.empresa.find({razao_social: /fa.*sca/i}, {cnpj:1})  // 22334455
// atualizar equipamento com o CNPJ acima 
db.equipamento.updateOne({num_patrimonio: 100}, {$set: {cnpj_fornecedor: 22334455 }})
db.equipamento.updateOne({num_patrimonio: 100}, 
          {$set: {dt_aquisição : ISODate("2023-03-01T17:22:33.098Z" }} )
// relacionando as coleções usando $lookup -> JOIN
db.empresa.aggregate(
    {$lookup:
        {from: 'equipamento' ,
         localField : 'cnpj' ,
         foreignField : 'cnpj_fornecedor',
         as: 'eqptos_fornecidos' 
        }
    } )
// relacionando as coleções usando $lookup -> JOIN, filtrando fornecedor e cnpj que existe
db.empresa.aggregate(
    {$match: {"cnpj": {$exists: true} , tipo_empresa: /fornec/i}}
    {$lookup:
        {from: 'equipamento' ,
         localField : 'cnpj' ,
         foreignField : 'cnpj_fornecedor',
         as: 'eqptos_fornecidos' 
        }
    } )
// mudando fone em empresa para fones 
db.empresa.find()
db.empresa.updateMany({}, {$rename : {"fone" : "fones"}})
//projetando somente alguns campos
db.empresa.aggregate(
    {$match: {"cnpj": {$exists: true} , tipo_empresa: /fornec/i}}
    {$lookup:
        {from: 'equipamento' ,
         localField : 'cnpj' ,
         foreignField : 'cnpj_fornecedor',
         as: 'eqptos_fornecidos' 
        } }
    {$unwind : "$eqptos_fornecidos"} , 
    {$project: {_id: 0, razao_social: 1 , "fones" : 1 , 
                "eqptos_fornecidos.marca" : 1, "eqptos_fornecidos.tipo" : 1 } } )
// relacionando de equipamento para empresa, filtrando equipamento com cnpj que existe
db.equipamento.aggregate(
    {$match: {"cnpj_fornecedor": {$exists: true}}}
    {$lookup:
        {from: 'empresa', 
         localField : 'cnpj_fornecedor',
         foreignField : 'cnpj' ,
         as: 'fornecedor' 
        } } )
                
                