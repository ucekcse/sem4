%{
#include <stdio.h>
#include <stdlib.h>

int yylex(void);
void yyerror(const char *s);
struct expr{
    char operator;
    char operand1;
    char operand2;
    char result;
};

struct expr arr[20];
int index = 0;
char temp = 'A' - 1;

void yyerror(const char *s){
    fprintf(stderr, "Error: %s\n", s);
    exit(EXIT_FAILURE);
}

int yylex();

char generate_code(char operator, char operand1, char operand2){
    temp++;
    arr[index].operator = operator;
    arr[index].operand1 = operand1;
    arr[index].operand2 = operand2;
    arr[index].result = temp;
    index++;
    return temp;
}
%}

%union{
    char symbol;
}

%token <symbol> LETTER NUMBER
%type <symbol> exp

%left '+' '-'
%left '*' '/' 

%%

exp : exp '+' exp {$$ = generate_code('+', $1, $3);}
    | exp '-' exp {$$ = generate_code('-', $1, $3);}
    | exp '*' exp {$$ = generate_code('*', $1, $3);}
    | exp '/' exp {$$ = generate_code('/', $1, $3);}
    | '(' exp ')' {$$ = $2;}
    | LETTER {$$ = $1;} 
    | NUMBER {$$ = $1;}
    ; 
%%

int main(){
    printf("Enter the Expression:\n");
    yyparse();
    printf("\nThree Address Code:\n");
    for(int i = 0; i < index; ++i){
        printf("%c := %c %c %c\n", arr[i].result, arr[i].operand1, arr[i].operator, arr[i].operand2);
    }
    return 0;
}