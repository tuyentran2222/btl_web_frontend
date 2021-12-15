let dark = localStorage.getItem('dark');
if (dark == 'true') {
  let root = document.querySelector(':root');
    root.style.setProperty('--background-color', 'black');
    root.style.setProperty('--text-color', '#FFFFFF');
    root.style.setProperty('color', '#FFFFFF');
    root.style.setProperty('--border-none', 'var(--border)');
    root.style.setProperty('--background-color-item', 'black');
    root.style.setProperty('--title-color', '#FFFFFF');
    console.log('123')
}

function openTab(event,pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
  
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-links");
    console.log(pageName);
    for (i = 0; i < tablinks.length; i++) {
      if (pageName === tablinks[i].value) {
        tablinks[i].style.backgroundColor = "var(--danger -color)";
        tablinks[i].classList.add('active');
      }
      else {
        tablinks[i].style.backgroundColor = "var(--primary-color-btn)";
      }
    }
    document.getElementById(pageName).style.display = "block";
    
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

function hideTranscript() {
    let innerText = document.getElementById('hide-transcript').innerHTML;
    if (innerText == 'Hide Transcript'){
      document.getElementById('transcript__content').classList.add('hidden');
      document.getElementById('transcript__content').classList.remove('show');
      document.getElementById('hide-transcript').innerHTML = 'Show Transcript';
    }
    else {
      document.getElementById('transcript__content').classList.remove('hidden');
      document.getElementById('transcript__content').classList.add('show');
      document.getElementById('hide-transcript').innerHTML = 'Hide Transcript';
    }
    
}
document.getElementById('hide-transcript').addEventListener('click',hideTranscript);

function checkAnswer(n) {
  n=3;
  for (let i=1;i<=n;i++) {
    let markedCheckbox = document.getElementsByName('question'+i);
    let result = 'A,C';
    resultArray = result.split(',');
    
    for (var checkbox of markedCheckbox) {
      // if (checkbox.checked){
        if (resultArray.includes(checkbox.value)) {

          checkbox.nextElementSibling.style.color ='green';
        }
        else {
          checkbox.nextElementSibling.style.color ='red';
        }
      // }
    }
  }
  
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.getElementById('reset-answer').addEventListener('click', resetAnswer);

function resetAnswer() {
  n=3;
  for (let i=1;i<=n;i++) {
    let markedCheckbox = document.getElementsByName('question'+i); 
    for (var checkbox of markedCheckbox) {
      checkbox.nextElementSibling.style.color ='black';
      if (checkbox.checked) checkbox.checked =false;
    }
  }
}