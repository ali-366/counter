// get element foorm html
var inputArea = document.getElementById('inputArea');
var showData = document.getElementById('showData');
var reamin = document.getElementById('reamin');


function totalChara()
{
    var limit = 200;
    var totalInput = inputArea.value.length;
    var reamining = (limit-totalInput)+('Characters left...');
    showData.innerHTML = totalInput;
    reamin.innerHTML = reamining;



    
    if(limit<totalInput)
    {
        reamin.css('çolor','red');
    }
    
    else
    {
        reamin.css('çolor','black');
    }
}
totalChara();