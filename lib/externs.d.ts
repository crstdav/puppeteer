import { Connection as RealConnection, CDPSession as RealCDPSession } from './Connection.js';
import {Browser as RealBrowser, TaskQueue as RealTaskQueue, Target as RealTarget} from './Browser.js';
import * as RealPage from './Page.js';
import {Mouse as RealMouse, Keyboard as RealKeyboard, Touchscreen as RealTouchscreen}  from './Input.js';
import {Frame as RealFrame, FrameManager as RealFrameManager}  from './FrameManager.js';
import {JSHandle as RealJSHandle, ExecutionContext as RealExecutionContext}  from './ExecutionContext.js';
import * as RealElementHandle  from './ElementHandle.js';
import * as RealNetworkManager from './NetworkManager.js';
import * as child_process from 'child_process';
export as namespace Puppeteer;

export class Connection extends RealConnection {}
export class CDPSession extends RealCDPSession {}
export class Mouse extends RealMouse {}
export class Keyboard extends RealKeyboard {}
export class Touchscreen extends RealTouchscreen {}
export class TaskQueue extends RealTaskQueue {}
export class Browser extends RealBrowser {}
export class Target extends RealTarget {}
export class Frame extends RealFrame {}
export class FrameManager extends RealFrameManager {}
export class NetworkManager extends RealNetworkManager {}
export class ElementHandle extends RealElementHandle {}
export class JSHandle extends RealJSHandle {}
export class ExecutionContext extends RealExecutionContext {}
export class Page extends RealPage {}


export interface ChildProcess extends child_process.ChildProcess {}
