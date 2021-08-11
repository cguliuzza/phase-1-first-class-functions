function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction(receivesAFunction) {
    return function receivesAFunction() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {
    }
}