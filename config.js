const joi = require('joi');

const configSchema = {
  PORT: joi.number().default(3000)
};

const { value: validatedConfig} = joi.validate(process.env, configSchema);

module.exports = {
  port: validatedConfig.PORT
};