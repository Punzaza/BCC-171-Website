const container=document.querySelector('html');const body=document.querySelector('body');var previous='.wallpaper-wrapper';container.scrollLeft=0;container.scrollTop=0;let targetScrollLeft=container.scrollLeft;let currentScrollLeft=container.scrollLeft;const isMobile=/iPhone|iPad|iPod|Android|CriOS|FxiOS|Macintosh/i.test(navigator.userAgent);const startScroll=()=>{if(isMobile===false){const smoothScroll=()=>{currentScrollLeft+=(targetScrollLeft-currentScrollLeft)*(0.075);currentScrollLeft=Math.max(0,Math.min(currentScrollLeft,container.scrollWidth-container.clientWidth));if(window.innerWidth>600){container.scrollLeft=currentScrollLeft;}
requestAnimationFrame(smoothScroll);};smoothScroll();container.addEventListener('wheel',(e)=>{targetScrollLeft+=e.deltaY*2;targetScrollLeft=Math.max(0,Math.min(targetScrollLeft,container.scrollWidth-container.clientWidth));});}}
const skipButton=document.getElementById('skip');const skipToSection=document.getElementById('countdown-wrapper');skipButton.addEventListener('click',function(){if(window.innerWidth<=600){skipToSection.scrollIntoView({behavior:"smooth"});}
else if(window.innerWidth>600&&isMobile==true){skipToSection.scrollIntoView({behavior:"smooth"});}
else{const elementRect=skipToSection.getBoundingClientRect();const elementPosition=elementRect.left-container.getBoundingClientRect().left;targetScrollLeft=elementPosition;}});const parallaxScrollX=(classNamesX,speedsX,topyX,stopElementsX,stopThresholdsX,resumeThresholdsX)=>{window.addEventListener('scroll',()=>{const bodyWidth=document.body.offsetWidth;if(window.innerWidth>=601){classNamesX.forEach((className,index)=>{const elements=document.querySelectorAll(`${className}`);elements.forEach((element)=>{const update=()=>{const xPos=-(window.pageXOffset / speedsX[index]);const stopIndex=stopElementsX.indexOf(className);const topY=classNamesX.indexOf(className);if(stopIndex!==-1){const stopPosition=(window.innerWidth / 2)+(bodyWidth*stopThresholdsX[stopIndex]/ 100);const resumePosition=(window.innerWidth / 2)+(bodyWidth*resumeThresholdsX[stopIndex]/ 100);const resumeXPos=-((window.pageXOffset-(resumePosition-stopPosition))/ speedsX[index]);if(window.pageXOffset>resumePosition){element.style.transform=`translate3d(${resumeXPos}px,${topyX[topY]}%,0)`;}
else if(window.pageXOffset>=stopPosition&&window.pageXOffset<=resumePosition){return;}
else{element.style.transform=`translate3d(${xPos}px,${topyX[topY]}%,0)`;}}
else{element.style.transform=`translate3d(${xPos}px,${topyX[topY]}%,0)`;}};if(isMobile){requestAnimationFrame(update);}
update();});});}
else{classNamesX.forEach((className,index)=>{const elements=document.querySelectorAll(`${className}`);elements.forEach((element)=>{element.style.transform='translate3D(0px, 0px, 0px)';element.style.transform='translate(-50%, -50%)';})})}});};const classNamesX=['.dreamscape-logo-front','.dreamscape-logo-back','#dreamscape-name','.wallpaper-phone','.wallpaper-ipad','.wallpaper-laptop','.dreamscape-phone','.dreamscape-mac','#dreamscape-link','.dream-desc'];const speedsX=[0.6,0.6,0.7,1.5,1.3,1.15,0.81,1,0.6,0.6];const topyX=[-50,-50,0,-50,-50,-50,-50,-50,-50,50];const stopElementsX=[];const stopThresholdsX=[];const resumeThresholdsX=[];const souvenirs=document.querySelectorAll('.souvenirs');function rotate(){const degreeX=window.pageXOffset*0.1;const degreeY=window.pageYOffset*0.1;const dreamLogo=document.getElementById('dreamscape-back');const souvenir=document.getElementById('souvenir');dreamLogo.style.rotate=`-${degreeX+degreeY}deg`;souvenir.style.rotate=`${degreeX+degreeY}deg`;souvenirs.forEach(souvenir=>{souvenir.style.rotate=`-${degreeX+degreeY}deg`;});}
document.onreadystatechange=()=>{window.addEventListener('scroll',()=>{rotate();})
const scroll=document.querySelector('.icon-scroll');const end=document.querySelector('.end-container');parallaxScrollX(classNamesX,speedsX,topyX,stopElementsX,stopThresholdsX,resumeThresholdsX);if(!isMobile){startScroll();if(window.innerWidth>600){}
else{const back=document.createElement('div');back.classList.add('back');back.innerHTML='<img alt="back" src="/static/img/main/back.svg">';back.style.rotate='90deg';back.style.bottom='';back.style.top='20px';end.appendChild(back);back.addEventListener('click',()=>{const backContainer=document.querySelector(previous);backContainer.scrollIntoView({behavior:'smooth',block:'center'});})}}
else if(window.innerWidth>600){const back=document.createElement('div');back.classList.add('back');scroll.style.rotate='90deg';back.innerHTML='<img alt="back" src="/static/img/main/back.svg">';back.style.bottom='20px';back.style.top='';end.appendChild(back);back.addEventListener('click',()=>{const backContainer=document.querySelector(previous);backContainer.scrollIntoView({behavior:'smooth',block:'center'});})}
else{const back=document.createElement('div');back.classList.add('back');scroll.style.rotate='180deg';back.innerHTML='<img alt="back" src="/static/img/main/back.svg">';back.style.rotate='90deg';back.style.bottom='';back.style.top='20px';end.appendChild(back);back.addEventListener('click',()=>{const backContainer=document.querySelector(previous);backContainer.scrollIntoView({behavior:'smooth',block:'center'});})}
setTimeout(()=>{fadein();},1000);}
window.addEventListener('resize',()=>{const scroll=document.querySelector('.icon-scroll');const back=document.querySelector('.back');const end=document.querySelector('.end-container');if(!isMobile){if(window.innerWidth>600){if(back){end.removeChild(back);}}
else{if(!back){const back=document.createElement('div');back.classList.add('back');back.innerHTML='<img alt="back" src="/static/img/main/back.svg">';back.style.rotate='90deg';back.style.bottom='';back.style.top='20px';end.appendChild(back);back.addEventListener('click',()=>{const backContainer=document.querySelector(previous);backContainer.scrollIntoView({behavior:'smooth',block:'center'});})}}}
else if(window.innerWidth>600){scroll.style.rotate='90deg';back.style.rotate='0deg';back.style.bottom='20px';back.style.top='';}
else{scroll.style.rotate='180deg';back.style.rotate='90deg';back.style.bottom='';back.style.top='20px';}})
const fadein=()=>{const time=document.querySelector('.time');const startYear=1853;const endYear=2023;let numbers="";for(let i=startYear;i<=endYear;i++){numbers+=i+"<br>";}
document.getElementById("year").innerHTML=numbers;time.classList.add('show');fadeup([".year p",".start",".dash"],[{startPx:35,endPx:0,millisecs:1000},{startPx:35,endPx:0,millisecs:1000},{startPx:35,endPx:0,millisecs:1000},],function(){setTimeout(()=>{countdown();},300)});}
let counting=false;const countdown=()=>{counting=true;const container=document.querySelector(".year p");const rect=container.getBoundingClientRect();const bottom=rect.height;fadeup([".year p"],[{startPx:0,endPx:-bottom+52,millisecs:3500,},],function(){counting=false;setTimeout(()=>{section1Clear();},500)});}
let condition=true;let clear=false;const section1Clear=()=>{const container=document.querySelector(".year p");const rect=container.getBoundingClientRect();const bottom=rect.height;fadeup([".year p",".start",".dash",".logo-171 img",".icon-scroll"],[{startPx:-bottom+52,endPx:-bottom+2,millisecs:1000,},{startPx:0,endPx:-50,millisecs:1000,},{startPx:0,endPx:-50,millisecs:1000,},{startPx:60,endPx:0,millisecs:1500,},{startPx:70,endPx:0,millisecs:1500,},],function(){if(clear===false){cleared();document.querySelector(".year").remove();document.querySelector(".text").remove();}});}
const cleared=()=>{clear=true;}
function filterBox(containerNames){containerNames.forEach((containerName)=>{const container=document.querySelector(`.${containerName}`);const inner=container.querySelector('.inner');const containerRect=container.getBoundingClientRect();const containerCenter=containerRect.left+containerRect.width / 2;const screenWidth=window.innerWidth||document.documentElement.clientWidth;if(containerCenter>=0&&containerCenter<=screenWidth){setTimeout(function(){inner.style.transform="rotateY(180deg)";},750);}else{inner.style.transition="transform 0.6s";inner.style.transform="rotateY(0deg)";}});}
window.addEventListener('scroll',()=>{const containerNames=['box1','box2','box3'];filterBox(containerNames);});function headerAnimationX(){var body=document.body;var bodyWidth=body.offsetWidth;var scrollWidth=body.scrollWidth;var scrollPosition=window.pageXOffset||body.scrollLeft||document.documentElement.scrollLeft;var bodyHeight=body.offsetHeight;var scrollHeight=body.scrollHeight;var scrollPosition2=window.pageYOffset||body.scrollTop||document.documentElement.scrollTop;const header=document.getElementById('header');const hand=document.getElementById('hand');const hand2=document.getElementById('hand2');const head=document.getElementById('chongkoHead');const prepare=document.getElementById('prepare');const prepare2=document.getElementById('prepare2');const prepare3=document.getElementById('prepare3');const prepare4=document.getElementById('prepare4');const prepare5=document.getElementById('prepare5');const prepare6=document.getElementById('prepare6');const prepare7=document.getElementById('prepare7');const prepare8=document.getElementById('prepare8');const didYouKnow=document.getElementById('did-you-know');const didYouKnow2=document.getElementById('did-you-know2');const didYouKnow3=document.getElementById('did-you-know3');const paperplane=document.getElementById('header-paperplane');const children=document.querySelectorAll('.headerChild');var scrollPercentage=(scrollPosition+window.innerWidth)/ scrollWidth*100;var scrollPercentage2=(scrollPosition2+window.innerHeight)/ scrollHeight*100;function easeInOutCubic(t){return t<0.5?4*t*t*t:1+Math.pow(-2*t+2,3)/ 2;}
function easeInOutCubic2(t){return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/ 2;}
function easeInOutCubicFlipped(t){return 1-easeInOutCubic(1-t);}
function easeInOutCubicFlipped2(t){return 1-easeInOutCubic2(1-t);}
var scrollOffset=scrollPercentage-900;var scrollOffset2=scrollPercentage-850;var scrollOffset3=scrollPercentage-1040;var scrollOffset4=scrollPercentage-1090;var easingValue=easeInOutCubicFlipped(Math.max(0,Math.min(1,scrollOffset / 100)));var easingValue2=easeInOutCubicFlipped2(Math.max(0,Math.min(1,scrollOffset2 / 100)));var easingValue3=easeInOutCubicFlipped2(Math.max(0,Math.min(1,scrollOffset3 / 100)));var easingValue4=easeInOutCubicFlipped(Math.max(0,Math.min(1,scrollOffset4 / 100)));if(scrollPercentage>=105&&scrollPercentage<=200){hand.style.top=`${130-((scrollPercentage-125)*1.05)}vh`;}
else if(scrollPercentage<=105&&window.innerWidth>600){hand.style.top="140vh";hand.style.rotate="0deg";}
else if(scrollPercentage>=200&&scrollPercentage<=290&&window.innerWidth>600){hand.style.top="55vh";}
else if(scrollPercentage>=380&&window.innerWidth>600){hand.style.top="322vh";hand.style.rotate="-75.5deg";}
if(scrollPercentage2>=140&&scrollPercentage2<=190){hand.style.top=`${130-((scrollPercentage2-140)*1.1)}vh`;}
else if(scrollPercentage2<=140&&window.innerWidth<=600){hand.style.top="140vh";hand.style.rotate="0deg";}
else if(scrollPercentage2>=191&&scrollPercentage2<=250&&window.innerWidth<=600){hand.style.top="75vh";}
else if(scrollPercentage2>=341&&window.innerWidth<=600){hand.style.top="342vh";hand.style.rotate="-75.5deg";}
if(scrollPercentage>=230&&scrollPercentage<=255){hand.style.rotate=`${230-scrollPercentage}deg`;}
if(scrollPercentage2>=190&&scrollPercentage2<=215){hand.style.rotate=`${190-scrollPercentage2}deg`;}
if(scrollPercentage>=256&&scrollPercentage<=270){hand.style.rotate=`${-25+(scrollPercentage-256)}deg`;}
if(scrollPercentage2>=216&&scrollPercentage2<=230){hand.style.rotate=`${-25+(scrollPercentage2-216)}deg`;}
if(scrollPercentage>=270&&scrollPercentage<=290){hand.style.rotate=`${-11+(270-scrollPercentage)}deg`;}
if(scrollPercentage2>=231&&scrollPercentage2<=251){hand.style.rotate=`${-11+(231-scrollPercentage2)}deg`;}
if(scrollPercentage>=291&&scrollPercentage<=380){hand.style.top=`${55+((scrollPercentage-291)*3)}vh`;hand.style.rotate=`${-31-((scrollPercentage-291)*0.5)}deg`;}
if(scrollPercentage2>=251&&scrollPercentage2<=340){hand.style.top=`${75+((scrollPercentage2-251)*3)}vh`;hand.style.rotate=`${-31-((scrollPercentage2-251)*0.5)}deg`;}
if(scrollPercentage>=275&&scrollPercentage<=350){didYouKnow.style.top=`${130-((scrollPercentage-275)*1.05)}vh`;}
else if(scrollPercentage<275&&window.innerWidth>600){didYouKnow.style.top="130vh";didYouKnow.style.left="50%";}
else if(scrollPercentage>425&&scrollPercentage<480&&window.innerWidth>600){didYouKnow.style.top="43.85vh";didYouKnow.style.left="31.5%";}
else if(scrollPercentage>550&&window.innerWidth>600){didYouKnow.style.top="43.85vh";didYouKnow.style.left="-38.5%";}
if(scrollPercentage2>=230&&scrollPercentage2<=320){didYouKnow.style.top=`${130-((scrollPercentage2-230)*1.05)}vh`;}
else if(scrollPercentage2<230&&window.innerWidth<=600){didYouKnow.style.top="130vh";didYouKnow.style.left="49.1892%";}
else if(scrollPercentage2>395&&scrollPercentage2<450&&window.innerWidth<=600){didYouKnow.style.top="29.1vh";didYouKnow.style.left="31.5%";}
else if(scrollPercentage2>520&&window.innerWidth<=600){didYouKnow.style.top="29.1vh";didYouKnow.style.left="-38.5%";}
if(scrollPercentage>=340&&scrollPercentage<=425){didYouKnow2.style.top=`${130-((scrollPercentage-351)*1.1)}vh`;}
else if(scrollPercentage<340&&window.innerWidth>600){didYouKnow2.style.top="140vh";}
else if(scrollPercentage>425&&scrollPercentage<481&&window.innerWidth>600){didYouKnow2.style.top="48.6vh";}
else if(scrollPercentage>550&&window.innerWidth>600){didYouKnow2.style.left="145%";}
if(scrollPercentage2>=310&&scrollPercentage2<=400){didYouKnow2.style.top=`${130-((scrollPercentage2-310)*1.1)}vh`;}
else if(scrollPercentage2<310&&window.innerWidth<=600){didYouKnow2.style.top="130vh";}
else if(scrollPercentage2>400&&scrollPercentage2<450&&window.innerWidth<=600){didYouKnow2.style.top="31vh";}
else if(scrollPercentage2>520&&window.innerWidth<=600){didYouKnow2.style.left="125%";}
if(scrollPercentage>=351&&scrollPercentage<=425){didYouKnow.style.left=`${50-((scrollPercentage-351)*0.25)}%`;didYouKnow.style.top=`${51.25-((scrollPercentage-351)*0.1)}vh`;didYouKnow.style.transform=`perspective(2000px)translate3d(-50%,-50%,${-((scrollPercentage-351)*5)}px)`;}
if(scrollPercentage2>=321&&scrollPercentage2<=395){didYouKnow.style.left=`${50-((scrollPercentage2-321)*0.25)}%`;didYouKnow.style.top=`${36.5-((scrollPercentage2-321)*0.1)}vh`;didYouKnow.style.transform=`perspective(2000px)translate3d(-50%,-50%,${-((scrollPercentage2-351)*5)}px)`;}
if(scrollPercentage>=480&&scrollPercentage<=550){didYouKnow.style.left=`${31.5-((scrollPercentage-480))}%`;didYouKnow2.style.left=`${75+((scrollPercentage-480))}%`;}
if(scrollPercentage2>=450&&scrollPercentage2<=520){didYouKnow.style.left=`${31.5-((scrollPercentage2-450))}%`;didYouKnow2.style.left=`${75+((scrollPercentage2-450))}%`;}
if(scrollPercentage>=500&&scrollPercentage<=525){hand2.style.bottom=`${-28+((scrollPercentage-500))}vh`;}
else if(scrollPercentage<500&&window.innerWidth>600){hand2.style.bottom="-28vh";}
else if(scrollPercentage>525&&scrollPercentage<560&&window.innerWidth>600){hand2.style.bottom="-3vh";}
else if(scrollPercentage>575&&window.innerWidth>600){hand2.style.bottom="-18vh";}
if(scrollPercentage2>=470&&scrollPercentage2<=495){hand2.style.bottom=`${-28+((scrollPercentage2-470))}vh`;}
else if(scrollPercentage2<470&&window.innerWidth<=600){hand2.style.bottom="-28vh";}
else if(scrollPercentage2>495&&scrollPercentage2<580&&window.innerWidth<=600){hand2.style.bottom="-3vh";}
else if(scrollPercentage2>595&&window.innerWidth<=600){hand2.style.bottom="-18vh";}
if(scrollPercentage>=520&&scrollPercentage<=530){head.style.top=`${150-((scrollPercentage-520)*8.55)}vh`;}
else if(scrollPercentage<520&&window.innerWidth>600){head.style.top="150vh";}
else if(scrollPercentage>540&&scrollPercentage<550&&window.innerWidth>600){head.style.top="69vh";}
else if(scrollPercentage>575&&window.innerWidth>600){head.style.top="192.75vh";}
if(scrollPercentage2>=490&&scrollPercentage2<=498){head.style.top=`${150-((scrollPercentage2-490)*8.55)}vh`;}
else if(scrollPercentage2<490&&window.innerWidth<=600){head.style.top="150vh";}
else if(scrollPercentage2>510&&scrollPercentage2<570&&window.innerWidth<=600){head.style.top="86.1vh";}
else if(scrollPercentage2>595&&window.innerWidth<=600){head.style.top="209.85vh";}
if(scrollPercentage>=531&&scrollPercentage<=540){head.style.top=`${64.5+((scrollPercentage-531)*0.5)}vh`;}
if(scrollPercentage2>=501&&scrollPercentage2<=510){head.style.top=`${81.6+((scrollPercentage2-501)*0.5)}vh`;}
if(scrollPercentage>=480&&scrollPercentage<=530){didYouKnow3.style.top=`${-30+((scrollPercentage-480))}vh`;}
else if(scrollPercentage<480&&window.innerWidth>600){didYouKnow3.style.top="-30vh";}
else if(scrollPercentage>530&&scrollPercentage<565&&window.innerWidth>600){didYouKnow3.style.top="20vh";}
else if(scrollPercentage>580&&window.innerWidth>600){didYouKnow3.style.top="280vh";}
if(scrollPercentage2>=450&&scrollPercentage2<=500){didYouKnow3.style.top=`${-30+((scrollPercentage2-450))}vh`;}
else if(scrollPercentage2<450&&window.innerWidth<=600){didYouKnow3.style.top="-30vh";}
else if(scrollPercentage2>500&&scrollPercentage2<585&&window.innerWidth<=600){didYouKnow3.style.top="20vh";}
else if(scrollPercentage2>650&&window.innerWidth<=600){didYouKnow3.style.top="280vh";}
if(scrollPercentage>=550&&scrollPercentage<=559){head.style.top=`${69-((scrollPercentage-550)*0.5)}vh`;}
if(scrollPercentage2>=570&&scrollPercentage2<=579){head.style.top=`${86.1-((scrollPercentage2-570)*0.5)}vh`;}
if(scrollPercentage>=560&&scrollPercentage<=575){head.style.top=`${64.5+((scrollPercentage-560)*8.55)}vh`;}
if(scrollPercentage2>=580&&scrollPercentage2<=595){head.style.top=`${81.6+((scrollPercentage2-580)*8.55)}vh`;}
if(scrollPercentage>=560&&scrollPercentage<=575){hand2.style.bottom=`${-3-((scrollPercentage-560))}vh`;}
if(scrollPercentage2>=580&&scrollPercentage2<=595){hand2.style.bottom=`${-3-((scrollPercentage2-580))}vh`;}
if(scrollPercentage>=565&&scrollPercentage<=580){didYouKnow3.style.top=`${20+((scrollPercentage-565)*8)}vh`;}
if(scrollPercentage2>=585&&scrollPercentage2<=650){didYouKnow3.style.top=`${20+((scrollPercentage2-585)*4)}vh`;}
if(scrollPercentage>=560&&scrollPercentage<=605){prepare.style.top=`${-40+((scrollPercentage-560)*2)}vh`;}
else if(scrollPercentage<560&&window.innerWidth>600){prepare.style.top="-40vh";}
else if(scrollPercentage>605&&scrollPercentage<635&&window.innerWidth>600){prepare.style.top="50vh";}
else if(scrollPercentage>660&&window.innerWidth>600){prepare.style.top="225vh";}
if(scrollPercentage2>=580&&scrollPercentage2<=670){prepare.style.top=`${-40+((scrollPercentage2-580))}vh`;}
else if(scrollPercentage2<580&&window.innerWidth<=600){prepare.style.top="-40vh";}
else if(scrollPercentage2>670&&scrollPercentage2<700&&window.innerWidth<=600){prepare.style.top="50vh";}
else if(scrollPercentage2>750&&window.innerWidth<=600){prepare.style.top="150vh";}
if(scrollPercentage>=635&&scrollPercentage<=660){prepare.style.top=`${50+((scrollPercentage-635)*7)}vh`;}
if(scrollPercentage2>=700&&scrollPercentage2<=750){prepare.style.top=`${50+((scrollPercentage2-700)*2)}vh`;}
if(scrollPercentage>=600&&scrollPercentage<=680){prepare2.style.left=`${-50+((scrollPercentage-595))}vw`;prepare3.style.left=`${125-((scrollPercentage-625))}vw`;}
else if(scrollPercentage<600&&window.innerWidth>600){prepare2.style.left="-50vw";prepare3.style.left="125vw";prepare2.style.top="50vh";prepare3.style.top="50vh";}
else if(scrollPercentage>680&&scrollPercentage<700&&window.innerWidth>600){prepare2.style.left="35vw";prepare3.style.left="70vw";prepare2.style.top="50vh";prepare3.style.top="50vh";}
else if(scrollPercentage>750&&window.innerWidth>600){prepare2.style.left="35vw";prepare3.style.left="70vw";prepare2.style.top="-50vh";prepare3.style.top="-50vh";}
if(scrollPercentage2>=690&&scrollPercentage2<=770){prepare2.style.left=`${-50+((scrollPercentage2-685))}vw`;prepare3.style.left=`${125-((scrollPercentage2-715))}vw`;}
else if(scrollPercentage2<690&&window.innerWidth<=600){prepare2.style.left="-50vw";prepare3.style.left="125vw";prepare2.style.top="50vh";prepare3.style.top="50vh";}
else if(scrollPercentage2>770&&scrollPercentage2<790&&window.innerWidth<=600){prepare2.style.left="35vw";prepare3.style.left="70vw";prepare2.style.top="50vh";prepare3.style.top="50vh";}
else if(scrollPercentage2>890&&window.innerWidth<=600){prepare2.style.left="35vw";prepare3.style.left="70vw";prepare2.style.top="-50vh";prepare3.style.top="-50vh";}
if(scrollPercentage>=700&&scrollPercentage<=750){prepare2.style.top=`${50-((scrollPercentage-700)*2)}vh`;prepare3.style.top=`${50-((scrollPercentage-700)*2)}vh`;prepare4.style.top=`${150-((scrollPercentage-700)*2)}vh`;}
else if(scrollPercentage<700&&window.innerWidth>600){prepare4.style.top="150vh";}
else if(scrollPercentage>800&&window.innerWidth>600){prepare4.style.top="-50vh";}
if(scrollPercentage2>=790&&scrollPercentage<=890){prepare2.style.top=`${50-((scrollPercentage2-790))}vh`;prepare3.style.top=`${50-((scrollPercentage2-790))}vh`;prepare4.style.top=`${150-((scrollPercentage2-790))}vh`;}
else if(scrollPercentage<790&&window.innerWidth<=600){prepare4.style.top="150vh";}
else if(scrollPercentage>990&&window.innerWidth<=600){prepare4.style.top="-50vh";}
if(scrollPercentage>=750&&scrollPercentage<=800){prepare4.style.top=`${50-((scrollPercentage-750)*2)}vh`;prepare5.style.top=`${130-((scrollPercentage-750)*2)}vh`;prepare6.style.top=`${150-((scrollPercentage-750)*2)}vh`;prepare6.style.left=`${-50+((scrollPercentage-750)*2)}vw`;prepare7.style.top=`${170-((scrollPercentage-750)*2)}vh`;prepare7.style.left=`${150-((scrollPercentage-750)*2)}vw`;}
else if(scrollPercentage<750&&window.innerWidth>600){prepare5.style.top="130vh";prepare6.style.top="150vh";prepare6.style.left="-50vw";prepare7.style.top="170vh";prepare7.style.left="150vw";prepare5.style.opacity="1";prepare6.style.opacity="1";prepare7.style.opacity="1";}
else if(scrollPercentage>800&&window.innerWidth>600){prepare5.style.top="30vh";prepare6.style.top="50vh";prepare6.style.left="50vw";prepare7.style.top="70vh";prepare7.style.left="50vw";}
if(scrollPercentage2>=890&&scrollPercentage2<=990){prepare4.style.top=`${50-((scrollPercentage2-890))}vh`;prepare5.style.top=`${130-((scrollPercentage2-890))}vh`;prepare6.style.top=`${150-((scrollPercentage2-890))}vh`;prepare6.style.left=`${-50+((scrollPercentage2-890))}vw`;prepare7.style.top=`${170-((scrollPercentage2-890))}vh`;prepare7.style.left=`${150-((scrollPercentage2-890))}vw`;}
else if(scrollPercentage2<890&&window.innerWidth<=600){prepare5.style.top="130vh";prepare6.style.top="150vh";prepare6.style.left="-50vw";prepare7.style.top="170vh";prepare7.style.left="150vw";prepare5.style.opacity="1";prepare6.style.opacity="1";prepare7.style.opacity="1";}
else if(scrollPercentage2>990&&window.innerWidth<=600){prepare5.style.top="30vh";prepare6.style.top="50vh";prepare6.style.left="50vw";prepare7.style.top="70vh";prepare7.style.left="50vw";}
if(scrollPercentage>=850&&scrollPercentage<=900){paperplane.style.top=`${50-(easingValue2*50)}%`;paperplane.style.rotate=`${50-((scrollPercentage-850))}deg`;}
else if(scrollPercentage<850&&window.innerWidth>600){paperplane.style.top="50%";paperplane.style.left="120%";paperplane.style.rotate="50deg";}
else if(scrollPercentage>950&&window.innerWidth>600){paperplane.style.top="50%";paperplane.style.left="-15%";paperplane.style.rotate="-25deg";}
if(scrollPercentage2>=1040&&scrollPercentage2<=1090){paperplane.style.top=`${50-(easingValue3*50)}%`;paperplane.style.rotate=`${50-((scrollPercentage2-1040))}deg`;}
else if(scrollPercentage2<1040&&window.innerWidth<=600){paperplane.style.top="50%";paperplane.style.left="120%";paperplane.style.rotate="50deg";}
else if(scrollPercentage2>1140&&window.innerWidth<=600){paperplane.style.top="50%";paperplane.style.left="-15%";paperplane.style.rotate="-25deg";}
if(scrollPercentage>=900&&scrollPercentage<=950){paperplane.style.top=`${25-(easingValue*50)}%`paperplane.style.rotate=`${0-((scrollPercentage-900)*0.5)}deg`;}
if(scrollPercentage>=1090&&scrollPercentage<=1140){paperplane.style.top=`${25-(easingValue4*50)}%`paperplane.style.rotate=`${0-((scrollPercentage-1090)*0.5)}deg`;}
if(scrollPercentage>=850&&scrollPercentage<=950){prepare5.style.opacity=`${100-((scrollPercentage-850))}%`;prepare6.style.opacity=`${100-((scrollPercentage-850))}%`;prepare7.style.opacity=`${100-((scrollPercentage-850))}%`;paperplane.style.left=`${120-((scrollPercentage-850)*1.35)}%`;}
else if(scrollPercentage<850&&window.innerWidth>600){prepare5.style.opacity="1";prepare6.style.opacity="1";prepare7.style.opacity="1";}
else if(scrollPercentage>950&&window.innerWidth>600){prepare5.style.opacity="0";prepare6.style.opacity="0";prepare7.style.opacity="0";}
if(scrollPercentage2>=1040&&scrollPercentage<=1140){prepare5.style.opacity=`${100-((scrollPercentage2-1040))}%`;prepare6.style.opacity=`${100-((scrollPercentage2-1040))}%`;prepare7.style.opacity=`${100-((scrollPercentage2-1040))}%`;paperplane.style.left=`${120-((scrollPercentage2-1040)*1.35)}%`;}
else if(scrollPercentage2<1040&&window.innerWidth<=600){prepare5.style.opacity="1";prepare6.style.opacity="1";prepare7.style.opacity="1";}
else if(scrollPercentage2>1140&&window.innerWidth<=600){prepare5.style.opacity="0";prepare6.style.opacity="0";prepare7.style.opacity="0";}
if(scrollPercentage>=900&&scrollPercentage<=1000){prepare8.style.opacity=`${0+((scrollPercentage-900))}%`;}
else if(scrollPercentage<900&&window.innerWidth>600){prepare8.style.opacity="0";}
else if(scrollPercentage>1000&&scrollPercentage<1100&&window.innerWidth>600){prepare8.style.opacity="1";}
else if(scrollPercentage>1100&&window.innerWidth>600){prepare8.style.opacity="0";}
if(scrollPercentage2>=1090&&scrollPercentage2<=1190){prepare8.style.opacity=`${0+((scrollPercentage2-1090))}%`;}
else if(scrollPercentage2<1090&&window.innerWidth<=600){prepare8.style.opacity="0";}
else if(scrollPercentage2>1190&&scrollPercentage2<1240&&window.innerWidth<=600){prepare8.style.opacity="1";}
else if(scrollPercentage2>1240&&window.innerWidth<=600){prepare8.style.opacity="0";}
if(scrollPercentage>=1050&&scrollPercentage<=1100){prepare8.style.opacity=`${100-((scrollPercentage-1050)*2)}%`;}
if(scrollPercentage2>=1190&&scrollPercentage2<=1240){prepare8.style.opacity=`${100-((scrollPercentage2-1190)*2)}%`;}
if(scrollPercentage>1100&&window.innerWidth>600){header.style.display="none";children.forEach(child=>{child.style.display='none';});}
else if(scrollPercentage2>1240&&window.innerWidth<=600){header.style.display="none";children.forEach(child=>{child.style.display='none';});}
else{header.style.display="block";children.forEach(child=>{child.style.display='block';});}}
window.addEventListener('scroll',headerAnimationX);window.addEventListener('resize',headerAnimationX);