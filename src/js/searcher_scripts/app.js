var search_app = angular.module('SearcherApp', []);


//checked is empty input or not needed in filters. Second version function. But not finished version. It needs to debugging
function isEmptyInput() {
    var x = document.activeElement.id;
    if (document.getElementById(x).value === '') {
        return true;
    }
    else {
        return false;
    }
}
/* First version function. It raplaced by upper function
function isEmptyInput() {
    if (document.getElementById('help').value === '') {
        return true;
    }
    else {
        return false;
    }
}
*/
$(document).ready(function () {


    /*
    $('input[name = myInput]').focus(function () {
        $(this).attr('id', 'help');
        $('button[name = myBtn]').attr('id', 'clean');
    });
    $('input[name = myInput]').focusout(function () {
        $(this).removeAttr('id');
        $('button[name = myBtn]').removeAttr('id');
    });
    */

    $('#clean').addClass('btn-clean_disable');
    $('#clean').click(function () {
       $(this).removeClass('btn-clean_enable').addClass('btn-clean_disable')
    });
    $('#help').keyup(function () {
        if (!isEmptyInput()) {
            $('#clean').removeClass('btn-clean_disable').addClass('btn-clean_enable');
        }
        else {
            $('#clean').removeClass('btn-clean_enable').addClass('btn-clean_disable');
        }
    });

});

//filter for phrase
search_app.filter('Phrase', function () {
    return function (url) {
        return  url;
    }
});

//filter for domain
search_app.filter('Domain', function () {
    return function (url) {
        if(!isEmptyInput()) {
            var arr = url.split('/');
            return arr[2];
        }
        else {
            return '';
        }
    }
});

//filter fo url
search_app.filter('Url', function () {
    return function (url) {
        var reg = new RegExp('https://?|ftp://?|http://?', 'i');
        if (!isEmptyInput()) {
            return url.replace(reg, '');
        }
        else {
            return '';
        }
    }
});