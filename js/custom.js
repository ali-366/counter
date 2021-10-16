




function addition()
    {
        var num1 = parseInt(document.getElementById('input1').value);
        var num2 = parseInt(document.getElementById('input2').value);
        var result = num1 + num2;

        document.getElementById('addition').innerHTML = result;
    }


    function minus()
    {
        var num3 = (document.getElementById('input3').value);
        var num4 = (document.getElementById('input4').value);
        var resultMinus = num3 - num4;

        document.getElementById('mainus').innerHTML = resultMinus;
    }

    
    function multiplye()
    {
        var num5 = (document.getElementById('input5').value);
        var num6 = (document.getElementById('input6').value);
        var resultMulti = num5 * num6;

        document.getElementById('multi').innerHTML = resultMulti;
    }

    function divition()
    {
        var num7 = (document.getElementById('input7').value);
        var num8 = (document.getElementById('input8').value);
        var resultDivi = num7 / num8;

        document.getElementById('divi').innerHTML = resultDivi;
    }

    function avarage()
    {
        var num9 = parseInt(document.getElementById('input9').value);
        var num10 = parseInt(document.getElementById('input10').value);
        var total = num9 + num10;
        var average = total/2;


        document.getElementById('avg').innerHTML = average;
    }

    function avgRemain()
    {
        var num11 = parseInt(document.getElementById('input11').value);
        var num12 = parseInt(document.getElementById('input12').value);
        var remain = num11 % num12;
   


        document.getElementById('avgRemain').innerHTML = remain;
    }














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