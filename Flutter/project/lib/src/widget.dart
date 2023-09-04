import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        home: Container(
            color: Colors.indigoAccent,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Stack(
                  alignment: AlignmentDirectional.center,
                  children: [
                    Container(
                      color: Colors.tealAccent,
                      width: 100,
                      height: 100,
                    ),
                    Container(
                      color: Colors.redAccent,
                      width: 50,
                      height: 50,
                    )
                  ],
                ),
                Stack(
                  alignment: AlignmentDirectional.center,
                  children: [
                    Container(
                      color: Colors.deepOrange,
                      width: 100,
                      height: 100,
                    ),
                    Container(
                      color: Colors.deepPurple,
                      width: 50,
                      height: 50,
                    ),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      color: Colors.cyan,
                      height: 50,
                      width: 50,
                    ),
                    Container(
                      color: Colors.pinkAccent,
                      height: 50,
                      width: 50,
                    ),
                    Container(
                      color: Colors.amber,
                      height: 50,
                      width: 50,
                    )
                  ],
                ),
                Container(
                  color: Colors.deepOrange,
                  height: 30,
                  width: 300,
                  child: const Text(
                    'Suco de Laranja',
                    style: TextStyle(color: Colors.black87, fontSize: 28),
                    textAlign: TextAlign.center,
                  ),
                ),
                ElevatedButton(
                    onPressed: () {
                      print("Você apertou o botão");
                    },
                    child: const Text('Aperte o botão!'))
              ],
            )));
  }
}
