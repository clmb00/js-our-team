const teamMembers = [
  {
    name: 'Wayne Barnet',
    role: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
  }, {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
  }, {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
  }, {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
  }, {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg'
  }, {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
  }
];
const grid = document.querySelector('.grid');

for(let teamMember of teamMembers){
  const template = `
  <div class="card w-full text-center">
    <div class="img-container">
      <img src="./img/${teamMember.photo}" alt="">
    </div>
    <div class="text-container">
      <h2 class="mt-4 font-semibold text-lg font-serif">${teamMember.name}</h2>
      <p class="text-sm mt-1 mb-4 italic">${teamMember.role}</p>
    </div>
  </div>
  `;
  grid.innerHTML += template;
}