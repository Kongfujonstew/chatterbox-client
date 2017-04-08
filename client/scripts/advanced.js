var URL1 = 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages';
var URL = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages'

var messages = [];

var fetch = function() {
  $.ajax({
    url: URL,
    type: 'GET',
    data: {order: '-createdAt', limit: 3000},
    contentType: 'application/json',
    success: function (data) {
      data.results.forEach(function(element) {
        messages.push(element.objectId)
      });
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

var fetchField = function() {

  var fields = ['objectId'];
  for (var i = 0; i < arguments.length; i++) {
    fields.push(arguments[i]);
  };

  $.ajax({
    url: URL,
    type: 'GET',
    data: {order: '-createdAt', limit: 3000},
    contentType: 'application/json',
    success: function (data) {
      data.results.forEach(function(element) {
        var object = {};
        fields.forEach(x => object[x] = element[x]);
        messages.push(object);
      });
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

var deleteMessage = function(contentKey) {
  $.ajax({
    url: URL + '/' + contentKey,
    type: 'DELETE',
    success: function(){console.log('Deleted')},
    error: function(){console.log('Failed')}
  });
};

var updateMessage = function(message) {

  console.log(message);

  $.ajax({
    url: URL + '/' + message.objectId,
    data: message,
    type: 'PUT',
    success: function(){console.log('Updated')},
    error: function(){console.log('Failed')}
  });
};

var errorMessage = {
  username: 'System Message: 95g89dehf_adminParseAPI',
  text: 'GET 403 ERROR: Invalid API key',
  roomname: 'ParseAPI',
};

function deleteDB() {

  fetch();

  setTimeout(function() {
    messages.forEach(function(objID) {
      if (objID) deleteMessage(objID);
    });
    messages = [];
    sendMessage(errorMessage);
  }, 2000);

} 

function prependAll(string) {
  messages = [];
  fetchField('username', 'text', 'roomname');

  setTimeout(function() {
    messages.forEach(x => x.text = string + x.text);
    messages.forEach(x => updateMessage(x)); 
  }, 3000);

}

function sendMessage(message) {

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: URL,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',

    success: function (data) {
      console.log('chatterbox: Message sent');
    },

    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }

  });
};

var message = {
  username: 'joneric',
  text: 'hello',
  roomname: 'lobby',
};

var randomMessages = [{"username":"emiller0","text":"User-centric responsive architecture","roomname":"Horizontal"},
{"username":"lrussell1","text":"Inverse encompassing superstructure","roomname":"5th generation"},
{"username":"abell2","text":"Up-sized 6th generation matrix","roomname":"Synergized"},
{"username":"sgordon3","text":"Business-focused radical encryption","roomname":"Monitored"},
{"username":"msanders4","text":"Face to face scalable service-desk","roomname":"Multi-channelled"},
{"username":"thowell5","text":"Open-architected fresh-thinking budgetary management","roomname":"Visionary"},
{"username":"lreyes6","text":"Customer-focused dynamic customer loyalty","roomname":"attitude-oriented"},
{"username":"dfreeman7","text":"Business-focused client-driven hub","roomname":"installation"},
{"username":"spowell8","text":"User-friendly impactful interface","roomname":"Robust"},
{"username":"fperkins9","text":"Decentralized human-resource model","roomname":"zero defect"},
{"username":"jowensa","text":"Open-architected web-enabled website","roomname":"dynamic"},
{"username":"apriceb","text":"Open-source modular framework","roomname":"Distributed"},
{"username":"jmillerc","text":"Organized foreground hub","roomname":"grid-enabled"},
{"username":"ewardd","text":"Compatible dynamic model","roomname":"website"},
{"username":"cfrankline","text":"Polarised coherent function","roomname":"task-force"},
{"username":"acarpenterf","text":"Diverse systemic software","roomname":"Cross-platform"},
{"username":"mgilbertg","text":"Balanced discrete superstructure","roomname":"algorithm"},
{"username":"swallaceh","text":"Face to face interactive intranet","roomname":"systemic"},
{"username":"klawsoni","text":"Phased exuding installation","roomname":"Operative"},
{"username":"aaustinj","text":"Reactive reciprocal application","roomname":"adapter"},
{"username":"kmyersk","text":"Virtual fault-tolerant internet solution","roomname":"approach"},
{"username":"jstanleyl","text":"Sharable local emulation","roomname":"Future-proofed"},
{"username":"rmitchellm","text":"Mandatory mobile forecast","roomname":"methodical"},
{"username":"jhuntn","text":"Customer-focused systematic open system","roomname":"flexibility"},
{"username":"ssullivano","text":"Team-oriented eco-centric success","roomname":"monitoring"},
{"username":"jhudsonp","text":"Seamless responsive architecture","roomname":"moratorium"},
{"username":"swilsonq","text":"Down-sized systemic groupware","roomname":"encompassing"},
{"username":"snelsonr","text":"Progressive local protocol","roomname":"Diverse"},
{"username":"cmurphys","text":"Cross-platform attitude-oriented superstructure","roomname":"composite"},
{"username":"sdeant","text":"Focused even-keeled protocol","roomname":"client-driven"},
{"username":"wstevensu","text":"Innovative encompassing workforce","roomname":"circuit"},
{"username":"bturnerv","text":"Enhanced web-enabled matrices","roomname":"Fundamental"},
{"username":"agarzaw","text":"Organic tertiary conglomeration","roomname":"support"},
{"username":"mperryx","text":"Vision-oriented optimal alliance","roomname":"De-engineered"},
{"username":"jaustiny","text":"Open-source clear-thinking orchestration","roomname":"asynchronous"},
{"username":"jdixonz","text":"Reactive encompassing attitude","roomname":"bi-directional"},
{"username":"kmorgan10","text":"Distributed demand-driven capability","roomname":"Extended"},
{"username":"tbutler11","text":"Pre-emptive hybrid intranet","roomname":"migration"},
{"username":"ahoward12","text":"Function-based web-enabled toolset","roomname":"explicit"},
{"username":"rthomas13","text":"Virtual value-added application","roomname":"uniform"},
{"username":"mschmidt14","text":"Down-sized asynchronous strategy","roomname":"customer loyalty"},
{"username":"bcollins15","text":"Programmable demand-driven productivity","roomname":"Visionary"},
{"username":"svasquez16","text":"De-engineered asymmetric flexibility","roomname":"cohesive"},
{"username":"nward17","text":"Persistent zero administration matrix","roomname":"responsive"},
{"username":"mdunn18","text":"Enterprise-wide analyzing policy","roomname":"info-mediaries"},
{"username":"pporter19","text":"Profit-focused holistic functionalities","roomname":"fault-tolerant"},
{"username":"jschmidt1a","text":"Focused real-time hub","roomname":"Grass-roots"},
{"username":"dhunt1b","text":"Proactive web-enabled customer loyalty","roomname":"Optional"},
{"username":"pwallace1c","text":"Quality-focused mobile hierarchy","roomname":"6th generation"},
{"username":"jwelch1d","text":"Multi-layered client-server standardization","roomname":"directional"},
{"username":"lwhite1e","text":"Phased local open system","roomname":"well-modulated"},
{"username":"jmedina1f","text":"Sharable encompassing approach","roomname":"impactful"},
{"username":"jstone1g","text":"Upgradable executive matrix","roomname":"adapter"},
{"username":"sgrant1h","text":"Intuitive zero administration algorithm","roomname":"moratorium"},
{"username":"sarmstrong1i","text":"Triple-buffered intermediate portal","roomname":"Cloned"},
{"username":"rpalmer1j","text":"Synchronised systematic alliance","roomname":"database"},
{"username":"barnold1k","text":"Configurable full-range system engine","roomname":"Centralized"},
{"username":"hgreene1l","text":"Synchronised 3rd generation approach","roomname":"portal"},
{"username":"mwebb1m","text":"Future-proofed optimizing definition","roomname":"User-friendly"},
{"username":"awright1n","text":"Secured demand-driven access","roomname":"logistical"},
{"username":"pwalker1o","text":"Horizontal dedicated time-frame","roomname":"Progressive"},
{"username":"shanson1p","text":"Customer-focused real-time algorithm","roomname":"logistical"},
{"username":"smcdonald1q","text":"Multi-channelled logistical analyzer","roomname":"zero tolerance"},
{"username":"awebb1r","text":"Realigned web-enabled superstructure","roomname":"asynchronous"},
{"username":"lferguson1s","text":"Adaptive responsive adapter","roomname":"instruction set"},
{"username":"sburns1t","text":"Total composite migration","roomname":"Progressive"},
{"username":"kpeters1u","text":"Monitored asymmetric project","roomname":"responsive"},
{"username":"tray1v","text":"Multi-tiered bandwidth-monitored function","roomname":"demand-driven"},
{"username":"estewart1w","text":"Decentralized holistic moratorium","roomname":"conglomeration"},
{"username":"rwoods1x","text":"Self-enabling zero defect task-force","roomname":"implementation"},
{"username":"twatkins1y","text":"Automated analyzing data-warehouse","roomname":"contingency"},
{"username":"rrivera1z","text":"Business-focused client-server info-mediaries","roomname":"forecast"},
{"username":"kgraham20","text":"Secured object-oriented implementation","roomname":"Re-engineered"},
{"username":"hhoward21","text":"Cross-group holistic solution","roomname":"heuristic"},
{"username":"lreid22","text":"Advanced disintermediate frame","roomname":"Face to face"},
{"username":"rmurphy23","text":"Centralized mission-critical analyzer","roomname":"Profound"},
{"username":"jmartinez24","text":"Horizontal content-based secured line","roomname":"leverage"},
{"username":"dwood25","text":"Self-enabling national concept","roomname":"Virtual"},
{"username":"thayes26","text":"Horizontal object-oriented success","roomname":"high-level"},
{"username":"abrooks27","text":"Self-enabling directional groupware","roomname":"motivating"},
{"username":"bgrant28","text":"Multi-lateral radical benchmark","roomname":"Distributed"},
{"username":"gbailey29","text":"Intuitive asymmetric initiative","roomname":"productivity"},
{"username":"plarson2a","text":"Phased contextually-based artificial intelligence","roomname":"Seamless"},
{"username":"dhill2b","text":"Centralized local ability","roomname":"Networked"},
{"username":"griley2c","text":"Integrated homogeneous firmware","roomname":"Sharable"},
{"username":"tbrooks2d","text":"Streamlined high-level framework","roomname":"client-driven"},
{"username":"cspencer2e","text":"Enhanced full-range interface","roomname":"3rd generation"},
{"username":"wboyd2f","text":"Organic real-time application","roomname":"Enterprise-wide"},
{"username":"fschmidt2g","text":"User-centric web-enabled structure","roomname":"static"},
{"username":"dfisher2h","text":"Sharable tangible installation","roomname":"eco-centric"},
{"username":"kday2i","text":"Distributed upward-trending definition","roomname":"productivity"},
{"username":"apayne2j","text":"Profit-focused real-time groupware","roomname":"global"},
{"username":"pwatson2k","text":"Cloned regional secured line","roomname":"hub"},
{"username":"phenderson2l","text":"Fully-configurable reciprocal workforce","roomname":"alliance"},
{"username":"glawrence2m","text":"Devolved heuristic structure","roomname":"Up-sized"},
{"username":"jward2n","text":"Quality-focused system-worthy support","roomname":"well-modulated"},
{"username":"lwright2o","text":"Integrated encompassing implementation","roomname":"architecture"},
{"username":"delliott2p","text":"De-engineered next generation project","roomname":"success"},
{"username":"dbanks2q","text":"Innovative global collaboration","roomname":"clear-thinking"},
{"username":"acrawford2r","text":"Robust multi-state matrices","roomname":"Up-sized"},
{"username":"kgreen2s","text":"Synergized non-volatile workforce","roomname":"user-facing"},
{"username":"jmoore2t","text":"Customer-focused asymmetric local area network","roomname":"solution-oriented"},
{"username":"gwoods2u","text":"Face to face bottom-line ability","roomname":"responsive"},
{"username":"jperkins2v","text":"Implemented incremental productivity","roomname":"Horizontal"},
{"username":"mkim2w","text":"Distributed coherent implementation","roomname":"bottom-line"},
{"username":"kcunningham2x","text":"Enhanced eco-centric projection","roomname":"responsive"},
{"username":"lgibson2y","text":"Profound directional functionalities","roomname":"Ameliorated"},
{"username":"bcox2z","text":"Devolved maximized local area network","roomname":"Cloned"},
{"username":"jstanley30","text":"Operative national hierarchy","roomname":"Exclusive"},
{"username":"aalexander31","text":"Triple-buffered radical standardization","roomname":"model"},
{"username":"awood32","text":"Right-sized fault-tolerant architecture","roomname":"attitude-oriented"},
{"username":"mmiller33","text":"Reverse-engineered neutral hub","roomname":"bottom-line"},
{"username":"rhunt34","text":"Automated regional framework","roomname":"Reverse-engineered"},
{"username":"nhughes35","text":"De-engineered global monitoring","roomname":"uniform"},
{"username":"cwashington36","text":"Polarised composite migration","roomname":"Diverse"},
{"username":"rmurphy37","text":"Persevering client-server interface","roomname":"eco-centric"},
{"username":"bgomez38","text":"Enterprise-wide 24 hour portal","roomname":"exuding"},
{"username":"ckelly39","text":"Diverse composite adapter","roomname":"Profound"},
{"username":"psimmons3a","text":"Stand-alone 6th generation flexibility","roomname":"time-frame"},
{"username":"cgomez3b","text":"Synergistic even-keeled analyzer","roomname":"encryption"},
{"username":"drice3c","text":"Versatile maximized task-force","roomname":"Grass-roots"},
{"username":"mmeyer3d","text":"Stand-alone disintermediate support","roomname":"Self-enabling"},
{"username":"jruiz3e","text":"Re-contextualized bandwidth-monitored service-desk","roomname":"alliance"},
{"username":"srivera3f","text":"Exclusive user-facing monitoring","roomname":"maximized"},
{"username":"vrobertson3g","text":"Exclusive 24/7 internet solution","roomname":"Versatile"},
{"username":"kgonzalez3h","text":"Synergized local concept","roomname":"24/7"},
{"username":"dfoster3i","text":"Reduced executive neural-net","roomname":"Intuitive"},
{"username":"acarter3j","text":"Progressive zero administration support","roomname":"concept"},
{"username":"sbailey3k","text":"Automated uniform system engine","roomname":"Digitized"},
{"username":"wcunningham3l","text":"Configurable interactive data-warehouse","roomname":"interface"},
{"username":"jgardner3m","text":"Optional optimizing forecast","roomname":"attitude-oriented"},
{"username":"rharper3n","text":"De-engineered 24/7 throughput","roomname":"high-level"},
{"username":"wcooper3o","text":"Organic homogeneous encoding","roomname":"Decentralized"},
{"username":"cmorales3p","text":"Operative neutral circuit","roomname":"Public-key"},
{"username":"jruiz3q","text":"Open-source discrete concept","roomname":"asynchronous"},
{"username":"jpayne3r","text":"Synergized mission-critical product","roomname":"foreground"},
{"username":"sclark3s","text":"Adaptive tangible solution","roomname":"Switchable"},
{"username":"aroberts3t","text":"Exclusive real-time moratorium","roomname":"6th generation"},
{"username":"rkelly3u","text":"Optimized object-oriented utilisation","roomname":"Progressive"},
{"username":"jbrown3v","text":"Re-contextualized 5th generation methodology","roomname":"attitude-oriented"},
{"username":"hrussell3w","text":"Right-sized fresh-thinking matrices","roomname":"systematic"},
{"username":"thowell3x","text":"Mandatory attitude-oriented algorithm","roomname":"function"},
{"username":"jcarpenter3y","text":"User-centric contextually-based strategy","roomname":"systemic"},
{"username":"acook3z","text":"Universal leading edge collaboration","roomname":"reciprocal"},
{"username":"tmartin40","text":"Open-architected optimizing firmware","roomname":"Stand-alone"},
{"username":"kdixon41","text":"Open-architected optimizing circuit","roomname":"matrices"},
{"username":"kchapman42","text":"Focused encompassing open architecture","roomname":"bottom-line"},
{"username":"rpeters43","text":"Mandatory foreground archive","roomname":"Monitored"},
{"username":"dnguyen44","text":"Multi-channelled maximized forecast","roomname":"solution-oriented"},
{"username":"rwilliamson45","text":"User-centric well-modulated budgetary management","roomname":"access"},
{"username":"ngarrett46","text":"Extended system-worthy firmware","roomname":"intermediate"},
{"username":"jdunn47","text":"Synergistic web-enabled Graphical User Interface","roomname":"dedicated"},
{"username":"jmorrison48","text":"Mandatory tangible hierarchy","roomname":"Configurable"},
{"username":"aharrison49","text":"Fully-configurable eco-centric synergy","roomname":"frame"},
{"username":"ltaylor4a","text":"Stand-alone coherent open system","roomname":"Profit-focused"},
{"username":"kbennett4b","text":"Sharable real-time methodology","roomname":"Enhanced"},
{"username":"lsanchez4c","text":"Multi-layered coherent attitude","roomname":"value-added"},
{"username":"jalvarez4d","text":"Exclusive asynchronous hub","roomname":"real-time"},
{"username":"pcox4e","text":"Multi-channelled empowering contingency","roomname":"Persistent"},
{"username":"dwest4f","text":"Adaptive attitude-oriented productivity","roomname":"optimal"},
{"username":"sgray4g","text":"Innovative multi-state concept","roomname":"info-mediaries"},
{"username":"kramos4h","text":"Business-focused zero administration solution","roomname":"Graphic Interface"},
{"username":"kberry4i","text":"Streamlined scalable instruction set","roomname":"Expanded"},
{"username":"nstevens4j","text":"Automated stable parallelism","roomname":"circuit"},
{"username":"amiller4k","text":"Pre-emptive full-range intranet","roomname":"firmware"},
{"username":"jcruz4l","text":"Re-engineered transitional benchmark","roomname":"explicit"},
{"username":"bbutler4m","text":"Vision-oriented intermediate extranet","roomname":"bifurcated"},
{"username":"smills4n","text":"Extended 24/7 knowledge base","roomname":"De-engineered"},
{"username":"cwells4o","text":"Optimized system-worthy benchmark","roomname":"Switchable"},
{"username":"lpayne4p","text":"Object-based solution-oriented archive","roomname":"Streamlined"},
{"username":"cvasquez4q","text":"Assimilated systematic toolset","roomname":"Devolved"},
{"username":"mharper4r","text":"Front-line asynchronous conglomeration","roomname":"instruction set"},
{"username":"sgarrett4s","text":"Implemented interactive encoding","roomname":"User-centric"},
{"username":"jthompson4t","text":"Down-sized holistic benchmark","roomname":"Cross-group"},
{"username":"cmarshall4u","text":"User-centric didactic collaboration","roomname":"Face to face"},
{"username":"cdixon4v","text":"Synchronised asymmetric process improvement","roomname":"cohesive"},
{"username":"vcunningham4w","text":"Open-architected radical capacity","roomname":"superstructure"},
{"username":"bhayes4x","text":"Programmable transitional task-force","roomname":"moratorium"},
{"username":"lalvarez4y","text":"Reverse-engineered cohesive challenge","roomname":"Decentralized"},
{"username":"kjohnston4z","text":"Exclusive intangible firmware","roomname":"Seamless"},
{"username":"tlynch50","text":"Organized cohesive knowledge base","roomname":"superstructure"},
{"username":"rcampbell51","text":"Re-engineered optimal projection","roomname":"policy"},
{"username":"rpatterson52","text":"Inverse 3rd generation time-frame","roomname":"secondary"},
{"username":"kstephens53","text":"Centralized 24 hour emulation","roomname":"contextually-based"},
{"username":"ecampbell54","text":"Fundamental directional moderator","roomname":"Function-based"},
{"username":"pcampbell55","text":"Future-proofed empowering matrix","roomname":"Streamlined"},
{"username":"rwest56","text":"Balanced demand-driven knowledge user","roomname":"User-friendly"},
{"username":"amorris57","text":"User-friendly encompassing infrastructure","roomname":"benchmark"},
{"username":"wramos58","text":"Fully-configurable homogeneous local area network","roomname":"transitional"},
{"username":"jcastillo59","text":"Future-proofed solution-oriented core","roomname":"conglomeration"},
{"username":"jwest5a","text":"Distributed bifurcated flexibility","roomname":"responsive"},
{"username":"breynolds5b","text":"Diverse holistic complexity","roomname":"ability"},
{"username":"sallen5c","text":"Enterprise-wide non-volatile artificial intelligence","roomname":"De-engineered"},
{"username":"shawkins5d","text":"Networked web-enabled intranet","roomname":"open architecture"},
{"username":"mgordon5e","text":"Extended content-based approach","roomname":"radical"},
{"username":"bfoster5f","text":"Customer-focused hybrid complexity","roomname":"optimal"},
{"username":"jward5g","text":"Programmable transitional moderator","roomname":"extranet"},
{"username":"agilbert5h","text":"Networked exuding leverage","roomname":"scalable"},
{"username":"jcarter5i","text":"Automated methodical adapter","roomname":"Mandatory"},
{"username":"jmccoy5j","text":"Function-based content-based installation","roomname":"Up-sized"},
{"username":"arobertson5k","text":"Compatible holistic infrastructure","roomname":"architecture"},
{"username":"khamilton5l","text":"Exclusive 5th generation hardware","roomname":"Exclusive"},
{"username":"fromero5m","text":"Digitized actuating leverage","roomname":"Distributed"},
{"username":"jdavis5n","text":"Expanded reciprocal Graphical User Interface","roomname":"Grass-roots"},
{"username":"jdavis5o","text":"Upgradable well-modulated leverage","roomname":"empowering"},
{"username":"dhamilton5p","text":"Public-key even-keeled solution","roomname":"capability"},
{"username":"scrawford5q","text":"Synergized attitude-oriented portal","roomname":"model"},
{"username":"elynch5r","text":"Multi-lateral uniform pricing structure","roomname":"Realigned"},
{"username":"sramos5s","text":"Grass-roots 6th generation internet solution","roomname":"Profit-focused"},
{"username":"troberts5t","text":"Diverse human-resource Graphic Interface","roomname":"Upgradable"},
{"username":"lelliott5u","text":"Persistent explicit extranet","roomname":"matrix"},
{"username":"bwarren5v","text":"Customizable system-worthy Graphic Interface","roomname":"alliance"},
{"username":"jcarpenter5w","text":"Seamless scalable installation","roomname":"human-resource"},
{"username":"dking5x","text":"Business-focused scalable open system","roomname":"Vision-oriented"},
{"username":"rharrison5y","text":"Team-oriented systemic paradigm","roomname":"national"},
{"username":"dharrison5z","text":"Persistent discrete hierarchy","roomname":"monitoring"},
{"username":"jwelch60","text":"Reduced client-driven implementation","roomname":"impactful"},
{"username":"ctucker61","text":"Visionary secondary concept","roomname":"interface"},
{"username":"bbennett62","text":"Organic bandwidth-monitored task-force","roomname":"holistic"},
{"username":"cschmidt63","text":"Persistent 24/7 leverage","roomname":"didactic"},
{"username":"gmcdonald64","text":"Assimilated regional groupware","roomname":"holistic"},
{"username":"aarmstrong65","text":"Enterprise-wide attitude-oriented support","roomname":"leading edge"},
{"username":"adixon66","text":"Phased maximized throughput","roomname":"Optional"},
{"username":"ahamilton67","text":"Robust systematic orchestration","roomname":"Grass-roots"},
{"username":"tcastillo68","text":"Innovative next generation success","roomname":"Front-line"},
{"username":"jmyers69","text":"Team-oriented clear-thinking policy","roomname":"systemic"},
{"username":"slong6a","text":"Re-engineered attitude-oriented definition","roomname":"Pre-emptive"},
{"username":"cbennett6b","text":"Decentralized zero defect productivity","roomname":"upward-trending"},
{"username":"pgutierrez6c","text":"Object-based clear-thinking interface","roomname":"leverage"},
{"username":"dcunningham6d","text":"Public-key intangible access","roomname":"capability"},
{"username":"kwood6e","text":"Public-key methodical budgetary management","roomname":"flexibility"},
{"username":"ebell6f","text":"Sharable systemic capacity","roomname":"secondary"},
{"username":"shudson6g","text":"Re-contextualized user-facing middleware","roomname":"ability"},
{"username":"agreene6h","text":"Networked intermediate website","roomname":"toolset"},
{"username":"tgarza6i","text":"Phased context-sensitive challenge","roomname":"Self-enabling"},
{"username":"hhayes6j","text":"Assimilated uniform process improvement","roomname":"support"},
{"username":"plarson6k","text":"Horizontal methodical middleware","roomname":"Configurable"},
{"username":"mjenkins6l","text":"Down-sized web-enabled collaboration","roomname":"global"},
{"username":"jallen6m","text":"Re-engineered bi-directional toolset","roomname":"Persistent"},
{"username":"elawrence6n","text":"Distributed user-facing protocol","roomname":"exuding"},
{"username":"criley6o","text":"Automated high-level conglomeration","roomname":"Innovative"},
{"username":"mpeterson6p","text":"Reactive bottom-line portal","roomname":"needs-based"},
{"username":"jortiz6q","text":"Persevering 4th generation help-desk","roomname":"fault-tolerant"},
{"username":"asims6r","text":"Customer-focused impactful strategy","roomname":"attitude-oriented"},
{"username":"hmoreno6s","text":"Pre-emptive context-sensitive matrix","roomname":"systemic"},
{"username":"esmith6t","text":"Realigned multi-state access","roomname":"emulation"},
{"username":"cadams6u","text":"Focused bottom-line knowledge base","roomname":"logistical"},
{"username":"rbryant6v","text":"Managed 6th generation hierarchy","roomname":"benchmark"},
{"username":"rrogers6w","text":"Secured web-enabled hub","roomname":"orchestration"},
{"username":"ppatterson6x","text":"Enhanced secondary project","roomname":"process improvement"}];

var users = ["acassara2", "albreyb Owner", "alexitaylor", "Aly-Tamboura", "aprilablon", "ashwindollar", "aturangan", "aybkao", "blbrown13", "BOLT2612", "bosaio", "calebcordry", "carlolm", "chowryan", "codepadma", "Colbyduhon1", "dwgate", "EarthBoundMic", "ihe123", "JacksonRMC", "jakeholtz", "jaycoder1", "jcarapia", "jhogan4288", "jlb1982", "jontom11", "JotheElephant", "Kongfujonstew", "kvo180", "MahimaSrikanta", "maxbraz", "Mdiodoro", "mehsieh89", "michaelmurray6298", "mredwardkim", "Phongtlam", "r-i-c-h", "rmushtaq21", "sarahwilkinson Owner", "shakcho", "ShawnShiFeng", "snoopy223", "soo-park", "tariqwest", "techacolyte42", "ThalyaFlourishing", "Vaggelis-Sotiropoulos", "yzhang1994"];

var users8 = ['sifar', 'Tom', 'Oliver', 'anonymous', 'Burrito'];

function generateRandomMessages(n) {

  for (var i = 0; i < n; i++) {
    var msg = randomMessages[Math.floor(Math.random()*randomMessages.length)];
    msg.username = users[Math.floor(Math.random() * users.length)];
    msg.roomname = 'lobby';
    sendMessage(msg);
  }
};



function sendMessages(string) {
  var msg = {
    username: string,
    text: string,
    roomname: string
  }
  sendMessage(msg);
};