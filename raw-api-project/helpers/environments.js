/* eslint-disable operator-linebreak */
// dependencies

// module scaffolding
const environments = {};

// staging environment
environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'lsjdflksdjflksdjfk',
};

// production environment
environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'lksjjdsfljsldkjf',
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
