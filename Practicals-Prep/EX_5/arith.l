%{
#include <stdio.h>
#include <stdlib.h>
#include "y.tab.h"
extern int yylval;
%}

%%
[0-9]+                      {yylval = atoi(yytext); return NUMBER;};
[ \t]                       ; /* Ignore spaces and tabs */
\n                          return 0;
.                           return yytext[0];
%%

int yywrap(){
    return 1;
}