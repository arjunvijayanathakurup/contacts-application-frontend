# Contacts manager application

### Instruction for running the application locally
__Requirements__
- npm version: ^8.3.1
- node version: v16.14.0 (LTS)

> Note: Backend django server needs to be running prior to running this application.

#### Install packages
```bash
    $ npm install  # from the root directory
```

#### Setup the `.env` file for configuration
For running the application locally, you need to setup the `.env` file with the following variables in the root directory:

    - `REACT_APP_TEST_API_URL=http://localhost:8000/api/v1/`: the localhost API URL

    - `REACT_APP_API_URL=http://localhost:8000/api/v1/`: the localhost API URL, this can be changed to production API URL if you want to run the application on production
    
    - `REACT_APP_API_ROOT_URL=http://localhost:8000/api/`: the API root url

#### Run the application
```bash
    $ npm start
```