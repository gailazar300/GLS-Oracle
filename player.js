
injectJquery();

var script2 = document.createElement('script');
script2.src = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867&callback=processData';
script2.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script2);

function injectJquery() {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function processData(myObj) {
    injectCss(myObj.data.css);
    let numOfSteps = myObj.data.structure.steps.length;
    for (i = 0; i < numOfSteps; i++) {
        let stepType = myObj.data.tiplates[myObj.data.structure.steps[i].action.type];

        let obj = createTipElementFromHTML(stepType ,i);
        $(myObj.data.structure.steps[i].action.selector).after(obj);

        $('.stepNumber'+i+' .steps-count [data-iridize-role="stepCount"]').html("<span>"+(i+1)+"</span>");
        $('.stepNumber'+i+' .stepNumber'+i+' span[data-iridize-role="stepsCount"]').html('<span>'+numOfSteps+'</span>');
        $('.stepNumber'+i+' .popover-content [data-iridize-id="content"]').html(myObj.data.structure.steps[i].action.contents["#content"]);

        $("[class='tooltip in']").removeClass('tooltip in').addClass("tooltip in "+myObj.data.structure.steps[i].action.placement+" "+myObj.data.structure.steps[i].action.classes);
    }

}

function injectCss(JsonsCss){
    $('<link rel="stylesheet" href="https://guidedlearning.oracle.com/player/latest/static/css/stTip.css" type="text/css" />').appendTo('head');
    $('<style type="text/css"> ' + JsonsCss + '</style>').appendTo('head');
}
function createTipElementFromHTML(htmlString, stepIndex) {
    let wrapperPrefix ='<div  class="sttip">   	<div class="tooltip in"> <div class="tooltip-arrow"></div><div class="tooltip-arrow second-arrow"></div><div class="popover-inner">';
    let wrapperSuffix ='</div></div></div>';
    var div = document.createElement('div');
    div.innerHTML ='<div class=stepNumber'+stepIndex+'> '+ wrapperPrefix+ htmlString + wrapperSuffix +' </div>';
    return div.firstChild;
}

