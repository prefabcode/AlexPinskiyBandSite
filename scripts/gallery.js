const galleryItems = document.querySelectorAll('.gallery-item');
const fullscreenViewer = document.getElementById('fullscreen-viewer');
const viewerImage = document.getElementById('viewer-image');
const closeViewer = document.getElementById('close-viewer');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

function openViewer(index) {
  currentIndex = index;
  const highResImage = galleryItems[currentIndex].getAttribute('data-highres');
  viewerImage.src = highResImage; // Load high-res image here
  fullscreenViewer.style.display = 'flex';
}

function closeViewerFunc() {
  fullscreenViewer.style.display = 'none';
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  openViewer(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  openViewer(currentIndex);
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openViewer(index));
});

closeViewer.addEventListener('click', closeViewerFunc);
next.addEventListener('click', showNext);
prev.addEventListener('click', showPrev);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'Escape') closeViewerFunc();
});
