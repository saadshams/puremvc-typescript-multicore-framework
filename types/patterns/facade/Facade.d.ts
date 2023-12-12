import { IFacade } from '../../interfaces/IFacade';
import { IController } from '../../interfaces/IController';
import { IModel } from '../../interfaces/IModel';
import { IView } from '../../interfaces/IView';
import { ICommand } from '../../interfaces/ICommand';
import { IMediator } from '../../interfaces/IMediator';
import { INotification } from '../../interfaces/INotification';
import { IProxy } from '../../interfaces/IProxy';
export declare class Facade implements IFacade {
    constructor(key: string);
    protected initializeFacade(): void;
    protected initializeModel(): void;
    protected initializeController(): void;
    protected initializeView(): void;
    registerCommand(notificationName: string, factory: () => ICommand): void;
    hasCommand(notificationName: string): boolean;
    removeCommand(notificationName: string): void;
    registerProxy(proxy: IProxy): void;
    retrieveProxy(proxyName: string): IProxy | null;
    hasProxy(proxyName: string): boolean;
    removeProxy(proxyName: string): IProxy | null;
    registerMediator(mediator: IMediator): void;
    retrieveMediator(mediatorName: string): IMediator | null;
    hasMediator(mediatorName: string): boolean;
    removeMediator(mediatorName: string): IMediator | null;
    notifyObservers(notification: INotification): void;
    sendNotification(notificationName: string, body?: any, type?: string): void;
    initializeNotifier(key: string): void;
    static getInstance(key: string, factory: (key: string) => IFacade): IFacade;
    static hasCore(key: string): boolean;
    static removeCore(key: string): void;
    protected controller?: IController;
    protected model?: IModel;
    protected view?: IView;
    protected multitonKey: string;
    protected static instanceMap: {
        [key: string]: IFacade;
    };
    protected static MULTITON_MSG: string;
}
