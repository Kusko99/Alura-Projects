use showbank

//Clientes
//Nome, CPF, data de nascimento, genero, profissão e endereço,status civil

db.createCollection("clientes",{
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["nome","cpf","status_civl","data_nascimeto","endereco"],
            properties : {
                nome : {
                    bsonType : "string",
                    description : "informe corretamente o nome do cliente"
                },
                cpf : {
                    bsonType : "string",
                    description : "informe corretamente o cpf co cliente"
                },
                status_civil : {
                    enum : ["Solteiro(a)","Casado(a)","Separado(a)","Divorciado(a)","Viúvo(a)"],
                    description : "informe corretamente o status civil do cliente"
                },
                data_nascimento: {
                    bsonType : "string",
                    description : "informe corretamente o status civil do cliente"
                },
                endereco : {
                    bsonType : "string",
                    description : "informe corretamente o endereço do cliente"
                }
            }
        }
    }
})


//Contas
//número da conta, agencia, tipo da conta, CPF e valor

db.createCollection("contas",{
    validator :{
        $jsonSchema :{
            bsonType : "object",
            required : ['numero_conta','tipo_conta','cpf'],
            properties :{
                "numero_conta" : {
                    bsonType : "string",
                    description : "Informe corretamente o número da conta"
                },
                "tipo_conta" : {
                    bsonType : "string",
                    enum : ["conta corrente","conta poupança", "conta salário"],
                    description : "Informe corretamente o tipo da conta"
                },
                "cpf" : {
                    bsonType : "string",
                    description : "Informe corretamente o número o cpf do cliente da conta"
                },
             }
        }
    }
})

//Inserindo dados 

db.clientes.insertOne({
    "nome" : "Allana Esther Lara Monteiro",
    "cpf" : "207.588.703-96",
    "data_nascimeto" : "15/03/1962",
    "genero" : "Feminio",
    "profissao" : "Servente de Obras",
    "endereco" : "Rua Deputado João Moura Santos, número 155, Matadouro, Teresina, PI, 64004-340",
    "status_civl" : "Divorciado(a)"
})

db.clientes.find()

db.contas.insertOne({
    "numero_conta"  : "04938-1",
    "agencia" : "5575",
    'tipo_conta' : "conta salário",
    "cpf" : "207.588.703-96",
    "valor" : 308
})

db.contas.find()

db.clientes.insert({"nome": "Cauê Luan da Paz",
 "cpf": "426.239.760-23",
 "data_nascimeto": "16/02/1967",
 "genero": "Masculino", 
 "profissao": "Vendedor em comércio atacadista", 
 "endereco": "Rua Vinte e Quatro, número 121, Três Vendas, Pelotas, RS, 96071-380", 
 "status_civl": "Casado(a)"})
 
db.contas.insert({"numero_conta": "0265177-7",
"agencia": "0944",
"tipo_conta": "conta salário",
"cpf": "426.239.760-23",
"valor": "1411"})

db.clientes.insertMany([{
"nome": "Juliana Eloá Brito", 
 "cpf": "208.862.381-70",
 "data_nascimeto": "26/06/1991", 
 "genero": "Feminino", 
 "profissao": "Trabalhador de serviços de limpeza", 
 "endereco": "Rua Euza D'Aparecida Roriz dos Anjos, número 617, Setor Leste, Luziânia, GO, 72803-590", 
 "status_civl": "Solteiro(a)"
},{
"nome": "Luan Caio da Silva", 
 "cpf": "520.233.763-94", 
 "data_nascimeto": "14/10/1949", 
 "genero": "Masculino", 
 "profissao": "Atendente de farmácia", 
 "endereco": "Rua João Alberto, número 224, Santa Clara, São Luís, MA, 65058-623", 
 "status_civl": "Viúvo(a)" }])

db.contas.insertMany([{
"numero_conta": "0189393-9", 
"agencia": "0289", 
"tipo_conta": "conta salário",
 "cpf": "208.862.381-70", 
"valor": 5242
}, {
"numero_conta": "67314-4", 
"agencia": "7147", 
"tipo_conta": "conta poupança", 
"cpf": "520.233.763-94"}])

//Listar coleções e suas regras de validações
db.getCollectionInfos({name:"clientes"})
db.getCollectionInfos({name:"contas"})
db.runCommand({listCollections : 1, filter: {name:"contas"}})
db.runCommand({listCollections : 1, filter: {name:"clientes"}})
db.runCommand({listCollections : 2})

//alterando regras de validações
db.runCommand({collMod: "clientes", 
    validator : {
        $jsonSchema : {
            bsonType : "object",
             "additionalProperties" : false,
            required : ["_id","nome","cpf","status_civl","data_nascimeto","endereco","genero","profissao"],
            properties : {
                _id : {
                    bsonType : "objectId",
                    description : "informe o _id"
                },
                nome : {
                    bsonType : "string",
                    maxLength : 150,
                    description : "informe corretamente o nome do cliente"
                },
                cpf : {
                    bsonType : "string",
                    maxLength : 14,
                    minLength : 14,
                    description : "informe corretamente o cpf co cliente"
                },
                status_civil : {
                    enum : ["Solteiro(a)","Casado(a)","Separado(a)","Divorciado(a)","Viúvo(a)"],
                    description : "informe corretamente o status civil do cliente"
                },
                data_nascimento: {
                    bsonType : ["string", "null"],
                    description : "informe corretamente o status civil do cliente"
                },
                endereco : {
                    bsonType : "string",
                    description : "informe corretamente o endereço do cliente"
                },
                genero : {
                    bsonType : "string",
                    description : "informe o genero do cliente"
                },
                profissao : {
                    bsonType : "string",
                    description : "infore a profissão do cliente"
                }
            }
        }
    }
})

db.runCommand({collMod : "contas",
    validator :{
        $jsonSchema :{
            bsonType : "object",
            "additionalProperties" : false,
            required : ["_id",'numero_conta','tipo_conta','cpf','valor'],
            properties :{
                _id : {
                    bsonType : "objectId",
                    description : "informe o _id"
                },
                "numero_conta" : {
                    bsonType : "string",
                    description : "Informe corretamente o número da conta"
                },
                "tipo_conta" : {
                    bsonType : "string",
                    enum : ["conta corrente","conta poupança", "conta salário"],
                    description : "Informe corretamente o tipo da conta"
                },
                "cpf" : {
                    bsonType : "string",
                     maxLength : 14,
                    minLength : 14,
                    description : "Informe corretamente o número o cpf do cliente da conta"
                },
                'valor' : {
                    bsonType : 'double',
                    description : "Informe o valor da conta"
                }
             }
        }
    }
})


