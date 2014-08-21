# toast [![spm version](http://spmjs.io/badge/toast)](http://spmjs.io/package/toast)
---

## 综述

Toast。吐司-页面顶部提示，常用于ajax操作成功和失败的信息提示

## 初始化组件

    qs.use('jquery',toast/1.0.0/index', function ($,Toast) {
       
    });
    
## API说明

	qs.use('$',toast/1.0.0/index', function ($,Toast) {
        $('#showToastOk').on('click',function(){
            Toast.show('操作成功！', 'ok');
        });
        $('#showToastWarn').on('click',function(){
            Toast.show('数据加载中...', 'warn');
        });
        $('#showToastErr').on('click',function(){
            Toast.show('操作失败，系统错误！', 'err');
        });
    });