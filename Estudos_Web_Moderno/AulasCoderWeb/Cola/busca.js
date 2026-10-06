'use strict';
(() => {
  const input = document.querySelector('#busca');
  const topics = [...document.querySelectorAll('.topic')];
  const nav = [...document.querySelectorAll('nav [data-category]')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const indexed = topics.map(node => ({ node, text: normalize(node.textContent) }));
  let category = 'todos';
  function filter() {
    const words = normalize(input.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    indexed.forEach(({ node, text }) => {
      const match = (category === 'todos' || node.dataset.category === category) && words.every(word => text.includes(word));
      node.hidden = !match;
      node.open = match && words.length > 0;
      if (match) count++;
    });
    nav.forEach(link => {
      if (link.dataset.category === category) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const label = nav.find(link => link.dataset.category === category).childNodes[0].textContent.trim();
    document.querySelector('#status').textContent = `${count} ${count === 1 ? 'tópico' : 'tópicos'} · ${label}${words.length ? ' · busca ativa' : ''}`;
    document.querySelector('#vazio').hidden = count > 0;
  }
  function route() {
    const hash = location.hash.slice(1);
    const selected = nav.find(link => link.dataset.category === hash);
    const topic = topics.find(node => node.id === hash);
    if (selected) { category = hash; filter(); }
    else if (topic) {
      category = topic.dataset.category;
      input.value = '';
      filter();
      topic.open = true;
      topic.scrollIntoView({ block: 'start' });
    } else { category = 'todos'; filter(); }
  }
  input.addEventListener('input', filter);
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') { input.value = ''; filter(); }
  });
  document.querySelector('#limpar').addEventListener('click', () => { input.value = ''; filter(); input.focus(); });
  document.querySelector('#expandir').addEventListener('click', () => topics.filter(t => !t.hidden).forEach(t => { t.open = true; }));
  document.querySelector('#recolher').addEventListener('click', () => topics.forEach(t => { t.open = false; }));
  document.querySelector('#todos-assuntos').addEventListener('click', () => { category = 'todos'; location.hash = 'todos'; filter(); });
  nav.forEach(link => link.addEventListener('click', () => { category = link.dataset.category; filter(); }));
  document.querySelectorAll('.permalink').forEach(link => link.addEventListener('click', () => {
    if (location.hash === link.getAttribute('href')) route();
  }));
  window.addEventListener('hashchange', route);
  route();
})();
