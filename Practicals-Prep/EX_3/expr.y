%{
#include <stdio.h>
#include <stdlib.h>

int yylex(void);
int yyerror(const char *msg);
int valid = 1;
%}

%token num id op

%%

start : id '=' s ';'
    ;

s : id x
  | num x
  | '-' num x
  | '(' s ')' x
  ;

x : op s
  | '-' s
  | //empty
  ;

%%

int yyerror(const char *msg){
    valid = 0;
    printf("Invalid Expression\n");
    return 0;
}

int main(){
    printf("Enter the Expression:\n");
    yyparse();
    if(valid){
        printf("Valid Expression\n");
    }
    return 0;
}