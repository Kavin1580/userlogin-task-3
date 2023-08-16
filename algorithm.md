Initialize State Variables:

Create state variables for email, password, username, and errorMessage using React's useState hook.
Handle Login Function:

Define a function named handleLogin that performs the following steps:
Check if any of the fields (email, password, username) are empty.
If any field is empty:
Set the errorMessage state to indicate that all fields must be filled.
Return from the function.
If all fields are filled:
Perform your authentication logic (not detailed in the code snippet).
Display a welcoming message using alert with the provided username.
Render Components:

In the return section of your component:
Create a div element with the class login-container to contain the login content.
Inside the container:
Display an h1 element with the text "Login" for the page title.
Create a div element with the class input-container to hold the input fields.
Inside the input-container:
Create an input element for the username field, binding its value to the username state.
Create an input element for the email field, binding its value to the email state.
Create an input element for the password field, binding its value to the password state.
If errorMessage is not empty, display a p element with the class error-message containing the error message.
Create a button element with the text "Login", which triggers the handleLogin function when clicked.
Apply Conditional Styling:

Use the className attribute on the input elements to conditionally apply the error-input class based on whether the respective field is empty and an error message exists.
Styling with CSS:

Create a separate CSS file (e.g., LoginPage.css) to style the login page.
Define styles for the .login-container, .input-container, input, error-input, error-message, and button elements.
Use media queries to adjust styles for smaller screens.
Responsive Design:

Use CSS media queries to adjust the layout and styling of the page for different screen sizes.
In the provided CSS, a media query is used to adjust the width of the input-container on screens with a maximum width of 600px.