angular.module('godEyeApp').controller('myCtrl',function($scope){


    $scope.initFunc=function(){
        $scope.time = '1001';
        $scope.firstActive = 'active'
        $scope.secondActive = ''
        $scope.thirdActive = ''

        $scope.column1Hidden = true
        $scope.column2Hidden = true
        $scope.column3Hidden = true
        $scope.column4Hidden = true
        $scope.column5Hidden = true
        $scope.column6Hidden = true
        $scope.column7Hidden = true
        $scope.column8Hidden = true

         $scope.columns = [{id:0,name:'#'},{id:1,name:'method'},{id:2,name:'code'},{id:3,name:'host'},
        {id:4,name:'path'},{id:5,name:'mime type'},{id:6,name:'time'},{id:7,name:'size'}]

        $scope.items = [
            {column1:'67',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'68',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'69',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'70',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'71',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'72',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'73',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'74',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'75',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'76',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'77',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
            ,{column1:'78',column2:'GET',column3:'200',column4:'thmb1.jkimg.net',column5:'/cms_jfmall/goodsimg/cms/file/2016_12_20/APP_1482202615832.jpg',column6:'image/jpeg',column7:'耗时0.537s',column8:"60.00kb"}
        ]

        $scope.image1= {url:'/static/media/image/snap1.jpeg',time:'2017-06-01 10:01:34'}
        $scope.image2 = {url:'/static/media/image/snap2.jpeg',time:'2017-07-03 11:34:32'}
        $scope.image3={url:'/static/media/image/snap3.jpeg',time:'2017-04-06 16:34:32'}



        //paging config
        //$scope.pageSize=5;
        //$scope.initPageSort($scope.items)
    }　

    $scope.$on('time-event',function(event,data){

        console.log(data[0].name)//获取hover时间
        if(data[0].name>'2015-01-01'){
            $scope.image1= {url:'/static/media/image/1.jpg',time:'2017-02-01 10:01:34'}
            $scope.image2= {url:'/static/media/image/2.jpg',time:'2017-04-02 10:01:34'}
            $scope.image3= {url:'/static/media/image/3.jpg',time:'2017-07-01 10:01:34'}
        }
        else{
            $scope.image1= {url:'/static/media/image/snap1.jpeg',time:'2017-06-01 10:01:34'}
            $scope.image2 = {url:'/static/media/image/snap2.jpeg',time:'2017-07-03 11:34:32'}
            $scope.image3={url:'/static/media/image/snap3.jpeg',time:'2017-04-06 16:34:32'}
        }

        $scope.$apply();
        event.stopPropagation();

    })


    $scope.initPageSort=function(item){
        $scope.data = item;
        $scope.pages = Math.ceil($scope.data.length / $scope.pageSize); //分页数
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;//最多显示5页
        $scope.pageList = [];
        $scope.selPage = 1;

        $scope.setData = function () {
            $scope.items = $scope.data.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));
            //通过当前页数筛选出表格当前显示数据
        }
        $scope.items = $scope.data.slice(0, $scope.pageSize);
        for (var i = 0; i < $scope.newPages; i++) {
                 $scope.pageList.push(i + 1);
        }
        $scope.selectPage = function (page) {
            if (page < 1 || page > $scope.pages) return;
            if (page > 2) {
                var newpageList = [];
                for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
                    newpageList.push(i + 1);
                }
                $scope.pageList = newpageList;
            }
            $scope.selPage = page;
            $scope.setData();
            $scope.isActivePage(page);

        }

    }

    $scope.isActivePage = function (page) {
        return $scope.selPage == page;
    }

    $scope.Previous = function () {
        $scope.selectPage($scope.selPage - 1);
    }

    $scope.Next = function () {
        $scope.selectPage($scope.selPage + 1);
    }

    $scope.hideColumn = function(index){
        switch(index){
            case 0:

                $scope.column1Hidden = 'none'
                break
            case 1:

                $scope.column2Hidden = 'none'
                break
            case 2:

                $scope.column3Hidden = 'none'
                break
            case 3:
                $scope.column4Hidden = 'none'
                break
            case 4:
                $scope.column5Hidden = 'none'
                break
            case 5:
                $scope.column6Hidden = 'none'
                break
            case 6:
                $scope.column7Hidden = 'none'
                break
            case 7:
                $scope.column8Hidden = 'none'
                break

        }
    }
    $scope.showColumn = function(index){
        switch(index){
            case 0:
                $scope.column1Hidden = 'true'
                break
            case 1:
                $scope.column2Hidden = 'true'
                break
            case 2:
                $scope.column3Hidden = 'true'
                break
            case 3:
                $scope.column4Hidden = 'true'
                break
            case 4:
                $scope.column5Hidden = 'true'
                break
            case 5:
                $scope.column6Hidden = 'true'
                break
            case 6:
                $scope.column7Hidden = 'true'
                break
            case 7:
                $scope.column8Hidden = 'true'
                break

        }
    }

    $scope.setFirstActive = function(){
        $scope.secondActive =''
        $scope.thirdActive = ''
        $scope.firstActive = 'active'
    }
    $scope.setSecondActive = function(){
        $scope.secondActive ='active'
        $scope.thirdActive = ''
        $scope.firstActive = ''
    }
    $scope.setThirdActive = function(){
        $scope.secondActive =''
        $scope.thirdActive = 'active'
        $scope.firstActive = ''
    }
    $scope.select = function(id,event){
        var action = event.target
        if(!action.checked){
            $scope.hideColumn(id)
        }
        else{
            $scope.showColumn(id)
        }

    }


});