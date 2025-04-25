const downloadsData = [
  { id: 1, title: 'EASTER FAITH CONVENTION 2025: INFALLIBLE PROOFS - ACTS 1:3', date: '2025-04-15', type: 'Events', thumbnail: 'Images/Events/infallible.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/EASTER_FAITH_convention.pdf?v=2.4' },
  { id: 2, title: 'PROPHETIC FOCUS FOR THE MONTH OF APRIL: I AM REDEEMED A WONDER TO MY WORLD - JOHN 3:8', date: '2025-04-01', type: 'Prophetic Focus', thumbnail: 'Images/prophetic-focus/april2025.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/APRIL2025Focus.pdf?v=2.4' },
  { id: 3, title: 'PROPHETIC FOCUS FOR THE MONTH OF APRIL: I AM REDEEMED A WONDER TO MY WORLD - JOHN 3:8 (BANNER/FLYER)', date: '2025-04-01', type: 'Prophetic Focus', thumbnail: 'Images/prophetic-focus/flyer_april2025.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/APRIL2025Focusbanner.pdf?v=2.4' },
  { id: 4, title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF FAVOUR', date: '2025-04-8', type: 'Next', thumbnail: 'Images/events/dayoffavour.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/CovenantDayofFavour.pdf?v=2.4' },
  { id: 5, title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF LONG LIFE', date: '2025-04-21', type: 'Next', thumbnail: 'Images/special-invitations/longlife.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/CovenantDayofLongLifeMarch.pdf?v=2.4' },
  { id: 6, title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR BREAKING INVISIBLE BARRIERS SERVICE', date: '2025-03-01', type: 'Next', thumbnail: 'Images/special-invitations/breaking.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/BreakingInvisibleBarriersservice.pdf?v=2.4' },
  { id: 7, title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF BUSINESS & CAREER BREAKTHROUGH', date: '2025-02-01', type: 'Next', thumbnail: 'Images/special-invitations/business.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/BusinessbreaktroughMarch92025.pdf?v=2.4' },
  { id: 8, title: 'LOADING BAYS WITH ADDITIONAL BUSES FOR SUNDAY 9TH MARCH 2025 SERVICES', date: '2025-03-01', type: 'Others', thumbnail: 'Images/events/loadingbays.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/ADDITIONALLOADINGBAYADDRESSES2.pdf?v=2.4' },
  { id: 9, title: 'PROPHETIC FOCUS FOR THE MONTH OF MARCH: WHATEVER GOD CAN DO, FAITH CAN MAKE HAPPEN. - Mark 9:23', date: '2025-03-01', type: 'Prophetic Focus', thumbnail: 'Images/prophetic-focus/march2025.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/PropheticFocusforMarch2025.pdf?v=2.4' },
  { id: 10, title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF MARITAL BREAKTHROUGH', date: '2025-02-01', type: 'Next', thumbnail: 'Images/special-invitations/marital.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/maritalsettlement2025_050843.pdf?v=2.4' },
  { id: 11, title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF RESTORATION', date: '2025-02-01', type: 'Next', thumbnail: 'Images/events/restoration.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/COVENANTDAYOFrestorationFEB.pdf?v=2.4' },
  { id: 12, title: 'PROPHETIC FOCUS FOR THE MONTH OF FEBRUARY: MY INHERITANCE DEMANDS SANCTIFICATION FOR DELIVERY - ACTS 20:32', date: '2025-02-01', type: 'Prophetic Focus', thumbnail: 'Images/prophetic-focus/febuary2025.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/PropheticFocusforFebruary2025.pdf?v=2.4' },
  { id: 13, title: 'ZONAL CENTERS ADDRESS', date: '2025-01-01', type: 'Others', thumbnail: 'Images/prophetic-focus/zonalcenters.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/ZONAL_CENTERS_ADDRESS.pdf?v=2.4' },
  { id: 14, title: 'VIEWING CENTERS FOR ONE NIGHT WITH THE KING', date: '2025-01-01', type: 'Others', thumbnail: 'onenight.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/ONENIGHTWITHTHEKINGVIEWINGCENTERSF.pdf?v=2.4' },
  { id: 15, title: 'INTERCESSORY PRAYER GUIDELINES FOR PASTORS IN THIS CHURCH', date: '2025-01-01', type: 'Prayer Guidelines', thumbnail: 'Images/prayer-guidelines/pastors.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/IntercessoryPrayersguidelinesforPastorsinthisChurch.pdf?v=2.4' },
  { id: 16, title: 'NEW CONVERT’S RETENTION INTERCESSORY PRAYER GUIDELINES', date: '2025-01-01', type: 'Prayer Guidelines', thumbnail: 'converts.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/NEWCONVERT%E2%80%99SRETENTIONINTERCESSORYPRAYERGUIDELINES.pdf?v=2.4' },
  { id: 17, title: 'PERSONAL SPIRITUAL AWAKENING', date: '2025-01-01', type: 'Prayer Guidelines', thumbnail: 'personal.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/__PERSONALSPIRITUALAWAKENING.pdf?v=2.4' },
  { id: 18, title: 'INTERCESSORY PRAYER GUIDELINES FOR LIFE TRANSFORMING WORD IN OUR SERVICES', date: '2025-01-01', type: 'Prayer Guidelines', thumbnail: 'Images/prayer-guidelines/lifetransforming.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/__INTERCESSORYPRAYERGUIDELINESFORLIFETRANSFORMINWORDINOUSERVICES.pdf?v=2.4' },
  { id: 19, title: 'INTERCESSORY PRAYER GUIDELINES FOR CHURCH MEMBERS', date: '2025-01-01', type: 'Prayer Guidelines', thumbnail: 'members.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/__INTERCESSORYPRAYERGUIDELINESFORCHURCHMEMBERS.pdf?v=2.4' },
  { id: 20, title: 'SUPERNATURAL CHURCH GROWTH INTERCESSORY PRAYER GUIDELINES', date: '2025-01-01', type: 'Prayer Guidelines', thumbnail: 'Images/prayer-guidelines/churchgrowth.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/__SUPERNATURALCHURCHGROWTHINTERCESSORYPRAYERGUIDELINES.pdf?v=2.4' },
  { id: 21, title: 'INTERCESSORY PRAYER GUIDELINES TOWARDS IMPACTFUL SOUL WINNING OUTREACHES', date: '2025-01-01', type: 'Prayer Guidelines', thumbnail: 'impactful.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/__--INTERCESSORYPRAYERGUIDELINESTOWARDS.pdf?v=2.4' },
  { id: 22, title: 'WHY MUST WE CONTINUE TO GATHER SOULS INTO CHURCH?', date: '2025-01-01', type: 'Inspirational', thumbnail: 'gather.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/whymustwecontinuetogathersoulsintochurch.pdf?v=2.4' },
  { id: 23, title: 'WHY EVERY WINNER SHOULD BE AN ACTIVE MEMBER OF WSF', date: '2025-01-01', type: 'Inspirational', thumbnail: 'wsf.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/WHYEVERYWINNERMUSTBEANACTIVEMEMBEROFWSF.pdf?v=2.4' },
  { id: 24, title: 'STRIKING ENCOUNTERS WITH THE GOD OF MIRACLES AT WINNERS', date: '2025-01-01', type: 'Inspirational', thumbnail: 'Images/inspirational/striking.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/StrikingEncounterswithTheGodofMiraclesatWinners.pdf?v=2.4' },
  { id: 25, title: 'PROVEN STRATEGIES FOR CELL GROWTH AND REPLICATION', date: '2025-01-01', type: 'Inspirational', thumbnail: 'replication.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/ProvenStrategiesforCellGrowthandReplication.pdf?v=2.4' },
  { id: 26, title: 'GOD IS HERE AT WINNERS CONFIRMING HIS WORD AGAIN AND AGAIN', date: '2025-01-01', type: 'Inspirational', thumbnail: 'godishere.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/GODISHEREATWINNERSCONFIRMINGHISWORDAGAINANDAGAIN.pdf?v=2.4' },
  { id: 27, title: 'ONE WINNER ONE SOUL EVERY MONTH 2025', date: '2025-01-01', type: 'Inspirational', thumbnail: 'onewinner.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/OneWinneOneSouleveryMonth2025.pdf?v=2.4' },
  { id: 28, title: 'CALLING ALL WINNERS ON THE LINE FOR MIRACLE JOBS', date: '2025-01-01', type: 'Inspirational', thumbnail: 'calling.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/CallingAllWinnersontheLineforMiracleJOBS.pdf?v=2.4' },
  { id: 29, title: 'WHY ARE YOU ASKING US TO COME TO WINNERS?', date: '2025-01-01', type: 'Inspirational', thumbnail: 'whyasking.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/WHYAREYOUASKINGUSTOCOMETOWINNER.pdf?v=2.4' },
  { id: 30, title: 'WE SERVE A STORY CHANGING GOD', date: '2025-01-01', type: 'Inspirational', thumbnail: 'storychanging.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/WESERVEASTORYCHANGINGGOD.pdf?v=2.4' },
  { id: 31, title: "CALLED TO BE OUR BROTHERS' KEEPER", date: '2025-01-01', type: 'Inspirational', thumbnail: 'keeper.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/CALLEDTOBEOURBROTHERSKEEPERS.pdf?v=2.4' },
  { id: 32, title: 'ENGAGING OUR SHARP SICKLE OF HARVEST', date: '2025-01-01', type: 'Inspirational', thumbnail: 'sharpsickle.png', downloadUrl: 'https://faithtabernacle.org.ng/2025/ENGAGINGOURSHARPSICKLEOFHARVEST.pdf?v=2.4' },
  { id: 33, title: '2025: MY NEW ERA | ISAIAH 43:18-19', date: '2025-01-01', type: 'Year', thumbnail: '2025.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/2025_BANNER.pdf?v=2.4' },
  { id: 34, title: 'SHILOH 2024: EVER WINNING WISDOM | DECEMBER 10-15 | OFFICIAL FLIER', date: '2024-12-01', type: 'Shiloh', thumbnail: 'shiloh2024.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/WINNINGWISDOMSHILOH2024.pdf?v=2.4' },
  { id: 35, title: 'SHILOH 2024 INTERCESSORY PRAYER GUIDELINES', date: '2024-11-01', type: 'Shiloh', thumbnail: 'shiloh.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/Shiloh2024IntercessoryPrayerGuidelines.pdf?v=2.3' },
  { id: 36, title: 'PROPHETIC FOCUS FOR THE MONTH OF NOVEMBER 2024: GODLINESS IS PROFITABLE UNTO ALL THINGS - 1 TIMOTHY 4:8', date: '2024-11-01', type: 'Prophetic Focus', thumbnail: 'Images/prophetic-focus/november2024.png', downloadUrl: 'https://faithtabernacle.org.ng/PropheticFocusNovember2024.pdf?v=2.3' },
  { id: 37, title: 'ONE WEEK OF SACRIFICE FOR SOULS', date: '2024-09-01', type: 'Inspirational', thumbnail: 'oneweek.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/OneWeekofSacrificeforSouls.pdf?v=2.3' },
  { id: 38, title: 'PROPHETIC FOCUS FOR THE MONTH OF SEPTEMBER 2024: I AM REDEEMED A WONDER TO MY WORLD - ISAIAH 8:18', date: '2024-09-01', type: 'Prophetic Focus', thumbnail: 'wonder.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/PropheticFocusforSept2024.pdf?v=2.3' },
  { id: 39, title: 'PROPHETIC FOCUS FOR THE MONTH OF AUGUST 2024: I WILL RESTORE HEALTH UNTO THEE - JEREMIAH 30:17', date: '2024-08-01', type: 'Prophetic Focus', thumbnail: 'august.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/August2024Declaration.pdf?v=2.3' },
  { id: 40, title: 'DECLARING OPERATION COME AND SEE : AUGUST 5 - SEPTEMBER 1', date: '2024-07-01', type: 'Events', thumbnail: 'comeandsee.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/DeclaringOperationComeandSee2024.pdf?v=2.3' },
  { id: 41, title: 'PROPHETIC FOCUS FOR THE MONTH OF JULY 2024: ON MY WAY TO MY HIGH PLACES:DEUTORONOMY 32:12-13', date: '2024-07-01', type: 'Prophetic Focus', thumbnail: 'onmyway.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/July2024declaration.pdf?v=2.3' },
  { id: 42, title: 'NEXT SUNDAY AT FAITH TABERNACLE: COVENANT DAY OF FRUITFULNESS', date: '2024-07-01', type: 'Next', thumbnail: 'fruit.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/CovenantDayoffruitfulness280724.pdf?v=2.4' },
  { id: 43, title: 'DECLARING 4 WEEKS OF HARVEST OF REWARDS', date: '2024-06-01', type: 'Events', thumbnail: 'fourweeks.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/Declaring4WeeksofHarvestofRewards.pdf?v=2.3' },
  { id: 44, title: 'ONE CANNOT BE TRULY DEDICATED TO GOD AND NOT EMERGE A WONDER AT THE END', date: '2024-06-01', type: 'Inspirational', thumbnail: 'truly.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/1onecannotbetrulydedicated.pdf?v=2.3' },
  { id: 45, title: 'COME AND ENJOY PROPHETIC COVERING HERE AT WINNERS', date: '2024-06-01', type: 'Special Invitations', thumbnail: 'covering.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/COMEANDENJOYPROPHETICCOVERINGHEREATWINNERS.pdf?v=2.3' },
  { id: 46, title: 'WHAT MUST I DO TO DELIVER AT LEAST ONE ESTABLISHED SOULS IN THIS PROPHETIC SEASON?', date: '2024-06-01', type: 'Inspirational', thumbnail: 'whatmust.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/WhatmustIdotodelivermycovenantednumberofsouls.pdf?v=2.3' },
  { id: 47, title: 'TO MAKE THE MOST OF THIS PROPHETIC SEASON, EVERY WINNER MUST:', date: '2024-06-01', type: 'Inspirational', thumbnail: 'tomake.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/ToMakethemostofthispropheticSeason,EveryWinnermust.pdf?v=2.3' },
  { id: 48, title: 'ONE CANNOT BE TRULY DEDICATED TO GOD AND NOT EMERGE A WONDER AT THE END', date: '2024-06-01', type: 'Inspirational', thumbnail: 'tdedicated.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/onecannotbetrulydedicated.pdf?v=2.3' },
  { id: 49, title: 'THE LIBERATION COMMISSION IS STILL SPEAKING HERE AT WINNERS', date: '2024-06-01', type: 'Inspirational', thumbnail: 'libration.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/THELIBERATIONCOMMISSIONISSTILLSPEAKINGHEREATWINNERS.pdf?v=2.3' },
  { id: 50, title: 'A PROPHETIC ALERT TO ALL WINNERS', date: '2024-06-01', type: 'Inspirational', thumbnail: 'Images/inspirational/alert.png', downloadUrl: 'https://faithtabernacle.org.ng/2024/APROPHETICALERTTOALLWINNERSJune92024.pdf?v=2.3' }
];

const featuredData = downloadsData.slice(0, 50);

const activeFilters = {
  currentType: 'all',
  dateFilters: {
    all: { year: '', month: '' },
    'Events': { year: '', month: '' },
    'Prophetic Focus': { year: '', month: '' },
    'Inspirational': { year: '', month: '' },
    'Prayer Guidelines': { year: '', month: '' },
    'Special Invitations': { year: '', month: '' },
    'Next': { year: '', month: '' },
    'Year': { year: '', month: '' },
    'Shiloh': { year: '', month: '' },
    'Others': { year: '', month: '' },
  },
};

const itemsPerPage = 10;
let currentPage = 1;

const searchInput = document.getElementById('searchInput');
const clearBtn = document.querySelector('.clear-icon');

if (searchInput && clearBtn) {
  function clearSearch() {
    searchInput.value = '';
    searchInput.focus();
    clearBtn.style.opacity = '0';
    currentPage = 1;
    renderFilteredCards();
    renderFeaturedCards();
  }

  clearBtn.addEventListener('click', clearSearch);

  searchInput.addEventListener('input', function () {
    clearBtn.style.opacity = this.value ? '1' : '0';
    currentPage = 1;
    renderFilteredCards(this.value.trim());
    renderFeaturedCards(this.value.trim());
  });
}

document.addEventListener('DOMContentLoaded', function () {
  setupHamburgerMenu();
  setupFiltersToggleButton();
  const downloadsScroller = document.getElementById('downloads-scroller');
  const featuredScroller = document.getElementById('featured-scroller');
  if (!downloadsScroller || !featuredScroller) {
    console.error("Required scroller elements not found.");
    return;
  }
  initFilters();
  renderFilteredCards();
  renderFeaturedCards();
  updateScrollButtons();
  initializeModalListeners();
});

function setupHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the document click handler from immediately closing the menu

      // If the menu is open (hamburger has 'active' class, showing X icon), close it
      if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
      } else {
        // If the menu is closed (showing hamburger icon), open it
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
      }

      // Ensure fa-solid is always present
      hamburger.classList.add('fa-solid');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
        hamburger.classList.add('fa-solid');
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.main-nav') && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
        hamburger.classList.add('fa-solid');
      }
    });
  }
}
function setupFiltersToggleButton() {
  const filtersToggleBtn = document.querySelector(".filters-toggle-btn");
  const filterControls = document.querySelector(".filter-controls");

  if (filtersToggleBtn && filterControls) {
    filtersToggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isActive = filterControls.classList.contains("active");

      document.querySelectorAll(".filter-group").forEach((group) => {
        group.classList.remove("active");
        group.classList.remove("hidden");
      });

      if (isActive) {
        this.classList.remove("active");
        filterControls.classList.remove("active");
      } else {
        this.classList.add("active");
        filterControls.classList.add("active");
        filterControls.scrollTop = 0;
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest('.filter-controls') && !e.target.closest('.filters-toggle-btn')) {
        filtersToggleBtn.classList.remove("active");
        filterControls.classList.remove("active");
      }
    });
  }
}

function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const yearSelects = document.querySelectorAll('.year-select');
  const monthSelects = document.querySelectorAll('.month-select');

  const years = [...new Set(downloadsData.map(item => new Date(item.date).getFullYear()))].sort((a, b) => b - a);
  const months = [
    { value: '', label: 'All Months' },
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  yearSelects.forEach(select => {
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      select.appendChild(option);
    });
  });

  monthSelects.forEach(select => {
    months.forEach(month => {
      const option = document.createElement('option');
      option.value = month.value;
      option.textContent = month.label;
      select.appendChild(option);
    });
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      const filterGroup = this.parentElement;
      const isActive = filterGroup.classList.contains('active');

      document.querySelectorAll('.filter-group').forEach(group => {
        group.classList.remove('active');
      });

      if (!isActive) {
        filterGroup.classList.add('active');
      }

      activeFilters.currentType = this.getAttribute('data-type').toLowerCase();
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      currentPage = 1;
      renderFilteredCards();
      renderFeaturedCards();
    });
  });

  yearSelects.forEach(select => {
    select.addEventListener('change', function () {
      const filterType = this.closest('.filter-group').querySelector('.filter-btn').getAttribute('data-type').toLowerCase();
      activeFilters.dateFilters[filterType].year = this.value;
      currentPage = 1;
      renderFilteredCards();
      renderFeaturedCards();
    });
  });

  monthSelects.forEach(select => {
    select.addEventListener('change', function () {
      const filterType = this.closest('.filter-group').querySelector('.filter-btn').getAttribute('data-type').toLowerCase();
      activeFilters.dateFilters[filterType].month = this.value;
      currentPage = 1;
      renderFilteredCards();
      renderFeaturedCards();
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-group')) {
      document.querySelectorAll('.filter-group').forEach(group => {
        group.classList.remove('active');
      });
    }
  });
}

function filterData(data, searchTerm = '') {
  let filteredData = [...data];

  if (searchTerm) {
    filteredData = filteredData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (activeFilters.currentType !== 'all') {
    filteredData = filteredData.filter(item => item.type.toLowerCase() === activeFilters.currentType);
  }

  const currentFilter = activeFilters.dateFilters[activeFilters.currentType];
  if (currentFilter.year) {
    filteredData = filteredData.filter(item => new Date(item.date).getFullYear().toString() === currentFilter.year);
  }
  if (currentFilter.month) {
    filteredData = filteredData.filter(item => (new Date(item.date).getMonth() + 1).toString().padStart(2, '0') === currentFilter.month);
  }

  return filteredData;
}

function renderFilteredCards(searchTerm = '') {
  const downloadsScroller = document.getElementById('downloads-scroller');
  if (!downloadsScroller) return;

  const filteredData = filterData(downloadsData, searchTerm);
  downloadsScroller.innerHTML = '';

  if (filteredData.length === 0) {
    downloadsScroller.innerHTML = '<div class="no-results">No documents found.</div>';
    return;
  }

  filteredData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'download-card';
    card.innerHTML = `
      <img src="${item.thumbnail}">
      <div class="card-content">
        <h4>${item.title}</h4>
        <small>${new Date(item.date).toLocaleDateString()}</small>
      </div>
      <div class="card-actions">
        <button class="action-btn" title="Download Options" onclick="openDownloadModal(${item.id}, 'downloads')">
          <i class="fas fa-download"></i>
        </button>
        <button class="action-btn" title="Share" onclick="openShareModal(${item.id}, 'downloads')">
          <i class="fas fa-share-alt"></i>
        </button>
      </div>
    `;
    downloadsScroller.appendChild(card);
  });

  updateScrollButtons();
}

function renderFeaturedCards(searchTerm = '') {
  const featuredScroller = document.getElementById('featured-scroller');
  const paginationControls = document.getElementById('pagination-controls');
  if (!featuredScroller || !paginationControls) return;

  const filteredData = filterData(featuredData, searchTerm);
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  featuredScroller.innerHTML = '';
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = filteredData.slice(start, end);

  if (paginatedData.length === 0) {
    featuredScroller.innerHTML = '<div class="no-results">No documents found.</div>';
    paginationControls.innerHTML = '';
    return;
  }

  paginatedData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'download-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <img src="${item.thumbnail}">
      <div class="card-content">
        <h4>${item.title}</h4>
        <small>${new Date(item.date).toLocaleDateString()}</small>
      </div>
      <div class="card-actions">
        <button class="action-btn" title="Download Options" onclick="openDownloadModal(${item.id}, 'featured')">
          <i class="fas fa-download"></i>
        </button>
        <button class="action-btn" title="Share" onclick="openShareModal(${item.id}, 'featured')">
          <i class="fas fa-share-alt"></i>
        </button>
      </div>
    `;
    featuredScroller.appendChild(card);
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const paginationControls = document.getElementById('pagination-controls');
  if (!paginationControls) return;

  paginationControls.innerHTML = '';

  const paginationWrapper = document.createElement('div');
  paginationWrapper.className = 'pagination-wrapper';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'pagination-icon-btn';
  prevBtn.disabled = currentPage === 1;
  prevBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  `;
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderFeaturedCards(searchInput?.value?.trim() || '');
    }
  });

  paginationWrapper.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `pagination-number-btn ${i === currentPage ? 'active' : ''}`;
    pageBtn.textContent = i;
    pageBtn.addEventListener('click', () => {
      currentPage = i;
      renderFeaturedCards(searchInput?.value?.trim() || '');
    });
    paginationWrapper.appendChild(pageBtn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.className = 'pagination-icon-btn';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  `;
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderFeaturedCards(searchInput?.value?.trim() || '');
    }
  });

  paginationWrapper.appendChild(nextBtn);
  paginationControls.appendChild(paginationWrapper);
}

function updateScrollButtons() {
  const downloadsScroller = document.getElementById('downloads-scroller');
  const scrollLeftBtn = document.querySelector('.scroll-btn.left');
  const scrollRightBtn = document.querySelector('.scroll-btn.right');

  if (!downloadsScroller || !scrollLeftBtn || !scrollRightBtn) return;

  const updateButtonState = () => {
    scrollLeftBtn.classList.toggle('disabled', downloadsScroller.scrollLeft <= 0);
    scrollRightBtn.classList.toggle('disabled', downloadsScroller.scrollLeft + downloadsScroller.clientWidth >= downloadsScroller.scrollWidth - 1);
  };

  updateButtonState();

  scrollLeftBtn.addEventListener('click', () => {
    downloadsScroller.scrollBy({ left: -200, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener('click', () => {
    downloadsScroller.scrollBy({ left: 200, behavior: 'smooth' });
  });

  downloadsScroller.addEventListener('scroll', updateButtonState);
}

function openDownloadModal(itemId, source) {
  const dataSource = source === 'downloads' ? downloadsData : featuredData;
  const item = dataSource.find(item => item.id === itemId);
  if (!item) return;

  const modal = document.getElementById('downloadModal');
  const modalThumbnail = document.getElementById('modalThumbnail');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const downloadBtn = document.getElementById('downloadNowBtn');

  if (!modal || !modalThumbnail || !modalSubtitle || !downloadBtn) return;

  modalThumbnail.src = item.thumbnail;
  modalThumbnail.alt = item.title;
  modalThumbnail.style.display = 'block';
  modalSubtitle.textContent = item.title;
  downloadBtn.onclick = () => downloadFile(item.downloadUrl, item.title);

  modal.style.display = 'flex';
}

function openShareModal(itemId, source) {
  const dataSource = source === 'downloads' ? downloadsData : featuredData;
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

  // Web Share API
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
    } else {
      // Fallback already handled by buttons below
      console.log('Web Share API not supported, using fallback');
    }
    modal.style.display = 'none';
  };

  // Copy Link
  copyLinkBtn.onclick = () => {
    navigator.clipboard.writeText(item.downloadUrl).then(() => {
      alert('Link copied to clipboard!');
    }).catch((error) => {
      console.error('Error copying link:', error);
    });
    modal.style.display = 'none';
  };

  // WhatsApp Share
  whatsappBtn.onclick = () => {
    const shareText = `Check out this document: ${item.title} - ${item.downloadUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
    modal.style.display = 'none';
  };

  // Facebook Share
  facebookBtn.onclick = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(item.downloadUrl)}&quote=${encodeURIComponent(item.title)}`;
    window.open(facebookUrl, '_blank');
    modal.style.display = 'none';
  };

  // Twitter Share
  twitterBtn.onclick = () => {
    const twitterText = `Check out this document: ${item.title} ${item.downloadUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
    window.open(twitterUrl, '_blank');
    modal.style.display = 'none';
  };

  modal.style.display = 'flex';
}

function downloadFile(url, title) {
  const a = document.createElement('a');
  a.href = url;
  a.download = title;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function initializeModalListeners() {
  const downloadModal = document.getElementById('downloadModal');
  const downloadModalClose = document.getElementById('modalClose');
  const shareModal = document.getElementById('shareModal');
  const shareModalClose = document.getElementById('shareModalClose');

  if (downloadModal && downloadModalClose) {
    downloadModalClose.addEventListener('click', () => {
      downloadModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === downloadModal) {
        downloadModal.style.display = 'none';
      }
    });
  }

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
}