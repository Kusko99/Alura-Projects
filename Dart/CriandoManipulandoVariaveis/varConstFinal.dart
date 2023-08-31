void main() {
  //Uma constante, este variavel não pode ter seu valor alterado após atribuido
  const nome = 'Fernando Freitas de Oliveira';

  //Um final, tem a mesma premissa do const, esse valor não muda após atribuido
  final apelido;
  //O final pode ser defindo depois de declaro
  //A const precisa ter um valor atribuido assim que for declarada
  apelido = 'kusko';

  //Ao declarar com var, o Dart irá determinar qual seria o tipo quando o valor for atribuido
  //Isso não é bom para o codigo, diminui o desempenho, o ideal é usar o tipo quando vc já souber qual será o tipo
  //Após o Dart determinar o tipo de variavel com VAR, não é possível atribuir um valor de outro tipo a essa variavel
  var idade = 23;
  var altura = 1.85;
  var geek = true;

  List<dynamic> Kusko = [nome, apelido, idade, altura, geek];
  print(Kusko);
}
