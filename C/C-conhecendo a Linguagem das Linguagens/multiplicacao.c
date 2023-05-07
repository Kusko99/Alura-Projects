#include <stdio.h>

int main(){
    int x, y;

    printf("Digite o valor de x: ");
    scanf("%d", &x);

    printf("\nDigite o valor de y: ");
    scanf("%d", &y);

    int multi = x*y;

    printf("\nO resultado da multiplicacão entre %d e %d é: %d", x,y,multi);

    return 0;
}