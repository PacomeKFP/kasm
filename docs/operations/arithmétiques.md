---
title: Opérations arithmétiques
sidebar_label: ➕ Arithmétique
---

## Présentation

Les opérations arithmétiques permettent de manipuler des valeurs numériques. Elles sont essentielles pour effectuer des calculs dans vos programmes.

### Opérations disponibles

| Opération | Symbole | Description                     |
|-----------|---------|---------------------------------|
| Addition  | `ADD`   | Ajoute deux valeurs             |
| Soustraction | `SUB` | Soustrait une valeur d'une autre |
| Multiplication | `MUL` | Multiplie deux valeurs          |
| Division  | `DIV`   | Divise une valeur par une autre |
| Modulo    | `MOD`   | Donne le reste d'une division   |

### Exemples

#### Addition
```asm
ADD A, B, C      ; C = A + B
```

#### Soustraction
```asm
SUB X, #10, D    ; D = X - 10
```

#### Multiplication
```asm
MUL A, B,RES    ; RES = A * B
```

#### Division
```asm
DIV A, B, Q      ; Q = A / B
```

#### Modulo
```asm
MOD A, B, R      ; R = A % B
```

### Remarques
- Les opérations fonctionnent uniquement sur des entiers.
- La division entière tronque le résultat (pas de décimales).
- Le modulo donne toujours un résultat positif ou nul.

