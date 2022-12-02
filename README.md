<p align="center">
  <img  src="https://cdn.iconscout.com/icon/free/png-256/money-1284-454907.png">
</p>
<h1 align="center">
  Expense Less API
</h1>
<div align="center">

  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
</div>

</br>

## Run the project

Install all dependencies

```bash
  yarn
```

```bash
  npm i
```

Set the database in the `.env`

```bash
  DATABASE_URL=postgres://postgres:admin@localhost:5432/expense_less
```

Run prisma migrate

```bash
  npx prisma migrate dev
```

Seed the database with some utils

```bash
  npx prisma db seed
```

<br/>

Start the server

```bash
  yarn dev
```

```bash
  npm run dev
```
