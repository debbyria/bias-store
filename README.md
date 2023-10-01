# Bias Store
> Bias Store is a web-based application consisting of a simple e-commerce platform. Within this repository, there are client-side, server-side, and admin-side components. Bias Store offers products related to K-pop. In the Admin side, users can upload products they want to showcase or offer on the client side.

## Tech Stack
### Server Side
- Express JS
- Node JS
- PostgreSQL
- Sequelize
- JsonWebToken
- Bcryptjs

### Cliet Side
- React JS
- Redux
- Fontawesome
- Tailwind
- Jest & Supertest

### Admin Side
- React JS
- Redux
- SweetAlert
- Tailwind
- Jest & Supertest

## Project Setup
### Server Side
```sh
- npm install
- npx sequelize-cli db:create
- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all
- nodemon app.js
```

### Client Side
```sh
- npm install
- npm run start
```

### Admin Side
```sh
- npm install
- npm run start
```

## Notes
> You can be admin by add admin role in admin page (login as debby, can see dummy data on https://github.com/debbyria/bias-store/blob/master/server/dummy/user.json)