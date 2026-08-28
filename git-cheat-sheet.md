# Git Cheat Sheet

Guia rápido de comandos Git organizado a partir do **Git Cheat Sheet — GitHub Education**.

> Alguns comandos do material original usam sintaxe mais antiga, como `git checkout`. Eles foram preservados para manter o conteúdo da referência.

---

## 1. Configuração inicial

### Configurar nome do usuário

```bash
git config --global user.name "[firstname lastname]"
```

Define o nome que será associado aos commits realizados pelo usuário.

### Configurar e-mail

```bash
git config --global user.email "[valid-email]"
```

Define o endereço de e-mail associado aos commits.

### Ativar cores no terminal

```bash
git config --global color.ui auto
```

Ativa a coloração automática da saída dos comandos Git.

---

## 2. Inicialização e clonagem

### Inicializar um repositório

```bash
git init
```

Inicializa o diretório atual como um repositório Git.

### Clonar um repositório

```bash
git clone [url]
```

Obtém uma cópia completa de um repositório remoto.

---

## 3. Stage e snapshots

### Verificar o estado do repositório

```bash
git status
```

Mostra arquivos modificados, arquivos preparados para commit e outros estados do diretório de trabalho.

### Adicionar um arquivo à área de stage

```bash
git add [file]
```

Adiciona o estado atual do arquivo à área de preparação (*staging area*).

### Remover um arquivo da área de stage

```bash
git reset [file]
```

Remove o arquivo da área de stage, preservando as alterações no diretório de trabalho.

### Visualizar alterações ainda não adicionadas ao stage

```bash
git diff
```

Mostra as diferenças entre os arquivos modificados e o conteúdo que está na área de stage.

### Visualizar alterações adicionadas ao stage

```bash
git diff --staged
```

Mostra as alterações que estão preparadas para o próximo commit.

### Criar um commit

```bash
git commit -m "[descriptive message]"
```

Registra o conteúdo da área de stage em um novo commit.

---

## 4. Branches e Merge

### Listar branches

```bash
git branch
```

Lista as branches existentes. A branch atualmente ativa aparece marcada com `*`.

### Criar uma branch

```bash
git branch [branch-name]
```

Cria uma nova branch a partir do commit atual.

### Trocar de branch

```bash
git checkout
```

Permite trocar o contexto de trabalho para outra branch.

> Em versões modernas do Git, normalmente utiliza-se `git switch [branch-name]` para essa finalidade.

### Realizar merge

```bash
git merge [branch]
```

Integra o histórico da branch especificada à branch atualmente ativa.

### Visualizar o histórico de commits

```bash
git log
```

Mostra os commits existentes no histórico da branch atual.

---

## 5. Inspeção e comparação

### Visualizar o histórico da branch atual

```bash
git log
```

Exibe o histórico de commits da branch atualmente ativa.

### Comparar commits entre branches

```bash
git log branchB..branchA
```

Mostra os commits existentes em `branchA` que não estão em `branchB`.

### Visualizar o histórico de um arquivo

```bash
git log --follow [file]
```

Mostra os commits que modificaram determinado arquivo, acompanhando também eventuais renomeações.

### Comparar branches

```bash
git diff branchB...branchA
```

Mostra diferenças relacionadas ao conteúdo de `branchA` em comparação com `branchB`.

### Visualizar um objeto Git

```bash
git show [SHA]
```

Exibe informações de um objeto Git identificado pelo seu SHA.

---

## 6. Alterações em arquivos e caminhos

### Remover um arquivo

```bash
git rm [file]
```

Remove o arquivo do projeto e prepara sua remoção para o próximo commit.

### Mover ou renomear um arquivo

```bash
git mv [existing-path] [new-path]
```

Move ou renomeia um arquivo e prepara a alteração para commit.

### Visualizar alterações de caminhos

```bash
git log --stat -M
```

Exibe o histórico de commits indicando arquivos que foram movidos ou renomeados.

---

## 7. Ignorar arquivos

Um arquivo `.gitignore` pode conter padrões de arquivos e diretórios que não devem ser versionados.

Exemplo:

```gitignore
logs/
*.notes
pattern*/
```

Os padrões podem utilizar correspondência exata ou curingas (*wildcards*).

### Definir arquivo global de exclusões

```bash
git config --global core.excludesfile [file]
```

Configura um arquivo contendo padrões que devem ser ignorados globalmente nos repositórios locais.

---

## 8. Repositórios remotos

### Adicionar um repositório remoto

```bash
git remote add [alias] [url]
```

Adiciona uma URL de repositório remoto associada a um alias.

Exemplo comum:

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

### Buscar alterações do remoto

```bash
git fetch [alias]
```

Obtém branches e alterações disponíveis no repositório remoto.

### Integrar uma branch remota

```bash
git merge [alias]/[branch]
```

Integra uma branch do repositório remoto à branch atual.

Exemplo:

```bash
git merge origin/main
```

### Enviar commits para o remoto

```bash
git push [alias] [branch]
```

Envia os commits da branch local para o repositório remoto.

Exemplo:

```bash
git push origin main
```

### Atualizar o repositório local

```bash
git pull
```

Busca as alterações da branch remota rastreada e realiza sua integração à branch local.

---

## 9. Reescrita de histórico

> Atenção: comandos desta seção podem alterar o histórico ou descartar alterações.

### Rebase

```bash
git rebase [branch]
```

Reaplica os commits da branch atual sobre a branch especificada.

### Reset completo

```bash
git reset --hard [commit]
```

Reposiciona o repositório no commit especificado e atualiza a área de stage e o diretório de trabalho.

**Cuidado:** alterações locais não salvas podem ser perdidas.

---

## 10. Alterações temporárias — Stash

O `stash` permite armazenar temporariamente alterações sem criar um commit.

### Armazenar alterações

```bash
git stash
```

Salva temporariamente alterações modificadas e preparadas.

### Listar os stashes

```bash
git stash list
```

Mostra a pilha de alterações armazenadas.

### Recuperar o stash mais recente

```bash
git stash pop
```

Aplica o stash mais recente e o remove da pilha.

### Descartar o stash mais recente

```bash
git stash drop
```

Remove o stash mais recente da pilha.

---

# Fluxo básico de trabalho com Git

Um fluxo simples pode ser representado por:

```text
Modificar arquivos
      ↓
git status
      ↓
git add
      ↓
git commit
      ↓
git push
```

Exemplo:

```bash
git status

git add .

git commit -m "Implementa nova funcionalidade"

git push origin main
```

---

# Resumo rápido

| Objetivo | Comando |
|---|---|
| Inicializar repositório | `git init` |
| Clonar repositório | `git clone [url]` |
| Verificar estado | `git status` |
| Adicionar arquivo ao stage | `git add [file]` |
| Visualizar alterações | `git diff` |
| Visualizar alterações staged | `git diff --staged` |
| Criar commit | `git commit -m "[message]"` |
| Listar branches | `git branch` |
| Criar branch | `git branch [branch-name]` |
| Trocar de branch | `git checkout` |
| Integrar branch | `git merge [branch]` |
| Visualizar histórico | `git log` |
| Histórico de um arquivo | `git log --follow [file]` |
| Exibir objeto/commit | `git show [SHA]` |
| Remover arquivo | `git rm [file]` |
| Mover arquivo | `git mv [old] [new]` |
| Adicionar remoto | `git remote add [alias] [url]` |
| Buscar alterações remotas | `git fetch [alias]` |
| Enviar alterações | `git push [alias] [branch]` |
| Buscar e integrar alterações | `git pull` |
| Rebase | `git rebase [branch]` |
| Reset completo | `git reset --hard [commit]` |
| Guardar alterações temporárias | `git stash` |
| Listar stashes | `git stash list` |
| Recuperar stash | `git stash pop` |
| Excluir stash | `git stash drop` |

---

## Referência

Conteúdo organizado a partir do material **Git Cheat Sheet — GitHub Education**.
