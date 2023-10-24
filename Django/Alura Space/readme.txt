Criar uma venv

--> python -m venv venv

Ativar a venv

--> venv\Scripts\activate

Criar o arquivo requirements

--> pip freeze > requirements.txt
* sempre que instalar alguma coisa é importante rodar esse comando

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

No projeto

* As rotas da aplicação são feitas no arquivo urls.py
* É possível criar um arquivo urls.py na aplicação e importando include 
de django.urls adicionar essas rotas no arquivo urls.py do projeto

Para carregar os arquivos static

--> python manage.py collectstatic