
# Amazon Clone React-app

Amazon Clone using React.js

Find the deployed app at https://clone-33fd5.web.app/
## Deployment

To deploy this project run

```bash
    npm run build
    firebase deploy
```


## Features

- Single Page Application
- Redirection does not require reload bacause of usage of React-router; No href used
- Dynamic Basket
- Sign in Registers in the Database, new users need to register.
- Deployed Live Version on Firebase
- Live previews
- Fullscreen mode
- Cross platform


## Installation

Install my-project with npm

```bash
  npm install
  cd amazon-clone
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`React-router-dom`

`Material-ui`

`Firebase`


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Data Link Layer` | `string` | **React Context API**. |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `AIzaSyCEXC7Fwp9wRNalbVRQm2Am0KPLtVeca`      | `string` | **Firebase API**. Item to fetch |



