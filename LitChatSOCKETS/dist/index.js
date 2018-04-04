"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_1 = require("./socket");
var app = new socket_1.ChatServer().getApp();
exports.app = app;
