use mongoDB_teste

db.createCollection("produtos", {
   validator : {
       $jsonSchema : {
            bsonType : "object",
            required : ["ID","Descrição","Embalagem","Quantidade","Preço"],
           properties: {
               "ID" : {
                   bsonType : "int",
                   description : "O ID tem que ser um número inteiro"
               },
               "Descrição" : {
                   bsonType : "string",
                   description : "A descrição deverá ser uma string"
               },
               "Embalagem" : {
                   bsonType : "string",
                   description : "A embalagem deve ser uma string"
               },
               "Quantidade" : {
                   bsonType : "int",
                   description : "A quantidade deve ser um inteiro"
               },
               "Preço" : {
                   bsonType : "double",
                   description : "O preço deve ser um número com casas decimais"
               }
           }
       }
     }
})