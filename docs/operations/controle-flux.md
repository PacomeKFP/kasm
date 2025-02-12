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
| `BEZ`       | Saut conditionnel                        |
| `BGE`       | Saut conditionnel                        |
| `BGT`       | Saut conditionnel                        |
| `BLE`       | Saut conditionnel                        |
| `BLT`       | Saut conditionnel                        |
| `STOP`      | Arrête l'exécution du programme          |

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

### Saut conditionnel 
Saute à une étiquette si une condition est remplie.

#### Syntaxe
```asm
instruction ETIQUETTE
```

#### Debrachements disponibles
- `BEZ` : Si le résultat est égale à zéro
- `BGT` : Si le résultat est supérieur à zéro
- `BLT` : Si le résultat est inférieur à zéro
- `BGE` : Si le résultat est supérieur ou égale à zéro
- `BLE` : Si le résultat est inférieur ou égale à zéro

#### Exemple
```asm
COMPARE: SUB A, B, TMP
         BGT COMPARE   ; Si A > B, Débranche à COMPARE
```

### Arrêt du programme (`STOP`)
Termine l'exécution du programme.

#### Exemple
```asm
STOP   ; Arrête le programme
```
