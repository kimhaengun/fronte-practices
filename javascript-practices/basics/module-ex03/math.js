/**
 * exports 뒤에 꼭 이름을 사용해서 exports 한다.
 * named** export!!!!
 */
   exports.PI=3.14;
    
   exports.max=function(){
        //제일 작은 값
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            max = e > max ? e : max;
        });
        return max;
    };
   exports.min=function(){
        //제일 작은 값
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            min = e < min ? e : min;
        });
        return min;
    };