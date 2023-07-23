# SampleTime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.

## Components

The Angular application has 2 main components:

**`LoginComponent`** - uses reactive form to control and validate the login form. It also uses the RequestService to make POST API call to login endpoint.

**`TimeComponent`** - displays the time in a card and uses a custom pipe to format the time format.

## Observations:

I kept getting CORS error from the server so I left the logic for the GET request but still allowed the user to navigate to the TimeComponent after submitting the form.

The component library uses is Angular Material.



