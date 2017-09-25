app.factory("myfactory", ($http, $q) => {
    var object = {

        get() {
            var pr = $q.defer();
            var url = "https://raw.githubusercontent.com/rocknegi/Mean/master/login.json";
            $http.get(url).then(function (data) {
                pr.resolve(data.data);
            }, function (err) {
                pr.reject(err);
            });
            return pr.promise;
        },


    }

    return object;
});

app2.factory("myfactory", ($http, $q) => {
    var object = {
        get() {
            var pr = $q.defer();
            var url = "questions.json";
            $http.get(url).then(function (data) {
                pr.resolve(data.data);
            }, function (err) {
                pr.reject(err);
            });
            return pr.promise;
        },




    }
    return object;
});
