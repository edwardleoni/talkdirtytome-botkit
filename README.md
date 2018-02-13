# Chatbase middleware for Botkit
Middleware for [Botkit](http://howdy.ai/botkit) that allows for [Talk Dirty to Me](https://talkdirtytome.tech) integration

## Install

`npm install talkdirtytome-botkit --save`

## Usage
Include this module and initialize it with your td2m API key.

```
var tdm2 = require('talkdirtytome-botkit')(API_KEY);
```

Add the following code after initializing the Botkit controller.

```
controller.middleware.receive.use(tdm2.receive);
controller.middleware.send.use(tdm2.send);
```

## Credits
This middleware used [Chatbase-botkit](https://github.com/asopinka/chatbase-botkit) as inspiration
