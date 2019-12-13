module.exports = {
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    },
    devServer:{
        port: 8080,
        // host: "localhost",
        host:"192.168.1.103",
    }
};

