// ref: https://github.com/bazelbuild/rules_nodejs/blob/stable/examples/react_webpack/types.d.ts
declare module "*.css" {
    let _module: { [key: string]: string };
    export = _module;
}