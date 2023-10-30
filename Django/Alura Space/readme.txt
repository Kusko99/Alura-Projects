Criar uma venv

--> python -m venv venv

Ativar a venv

--> venv\Scripts\activate

Criar o arquivo requirements

--> pip freeze > requirements.txt
* sempre que instalar alguma coisa é importante rodar esse comando

Para instalar os requirements

--> pip install -r requirements.txt

Criar um projeto Django

--> django-admin startproject setup .

Subindo/Ligando o servidor

--> python manage.py runserver

Ocutar/Abrir menu lateral

--> CTRL + B

Ocutar/Abri Terminal

--> CTRL + J

Variaveis de ambiente
--> pip install python-dotenv

Criando um app Django (isto serve para as funcionalidades)
--> python manage.py startapp nomeApp

Na aplicação

* Views é responsável é cuidar do que será exibido em cada pagina, o que a gente renderiza
* Models é responsável por cuidar das suas classes, onde vc irá montar suas "tabelas/objetos" no python, o django realiza a tradução delas para o banco

No projeto

* As rotas da aplicação são feitas no arquivo urls.py
* É possível criar um arquivo urls.py na aplicação e importando include 
de django.urls adicionar essas rotas no arquivo urls.py do projeto

Para carregar os arquivos static

--> python manage.py collects

Ao fazer uma Migrattion estamos dizendo ao Django que temos uma nova tabela e que ele deve traduzi-la para o banco de dados
Para fazer uma Migrattion

--> python manage.py makemigrations
Depois para aplicar as migrações
--> python manage.py migrate

Para abrir um shell interativa do Django
--> python manage.py shell

Para criar um Usuário para acessar o admin
-->python manage.py createsuperuser
--> Entre um nome de Usuário
--> Entre um email
--> Entre uma senha