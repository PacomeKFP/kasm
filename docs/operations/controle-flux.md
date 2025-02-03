---
title: Contrôle de flux
sidebar_label: 🎛️ Contrôle de flux
---

## Présentation

Le contrôle de flux permet de modifier l'ordre d'exécution des instructions en fonction de conditions ou de sauts inconditionnels.

### Instructions disponibles

| Instruction | Description                              |
|-------------|------------------------------------------|
| `BR`        | Saut inconditionnel                      |
| `BR COND`   | Saut conditionnel                        |
| `HALT`      | Arrête l'exécution du programme          |

### Saut inconditionnel (`BR`)
Saute directement à une étiquette spécifiée.

#### Syntaxe
```asm
BR ETIQUETTE
```

#### Exemple
```asm
DEBUT: ADD A, B, C
       BR DEBUT   ; Répète indéfiniment
```

### Saut conditionnel (`BR COND`)
Saute à une étiquette si une condition est remplie.

#### Syntaxe
```asm
BR COND ETIQUETTE_VRAI, ETIQUETTE_FAUX
```

#### Conditions disponibles
- `EQ` : Égal à
- `NE` : Différent de
- `GT` : Plus grand que
- `LT` : Plus petit que
- `GE` : Plus grand ou égal à
- `LE` : Plus petit ou égal à

#### Exemple
```asm
COMPARE: SUB TMP, A, B
         BR GT COMPARE, FIN   ; Si A > B, saute à COMPARE
FIN: HALT
```

### Arrêt du programme (`HALT`)
Termine l'exécution du programme.

#### Exemple
```asm
HALT   ; Arrête le programme
```
