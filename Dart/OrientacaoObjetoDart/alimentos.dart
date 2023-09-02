class Alimento {
  String nome;
  double peso;
  String cor;
  Alimento(this.nome, this.peso, this.cor);

  printAlimento() {
    print('Este(a) $nome pesa $peso gramma e é $cor');
  }
}

class Legumes extends Alimento implements Bolo {
  bool isPrecisaCozinhar;

  Legumes(String nome, double peso, String cor, this.isPrecisaCozinhar)
      : super(nome, peso, cor);

  cozinhar() {
    if (isPrecisaCozinhar) {
      print('Pronto, o $nome está cozinhando!');
    } else {
      print('Nem precisa cozinhar!');
    }
  }

  @override
  separarIngredientes() {
    print("Catar o legume");
  }

  @override
  fazeMassa() {
    print('Misturar a fruta com Farinha, açucar, ovos, ...');
  }

  @override
  assar() {
    print('Colocar no forno');
  }
}

class Citricas extends Fruta {
  double nivelAzedo;

  Citricas(String nome, double peso, String cor, String sabor,
      int diaDesdeColheita, this.nivelAzedo)
      : super(nome, peso, cor, sabor, diaDesdeColheita);

  void existeRefri(bool existe) {
    if (existe) {
      print('Existe Refrigerante de $nome');
    } else {
      print('Não existe refri de $nome');
    }
  }
}

class Nozes extends Fruta {
  double porcentagemOleoNatural;
  Nozes(String nome, double peso, String cor, String sabor,
      int diasDesdeColheita, this.porcentagemOleoNatural)
      : super(nome, peso, cor, sabor, diasDesdeColheita);

  @override
  fazeMassa() {
    print('Tirar a casca');
    super.fazeMassa();
  }
}

class Fruta extends Alimento implements Bolo {
  String sabor;
  int diasDesdeColheita;
  bool? isMadura;

  Fruta(
      String nome, double peso, String cor, this.sabor, this.diasDesdeColheita,
      {this.isMadura})
      : super(nome, peso,
            cor) /*isMadura é um valor opcional, por está entre chaves */;

  estaMadura(int diasParaMadura) {
    isMadura = diasDesdeColheita >= diasParaMadura;
    print(
        "A sua $nome foi colhida a $diasDesdeColheita dias, e precisa de $diasParaMadura. Ela está madura? $isMadura");
  }

  fazerSuco() {
    print("Você fez um ótimo suco de $nome");
  }

  @override
  separarIngredientes() {
    print("Catar o legume");
  }

  @override
  fazeMassa() {
    print('Misturar a fruta com Farinha, açucar, ovos, ...');
  }

  @override
  assar() {
    print('Colocar no forno');
  }
}

abstract class Bolo {
  //separo os ingredientes
  separarIngredientes();
  //faço a massa
  fazeMassa();
  //assar
  assar();
}

void main() {
  Fruta melancia = Fruta('Melancia', 1500.0, 'Verde', 'Doce', 40);
  melancia.estaMadura(43);

  Legumes mandioca1 = Legumes('Macaxeira', 1200, 'Marrom', true);
  Fruta banana1 = Fruta('Banana', 75, 'Amarela', 'Doce', 12);
  Nozes macadamia1 = Nozes('Macadâmia', 2, 'Branco Amarelado', 'Doce', 20, 35);
  Citricas limao1 = Citricas('Limão', 100, 'Verde', 'Azedo', 5, 9);

  mandioca1.printAlimento();
  banana1.printAlimento();
  macadamia1.printAlimento();
  limao1.printAlimento();

  banana1.separarIngredientes();
  mandioca1.fazeMassa();
  macadamia1.assar();
  macadamia1.fazeMassa();
}
