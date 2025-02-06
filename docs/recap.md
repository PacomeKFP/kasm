---
sidebar_position: 10
title: Resumé
sidebar_label: Résumé
---

# Pseudo-Assembly Language Documentation

**Pseudo-Assembly** is a simplified assembly-like language designed for beginners to learn low-level programming concepts. It allows manipulation of integer values stored in memory addresses and supports multiple instruction types and branching. Programs must use a **single instruction type** throughout (e.g., 3-address, stack-based).

## 1. Memory Model
- Values are **integers** stored at memory addresses (e.g., `A`, `B`, `C`).
- Addresses can be referenced directly in instructions.
- Memory is linear and addressable.

---

## 2. Instruction Structure
All instructions follow this format:
```
[label:] OPCODE OPERANDS   ; Comments
```
- **Label** (optional): Marks the address of the instruction (e.g., `LOOP:`).
- **OPCODE**: The operation to perform (e.g., `ADD`, `SUB`).
- **Operands**: Depends on the instruction type (see below).
- **Comments**: Start with `;`.

---

## 3. Supported Operations
| OPCODE | Description           |
|--------|-----------------------|
| `ADD`  | Addition              |
| `SUB`  | Subtraction           |
| `MUL`  | Multiplication        |
| `DIV`  | Integer Division      |
| `MOD`  | Modulo (Remainder)    |

---

## 4. Instruction Types

### 4.1. 3-Address Instructions
- **Format**: `OP DEST, SRC1, SRC2`  
  - Compute `DEST = SRC1 OP SRC2`.
- **Example**:  
  ```asm
  ADD A, B,C   ; C = A + B
  ```

### 4.2. 2-Address Instructions
- **Format**: `OP DEST, SRC`  
  - Compute `DEST = DEST OP SRC`.
- **Example**:  
  ```asm
  SUB A, B      ; A = A - B
  ```

### 4.3. 1-Address Instructions (Accumulator)
- Uses an implicit **accumulator** as the second operand.
- **Format**: `OP DEST`  
  - Compute `DEST = DEST OP Accumulator`.  
  - The result updates both `DEST` and the accumulator.
- **Example**:  
  ```asm
  MUL X         ; X = X * Accumulator (Accumulator also updated)
  ```

### 4.4. 0-Address Instructions (Stack-Based)
- Uses a **stack** to store operands.
- **Supported Commands**:
  - `PUSH A`: Push the value at address `A` onto the stack.
  - `POP A`: Pop the top value from the stack into address `A`.
  - `OP`: Apply the operation to the top two stack values.  
    - Example: `PUSH A`, `PUSH B`, `ADD` → Pop `A` and `B`, push `A + B`.
- **Example**:  
  ```asm
  PUSH X        ; Stack: [X]
  PUSH Y        ; Stack: [X, Y]
  ADD           ; Stack: [X+Y]
  POP Z         ; Z = X + Y
  ```

---

## 5. Branch Instructions
### 5.1. Unconditional Branch
- **Format**: `BR LABEL`  
  - Jump to the instruction with `LABEL`.
- **Example**:  
  ```asm
  LOOP: ADD A, B, C
        BR LOOP   ; Infinite loop
  ```

### 5.2. Conditional Branch
- **Format**: `débranchement_conditionnel LABEL`  
  - Jump to `LABEL` if `COND` is met, else continue execution.
  - Supported conditions:  
    `BEZ` (equal), `BGE` (greater than or equal), `BGT` (greater than), `BLT` (less than), `BLE` (less than or equal).
- **Example**:  
  ```asm
  BEZ LOOP   ; Jump to LOOP if equal, continue
  ```

---

## 6. Program Structure
- A program must use **only one instruction type** (e.g., all 3-address or all stack-based).
- **Example (3-address)**:  
  ```asm
  START: ADD A, B, C   ; C = A + B
         SUB C, #5, D  ; D = C - 5 (assuming #5 is an immediate value)
         BGT START
  END:   HALT
  ```

---

## 7. Complete Instruction List

### 7.1. Arithmetic Instructions
| Instruction | Description                          | Example                     |
|-------------|--------------------------------------|-----------------------------|
| `ADD`       | Addition                             | `ADD A, B, C`  ; C = A + B  |
| `SUB`       | Subtraction                          | `SUB A, B, C`  ; C = A - B  |
| `MUL`       | Multiplication                       | `MUL A, B, C`  ; C = A * B  |
| `DIV`       | Integer Division                     | `DIV A, B, C`  ; C = A / B  |
| `MOD`       | Modulo (Remainder)                   | `MOD A, B, C`  ; C = A % B  |

### 7.2. Data Movement Instructions
| Instruction | Description                          | Example                     |
|-------------|--------------------------------------|-----------------------------|
| `MOV`       | Move value from one address to another | `MOV A, B`     ; A = B      |
| `PUSH`      | Push a value onto the stack          | `PUSH A`       ; Stack: [A] |
| `POP`       | Pop a value from the stack           | `POP A`        ; A = top of stack |
| `LOAD`      | Load value into accumulator          | `LOAD A`       ; Accumulator = A |
| `STORE`     | Store accumulator value into memory  | `STORE A`      ; A = Accumulator |

### 7.3. Control Flow Instructions
| Instruction | Description                          | Example                     |
|-------------|--------------------------------------|-----------------------------|
| `BR`        | Unconditional branch (jump)          | `BR LOOP`      ; Jump to LOOP |
| `BR COND`   | Conditional branch                   | `BEZ LOOP` ; Jump to LOOP if equal, else continue |
| `HALT`      | Stop program execution               | `HALT`          ; End program |

### 7.4. Stack Operations
| Instruction | Description                          | Example                     |
|-------------|--------------------------------------|-----------------------------|
| `PUSH`      | Push a value onto the stack          | `PUSH A`       ; Stack: [A] |
| `POP`       | Pop a value from the stack           | `POP A`        ; A = top of stack |
| `DUP`       | Duplicate the top value on the stack | `DUP`          ; Stack: [A, A] |
| `SWAP`      | Swap the top two values on the stack | `SWAP`         ; Stack: [B, A] (if it was [A, B]) |

### 7.5. Accumulator Instructions
| Instruction | Description                          | Example                     |
|-------------|--------------------------------------|-----------------------------|
| `LOAD`      | Load value into accumulator          | `LOAD A`       ; Accumulator = A |
| `STORE`     | Store accumulator value into memory  | `STORE A`      ; A = Accumulator |
| `ADD`       | Add to accumulator                   | `ADD A`        ; Accumulator += A |
| `SUB`       | Subtract from accumulator            | `SUB A`        ; Accumulator -= A |
| `MUL`       | Multiply accumulator                 | `MUL A`        ; Accumulator *= A |
| `DIV`       | Divide accumulator                   | `DIV A`        ; Accumulator /= A |
| `MOD`       | Modulo accumulator                   | `MOD A`        ; Accumulator %= A |

### 7.6. Special Instructions
| Instruction | Description                          | Example                     |
|-------------|--------------------------------------|-----------------------------|
| `NOP`       | No operation (do nothing)            | `NOP`          ; No effect  |
| `CLEAR`     | Clear a memory address               | `CLEAR A`      ; A = 0      |
| `INC`       | Increment a memory address           | `INC A`        ; A = A + 1  |
| `DEC`       | Decrement a memory address           | `DEC A`        ; A = A - 1  |

### 7.7. Conditional Flags
These are used with conditional branching (`BR COND`).

| Condition  | Description                          |
|------------|--------------------------------------|
| `BEZ`      | Equal to                             |
| `BGT`      | Greater than                         |
| `BLT`      | Less than                            |
| `BGE`      | Greater than or equal to             |
| `BLE`      | Less than or equal to                |

---

## 8. Example Programs

### Example 1: 3-Address Instructions
```asm
START:  MOV A, #10       ; A = 10
        MOV B, #5        ; B = 5
        ADD A, B, C      ; C = A + B (15)
        SUB C, #3, D     ; D = C - 3 (12)
        BGT START        ; If D > 0
END:    HALT             ; Stop program
```

### Example 2: Stack-Based Instructions
```asm
        PUSH #10         ; Stack: [10]
        PUSH #5          ; Stack: [10, 5]
        ADD              ; Stack: [15]
        POP RESULT       ; RESULT = 15
        HALT
```

---

## 9. Notes and Best Practices
- **Accumulator**: Implicit register for 1-address instructions. Initial value is undefined.
- **Stack**: Grows downward. Initial state is empty.
- **Labels**: Define jump targets. Must be unique.
- **Consistency**: Use only one instruction type per program.
- **Comments**: Use comments (`;`) to explain complex logic.
