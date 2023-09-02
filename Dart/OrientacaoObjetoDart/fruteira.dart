bool funcEstaMadura(int dias) {
  if (dias >= 30) {
    return true;
  } else {
    return false;
  }
}

//Diferentes tipos de parametros
//Posicionais Obrigatórios (A ordem de chamada IMPORTA)
//Nomeados Opcionais (A ordem de chamada NÂO IMPORTA)
//Parâmetros "Padrão"
//Modificador "required"

mostrarMadura(String nome, int dias,
    {String cor = "sem cor", String? gosto, required textura}) {
  //Obrigatórios = nome, dias
  //Nomeados = cor, gosto, textura
  //Parâmetros "Padrão"  =  cor
  //Required = textura
  if (dias <= 30) {
    print("A $nome está madura");
  } else {
    print("A $nome não está madura");
  }
  print("A $nome é $cor");
  if (gosto != null) {
    print("A $nome tem um gosto $gosto");
  }
  print("A $nome tem uma textura $textura");
} //void poder ser ocultado na hora da declaração

int funcQuantosDiasMadura(int dias) {
  int diasParaMadura = 30;
  int quantosDiasFaltam = diasParaMadura - dias;
  return quantosDiasFaltam;
}

descreveFruta(
    {required String nome,
    required double peso,
    required int diasDesdeColheita}) {
  int diasParaFicarMadura = 0;
  bool estaMadura = funcEstaMadura(diasDesdeColheita);
  if (estaMadura == false) {
    diasParaFicarMadura = funcQuantosDiasMadura(diasDesdeColheita);
  }

  print(
      "A $nome pesa ${peso.toStringAsFixed(2)} gramas! Ela foi colhida há $diasDesdeColheita "
      "e precisa de $diasParaFicarMadura para amadurecer, logo, a $nome ${estaMadura ? "está" : "não está"} madura");
}

class Fruta {
  String nome;
  double peso;
  String cor;
  String sabor;
  int diasDesdeColheita;
  bool? isMadura;

  Fruta(this.nome, this.peso, this.cor, this.sabor, this.diasDesdeColheita,
      {this.isMadura} /*isMadura é um valor opcional, por está entre chaves */);
}

void main() {
  String nome = 'Laranja';
  double peso = 100.2;
  String cor = "Verde e Amarela";
  String sabor = "Doce e cítrica";
  int diaDesdeColheita = 40;
  bool isMadura = funcEstaMadura(diaDesdeColheita);

  print(isMadura);
  mostrarMadura("Uva", 60, gosto: "Doce", cor: "Roxa", textura: "lisa");

  int quantoDias = funcQuantosDiasMadura(diaDesdeColheita);
  print(quantoDias);

  descreveFruta(nome: "morango", peso: 3.5, diasDesdeColheita: 34);

  Fruta fruta01 = Fruta("Abacaxi", 40.7, "amarelo", "Azedinho", 40);
  Fruta fruta02 = Fruta(nome, peso, cor, sabor, diaDesdeColheita);

  print(fruta01.nome);
  print(fruta01.peso);
  print(fruta01);
  print(fruta01.toString());
  print(fruta02);
  print(fruta02.toString());
}
