#include <stdio.h>
#include <string.h>

struct op {
    char l;
    char r[20];
}

struct op ops[20], pr[20];
int n, pr_count;

void removeDeadCode(){
    int used;
    pr_count = 0;
    for(int i = 0; i < n; i++){
        used = 0; 
        for(int j = i + 1; j < n; j++){
            if(strchr(ops[j].r, ops[i].l)) {
                used = 1;
                break;
            }
        }

        if(used || i == n-1){
            pr[pr_count++] = ops[i];
        }
    }
}

void eliminateCommonExpression(){
    for(int i = 0; i < pr_count; i++){
        for(int j = i + 1; j < pr_count; j++){
            if(strcmp(pr[i].r, pr[j].r) == 0){
                char old = pr[j].l;
                char newv = pr[i].l;
                pr[j].l = '\0';

                for(int k = 0; k < pr_count; k++){
                    for(int m = 0; pr[k].r[m] != '\0'; m++){
                        if(pr[k].r[m] == old)
                            pr[k].r[m] = newv;
                    }
                }
            }
        }
    }
}

void algebraicSubstitution() {
    char buffer[50];

    for(int i = 0; i < pr_count; i++){
        for(int j = 0; j < pr_count; j++){
            if(i != j && pr[j].l != '\0'){
                char *pos = strchr(pr[i].r, pr[j].l);
                if(pos) {
                    int idx = pos - pr[i].r;
                    buffer[0] = '\0';

                    strncat(buffer, pr[i].r, idx);
                    strcat(buffer, pr[j].r);
                    strcat(buffer, pr[i].r + idx + 1);

                    strcpy(pr[i].r, buffer);
                }
            }
        }
    }
}

int main(){
    int i;

    printf("Enter the no of values: ");
    scanf("%d", &n);

    for(i = 0; i < n; i++) {
        printf("left: ");
        scanf(" %c", &ops[i].l);
        printf("right: ");
        scanf(" %s", ops[i].r);
    }

    printf("\nIntermediate Code\n");
    for(i = 0; i < n; i++){
        printf("%c = %s\n", ops[i].l, ops[i].r);
    }

    removeDeadCode();
    printf("\nAfter Dead Code Elimination\n");
    for(i = 0; i < pr_count; i++){
        printf("%c = %s\n", pr[i].l, pr[i].r);
    }

    eliminateCommonExpression();
    printf("\nAfter Eliminating Common Expressions\n");
    for(i = 0; i < pr_count; i++){
        if(pr[i].l != '\0')
            printf("%c = %s\n", pr[i].l, pr[i].r);
    }

    algebraicSubstitution();
    printf("\nAfter Algebraic Substitution\n");
    for(i = 0; i < pr_count; i++){
        if(pr[i].l != '\0')
            printf("%c = %s\n", pr[i].l, pr[i].r);
    }

    return 0;
}