
function getCookie(Name) {
    var cookieName = encodeURIComponent(Name) + "=",  //注cookie的名和值都是经过URL编码的,所有这里要用函数编码
        returnvalue = "",
        cookieStart=document.cookie.indexOf(cookieName),
        cookieEnd=null;
    if (cookieStart>-1) {
        cookieEnd = document.cookie.indexOf(";",cookieStart);
        if (cookieEnd == -1){
            cookieEnd = document.cookie.length;
        }
        returnvalue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length, cookieEnd));  //对应的解码
    } 
    return returnvalue;
 }