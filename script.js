const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

let currentPage = 1;
const resultsPerPage = 10;
let currentResults = [];
let totalPages = 1;

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (!query) return;

  fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=50`)
    .then(res => res.json())
    .then(data => {
      currentResults = data.results || [];
      currentPage = 1;
      totalPages = Math.ceil(currentResults.length / resultsPerPage);
      renderResults();
    })
    .catch(error => {
      console.error('Error:', error);
      results.innerHTML = '<p>Error al buscar canciones.</p>';
    });
});

function renderResults() {
  results.innerHTML = '';

  if (currentResults.length === 0) {
    results.innerHTML = '<p>No se encontraron canciones.</p>';
    return;
  }

  const start = (currentPage - 1) * resultsPerPage;
  const end = start + resultsPerPage;
  const pageResults = currentResults.slice(start, end);

  pageResults.forEach(song => {
    const div = document.createElement('div');
    div.className = 'song';

    div.innerHTML = `
      <img src="${song.artworkUrl100}" alt="Album cover" class="album-cover">
      <p><strong>${song.trackName}</strong> - ${song.artistName}</p>
      <audio controls src="${song.previewUrl}" class="song-audio"></audio>`;

    const audioElement = div.querySelector('audio');
    audioElement.addEventListener('play', () => {
      document.querySelectorAll('.song-audio').forEach(otherAudio => {
        if (otherAudio !== audioElement) {
          otherAudio.pause();
          otherAudio.currentTime = 0;
        }
      });
    });

    results.appendChild(div);
  });

  renderPagination();
}

function renderPagination() {
  const pagination = document.createElement('div');
  pagination.className = 'pagination';
  pagination.style.marginTop = '20px';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.style.margin = '0 5px';
    btn.style.fontWeight = i === currentPage ? 'bold' : 'normal';

    btn.addEventListener('click', () => {
      currentPage = i;
      renderResults();
    });

    pagination.appendChild(btn);
  }

  results.appendChild(pagination);
}

// Modo oscuro
const toggleBtn = document.getElementById('toggleDarkMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Mostrar/ocultar footer según scroll
window.addEventListener('scroll', () => {
  const footer = document.getElementById('vintageFooter');
  const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
  footer.style.display = scrollBottom ? 'block' : 'none';
});

// Mostrar búsqueda
document.addEventListener('DOMContentLoaded', () => {
  const lupaBtn = document.getElementById('toggleSearch');
  const searchContainer = document.getElementById('searchContainer');
  const lupaContainer = document.getElementById('lupaContainer');

  lupaBtn.addEventListener('click', () => {
    lupaContainer.classList.add('hidden');
    searchContainer.classList.remove('hidden');
    searchContainer.classList.add('visible');
    searchInput.focus();
  });

  searchBtn.addEventListener('click', () => {
    setTimeout(() => {
      searchContainer.classList.remove('visible');
      searchContainer.classList.add('hidden');
      lupaContainer.classList.remove('hidden');
    }, 600);
  });
});
