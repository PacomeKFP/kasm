---
sidebar_position: 1
title: Modèle mémoire
sidebar_label: 🧠 Modèle de mémoire
---

### Organisation de la mémoire

Le Pseudo-Assembleur utilise une mémoire linéaire avec des adresses symboliques :

```asm
A: #10   ; Stocke la valeur 10 à l'adresse A
B: #0    ; Initialise B à 0
```

### Caractéristiques clés :
- Toutes les valeurs sont des **entiers**
- Pas de types de données complexes
- Les adresses s'auto-déclarent lors de leur première utilisation
- Accès direct aux adresses par leur nom
