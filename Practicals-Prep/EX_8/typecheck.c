#include <stdio.h>
#include <stdlib.h>

int main(){
    int noOfVar, len, i, floatFlag = 0;
    char exp[50], type[15], var[15], temp;

    printf("Enter the no of variable: \n");
    scanf("%d", &noOfVar);

    for(i = 0; i < noOfVar; i++){
        printf("Enter the variable %d:", i+1);
        scanf(" %c", &var[i]);
        printf("Enter the type for variable %d (float-f, int-i):", i+1);
        scanf(" %c", &type[i]);
        if(type[i] == 'f')
            floatFlag = 1;
    }

    printf("Enter the Expression: (End with $)\n");
    i = 0;
    getchar();
    while((temp = getchar()) != '$'){
        exp[i] = temp;
        i++;
    }

    len = i;

    for(i = 0; i < len; i++){
        if(exp[i] == '/')
            floatFlag = 1;
    }

    if(floatFlag == 1){
        printf("The expression results as an Float value\n");
    }else{
        printf("The expression results as an Integer value\n");
    }

    return 0;
}