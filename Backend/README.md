"# Notes-app" 

this an overview of the API routes and their functionalities.

## User Routes

### Sign Up

**Route**: `POST /api/v1/Users/sign_up`

**Description**: Register a new user.

**Request Body**:
```json
{
  "first_name": "Your First Name",
  "second_name": "Your Last Name",
  "gender": "male/female",
  "email": "your_email@example.com",
  "password": "your_password",
  "passwordConfirm": "your_password_confirmation"
}

Log In
Route: POST /api/v1/Users/login

Description: Log in an existing user.

Request Body:

json
Copy code
{
  "email": "your_email@example.com",
  "password": "your_password"
}

Log Out
Route: GET /api/v1/Users/logout

Description: Log out the currently authenticated user.

Delete Account
Route: DELETE /api/v1/Users/deleteMe

Description: Delete the account of the currently authenticated user.

Update Password
Route: PATCH /api/v1/Users/updatedPassword

Description: Update the password of the currently authenticated user.

Request Body:

json
{
  "currentPassword": "your_current_password",
  "newPassword": "your_new_password",
  "passwordConfirm": "your_password_confirmation"
}

Forgot Password
Route: POST /api/v1/Users/forgetPassword

Description: Initiate the process to reset the password. An email will be sent with reset instructions.

Request Body:

json
{
  "email": "your_email@example.com"
}

Reset Password
Route: POST /api/v1/Users/resetPassword/:token

Description: Reset the password using the provided reset token.

Request Body:

json
Copy code
{
  "password": "your_new_password",
  "passwordConfirm": "your_password_confirmation"
}


Description: Retrieve a specific user's information by their ID.

Note Routes
Get All Notes
Route: GET /api/v1/Notes

Description: Retrieve a list of all notes related to currently authenticated user.

Create a Note
Route: POST /api/v1/Notes/create-Note

Description: Create a new note to currently authenticated user.

Request Body:

json
Copy code
{
  "title": "Note Title",
  "content": "Note Content"
}
Get Note by ID
Route: GET /api/v1/Notes/:id

Description: Retrieve a specific note's information by its ID.

Update Note by ID
Route: PATCH /api/v1/Notes/:id

Description: Update a specific note's information by its ID.

Request Body:

json
Copy code
{
  "title": "Updated Note Title",
  "content": "Updated Note Content"
}
Delete Note by ID
Route: DELETE /api/v1/Notes/:id

Description: Delete a specific note by its ID.

Please note that for routes that require authentication (authController.protect), you should include the user's token in the request headers as an "Authorization" header.

For further details on the request and response formats, as well as error handling, refer to the respective controllers and middleware in the codebase.

