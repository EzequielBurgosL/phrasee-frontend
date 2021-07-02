# DONE:

- Added input field validation using react-hook-from and yup libraries.
- Added API server to fetch user data on Login.
- Added React Router.
- Added an Authentication service.
- Added "protected routes" component to prevent navigation to private pages.
- Added a "login unsuccessful" error message.
- Persisted auth token in localStorage to preserve state on page reloading.
- Added basic redux setup and setup some redux hooks (useSelector and useDispatch).
- Updated home page redux and styles ("redux thunk" to handle async requests within redux actions).


# TODO:

- Check errors on custom validators (test)
- Remove unnecessary code (left comments, for example).
- Tackle application and editor warnings.
- Add functionality to "remember me" home page checkbox.
- Add JS Docs to crucial functions.
- Improve test coverage to stabilize application (especially on redux actions, services and utilities) and add integration testing for complex user actions (using cypress framework, for example).
- Connect application with backend (auth, api, database, etc.).
- Improve and secure authentication service (with JWT for example).
- Enforce CSS naming conventions and use an standard pattern to organize files (7-1 pattern, for example https://gist.github.com/rveitch/84cea9650092119527bc).
- Add typescript to make development environment more robust.
- Add an enterprise eslint configuration to make sure we use the same code style in our codebase.