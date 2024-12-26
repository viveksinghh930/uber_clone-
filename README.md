# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON object containing a JWT token and the user details.

### Request Body:
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 2 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
Responses:
Success (201):
<vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'>- Description: User registered successfully. </vscode_annotation>- Body:

{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password_here",
    "socketID": null
  }
}
Validation Error (400):
Description: Invalid input data.
Body:
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
Server Error (500):
Description: Internal server error.
Body# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON object containing a JWT token and the user details.

### Request Body:
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 2 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:
#### Success (201):
- Description: User registered successfully.
- Body:
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password_here",
    "socketID": null
  }
}
```

#### Validation Error (400):
- Description: Invalid input data.
- Body:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Server Error (500):
- Description: Internal server error.
- Body:
```json
{
  "error": "Internal Server Error"
}
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON object containing a JWT token and the user details upon successful login.

### Request Body:
The request body should be a JSON object with the following fields:
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:
#### Success (200):
- Description: User logged in successfully.
- Body:
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password_here",
    "socketID": null
  }
}
```

#### Validation Error (400):
- Description: Invalid input data.
- Body:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "password must be least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Error (401):
- Description: Invalid email or password.
- Body:
```json
{
  "message": "Invalid email or password"
}
```

#### Server Error (500):
- Description: Internal server error.
- Body:
```json
{
  "error": "Internal Server Error"
}
```

{
  "error": "Internal Server Error"
}
Save this content in the `README.md` file in the `Backend` folder.
Save this content in the `README.md` file in the `Backend` folder.