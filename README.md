# <p align = "center"> RepoProvas API </p>

<p align="center">
   <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55629/card-file-box-emoji-clipart-xl.png" width="150"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Fernanda-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/acfernanda/repoprovas-api?color=4dae71&style=flat-square" />
</p>

## :clipboard: Description


A system for sharing tests between students! In RepoProvas anyone can look for old tests of their subjects and teachers or send old tests to help freshmen :)

---

## :computer: Technologies

- TypeScript
- Node.js
- SQL, Postgres
- Prisma

---

## :rocket: Rotas

```yml
POST /sign-up
    - Route to register a new user
    - headers: {}
    - body:
        {
            "email": "lorem@gmail.com",
            "password": "loremipsum",
            "confirm_password": "loremipsum"
        }
```

```yml
POST /sign-in
    - Route to login
    - headers: {}
    - body:
        {
            "email": "lorem@gmail.com",
            "password": "loremipsum"
        }
```

```yml
POST /test (authenticated)
    - Route to post a new test
    - headers: { "Authorization": "Bearer $token" }
    - body:
        {
            "name": "earum",
            "uri": "http://nimble-archer.name",
            "category_id": "b4900458-a466-4bef-903d-06b900e1e801",
            "teacher_discipline_id": "89f56120-56e7-444e-9342-8de6c6f792d6"
        }
```

```yml
GET /test-to-disciplines (authenticated)
    - Route to list all tests separated by period by discipline
    - headers: { "Authorization": "Bearer $token" }
    - body: {}

```

```yml
GET /test-to-teacher (authenticated)
    - Route to list all tests separated by teacher
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

---

## 🏁 running the application


First, clone this repository on your machine:

```
git clone git@gitlab.com:software-driven/reprovas-api.git
git clone https://github.com/shermondevelopment/reprovas.git
```
Then, inside the folder, run the following command to install the dependencies.

```
npm install
```


Finished the process, just start the server

```
npm run dev
```

:stop_sign: To run the tests:

```
npm run test
```

---

## 🏁 Deploy

https://app-reprovas.herokuapp.com
