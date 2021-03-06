var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/WorkLog');
    
    $stateProvider
        
        // WorkLog STATES AND NESTED VIEWS ========================================
        .state('WorkLog', {
            url: '/WorkLog',
            templateUrl: 'WorkLog.html',
            controller: 'WorkLogController'
        })
        
        
        // LeaveSystem PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('LeaveSystem', {
            url: '/LeaveSystem',
            templateUrl: 'LeaveSystem.html',
            controller: 'LeaveSystemController'
        })

        // OutBound STATES AND NESTED VIEWS ========================================
        .state('OutBound', {
            url: '/OutBound',
            templateUrl: 'OutBound.html'
        })

        // OutBound STATES AND NESTED VIEWS ========================================
        .state('StaffInfo', {
            url: '/StaffInfo',
            templateUrl: 'StaffInfo.html'
        });


        
        
});

routerApp.controller('WorkLogController', function($scope) {
   
    $scope.projects = [
        {
            name: '多奇數位內部系統'
        },
        {
            name: 'goo2手車訊'
        },
        {
            name: 'SONY OMS前台'
        }
    ];

    $scope.recipients=[
        {
            englishName: 'James',
            chineseName: '黃連發'
        },
        {
            englishName: 'Sotom',
            chineseName: '譚兆安'
        },
        {
            englishName: 'Exile',
            chineseName: '李柏逸'
        },
        {
            englishName: 'Gordon',
            chineseName: '魏功豪'
        },
        {
            englishName: 'Shon',
            chineseName: '莊繼翔'
        },
        {
            englishName: 'Joseph',
            chineseName: '鄔炳孝'
        },
        {
            englishName: 'Stevie',
            chineseName: '陳俊廷'
        },
        {
            englishName: 'Yowko',
            chineseName: '蔡政祐'
        },
        {
            englishName: 'Anna',
            chineseName: '蘇盈雅'
        }
    ];
    
});

routerApp.controller('LeaveSystemController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});
