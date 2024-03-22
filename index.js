function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function greeting(){
        return "Hello world!";
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'My name is Edd';
    }
}

