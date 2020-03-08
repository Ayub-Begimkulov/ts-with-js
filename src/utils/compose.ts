import { pipe } from './pipe';

export const compose = (...fns: Function[]) => pipe(...fns.reverse());
