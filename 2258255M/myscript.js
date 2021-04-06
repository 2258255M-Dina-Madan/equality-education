
//home page pause button

var vid = document.getElementById("slideshowvideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 



//about page and stories page

function myFunction1() {
  document.getElementById("reveal1").innerHTML = 
  "The 'Rhodes Must Fall' movement began at the University of Cape Town in South Africa with a student throwing a bucket of faeces on the large <a href=https://gal-dem.com/legacy-of-racism-oxford-university-rhodes/>statue</a> of Cecil Rhodes. Students protested this statue because Rhodes founded British colonies in Africa in the 19th century and wanted the continuation of British rule in <a href=https://www.bbc.co.uk/news/magazine-32131829>South Africa.</a> Although his statue sat in the centre of the university and was the ultimate symbol of British Colonialism, the movement goes <a href=https://www.theguardian.com/uk-news/2016/mar/16/the-real-meaning-of-rhodes-must-fall>beyond</a> just a removal of a statue. It is about challenging inequalities and racism for students and staff. The movement travelled across the world to Oxford University in the U.K, where protests of the removal of the Rhodes statue ignited. However, it was not until 2020, 5 years after the first protest at Oxford, was the statue finally removed. This was in the wake of the death of George Floyd, when 'Black Lives Matter' protests occured across the world.";
}

function myFunction2() {
  document.getElementById("reveal2").innerHTML = 
  "In <a href=https://www.theguardian.com/education/2018/jan/10/ucl-to-investigate-secret-eugenics-conference-held-on-campus>2018,</a> a senior academic staff member at the University College London was hosting secret conferences about eugenics and intelligence. These conferences took place in the university for three years unnoticed. Eugenics is a <a href=https://pged.org/history-eugenics-and-genetics/#ref>pseudo-science</a> invented in Britain that teaches that the human race can be improved by those with desirable genes reproducing and those with undesirable genes not reproducing. These ideals evoked extreme racist, ableist, and anti-Semitic views. The conferences in question discussed how IQ levels differ between groups and races. Furthermore, we found the guest list rather interesting. Among the white supremacists that were in attendance, a prominent attendee was <a href=https://www.theguardian.com/education/2018/jan/10/ucl-to-investigate-secret-eugenics-conference-held-on-campus>Toby Young.</a> Now stepped down from this role, Toby Young was the director of the Office for Students. The organisation that has done substantial work in investigating and publishing important statistics about universities in England. For example, they published the data that we base our discussion on the attainment gap off. We felt it was vital we bring this to your attention to demonstrate that no matter the institution or organisation, racism can still find its way in.";
}

function myFunction4() {
  document.getElementById("reveal4").innerHTML = 
  "This website explores whether diversifying or decolonisng the curriculum can improve equality for students in U.K universities. So what is diversity? <a href=https://www.uwe.ac.uk/study/library/our-libraries/library-activities-and-groups/decolonising-your-library>Diversity</a> is when everyone is represented. This could be in a place of work, in the media or in education. However,  We define <a href=https://eachother.org.uk/decolonising-the-curriculum-what-it-really-means/>decolonisation</a> in education as the ways in which we reexamine the knowledge and learning that is European-centred due to colonialism and white power. Those who have engaged in this debate so far have contrasting ideas on whether this is successful. This website focusses on two crucial aspects of the curriculum. Learning materials, such as the reading list, and teaching. Teaching encompasses both teachers and teaching practise. Our focus is drawn to these aspects of the curriculum as they are the main sources of where students gain their knowledge. Therefore, the methods to either diversify or decolonise the curriculum must alter the knowledge base that students learn from.";}

function myFunction5() {
  document.getElementById("reveal5").innerHTML = 
  "Decolonisation is the acknowledgment that the impact of colonialism can still be felt today and is embedded in <a href=https://eachother.org.uk/decolonising-the-curriculum-what-it-really-means/>structures of power</a>. It is vital to acknowledge the impact of colonisation on universities, particularly in the United Kingdom, where universities were historicaly financed through the <a href=https://monishaissano.medium.com/what-are-the-demands-of-decolonising-uk-universities-291a986c27a4>empire and slavery.</a> Today, universities can still be seen as perpeptuating colonial and Eurocentric ideology. Therefore, by decolonising these insitutions, knowledge will be free from colonial values too. Not only is knowledge a key driver to liberate univerisities, but experience of BAME students is an even bigger issue that makes this debate even more pressing. Racism in the classroom and lack of diverse teaching staff are vital to bring equality to education.";}

function myFunction6() {
  document.getElementById("reveal6").innerHTML = 
  "The aim of our educational website is to bring together resources and information to inform our readers on this multifaceted issue that needs addressing. This website should make it clear that we are not favouring diversity or decolonisation. Both are complex approaches that have positives and negatives. Furthermore, we would like to acknowledge that although we use the term BAME (Black, Asian, Minorty Ethnics) throughout this website, we understand the negative connotations it holds. We know that each individual group faces their own issues and one solution cannot solve them all.";
}

function myFunction7() {
  document.getElementById("reveal7").innerHTML = 
  "We strongly believe this debate is vital and requires more awareness. There is still inequality in higher education, and we need to address this.";
}



// title changing words

var container = document.getElementById('changeText');

var things = ['Decolonise<br>the<br>Curriculum', 'Equality<br>in<br>Education'];
var t = -1;
var thing = '';
var message = container.innerHTML;
var mode = 'write';
var delay = 1000;

function updateText(txt) {
    container.innerHTML = txt;
}

function tick() {

    if(container.innerHTML.length == 0) {
        t++;
        thing = things[t];
        message = '';
        mode = 'write';
    }

    switch(mode) {
        case 'write' :
            message += thing.slice(0, 1);
            thing = thing.substr(1);

            updateText(message);

            if(thing.length === 0 && t === (things.length - 1)) {
            	window.clearTimeout(timeout);
            	return;
            }

            if(thing.length == 0){
                mode = 'delete';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 40);
            }

            break;

        case 'delete' :
            message = message.slice(0, -1);
            updateText(message);

            if(message.length == 0)
            {
                mode = 'write';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 100);
            }
            break;
    }

    timeout = window.setTimeout(tick, delay);
}

var timeout = window.setTimeout(tick, delay);



//Resources section

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}