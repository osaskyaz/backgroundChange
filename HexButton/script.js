const hexBtn = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');
const container = document.querySelector('.container');

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

hexBtn.addEventListener('click', change);

function change (){
    let hexy = '#';
    for (let index = 0; index < 6; index++) {
        let numb = Math.floor(Math.random()*hexNumbers.length);
        hexy += hexNumbers[numb];
        console.log(hexy);
        
    }

    container.style.backgroundColor = hexy;
    hex.innerHTML = hexy;
}