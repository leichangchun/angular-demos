export interface DialogConfig {
  title: string;
  content: string;
  cancelbtn ?: boolean;
  show: boolean;
  sure: () => any;
  cancel: () => any;
}

export interface TipConfig {
  showTip: boolean;
  tipText: String;
  showClose?: boolean;
  type?: TipType;
}

export enum TipType {
  success,
  info,
  error
}
