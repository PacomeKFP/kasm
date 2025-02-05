---
sidebar_position: 1
title: Instructions à 3 adresses
sidebar_label: 3️⃣ 3 Adresses
---

## Présentation

Le format **3 adresses** est le plus explicite et le plus facile à comprendre. Chaque instruction effectue une opération entre deux valeurs et stocke le résultat dans une troisième adresse.

### Syntaxe
```asm
OP SOURCE1, SOURCE2, DESTINATION
```

### Caractéristiques
- **DESTINATION** : Où le résultat est stocké.
- **SOURCE1** et **SOURCE2** : Les valeurs utilisées pour l'opération.
- Les sources peuvent être des adresses mémoire ou des valeurs immédiates (préfixées par `#`).

### Exemples
```asm
ADD A, B, C      ; C = A + B
SUB X, #10,D    ; D = X - 10
MUL A, B, RES    ; RES = A * B
DIV A, B, Q      ; Q = A / B
MOD A, B, R      ; R = A % B
```

### Avantages
- Très lisible et explicite.
- Pas d'effets secondaires (les sources ne sont pas modifiées).
- Idéal pour les débutants.

### Analogie
Imaginez une calculatrice où vous entrez deux nombres et choisissez une opération. Le résultat est affiché sans modifier les nombres d'origine.
