---
sidebar_position: 2
title: Instructions à 2 adresses
sidebar_label: 2️⃣ 2 Adresses
---

## Présentation

Le format **2 adresses** est plus compact que le format 3 adresses. Ici, la destination est aussi l'une des sources. Cela signifie que l'une des valeurs est modifiée par l'opération.

### Syntaxe
```asm
OP DESTINATION, SOURCE
```

### Caractéristiques
- **DESTINATION** : Où le résultat est stocké (et aussi l'une des sources).
- **SOURCE** : La deuxième valeur utilisée pour l'opération.
- La destination est modifiée après l'opération.

### Exemples
```asm
ADD A, B      ; A = A + B
SUB X, #5     ; X = X - 5
MUL RES, A    ; RES = RES * A
DIV Q, B      ; Q = Q / B
MOD R, C      ; R = R % C
```

### Avantages
- Moins verbeux que le format 3 adresses.
- Utilise moins de mémoire pour stocker les instructions.

### Inconvénients
- Moins explicite (la destination est modifiée).
- Peut être moins intuitif pour les débutants.

### Analogie
Imaginez une calculatrice où vous entrez un nombre, choisissez une opération, et le résultat remplace le nombre d'origine.
