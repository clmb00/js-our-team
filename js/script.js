const teamMembers = [
  {
    name: 'Wayne Barnet',
    role: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg',
    adj: ['Anxious','Greedy','Impatient','Childish']
  }, {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg',
    adj: ['Kind','Controlling','Dynamic']
  }, {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg',
    adj: ['Patient','Faithful','Friendly','Abrasive']
  }, {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg',
    adj: ['Good','Generous','Bossy','Adventurous']
  }, {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg',
    adj: ['Forgetful','Irrational','Egotistical']
  }, {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg',
    adj: ['Aggressive','Ambitious']
  }
];
const grid = document.querySelector('.grid');

for(let teamMember of teamMembers){
  let myAdjective = "";
  for(let index in teamMember.adj){
    (index == teamMember.adj.length - 1) ? myAdjective += ` and <span class="italic">${teamMember.adj[index]}</span>.` : myAdjective += ` <span class="italic">${teamMember.adj[index]}</span>, `
  }
  const template = `
  <div class="card w-full text-center">
    <div class="img-container">
      <img src="./img/${teamMember.photo}" alt="">
    </div>
    <div class="text-container">
      <h2 class="mt-4 font-semibold text-lg font-serif">${teamMember.name}</h2>
      <p class="text-sm mt-1 italic">${teamMember.role}</p>
      <p class="text-sm mt-1 mb-4">I'm ${myAdjective}</p>
    </div>
  </div>
  `;
  grid.innerHTML += template;
}