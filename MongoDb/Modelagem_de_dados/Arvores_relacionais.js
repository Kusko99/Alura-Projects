use modelagem_alura_03

db.createCollection("Pai")

db.Pai.insertMany([
    {_id:"Colaborador01",parent:"Supervisor02"},
    {_id:"Colaborador02",parent:"Supervisor02"},
    {_id:"Supervisor02",parent:"Gerente"},
    {_id:"Supervisor01",parent:"Gerente"},
     {_id:"Gerente",parent:"Gerente Geral"},
      {_id:"Gerente Geral",parent: null},
    ])
    
db.Pai.findOne({_id:"Supervisor02"}).parent

db.createCollection("Filho")

db.Filho.insertMany([
    {_id:"Colaborador01",children : []},
    {_id:"Colaborador02",children : []},
    {_id:"Supervisor01",children : []},
    {_id:"Supervisor02",children : ["Colaborador01","Colaborador02"]},
    {_id:"Gerente",children : ["Supervisor01","Supervisor02"]},
    {_id:"Gerente Geral",children : ["Gerente"]},
    ])
    
db.Filho.findOne({_id:"Gerente"}).children


db.createCollection("Ancestrais")

db.Ancestrais.insertMany([
    {_id:"Colaborador01", ancestors:["Gerente geral", "Gerente", "Supervisor02"], parent:"Supervisor02"},
    {_id:"Colaborador02", ancestors:["Gerente geral", "Gerente", "Supervisor02"], parent:"Supervisor02"},
    {_id:"Supervisor02", ancestors:["Gerente geral", "Gerente"], parent:"Gerente"},
    {_id:"Supervisor01", ancestors:["Gerente geral", "Gerente"], parent:"Gerente"},
    {_id:"Gerente", ancestors:["Gerente geral"], parent:"Gerente geral"},
    {_id:"Gerente geral", ancestors:[], parent:null}
])

db.Ancestrais.findOne({_id:"Colaborador01"}).ancestors
db.Ancestrais.findOne({_id:"Colaborador01"}).parent