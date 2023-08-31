void main() {
  //númericos
  int idade = 26;
  int hexadecimal = 0x00001b;
  print(idade);
  print(hexadecimal);

  double altura = 1.86;
  print(altura);

  //boolenaos
  double outraIdade = 23.000;

  bool geek = true;
  bool comparacao = (idade == altura);
  bool ehIgual = (idade == outraIdade);

  print(geek);
  print(comparacao);
  print(ehIgual);

  //string
  String nome = 'Fernando';
  String apelido = 'Kusko';
  print(nome + apelido);
  print('Eu sou um apelido');
  print('Eu sou um $apelido');
  print('Eu sou $apelido \n'
      'mas meu nome é: $nome, \n'
      'eu me considero geek? $geek');
}
