require('dotenv').config();

let CONFIG = {};

CONFIG.app = process.env.APP || 'development';
CONFIG.port = process.env.PORT || '3000';

CONFIG.db_dialect = process.env.DB_DIALECT || 'mongo';
CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '27017';
CONFIG.db_name = process.env.DB_NAME || 'name';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || 'db-password';

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000';
CONFIG.jwt_refresh_expiration = process.env.JWT_REFRESH_EXPIRATION || 30 * 24 * 60 * 60 * 1000;
CONFIG.messaging_sender_id = process.env.messaging_sender_id || 'hash';

CONFIG.oauth = {
    facebook: {
        clientID: process.env.FACEBOOK_CLIENT_ID || '260562621641783',
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'f18a15d0c903920bb8a2ac88d54a4e8e'
    },
};

module.exports = CONFIG;
