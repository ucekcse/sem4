#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    FILE *fp = fopen("add.c", "r");
    if (!fp) { printf("File error\n"); return 1; }

    char token[100], prev[100] = "";
    char *delim = " ;><{}+)(&%#,=\n";
    char *word;
    char vars[20][20], types[20][10];
    int var_count = 0;

    printf("Lexeme\t\tToken\n");
    printf("-----------------------------\n");

    while (fscanf(fp, "%s", token) != EOF && strcmp(token, "END") != 0) {
        // Print special symbols
        for (int i = 0; token[i]; i++)
            if (strchr(";><{}+)(&%#,=()", token[i]))
                printf("%c\t\tSpecial Symbol\n", token[i]);

        // Break into tokens
        word = strtok(token, delim);
        while (word) {
            if (!strcmp(word, "int") || !strcmp(word, "float") || !strcmp(word, "char"))
                printf("%s\t\tKeyword\n", word);
            else if (!strcmp(word, "printf") || !strcmp(word, "scanf") || !strcmp(word, "main"))
                printf("%s\t\tBuilt-in Function\n", word);
            else if (!strcmp(word, "include"))
                printf("%s\t\tPreprocessor\n", word);
            else if (!strcmp(prev, "int") || !strcmp(prev, "float") || !strcmp(prev, "char")) {
                strcpy(vars[var_count], word);
                strcpy(types[var_count++], prev);
                printf("%s\t\tVariable\n", word);
            }
            strcpy(prev, word);
            word = strtok(NULL, delim);
        }
    }

    printf("\nSymbol\t\tAddress\t\tType\n");
    printf("--------------------------------\n");
    for (int i = 0; i < var_count; i++)
        printf("%s\t\t%p\t%s\n", vars[i], malloc(1), types[i]);

    fclose(fp);
    return 0;
}
