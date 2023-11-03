export type ValueOf<T> = T[keyof T];

export type RecordValues<K extends keyof never, T> = {
  [P in K]: T;
};
