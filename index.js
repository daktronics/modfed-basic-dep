import pkg from './package.json';

export const version = pkg.version;

let _calls = 0;
export function foo() {
    return { calls: ++_calls };
}