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
}