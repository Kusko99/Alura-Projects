void main() {
  int idade = 23;

  //if/else
  bool maiorDeIdade;
  if (idade >= 18) {
    maiorDeIdade = true;
  } else {
    maiorDeIdade = false;
  }
  print("Eu sou maior de idade? $maiorDeIdade");
  ;

  //loop usando for
  for (int i = 1; i < 5; i++) {
    print('Concluí $i voltas');
  }

  for (int i = 1; i < 10; i = i + 2) {
    print('Concluí $i voltas');
  }

  //outro loop for
  List<String> amigos = [
    "Daniel",
    "Oliver",
    "Gabriel",
    "Penoni",
    "Lucas",
    "Eduardo",
    "Gatinha"
  ];
  for (String amigo in amigos) {
    print("Uma abraço para $amigo");
  }

  //while
  int energia = 100;
  while (energia > 0) {
    print('Mais uma repetição');
    energia = energia - 10;
  }

  //do/while
  do {
    print("Outra repetição");
    energia = energia - 10;
  } while (energia > 0);
}
