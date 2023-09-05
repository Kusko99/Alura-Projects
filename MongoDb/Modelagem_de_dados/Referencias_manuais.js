use modelagem_alura_02

db.dropDatabase()

db.createCollection("clientes",
{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["Nome", "CPF", "Status_Civil", "Data_Nascimento", "Genero", "Profissao"],
            properties:{
                Nome:{
                bsonType: "string",
                maxLength:150,
                description: "informe corretamente o nome do cliente"
                },
                CPF:{
                bsonType: "string",
                minLength:14,
                maxLength:14,
                description: "informe corretamente o cpf do cliente"
                },
                Status_Civil:{
                bsonType: "string",
                enum:["Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)", "Viúvo(a)"],
                description: "informe corretamente o status civil do cliente"
                },
                Data_Nascimento:{
                bsonType: ["string", "null"],
                description: "informe corretamente a data de nascimento do cliente" 
                },
                Genero:{
                bsonType: "string",
                description: "informe corretamente o genero do cliente"
                },
                Profissao: {
                bsonType: "string",
                description: "informe corretamente a profissao do cliente"}
            }
        }
    }
})

db.createCollection("contas",
{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["Numero_Conta", "Tipo", "CPF", "valor", "Agência"],
            properties:{
                Numero_Conta:{
                bsonType: "string",
                description: "informe corretamente o numero da conta"
                },
                Tipo:{
                bsonType: "string",
                enum: ["Conta corrente", "Conta poupança", "Conta salário"],
                description: "informe corretamente o tipo da conta"
                },
                CPF:{
                bsonType: "string",
                minLength:14,
                maxLength:14,
                description: "informe corretamente o cpf do cliente na conta"
                },
                Valor:{
                bsonType: "double",
                description: "informe corretamente o valor da conta"
                },
                Agência:{
                bsonType: ["string", "null"],
                description: "informe corretamente a Agência"}
            }
        }
    }
})

db.createCollection("endereco",
{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["Rua", "Numero", "Bairro", "Cidade", "Estado", "CEP"],
            properties:{
                Rua:{
                    bsonType: "string"},
                Numero:{
                    bsonType: "int"},
                Bairro:{
                    bsonType: "string"},
                Cidade:{
                    bsonType: "string"},
                Estado:{
                    bsonType: "string"},
                CEP:{
                    bsonType: "string"},
            }
        }
    }
})

db.clientes.insertOne({
"_id":1,
"Nome": "Flávia Carla Rocha",
"CPF": "063.668.976-03",
"Data_Nascimento": "12/07/1944",
"Genero": "Feminino", 
"Profissao": "Auxiliar de enfermagem",
"Status_Civil": "Casado(a)"
})

db.contas.insertOne({
"_id": 4,
"id_clientes": 1,
"Numero_Conta": "1044626-5", 
"Agência": "5575", 
"Tipo": "Conta salário", 
"CPF": "063.668.976-03", 
"Valor": 5.368
})

db.endereco.insertOne({
"_id": 3,
"id_clientes": 1,
"Rua":"Escoteiro Fernando César", 
"Numero": 646, 
"Bairro": "Nova Era", 
"Cidade":"Juiz de Fora", 
"Estado":"MG", 
"CEP": "36087-380"
})




















