import { ChatServer } from './socket';

let app = new ChatServer().getApp();
export { app };