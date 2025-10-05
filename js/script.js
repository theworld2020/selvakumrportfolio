document.getElementById('year').textContent = new Date().getFullYear();
const projects = [
  { title: 'Project One', desc: 'Short description of project one.', img: 'assets/images/project-1.jpg', link: '#' },
  { title: 'Project Two', desc: 'Short description of project two.', img: 'assets/images/project-2.jpg', link: '#' },
  { title: 'Project Three', desc: 'Short description of project three.', img: 'assets/images/project-3.jpg', link: '#' }
];
const grid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `<a href="${p.link}"><img loading="lazy" src="${p.img}" alt="${p.title}"></a>
  <div class="card-body"><h4>${p.title}</h4><p>${p.desc}</p></div>`;
  grid.appendChild(card);
});