use showbank

db.clientes.updateOne({"_id" : 1},{$push:{seguros : "seguro de vida"}})
db.clientes.find({"_id" : 1})

db.clientes.updateMany({},{$rename:{"cpf":"CPF"}})
db.contas.find({cpf:{$eq:"410.436.439-82"}})
db.contas.updateOne({cpf:"410.436.439-82"},{$inc:{valor:-2000}})

db.contas.find({_id:34})
db.contas.updateOne({_id:34},{$unset: {valor: " " }})

db.contas.findAndModify({query:{_id:34},update:{$unset: {valor: " " }}})


db.contas.findAndModify(
    {query:{_id:34},
    update:{$inc: {valor: 1200 }},
    new : true
    })
 
db.contas.find({valor:{$lt:500}}).sort({ valor: 1 })   
db.contas.findAndModify({
    query:{valor:{$lt:500}},
    sort:{valor:1},
    update:{$inc:{valor:1000}}
})

db.contas.findOneAndUpdate(
    {_id:34},
    {$set:{valor:5145.86}},
    {returnNewDocument:true}
)

db.clientes.findOneAndReplace(
    {_id:4},
    {"nome": "Geraldo Benedito Ian",
    "data_nascimento": ISODate("1977-06-02T18:00:00.000-03:00"),
    "genero": "Masculino",
    "profissao": "Operador",
    "status_civil": "Viúvo(a)",
    "CPF": "845.939.560-05"})
    
db.clientes.findOneAndReplace(
    {_id:4},
    {"nome": "Geraldo Benedito Ian",
    "data_nascimento": ISODate("1977-06-02T18:00:00.000-03:00"),
    "genero": "Masculino",
    "profissao": "Operador",
    "status_civil": "Viúvo(a)",
    "CPF": "845.939.560-05"},
    {projection:{nome:1, profissao:1},
    returnNewDocument:true
    })
    
db.contas.findOneAndDelete({valor:{$lt:100}},{sort:{valor:1}})