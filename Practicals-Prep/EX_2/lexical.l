%{
#include <stdio.h> 
%}

%%
int|char|float|return                   {printf("\n%s => Keyword", yytext);}
#.*                                     {printf("\n%s => PreProcessor", yytext);}
printf|scanf|main                       {printf("\n%s => Built-in Function", yytext);}
["][a-zA-Z]+["]                         {printf("\n%s => String", yytext);}
[a-zA-Z_][a-zA-Z0-9_]                   {printf("\n%s => Identifier", yytext);}
[0-9]+                                  {printf("\n%s => Number", yytext);}
"+"|"-"|"*"|"/"|"%"                     {printf("\n%s => Operator", yytext);}
","|";"|"&"|"("|")"|"["|"]"|"{"|"}"     {printf("\n%s => Special Character", yytext);}
[\t\n]+                                 {/*Ignore Whitespaces */}
.                                       {printf("\n%s => Unknown", yytext);}
%%

int main(){
    FILE *fp = fopen("input.txt" , "r");
    if(!fp){
        printf("Error opening file\n");
        return 1;
    }

    yyin = fp;
    yylex();
    printf("\n");
    fclose(fp);
    return 0;
}

int yywrap(){
    return 1;
}