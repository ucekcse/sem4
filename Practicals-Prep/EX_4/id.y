%{
#include <stdio.h>
#include <stdlib.h>

int yylex(void);
int yyerror(const char *msg);
int valid = 1;
%}

%token digit letter

%%

start : letter s
    ;

s : letter s
  | digit s
  | //empty
  ;

%%

int yyerror(const char *msg){
    valid = 0;
    printf("Invalid Identifier\n");
    return 0;
}

int main(){
    printf("Enter the Identifier to test:\n");
    yyparse();
    if(valid){
        printf("Valid Identifier\n");
    }
    return 0;
}