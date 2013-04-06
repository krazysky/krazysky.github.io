require.config({
    waitSeconds: 15,
    shim:{
        "lib/bootstrap":{
            "deps":["lib/jquery"]
        }
    }
});
