angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, Chinese) {

        //console.log(Chinese.getBH('黃'));

        console.log(Chinese.getJson('黄叶飞'));
        console.log(Chinese.getXj(1));

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('ScoresCtrl',function($scope, $stateParams, Chinese) {
        var pname = $stateParams.pname;
        var cname = $stateParams.cname;
//        console.log(pname + cname);
        $scope.name = Chinese.getJson(pname + cname);
//        console.log($scope.name.total);

        if('陈琦'==pname+cname) {
            $scope.xiongji =Chinese.getXj(13);
        } else {
            $scope.xiongji = Chinese.getXj($scope.name.total);
        }
//        console.log($scope.xiongji)
})
