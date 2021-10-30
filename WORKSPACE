workspace(
    name = "bazel-react-webpack-ts",
    managed_directories = {
        "@npm": ["frontend/node_modules"]
    },
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "4501158976b9da216295ac65d872b1be51e3eeb805273e68c516d2eb36ae1fbb",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.4.1/rules_nodejs-4.4.1.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    args = ["--immutable"],
    frozen_lockfile = False,
    package_json = "//frontend:package.json",
    yarn_lock = "//frontend:yarn.lock",
)