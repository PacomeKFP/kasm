---
title: Mouvement de données
sidebar_label: 🚚 Mouvement de données
---

## Présentation

Les instructions de mouvement de données permettent de copier ou de déplacer des valeurs entre des adresses mémoire.

### Instructions disponibles

| Instruction | Description                              |
|-------------|------------------------------------------|
| `MOV`       | Copie une valeur dans une adresse        |
| `LOAD`      | Charge une valeur dans l'accumulateur    |
| `STORE`     | Stocke la valeur de l'accumulateur       |
| `PUSH`      | Empile une valeur sur la pile            |
| `POP`       | Dépile une valeur de la pile             |

### Exemples

#### `MOV` (Copie)
```asm
MOV A, B      ; Copie la valeur de B dans A
MOV X, #10    ; Stocke la valeur 10 dans X
```

#### `LOAD` et `STORE` (Accumulateur)
```asm
LOAD A        ; Accumulateur = A
ADD B         ; Accumulateur = A + B
STORE C       ; C = Accumulateur
```

#### `PUSH` et `POP` (Pile)
```asm
PUSH A        ; Empile la valeur de A
PUSH B        ; Empile la valeur de B
ADD           ; Dépile A et remplace B par A + B
POP C         ; Dépile le résultat dans C
```

### Remarques
- `MOV` ne modifie pas la source.
- `LOAD` et `STORE` sont utilisés avec le format 1 adresse.
- `PUSH` et `POP` sont utilisés avec le format 0 adresse (pile).

---

### Comparaison des instructions de mouvement

| Instruction | Utilisation                  | Format supporté       |
|-------------|------------------------------|-----------------------|
| `MOV`       | Copie simple                 | 2 et 3 adresses       |
| `LOAD`      | Charge dans l'accumulateur   | 1 adresse             |
| `STORE`     | Stocke depuis l'accumulateur | 1 adresse             |
| `PUSH`      | Empile une valeur            | 0 adresse (pile)      |
| `POP`       | Dépile une valeur            | 0 adresse (pile)      |

---

### Exemples complets

#### Utilisation de `MOV`
```asm
MOV A, #5      ; A = 5
MOV B, A       ; B = A (B = 5)
```

#### Utilisation de `LOAD` et `STORE`
```asm
LOAD X         ; Accumulateur = X
ADD #10        ; Accumulateur = X + 10
STORE Y        ; Y = Accumulateur
```

#### Utilisation de `PUSH` et `POP`
```asm
PUSH #20       ; Empile 20
PUSH #30       ; Empile 30
ADD            ; Dépile 20 et remplace 30 par 50
POP RESULT     ; RESULT = 50
```
