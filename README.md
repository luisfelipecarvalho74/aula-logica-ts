# Lógica de Programação — TypeScript

Material de aula. Os exercícios usam `prompt` e `alert` e rodam **no navegador**.

## 1. Preparar o ambiente

Você precisa do **Node.js** (que já vem com o `npm`) e do **Git** instalados.

- **Node.js** (versão 18 ou superior): baixe em <https://nodejs.org> (escolha a versão LTS).
- **Git**: baixe em <https://git-scm.com>.

Confira se está tudo instalado abrindo o terminal e rodando:

```bash
node --version
npm --version
git --version
```

Se cada comando mostrar um número de versão, está pronto.

## 2. Pegar o material

1. Faça **Fork** deste repositório (botão no canto superior direito no GitHub) —
   assim você passa a ter uma cópia própria onde pode commitar.
2. Clone o **seu fork** (troque pelo seu usuário):
   ```bash
   git clone https://github.com/SEU-USUARIO/aula-logica-ts.git
   cd aula-logica-ts
   ```

## 3. Instalar as dependências

```bash
npm install
```

Isso baixa o TypeScript dentro do projeto (na pasta `node_modules`).

## 4. Compilar e rodar

```bash
npm run build      # compila os .ts uma vez
npm run dev        # OU: recompila automaticamente cada vez que você salvar
```

Depois abra o arquivo `index.html` no navegador (duplo-clique) e navegue:
**Menu → Lista → Exercício**.

> O navegador não roda `.ts` direto. O `tsc` converte `src/*.ts` em `dist/*.js`,
> e os arquivos `.html` carregam esses `.js`. Por isso sempre rode o build antes de abrir.

## Estrutura

```
index.html            menu de listas
lista01.html          lista de exercícios da Lista 01
lista01-ex01.html     página que roda o exercício 01
src/                  código TypeScript (um .ts por exercício)
dist/                 JavaScript compilado (gerado pelo build — não versionar)
styles.css            estilo das páginas
tsconfig.json         configuração do compilador
```

## Como adicionar um novo exercício

1. Crie `src/lista01-ex02.ts` com o código.
2. Crie `lista01-ex02.html` (copie o `ex01` e troque o `<script src>`).
3. Adicione um botão em `lista01.html` apontando pra nova página.
4. Rode `npm run build`.
