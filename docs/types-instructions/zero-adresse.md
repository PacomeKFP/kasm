---
sidebar_position: 4
title: Instructions à 0 adresse (pile)
sidebar_label: 🥞 0 Adresse (pile)
---

## Présentation

Le format **0 adresse** utilise une **pile** (stack) pour stocker les opérandes. Les opérations sont effectuées sur les valeurs au sommet de la pile.

### Syntaxe
```asm
OP
```

### Caractéristiques
- Les opérandes sont implicitement au sommet de la pile.
- Les résultats sont poussés sur la pile.
- Nécessite des instructions `PUSH` et `POP` pour manipuler la pile.

### Exemples
```asm
PUSH A      ; Empile A
PUSH B      ; Empile B
ADD         ; Dépile A et B, empile A + B
POP C       ; Dépile le résultat dans C
```

### Commandes spéciales
- `DUP` : Duplique le sommet de la pile.
- `SWAP` : Échange les deux éléments du sommet de la pile.

### Avantages
- Très compact.
- Facilite les calculs complexes avec des expressions imbriquées.

### Inconvénients
- Moins explicite (la pile est implicite).
- Nécessite une bonne compréhension de la gestion de la pile.

### Analogie
Imaginez une pile d'assiettes. Vous ajoutez des assiettes (`PUSH`), effectuez des opérations sur les assiettes du dessus, et retirez les assiettes (`POP`).

---

### Comparaison des types d'instructions

| Type        | Explicite | Compact | Effets secondaires | Utilisation mémoire |
|-------------|-----------|---------|--------------------|---------------------|
| 3 adresses  | Très      | Non     | Non                | Élevée              |
| 2 adresses  | Modéré    | Oui     | Oui                | Moyenne             |
| 1 adresse   | Faible    | Très    | Oui                | Faible              |
| 0 adresse   | Faible    | Très    | Oui                | Faible              |
