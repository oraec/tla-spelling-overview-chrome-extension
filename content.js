// content.js
function addLink() {
  const id = document.getElementById('id');
  const element = document.getElementById('lemma-spellings');
  const newLink = document.createElement('a');
  newLink.href = 'https://oraec.github.io/tla-spelling-overview/' + id.textContent + '.html'
  newLink.textContent = 'Visit Spelling Overview';
  newLink.style.display = 'block'; // Optional: Make it a block element
  newLink.style.marginTop = '10px'; // Optional: Add some spacing

  document.getElementById('lemma-spellings').appendChild(newLink);
 }

addLink();


