
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var script2 = document.createElement('script');
script2.src = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867&callback=processData';
//script2.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script2);



function processData(myObj) {
    console.log(myObj);
    $('<link rel="stylesheet" href="https://guidedlearning.oracle.com/player/latest/static/css/stTip.css" type="text/css" />').appendTo('head');
    $('<style type="text/css"> ' + myObj.data.css + '</style>').appendTo('head');
    // let obj =createElementFromHTML('<div  class="sttip">   	<div class="tooltip in"> <div class="tooltip-arrow"></div><div class="tooltip-arrow second-arrow"></div><div class="popover-inner"><div class=el'+1+'> '+myObj.data.tiplates.tip+'</div></div></div></div>');
    //document.getElementById('hplogo').after(obj);
    // $('.popover-content [data-iridize-id="content"]').html(myObj.data.structure.steps[0].action.contents["#content"]);


    for (i = 0; i < 5; i++) {
        let obj =createElementFromHTML('<div  class="sttip">   	<div class="tooltip in"> <div class="tooltip-arrow"></div><div class="tooltip-arrow second-arrow"></div><div class="popover-inner"><div class=el'+i+'> '+myObj.data.tiplates.tip+'</div></div></div></div>');
        $(myObj.data.structure.steps[i].action.selector).after(obj);
        $('.el'+i+' .popover-content [data-iridize-id="content"]').html(myObj.data.structure.steps[i].action.contents["#content"]);

    }

}


function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}

