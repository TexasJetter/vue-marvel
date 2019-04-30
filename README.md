# vue-marvel
Vue SPA using Marvel Comics API

## Project setup
After cloning or downloading this repository it is necessary to restore the NPM modules. To do so run the npm install command from the root of the repository.
```
npm install
```
## Project Configuration

Go to https://developer.marvel.com/account and sign up for a Marvel API key. On this page you will also need to white list your development URL in the "Your authorized referrers" section. When developing locally you will want to enter "localhost".

Enter your Marvel API Public key in the \src\services\core.js file:
```
const MarvelKey = "----enter your Marvel Public API key here -----";
const MarvelGatewayUrl = "http://gateway.marvel.com:80/v1/public/";
```

### Compiles and hot-reloads for development
To run the project locally launch the local server using the "serve" script. Typically this will run a local web server on http://localhost:8080, but your port number may vary. See the Vue CLI (https://cli.vuejs.org/) for more information.
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
