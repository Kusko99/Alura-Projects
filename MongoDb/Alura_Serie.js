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
