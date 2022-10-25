const teamMembers = [
  {
    name: 'Wayne Barnet',
    role: 'Founder & CEO',
    photo: 'wayne-bernett-founder-ceo.jpg'
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

for(let teamMember of teamMembers){
  let parag = document.createElement('p');
  parag.innerText = `Name: ${teamMember.name}, Role: ${teamMember.role}, URL photo: ${teamMember.photo}`;
  document.querySelector('body').append(parag);
}