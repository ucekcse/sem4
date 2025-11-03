%{
#include "y.tab.h"
%}

%%
[a-zA-Z][a-zA-Z0-9]*        return id;
[0-9]+                      return num;
[+\-*/]                     return op;
=                           return '=';
;                           return ';';
[ \t]                       ; /* Ignore spaces and tabs */
\n                          return 0;
.                           return yytext[0];
%%

int yywrap(){
    return 1;
}