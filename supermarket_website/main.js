/////  BUTTONS //////

var red = document.querySelector('#red');
var oy = document.querySelector('#oy');
var green = document.querySelector('#green');
var bp = document.querySelector('#bp');

///// FRUIT /////

var redFruits = [
	{
		img: './images/apples.jpg',
		name: 'Apples'
	},
	{
		img: './images/cherries.jpg',
		name: 'Cherries'
	},
    {
		img: './images/pomegranates.jpg',
		name: 'Pomegranates'
	},
    {
		img: './images/raspberries.jpg',
		name: 'Raspberries'
	},
	{
		img: './images/strawberries.jpg',
		name: 'Strawberries'
    },
    {
		img: './images/watermelon.jpg',
		name: 'Watermelon'
	},
];

var oyFruits = [
	{
		img: './images/apricots.jpg',
		name: 'Apricots'
	},
	{
		img: './images/bananas.jpg',
		name: 'Banana'
	},
	{
		img: './images/lemons.jpeg',
		name: 'Lemons'
	},
	{
		img: './images/mangos.jpg',
		name: 'Mangos'
	},
	{
		img: './images/oranges.jpg',
		name: 'Oranges'
    },
    {
		img: './images/pineapples.jpg',
		name: 'Pineapples'
	}
];

var greenFruits = [
    {
		img: './images/grapes.jpg',
		name: 'Grapes'
	},
	{
		img: './images/greenapples.jpg',
		name: 'Green Apples'
	},
	{
		img: './images/kiwis.jpeg',
		name: 'Kiwis'
	},
	{
		img: './images/limes.jpg',
		name: 'Limes'
	},
	{
		img: './images/pears.jpg',
		name: 'Pears'
    },
    {
		img: './images/starfruit.jpg',
		name: 'Starfruit'
	}
];
var bpFruits = [
	{
		img: './images/blackberries.jpg',
		name: 'Blackberries'
	},
	{
		img: './images/blueberries.jpg',
		name: 'Blueberries'
    },
    {
		img: './images/cranberries.jpg',
		name: 'Cranberries'
	},
	{
		img: './images/figs.jpeg',
		name: 'Figs'
	},
	{
		img: './images/plums.jpg',
		name: 'Plums'
	},
	{
		img: './images/purplegrapes.jpg',
		name: 'Purple Grapes'
    }
];

///// EVENT LISTENERS /////

document.getElementById('red').addEventListener('click', addFruit);
document.getElementById('oy').addEventListener('click', addFruit);
document.getElementById('green').addEventListener('click', addFruit);
document.getElementById('bp').addEventListener('click', addFruit);

///// BUTTON CLICK /////

function addFruit(){
    document.getElementById('fruit').innerHTML = '';
    for (let i = 0; i < thisFruits.length; i++){
      var card = `<div class="card"><a href="#">
                  <img src=${thisFruits[i].img} alt="" style="width:100%">
                    <div class="container">
                      <h4>${thisFruits[i].name}</h4>
                      <h5>${thisFruits[i].price}</h5>
                    </div></a>
                  </div>`;
      var div = document.createElement('P');
      div.innerHTML = card;
      document.getElementById('fruit').appendChild(div);
    };
  }
  


