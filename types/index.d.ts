import Vue, { VueConstructor } from "vue";
declare const LsWatcher: {
  install(
    vue: VueConstructor<Vue>,
    options: {
      prefix: string;
    }
  ): void;
};
export default LsWatcher;

interface ILSWatcher {
  on(key: string, fn: Function, immediate?: boolean): Symbol;
  set(key: string, payload: any, expire?: number | null): void;
  broadcast(key: string, payload?: any): void;
  broadcastAll(payload?: any): void;
  has(key: string): boolean;
  clear(): void;
  get(key: string, def?: any): any;
  init(): void;
  remove(key: string): void;
  off(key: string, handler: Symbol): void;
}