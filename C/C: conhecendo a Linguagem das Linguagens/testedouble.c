#include <stdio.h>

int main(){
    double b,a;
    printf("Digite um número: ");
    scanf("%f", &a);
    printf("Digite outro número: ");
    scanf("%f", &b);
    double divisao = a/b;
    printf("Resultado da divisão: %f",divisao);
}