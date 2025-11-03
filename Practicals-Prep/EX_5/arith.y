%{
#include <stdio.h>
#include <stdlib.h>

int yylex(void);
int yyerror(const char *msg);
int flag = 1;
%}

%token NUMBER
%left '+' '-'
%left '*' '/' '%'

%%

ArithmeticExpression : 
    E {printf("\nResult = %d\n", $$); return 0;}
    ;

E : E '+' E {$$ = $1 + $3;}
  | E '-' E {$$ = $1 - $3;}
  | E '*' E {$$ = $1 * $3;}
  | E '/' E {$$ = $1 / $3;}
  | E '%' E {$$ = $1 % $3;}
  | '(' E ')' {$$ = $2;}
  | NUMBER {$$ = $1;}
  ;

%%

int yyerror(const char *msg){
    flag = 0;
    printf("Invalid Expression\n");
    return 0;
}

int main(){
    printf("Enter the Arithmetic Expression to Evaluate:\n");
    yyparse();
    if(flag){
        printf("Valid Expression\n");
    }
    return 0;
}