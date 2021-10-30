"Adapt JSEcmaScriptModuleInfo provider from deps into DefaultInfo output"
load("@build_bazel_rules_nodejs//:providers.bzl", "JSModuleInfo")

def _impl(ctx):
    return [DefaultInfo(files = depset(transitive = [x[JSModuleInfo].sources for x in ctx.attr.deps]))]

esmodule_sources = rule(_impl, attrs = {"deps": attr.label_list()})