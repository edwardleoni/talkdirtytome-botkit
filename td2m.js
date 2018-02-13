'use strict';

var request = require('request');

class td2m {

	constructor(apiKey) {
		let that = this;

		that.apiKey = apiKey;

		that.logMessage = (bot, message, type) => {

			// map bot as user if not specified
			if (!message.user) {
				message.user = bot.identity.id;
			}

			request({
				url: 'https://api.talkdirtytome.tech/message',
				method: 'POST',
				json: {
					api_key: that.apiKey,
					type: type,
					user_id: message.user,
					time_stamp: new Date().getTime() / 1000,
					message: JSON.stringify(message)
				}
			}, (err, httpRsp, body) => {
			});
		}

		// botkit middleware endpoints
		that.send = (bot, message, next) => {
			if (message && message.type == 'message') {
				that.logMessage(bot, message, 'agent');
			}
			next();
		};

		// botkit middleware endpoints
		that.receive = (bot, message, next) => {
			if (message && message.type == 'message') {
				that.logMessage(bot, message, 'user');
			}
			next();
		};
	}
}

module.exports = (apiKey) => {
	if (!apiKey) {
		throw new Error('Talk Dirty to Me API Key not supplied');
	}

	return new td2m(apiKey)
};
