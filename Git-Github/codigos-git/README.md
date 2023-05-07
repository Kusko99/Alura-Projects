# Códigos e Atalhos do Git/GIthub

### Para abrir o github.dev (Um Vscode do Github online) utlize o seguinte atalho:

    ```
    Aperte a tecla . 3 vezes
    ```
### Para fazer o Commit & Push utilizando o github.dev: 
 
* Vá em Controle de Código Fonte 
* Você pode no campo superior escrever uma mensagem do seu Commit
* Faça o Commit usando o Confirmar e enviar o por Push 

### Para adcionar um calaborado:

* Basta ir em configurações
* Vá em colaboradores
* Adicone um colaborador
* A outra pessoa irá receber um convite

-- Agora irá poder editar e commitar no seu repositório

### Clonar um Repositório

* Vá na opção codigo no Github e copie o link HTTPS .git
* Abra o seu terminal
* Utlize o seguinte comando para mudar a pasta onde o repositório será clonado
 ```
 cd "caminho da pasta onde será clonado"
 ```
 * Utilize o seguinte comando para clonar o repositório na pasta que você escolheu anteriorimente
 ```
 git clone (link HTTPS .git do repositório copiado do Github)
 ```
* Para vizualizar o histórico de todas as alterações feitas utlize no cmd o comando:
```
git log (Para sair aperte o "Q")
```
* Para vizualizar o histórico de alterações de forma resumido utilize:

```
git log --oneline
```

### Atualizar o Repositório local

* Busque novamente o link HTTPS .git
* Utilize o seguinte comando

```
git pull (link HTTPS .git do repositório copiado do Github)
```

### Status

* Para verificar o status do projeto:
```
git status
```
### Commit
* Para Fazer o commit do projeto:
```
git commit (nome do arquivo) -m "Frase de Commit"
```
* Para comitar o projeto inteiro:
```
git commit .
```
--> Isso irá abrir um arquivo para você escrever sua mensagem de commit, basta escreve a mensagem no topo e fechar o arquivo no editor
### Push

--> É necessário fazer o Push para enviar todos os commits feitos na sua máquina local para o github

* Para fazer o push:
```
git push origin main
```
--> Isto irá enviar seus commits para o main branch

### Buscando uma versão antiga

* Na página do github a um relógio que possui todo o histórico de commits
* Copie o código Hash referente a versão que você querer voltar
* Utilize o comando:
```
git restore --source (Hash Code da versão) (. para tudo, nome do arquivo para apenas um arquivo)
```

### Criando uma Branch
* Para criar uma nova Branch:
```
git checkout -b (nome da Branch)
```
* Após criar uma nova Branch ele automaticamente muda para nova Branch
* Para retornar para Main ou para outra Branch
```
git switch (nome da Branch)
```
* Para fazer o commit e o Push na branch nova basta:
```
git commit .
git push origin (nome da Branch)
```