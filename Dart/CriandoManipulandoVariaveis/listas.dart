void main() {
  List listavazia = []; //criando uma lista vazia
  print(listavazia.runtimeType);
  List<String> listanomes = [
    'Daniel',
    'Raul',
    'Lucas',
    'Eduardo',
    'Gabriel',
    'Bia',
    'Oliver',
    'Kusko',
    'Penoni'
  ];
  print(listanomes);
  print(listanomes[0]);
  print(listanomes[8]);
  print(listanomes.length); //tamanho da lista

  //Lista Dinâmicas
  List<dynamic> Kusko = [
    27,
    1.86,
    true,
    'Fernando Freitas de Oliveira',
    'Kusko'
  ];

  dynamic teste;
  print(teste.runtimeType);

  print(Kusko);
  print('Meu nome é ${Kusko[3]},\n'
      'Meu apelido é ${Kusko[4]}\n'
      'Eu sou geek: ${Kusko[2]}\n'
      'Tenho ${Kusko[0]} anos \n'
      'Minha altura é ${Kusko[1]}');

  String nome = 'Fernando Freitas de Oliveira';
  String apelido = 'Kusko';
  int idade = 23;
  double altura = 1.85;
  bool geek = true;

  List<dynamic> KuskoBetter = [nome, apelido, idade, altura, geek];
  print(KuskoBetter);
}
