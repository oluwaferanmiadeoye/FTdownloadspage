const libraryTab = document.getElementById('libraryTab');
const downloadsTab = document.getElementById('downloadsTab');
const historyTab = document.getElementById('historyTab');
const libraryTable = document.getElementById('libraryTable');
const downloadsTable = document.getElementById('downloadedTable');
const historyTable = document.getElementById('downloadHistoryTable');

const tabs = {
  library: { tab: libraryTab, table: libraryTable },
  downloads: { tab: downloadsTab, table: downloadsTable },
  history: { tab: historyTab, table: historyTable }
};

function showTab(tabName) {
  Object.values(tabs).forEach(tab => {
    tab.tab.classList.remove('active');
    tab.table.style.display = 'none';
  });

  tabs[tabName].tab.classList.add('active');
  tabs[tabName].table.style.display = 'table';
}

function populateTable(table, fileIds, includeTimestamp = false) {
  if (!table) return;

  const tbody = table.querySelector('tbody');
  if (!tbody) return;

  tbody.innerHTML = '';

  fileIds.forEach(id => {
    const item = downloadsData.find(item => item.id === id);
    if (!item) return;

    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = item.title;

    const dateCell = document.createElement('td');
    dateCell.textContent = new Date(item.date).toLocaleDateString();

    row.appendChild(titleCell);
    row.appendChild(dateCell);

    if (includeTimestamp) {
      const timestampCell = document.createElement('td');
      const timestamps = JSON.parse(localStorage.getItem('downloadTimestamps') || '[]');
      const timestamp = timestamps.find(ts => ts.id === id)?.timestamp;
      timestampCell.textContent = timestamp ? new Date(timestamp).toLocaleString() : 'N/A';
      row.appendChild(timestampCell);
    }

    const actionCell = document.createElement('td');
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'action-btn';
    downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
    downloadBtn.onclick = () => downloadFile(item.downloadUrl, item.title);

    const shareBtn = document.createElement('button');
    shareBtn.className = 'action-btn';
    shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
    shareBtn.onclick = () => openShareModal(item.id, 'downloads');

    actionCell.appendChild(downloadBtn);
    actionCell.appendChild(shareBtn);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  });

  table.style.display = fileIds.length > 0 ? 'table' : 'none';
  const noDataMessage = table.nextElementSibling;
  if (noDataMessage && noDataMessage.classList.contains('no-data')) {
    noDataMessage.style.display = fileIds.length > 0 ? 'none' : 'block';
  }
}

function downloadFile(url, title) {
  const a = document.createElement('a');
  a.href = url;
  a.download = title;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function openShareModal(itemId, source) {
  const dataSource = source === 'downloads' ? downloadsData : [];
  const item = dataSource.find(item => item.id === itemId);
  if (!item) return;

  const modal = document.getElementById('shareModal');
  const modalThumbnail = document.getElementById('shareModalThumbnail');
  const modalSubtitle = document.getElementById('shareModalSubtitle');
  const shareBtn = document.getElementById('shareBtn');
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const facebookBtn = document.getElementById('facebookBtn');
  const twitterBtn = document.getElementById('twitterBtn');

  if (!modal || !modalThumbnail || !modalSubtitle || !shareBtn || !copyLinkBtn || !whatsappBtn || !facebookBtn || !twitterBtn) return;

  modalThumbnail.src = item.thumbnail;
  modalThumbnail.alt = item.title;
  modalThumbnail.style.display = 'block';
  modalSubtitle.textContent = item.title;

  shareBtn.onclick = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `Check out this document: ${item.title}`,
        url: item.downloadUrl,
      }).then(() => {
        console.log('Shared successfully');
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    }
    modal.style.display = 'none';
  };

  copyLinkBtn.onclick = () => {
    navigator.clipboard.writeText(item.downloadUrl).then(() => {
      alert('Link copied to clipboard!');
    }).catch((error) => {
      console.error('Error copying link:', error);
    });
    modal.style.display = 'none';
  };

  whatsappBtn.onclick = () => {
    const shareText = `Check out this document: ${item.title} - ${item.downloadUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
    modal.style.display = 'none';
  };

  facebookBtn.onclick = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(item.downloadUrl)}&t=${encodeURIComponent(item.title)}`;
    window.open(facebookUrl, '_blank');
    modal.style.display = 'none';
  };

  twitterBtn.onclick = () => {
    const twitterText = `Check out this document: ${item.title} ${item.downloadUrl}`;
    const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
    window.open(twitterUrl, '_blank');
    modal.style.display = 'none';
  };

  modal.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
  if (libraryTab) libraryTab.addEventListener('click', () => showTab('library'));
  if (downloadsTab) downloadsTab.addEventListener('click', () => showTab('downloads'));
  if (historyTab) historyTab.addEventListener('click', () => showTab('history'));

  try {
    const libraryFiles = JSON.parse(localStorage.getItem('libraryFiles') || '[]');
    const downloadedFiles = JSON.parse(localStorage.getItem('downloadedFiles') || '[]');
    populateTable(libraryTable, libraryFiles);
    populateTable(downloadsTable, downloadedFiles);
    populateTable(historyTable, downloadedFiles, true);
  } catch (e) {
    console.error('Error accessing localStorage:', e);
  }

  showTab('library');

  const shareModal = document.getElementById('shareModal');
  const shareModalClose = document.getElementById('shareModalClose');

  if (shareModal && shareModalClose) {
    shareModalClose.addEventListener('click', () => {
      shareModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === shareModal) {
        shareModal.style.display = 'none';
      }
    });
  }
});