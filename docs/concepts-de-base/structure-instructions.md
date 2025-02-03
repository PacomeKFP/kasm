---
sidebar_position: 2
title: Structure des instructions
sidebar_label: 📝 Structure des instructions
---

## Format général

Toute instruction suit ce pattern :

```asm
[ETIQUETTE:] OPCODE OPERANDES   ; Commentaire
```

### Composants :
1. **Étiquette** (optionnelle) : Marque une position dans le code
   ```asm
   DEBUT: ADD A, B, C
   ```
2. **Opcode** : Commande à exécuter (ADD, SUB, etc.)
3. **Opérandes** : Variables ou valeurs à manipuler
4. **Commentaire** : Explications (après `;`)

Exemple complet :
```asm
BOUCLE: SUB X, Y, #5  ; X = Y - 5
        BR GT BOUCLE  ; Répéter si X > 0
```
