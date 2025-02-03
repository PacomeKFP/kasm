---
sidebar_position: 3
title: Instructions à 1 adresse
sidebar_label: 1️⃣ 1 Adresse
---

## Présentation

Le format **1 adresse** utilise un **accumulateur** implicite. L'accumulateur est un registre spécial qui stocke temporairement les résultats des opérations.

### Syntaxe
```asm
OP DESTINATION
```

### Caractéristiques
- **DESTINATION** : Où le résultat est stocké.
- L'accumulateur est utilisé comme deuxième opérande.
- Après l'opération, l'accumulateur est mis à jour avec le résultat.

### Exemples
```asm
LOAD A      ; Accumulateur = A
ADD B       ; Accumulateur = Accumulateur + B
STORE C     ; C = Accumulateur
SUB D       ; Accumulateur = Accumulateur - D
MUL E       ; Accumulateur = Accumulateur * E
```

### Avantages
- Très compact.
- Utilise moins de mémoire pour les instructions.

### Inconvénients
- Moins explicite (l'accumulateur est implicite).
- Nécessite des instructions supplémentaires (`LOAD` et `STORE`).

### Analogie
Imaginez une calculatrice avec une mémoire temporaire. Vous chargez un nombre dans la mémoire, effectuez des opérations, puis stockez le résultat.

