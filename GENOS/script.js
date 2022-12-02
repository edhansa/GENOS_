var score = 0;
var quest = 1;
let tab_reponse = ['Bonne Réponse</br><i>"Les rapports non protegés sont les meilleurs moyen de contracter une MST ou IST"</i></br><a style="color:blue" target="blank" href="https://www.sida-info-service.org/les-ist-ne-sont-pas-a-negliger/">Info +</a>',
'Mauvaise Réponse</br><i>"Les rapports non protegés sont les meilleurs moyen de contracter une MST ou IST"</i></br><a style="color:blue" target="blank" href="https://www.sida-info-service.org/les-ist-ne-sont-pas-a-negliger/">Info +</a>',
'Mauvaise Réponse Evidemment</br><i>C est une blague</i>"Les rapports non protegés sont les meilleurs moyen de contracter une MST ou IST"</br><a style="color:blue" target="blank" href="https://www.sida-info-service.org/les-ist-ne-sont-pas-a-negliger/">Info +</a>',
'Mauvaise Réponse </br><i>C\'est pratique mais pas confortable ni sûre</i>"Les rapports non protegés sont les meilleurs moyen de contracter une MST ou IST"</br><a style="color:blue" target="blank" href="https://www.sida-info-service.org/les-ist-ne-sont-pas-a-negliger/">Info +</a>'
];

let tab_reponse2 = ['Bonne Réponse</br><i>"Les rapports non protegés sont les meilleurs moyen de contracter une MST ou IST"</i></br><a style="color:blue" target="blank" href="https://www.sida-info-service.org/les-ist-ne-sont-pas-a-negliger/">Info +</a>','Mauvaise Réponse</br><i>Chute du mur de Berlin</i>','Non c\'était bien en juin','Peut\'être'];

let tab_proposition2 = ['<div class="reponse">5 juin 1981</div>','<div class="reponse">9 Novembre 1989</div>','<div class="reponse">Janvier pour changer</div>','<div class="reponse">Mardi peut\'être</div>'];

let tab_proposition =['<div class="reponse">Je reste prudent et je décline</div>',
'<div class="reponse">J\'accepte le plaisir avant tout</div>','<div class="reponse"> Si elle voit l\'engin et prend peur</div>','<div class="reponse">Je lave un ancien préservatif utilisé et le réutilise</div>'
];
setTimeout(() => {
    document.getElementById('nv').style.visibility = "hidden";
  }, "2000");

function bon(){
  var div = document.getElementById('sms');
      div.innerHTML = tab_reponse[0];
      document.getElementById('disparait').innerHTML=tab_proposition[0];
      document.getElementById('disparait').style.color = "green";
      Score();
      question();
}

function mauvais1(){
    var div = document.getElementById('sms');
        div.innerHTML = tab_reponse[1];
        document.getElementById('disparait').innerHTML=tab_proposition[1];
        document.getElementById('disparait').style.color = "red";
        question();
  }
function mauvais2(){
    var div = document.getElementById('sms');
        div.innerHTML = tab_reponse[2];
        document.getElementById('disparait').innerHTML=tab_proposition[2];
        document.getElementById('disparait').style.color = "red";
        question();
}
function mauvais3(){
    var div = document.getElementById('sms');
        div.innerHTML = tab_reponse[3];
        document.getElementById('disparait').innerHTML=tab_proposition[3];
        document.getElementById('disparait').style.color = "red";
        question();
}

  function Score() {
    score = score + 1;
    document.getElementById('score').innerHTML = '<label>'+score+'</label>';
}
function question(){
    //quest = quest + 1;
    //document.getElementById('question').innerHTML = '<label>'+quest+'</label>';
    document.getElementById('next').style.visibility = "visible";
}

function suivant(){
    document.getElementById('next').style.visibility = "hidden";
    window.location.href = "page2.html";
}

function bon2(){
    var div = document.getElementById('sms');
        div.innerHTML = tab_reponse2[0];
        document.getElementById('disparait').innerHTML=tab_proposition2[0];
        document.getElementById('disparait').style.color = "green";
        Score();
        question();
  }

function mauvais4(){
    var div = document.getElementById('sms');
        div.innerHTML = tab_reponse2[1];
        document.getElementById('disparait').innerHTML=tab_proposition2[1];
        document.getElementById('disparait').style.color = "red";
        question();
  }
function mauvais5(){
    var div = document.getElementById('sms');
        div.innerHTML = tab_reponse2[2];
        document.getElementById('disparait').innerHTML=tab_proposition2[2];
        document.getElementById('disparait').style.color = "red";
        question();
}
function mauvais6(){
    var div = document.getElementById('sms');
        div.innerHTML = tab_reponse2[3];
        document.getElementById('disparait').innerHTML=tab_proposition2[3];
        document.getElementById('disparait').style.color = "red";
        question();
}
