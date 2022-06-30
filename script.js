/* .js files add interaction to your website */
var factList=[
  "You can try promoting eco-responsibility throughout your community. We cannot continue to use and abuse our world without regard to its sustainability. There is an urgent need to take environmental responsibility very seriously within every type of business and sustain our environment for future generations.",/*0*/
  "We need to control and monitor land fillings and fly-tipping activities. Fly-tipping is the illegal dumping of liquid or solid waste on land or in water. In some cases, soil contaminating chemicals are dumped which are a danger to livestock and crops. In urban areas, discarded waste can attract vermin and spread disease. Any community which suffers from fly tipping can quickly gather a bad reputation as being run-down, dirty and shabby.", /*1*/
  "We need to create an effective strategy for waste disposal and management. Waste management policies and rules are more effective when the public is duly educated and informed on the importance of such policies. The main benefits of effective waste disposal include: Environmental protection – from pollution or contamination. Money generation – companies may buy recyclable materials due to their value. Additionally, the waste management industry creates employment opportunities.", /*2*/
  "A multifaceted approach on waste transfer and diversion in terms of more hygienic and efficient waste disposal management. The U.S. Environmental Protection Agency facilities minimize solid waste generation through source reduction, recycling, reuse or composting. Waste diversion also reduces disposal costs and the burden on landfills.", /*3*/
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton){
myButton.addEventListener("click", displayFact);}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
