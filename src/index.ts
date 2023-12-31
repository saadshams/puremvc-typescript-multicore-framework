import {Controller} from './core/Controller';
import {Model} from './core/Model';
import {View} from './core/View';
import {MacroCommand} from './patterns/command/MacroCommand';
import {SimpleCommand} from './patterns/command/SimpleCommand';
import {Facade} from './patterns/facade/Facade';
import {Mediator} from './patterns/mediator/Mediator';
import {Notification} from './patterns/observer/Notification';
import {Notifier} from './patterns/observer/Notifier';
import {Observer} from './patterns/observer/Observer';
import {Proxy} from './patterns/proxy/Proxy';

export const puremvc = {
    Controller: Controller,
    Model: Model,
    View: View,
    SimpleCommand: SimpleCommand,
    MacroCommand: MacroCommand,
    Facade: Facade,
    Mediator: Mediator,
    Notification: Notification,
    Notifier: Notifier,
    Observer: Observer,
    Proxy: Proxy
};
