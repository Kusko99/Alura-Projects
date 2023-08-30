//criar um banco de dados
use Alura_Serie
//criar uma coleção
db.createCollection("series")
//apagar uma coleção
db.series.drop()
//mostrar todas as databases
show databases
//apagar um banco de dados
db.dropDatabase()
//adicionando dados a coleção
db.series.insertOne({
    "Série" : "Pataal Lok",
    "Ano de Lançamento" : 2020,
    "Temporadas Disponíveis" : 1,
    "Linguagem" : "Hindi",
    "Genero" : ["Drama"],
    "IMDb Avaliação" : 7.5,
    "Classificação" : "18+"
})

db.serie.insertOne({
    "Série" : "Upload",
    "Ano de Lançamento" : 2020,
    "Linguagem" : "Inglês",
    "Genero" : ["Comédia de ficção cientifica"],
    "IMDb Avaliação" : 8.1,
    "Classificação" : "16+"
})

db.series.insertOne({
    "Série" : "A nova onda do Kusko",
    "Ano de Lançamento" : 2000,
    "Temporada disponíveis" : 3,
    "Linguagem" : "Guarani",
    "Genero" : ["Comédia"],
    "IMDb Avaliação" : 8.1,
})
db.serie.insertMany([{
    "Série" : "The Marvelous Mrs. Marvel",
    "Temporada disponíveis" : 3,
    "Linguagem" : "Inglês",
    "Genero" : ["Drama","Comédia"],
    "IMDb Avalição" : "8.7",
    "Classificação" : "16+"
},
{
    "Série" : "Four More Shots Please",
    "Ano de Lançamento" : 2019,
    "Temporadas disponíveis" : 2,
    "Linguagem" : "Hindi",
    "Genero" : ["Drama","Comédia"]
}])

db.series.insertOne({
    "Série" : 'Fleabag',
    "Ano de lançamento" : 2016,
    "Temporadas Disponíveis" : 2,
    "Linguagem" : "Inglês",
    "IMDb Avaliação" : 8.7
})

db.series.insertMany([{
    "Série" : "Made in Heaven",
    "Temporadas Disponíveis" : 1,
    "Linguagem" : "Hindi",
    "Genero" : ["Drama"],
    "IMDb Avaliação" : 8.3,
    "Classificação" : "18+"
}, {
    "Série" : "Homecoming",
    "Temporadas Disponíveis" : 2,
    "Linguagem" : "Ingles",
    "Genero" : ["Drama"],
    "IMDb Avaliação" : 7.5,
    "Classificação" : "16+"
}])


//CONSULTAS
//Todas as séries com ano de lançamento igual a 2018
db.series.find({"Ano de lançamento" : 2018})

//Todas as séries com ano de lançamento igual a 2018 ou classificação 18+ (OR)
db.series.find({$or:[{"Ano de lançamento" : 2018},{"Classificação" : "18+"}]})

//Todas as séries com ano de lançamento igual a 2018 e classificação 18+ (AND)
db.series.find({$and:[{"Ano de lançamento" : 2018},{"Classificação" : "18+"}]})

//Todas as séries que não tem o ano de lançamento 2018 ou classificação 18+ (NOT OR)
db.series.find({$nor:[{"Ano de lançamento" : 2018},{"Classificação" : "18+"}]})

//Todas as séries com ano de lançamento 2016 ou 2018 (IN)
db.series.find({"Ano de lançamento" : {$in : [2016,2018]}})

//Todas as séries com mais de duas temporadas(GREATER THAN)
db.series.find({"Temporadas Disponíveis" : {$gt : 2}})

//Todas as séries com duas ou mais temporadas(GREATER OR EQUAL THAN)
db.series.find({"Temporadas Disponíveis" : {$gte : 2}})

//Todas as séries com menos de cinco temporadas(LESS THAN)
db.series.find({"Temporadas Disponíveis" : {$lt : 5}})

//Todas as séries com cinco ou menos temporadas (LESS OR EQUAL THAN)
db.series.find({"Temporadas Disponíveis" : {$lte : 5}})

//Filtros
//Todas as séries com menos de cinco temporadas mas apenas os campos "Série"  e "Linguagem"
db.series.find({"Temporadas Disponíveis" : {$lte : 5}},{"Série" : 1, "Linguagem" : 1, _id : 0})

//Usando a ordenação por série
db.series.find({"Temporadas Disponíveis" : {$lte : 5}},
{"Série" : 1, "Linguagem" : 1, _id : 0}
).sort({"Série" : 1})

//Buscar todos os registros do banco 
db.series.find()

//Buscando o campo "Série" e "Ano de lançamento" de todos os registros disponíveis
db.series.find({},{"Série":1, "Ano de lançamento": 1, "_id":0})

//Buscando registros limitados a cinco registros
db.series.find().limit(5)

//ATUALIZANDO DADOS
db.series.find({"Série" : "A nova onda do Kusko"})
//Utilizando o nome Série para buscar e depois informando dado para atualizar usando $set
db.series.updateOne({"Série" : "A nova onda do Kusko"},{$set: {"Temporada disponíveis" : 4}})

//Utilizando o comando de atualizar para adiconar um novo campo com a classificação
db.series.updateOne({"Série" : "A nova onda do Kusko"},{$set: {"Classificação" : "16+"}})

//Buscando duas séries
db.series.find({"Série" : {$in: ["Four More Shots Please","Flebang"]}})

//Atualizando duas séries ao mesmo tempo
db.series.updateMany({"Série" : {$in : ["Four More Shots Please", "Flebang"]}},{$set:{"Classificação" : "16+"}})

//Excluindo Dados
//MUITO CUIDADO COM DELETE, SE NÂO PASSAR O FILTRO TUDO SERÁ EXCLUIDO
//Como parametro se passa o filtro do que será excluido
db.series.deleteOne({"Série" : "The Boys"})
db.series.deleteMany({"Temporadas Disponíveis" : 1})






