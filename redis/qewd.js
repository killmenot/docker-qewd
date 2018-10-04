'use strict';

const path = require('path');
const qewd = require('qewd').master;
const xp = qewd.intercept();
const q = xp.q;

const config = {
  managementPassword: 'keepThisSecret!',
  port: 8080,
  database: {
    type: 'redis'
  },
  jwt: require('./mapped/jwt_secret.json'),
  u_services: {
    destinations: require('./mapped/ms_destinations.json'),
    routes: require('./mapped/ms_routes.json')
  }
};

const routes = [
  {
    path: '/api',
    module: path.join(__dirname, 'handlers'),
    errors: {
      notfound: {
        text: 'Resource Not Recognised',
        statusCode: 404
      }
    }
  }
];

qewd.start(config, routes);
