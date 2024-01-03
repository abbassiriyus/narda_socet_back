
var toshlar = [{
    id: 1,
    position: 5,
    name: 'oq'
},
{
    id: 2,
    position: 1,
    name: 'oq'
}, {
    id: 3,
    position: 1,
    name: 'oq'
}, {
    id: 4,
    position: 1,
    name: 'oq'
},
{
    id: 5,
    position: 1,
    name: 'oq'
}, {
    id: 6,
    position: 1,
    name: 'oq'
}, {
    id: 7,
    position: 1,
    name: 'oq'
}, {
    id: 8,
    position: 1,
    name: 'oq'
}, {
    id: 9,
    position: 19,
    name: 'oq'
},
{
    id: 10,
    position: 1,
    name: 'oq'
}, {
    id: 11,
    position: 1,
    name: 'oq'
}, {
    id: 12,
    position: 1,
    name: 'oq'
},
{
    id: 13,
    position: 12,
    name: 'oq'
}, {
    id: 14,
    position: 1,
    name: 'oq'
}, {
    id: 15,
    position: 1,
    name: 'oq'
}, {
    id: 1,
    position: 13,
    name: 'qora'
},
{
    id: 2,
    position: 6,
    name: 'qora'
}, {
    id: 3,
    position: 13,
    name: 'qora'
}, {
    id: 4,
    position: 13,
    name: 'qora'
},
{
    id: 5,
    position: 13,
    name: 'qora'
}, {
    id: 6,
    position: 13,
    name: 'qora'
}, {
    position: 13,
    name: 'qora'
}, {
    id: 8,
    position: 13,
    name: 'qora'
}, {
    id: 9,
    position: 16,
    name: 'qora'
},
{
    id: 10,
    position: 13,
    id: 7,
    name: 'qora'
}, {
    id: 11,
    position: 13,
    name: 'qora'
}, {
    id: 12,
    position: 13,
    name: 'qora'
},
{
    id: 13,
    position: 13,
    name: 'qora'
}, {
    id: 14,
    position: 13,
    name: 'qora'
}, {
    id: 15,
    position: 13,
    name: 'qora'
}]



function positiom(key, d) {
    switch (key) {
        case 1:
            if (d == "oq") {
                document.querySelectorAll('.circle')[12].innerHTML += `<div class="img">
                    <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                </div>`
            } else {
                document.querySelectorAll('.circle')[12].innerHTML += `<div class="img">
             <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
         </div>`
            }
            break;
        case 2:
            if (d == "oq") {
                document.querySelectorAll('.circle')[13].innerHTML += `<div class="img">
                <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
            </div>`
            } else {
                document.querySelectorAll('.circle')[13].innerHTML += `<div class="img">
         <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
     </div>`
            }

            break;
        case 3:
            if (d == "oq") {
                document.querySelectorAll('.circle')[14].innerHTML += `<div class="img">
                    <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                </div>`
            } else {
                document.querySelectorAll('.circle')[14].innerHTML += `<div class="img">
             <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
         </div>`
            }
            break;
        case 4:
            if (d == "oq") {
                document.querySelectorAll('.circle')[15].innerHTML += `<div class="img">
                    <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                </div>`
            } else {
                document.querySelectorAll('.circle')[15].innerHTML += `<div class="img">
             <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
         </div>`
            }
            break;
        case 5:
            if (d == "oq") {
                document.querySelectorAll('.circle')[16].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[16].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 6:
            if (d == "oq") {
                document.querySelectorAll('.circle')[17].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[17].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 7:
            if (d == "oq") {
                document.querySelectorAll('.circle')[18].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[18].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 8:
            if (d == "oq") {
                document.querySelectorAll('.circle')[19].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[19].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 9:
            if (d == "oq") {
                document.querySelectorAll('.circle')[20].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-20.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[20].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 10:
            if (d == "oq") {
                document.querySelectorAll[21]('.circle').innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll[21]('.circle').innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 11:
            if (d == "oq") {
                document.querySelectorAll('.circle')[22].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[22].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 12:
            if (d == "oq") {
                document.querySelectorAll('.circle')[23].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[23].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 13:
            if (d == "oq") {
                document.querySelectorAll('.circle')[11].innerHTML += `<div class="img">
                    <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                </div>`
            } else {
                document.querySelectorAll('.circle')[11].innerHTML += `<div class="img">
             <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
         </div>`
            }
            break;
        case 14:
            if (d == "oq") {
                document.querySelectorAl('.circle')[10].innerHTML += `<div class="img">
                <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
            </div>`
            } else {
                document.querySelectorAll('.circle')[10].innerHTML += `<div class="img">
         <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
     </div>`
            }

            break;
        case 15:
            if (d == "oq") {
                document.querySelectorAll('.circle')[9].innerHTML += `<div class="img">
                    <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                </div>`
            } else {
                document.querySelectorAll('.circle')[9].innerHTML += `<div class="img">
             <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
         </div>`
            }
            break;
        case 16:
            if (d == "oq") {
                document.querySelectorAll('.circle')[8].innerHTML += `<div class="img">
                    <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                </div>`
            } else {
                document.querySelectorAll('.circle')[8].innerHTML += `<div class="img">
             <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
         </div>`
            }
            break;
        case 17:
            if (d == "oq") {
                document.querySelectorAll('.circle')[7].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[7].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 18:
            if (d == "oq") {
                document.querySelectorAll('.circle')[6].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[6].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 19:
            if (d == "oq") {
                document.querySelectorAll('.circle')[5].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[5].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 20:
            if (d == "oq") {
                document.querySelectorAll[4]('.circle').innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[4].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 21:
            if (d == "oq") {
                document.querySelectorAll('.circle')[3].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-20.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[3].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 22:
            if (d == "oq") {
                document.querySelectorAll('.circle')[2].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[2].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 23:
            if (d == "oq") {
                document.querySelectorAll('.circle')[1].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[1].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        case 24:
            if (d == "oq") {
                document.querySelectorAll('.circle')[0].innerHTML += `<div class="img">
                        <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
                    </div>`
            } else {
                document.querySelectorAll('.circle')[0].innerHTML += `<div class="img">
                 <img src="./img/photo_2023-12-21_16-55-17.jpg" alt="">
             </div>`
            }
            break;
        default:
            break;
    }
}

var image
for (let i = 0; i < toshlar.length; i++) {
    //   positiom(position[i].position,position[i].name)
    if (toshlar[i].name == "oq") {
        image = "./img/Дизайн_без_названия__1_-removebg-preview.png"
    } else {
        image = "./img/Дизайн_без_названия-removebg-preview.png"
    }

    if (toshlar[i].position <= 12) {
        document.querySelectorAll('.circle')[12 - toshlar[i].position].innerHTML += `
<img draggable="true" onclick="YurClick(event,'oq',${toshlar[i].position})" onmouseenter="yur1(${toshlar[i].position},'oq')" ondragstart="dragStart(event,${i})" src='${image}' class="dragtarget" id='d${i}' alt="">
`
    } else {
        document.querySelectorAll('.circle')[toshlar[i].position - 1].innerHTML += `
<img draggable="true" onclick="YurClick(event,'qora',${toshlar[i].position})" onmouseenter="yur1(${toshlar[i].position},'qora')" ondragstart="dragStart(event,${i})" src='${image}' class="dragtarget" id='d${i}' alt="">`
    }
}

function dragStart(event) {
    console.log(event,"helo");
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event, key) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");

    if (key != 12 && key != 11) {
        document.querySelectorAll(".circle")[key].appendChild(document.getElementById(data));
    }
}



var tush = [1, 2, 3]
var tush22 = [5, 10, 15, 20]



function yur(positiom,tosh,tush2) {
    if(tosh=="oq"){
        for (let i = 0; i < tush2.length; i++) {
        if (tush2[i] + positiom <= 12) {
            document.querySelectorAll(".circle")[12 - (tush2[i] + positiom)].style = "background:red;"
            if (tush2.length == i + 1) {
                document.querySelectorAll(".circle")[12 - (tush2[i] + positiom)].style = "background:yellow;"
            }

        } else {
             document.querySelectorAll(".circle")[tush2[i] + positiom - 1].style = "background:red;"
                if (tush2.length == i + 1) {
                    document.querySelectorAll(".circle")[tush2[i] + positiom - 1].style = "background:yellow;"
                }

        }
        }
    }else{
  for (let i = 0; i < tush2.length; i++) {
            if (tush2[i] + positiom <= 12) {
                document.querySelectorAll(".circle")[12 - (tush2[i] + positiom)].style = "background:red;"
                if (tush2.length == i + 1) {
                    document.querySelectorAll(".circle")[12 - (tush2[i] + positiom)].style = "background:yellow;"
                }
    
            } else {
                if (tush2[i] + positiom > 23) {
                    document.querySelectorAll(".circle")[12 - (tush2[i] + positiom - 24)].style = "background:red;"
                    if (tush2.length == i + 1) {
                        document.querySelectorAll(".circle")[12 - (tush2[i] + positiom - 24)].style = "background:yellow;"
                    }
                } else {
                    document.querySelectorAll(".circle")[tush2[i] + positiom - 1].style = "background:red;"
                    if (tush2.length == i + 1) {
                        document.querySelectorAll(".circle")[tush2[i] + positiom - 1].style = "background:yellow;"
                    }
                }
            }
        }
    }
    
}

function yur1(position,tosh) {
    var tushtosh=tush22
    if(tosh=="oq"){
    for (let i = 0; i < toshlar.length; i++) {
        for (let j = 0; j < tushtosh.length; j++) {
            if(tushtosh[j]==toshlar[i].position-1){
                console.log(toshlar[i].name,"helloZor");
                  if(toshlar[i].name!="oq"){
                    tushtosh.splice(j,1)
                  }
            }
        }
    } 
    
    }else{
        for (let i = 0; i < toshlar.length; i++) {
            for (let j = 0; j < tushtosh.length; j++) {
                if(tushtosh[j]==toshlar[i].position-1){
                      if(toshlar[i].name!="qora"){
                          tushtosh.splice(j,1)
                      }
                }
            }
        } 
    }
    var a=tushtosh   
    console.log(tushtosh,"hello");
    yur(position,tosh,a)
}


function YurClick(event,tosh,positiom){
    if(tosh=='oq'){
        var a=tush22[tush22.length-1]
        document.querySelectorAll(".circle")[a].appendChild(document.getElementById(event.target.id)) 
    }else{
        var a=12 - (tush22[tush22.length-1] + positiom - 24)
        document.querySelectorAll(".circle")[a].appendChild(document.getElementById(event.target.id)) 
    }
}














