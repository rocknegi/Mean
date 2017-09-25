app.controller("myctrl", ($scope, myfactory, $localStorage, ) => {
    var promise = myfactory.get();

    promise.then(function (data) {
        $scope.result = data;
    }, function (err) {
        $scope.result = err;
    });



    $scope.submit = (id, pass) => {
        alert("Searching for " + id);
        // console.log($scope.result);
        var bool = false;
        for (var i in $scope.result) {
            // console.log();
            if ($scope.result[i].name == id && $scope.result[i].pass == pass) {
                console.log("true");
                alert("Logging you in Mr " + id);
                var x = location.href = "pages/welcome.html";
                $scope.storage = $localStorage;
                $scope.storage.id = id;
                bool = true;

            }

        }
        if (!bool) {

            alert("wrong id or pass");


        }

    }




});

app2.controller("myctrl2", ($scope, $localStorage, myfactory) => {

    $scope.welcome = $localStorage;
    $scope.id = 0;
    $scope.clicked = true;
    $scope.count = 0;


    var promise = myfactory.get();
    promise.then(function (data) {
        $scope.result = data;
        console.log($scope.result);
        // console.log($scope.result.question1);
        var arr = [];
        angular.forEach($scope.result, function (i, data) {
            arr.push($scope.result);


        })
    }, function (err) {
        $scope.result = err;
    });

    $scope.start = () => {
            $scope.id1 = 0;
            $scope.id2 = 0;
            //      console.log($scope.id1);
        },
        $scope.check = () => {

            if ($scope.result[$scope.id1].answer == $scope.radioValue) {
                $scope.count++;
            }
            console.log($scope.count)
        },


        $scope.next = () => {
            //    console.log($scope.id1);
            $scope.color();
            $scope.check();
            $scope.id1++;
            $scope.id2++;
            $scope.no++;
            $scope.deselect();


        },
        $scope.prev = () => {
            console.log($scope.id1);
            $scope.id1--;
            $scope.id2--;
            $scope.no--;

        },
        $scope.no = 0;

    $scope.color = () => {
            if ($scope.no == 0) {

                if ($scope.radioValue)
                    $scope.answered0 = true;

            }
            if ($scope.no == 1) {
                if ($scope.radioValue)
                    $scope.answered1 = true;
            }

            if ($scope.no == 2) {
                if ($scope.radioValue)
                    $scope.answered2 = true;
            }

            if ($scope.no == 3) {
                if ($scope.radioValue)
                    $scope.answered3 = true;
            }

            if ($scope.no == 4) {
                if ($scope.radioValue)
                    $scope.answered4 = true;
            }




        },
        $scope.deselect = () => {
            console.log("hola")
            $scope.radioValue = false;
        }

    $scope.sent = () => {
        $scope.score = $scope.count;
        $scope.message = "your score is"
        return true;
    }

});
