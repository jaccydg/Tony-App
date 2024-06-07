let runtimeConfig;

const setRuntimeConfig = (config) => {
    if (Object.prototype.hasOwnProperty.call(config, 'BACKEND_URL')
        && Object.prototype.hasOwnProperty.call(config, 'LOADER_TIME')
    ) runtimeConfig = config;
    else throw new Error('Requested attributes in config.json: BACKEND_URL, LOADER_TIME');
};

const getRuntimeConfig = () => runtimeConfig;

export {
    setRuntimeConfig,
    getRuntimeConfig,
};
