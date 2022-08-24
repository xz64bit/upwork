//get DOM element
let notifyMe=document.getElementById('submit');
let mail=document.getElementById('email');
let letter=document.getElementById('letter');
let rocketHead=document.getElementById('head');
let rocketSmoke=document.getElementById('rocket-smoke');
let fullRocket=document.getElementById('rocket');
let Rectangle37=document.getElementById('Rectangle37');
let Rectangle36=document.getElementById('Rectangle36');
let Polygon1=document.getElementById('Polygon1');
let Polygon2=document.getElementById('Polygon2');
let errorMessage=document.getElementById('error-message');
// let smoke1=document.getElementById('smoke1');
// let smoke2=document.getElementById('smoke2');
// let smoke3=document.getElementById('smoke3');
// let smoke4=document.getElementById('smoke4');
// let smokeRect=document.getElementById('smoke-rect');
let capital=document.getElementById('capital');
let zeusSvg=document.getElementById('zeus-svg');
let textToHide=document.getElementsByClassName('text-to-hide')[0];
let zeusContainer=document.getElementsByClassName('zeus-container')[0];
let textPart=document.getElementsByClassName('text-part')[0];
var Form=document.getElementsByClassName('form')[0];

function animation(){
    notifyMe.classList.add('notify')
    mail.classList.add('mail')
    notifyMe.addEventListener('animationend',()=>{
        // notifyMe.style.='none'
    })
    mail.addEventListener('animationend',()=>{
        mail.style.opacity='0'
        letter.style.opacity='1'
        setTimeout(() => {
            letter.classList.add('letter-A')
            rocketHead.classList.add('rocket-A')
        }, 1000);
    })
    rocketHead.addEventListener('animationend',()=>{
        letter.style.display='none'
        // rocketSmoke.style.opacity='1'
        fullRocket.classList.add('full-rocket-A')
        Polygon1.classList.add('polygon1')
        Polygon2.classList.add('polygon2')
        // smoke1.classList.add('smoke1')
        // smoke2.classList.add('smoke2')
        // smoke3.classList.add('smoke3')
        // smoke4.classList.add('smoke4')
        // smokeRect.classList.add('smokeRect-A')
        Rectangle36.classList.add('rectangle36-A')
        Rectangle37.classList.add('rectangle37-A')
        capital.classList.add('logo-text-A')
        zeusContainer.classList.add('zeus-container-logo-A')
        zeusSvg.classList.add('zeus-svg-logo-A')
        capital.addEventListener('animationstart',()=>{
            textToHide.style.opacity='0'
        })
    })
}
notifyMe.addEventListener('click',(e)=>{
    e.preventDefault();
    let text;
    if(Form.checkValidity()){
        errorMessage.style.visibility = "hidden";
        text = "";
        animation();
    } else{
        text = "<i class='fa-solid fa-triangle-exclamation'></i> Enter Valid Email Address";
        errorMessage.style.visibility = "visible";
        setTimeout(() => {
            errorMessage.style.visibility = "hidden";
        }, 2000);
    }
    document.getElementById("error-message").innerHTML = text;
});