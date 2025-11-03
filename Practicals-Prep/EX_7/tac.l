%{
#include "y.tab.h"
extern YYSTYPE yylval;
%}

%%
[0-9]                       {yylval.symbol = yytext[0]; return NUMBER;};
[a-zA-Z]                    {yylval.symbol = yytext[0]; return LETTER;};
[ \t]                       ; /* Ignore spaces and tabs */
\n                          return 0;
.                           return yytext[0];
%%

int yywrap(){
    return 1;
}