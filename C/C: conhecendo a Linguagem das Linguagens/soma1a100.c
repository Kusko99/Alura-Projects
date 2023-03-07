#include <stdio.h>

int main(){
    int soma = 0;
    for(int i = 1; i < 101; i++){
        soma += i;
    }
    printf("O resultado da soma é %d", soma);
}