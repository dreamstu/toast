require('./index.css');
var $ = require('jquery');
return {

    _getToast : function(){

        if (!$('.qs-toast').length) {
            var $toast  = '<div class="qs-toast" style="display:none">';
                $toast +=   '<span class="qs-toast-tip">';
                $toast +=     '<span class="qs-toast-inner">';
                $toast +=       '<i class="qs-toast-ico"></i>';
                $toast +=       '<span class="qs-toast-text">数据加载中...</span>';
                $toast +=     '</span>';
                $toast +=   '</span>';
                $toast += '</div>';

            $('body').append($toast);
        }

        return $('.qs-toast');
        
    },

    show : function(msg, type){
        var $el = this._getToast();

        $el.removeClass('qs-toast-ok').removeClass('qs-toast-warn').removeClass('qs-toast-err');
        $el.addClass('qs-toast-'+type);
        $('.qs-toast-text', $el).text(msg);

        $el.slideDown(0.1);

        setTimeout(function() {
            $el.slideUp(0.5);
        }, 3000);
    }

};
