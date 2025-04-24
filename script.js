// Data for Recent and Featured Documents
const downloadsData = [
  {
    id: 1,
    title: 'EASTER FAITH CONVENTION 2025: INFALLIBLE PROOFS - ACTS 1:3',
    date: '2025-04-15',
    type: 'Events',
    thumbnail: 'Images/Events/infallible.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/EASTER_FAITH_convention.pdf?v=2.4'
  },
  {
    id: 2,
    title: 'PROPHETIC FOCUS FOR THE MONTH OF APRIL: I AM REDEEMED A WONDER TO MY WORLD - JOHN 3:8',
    date: '2025-04-01', // Fixed syntax error (removed invalid character '')
    type: 'Prophetic Focus',
    thumbnail: 'Images/prophetic-focus/april2025.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/APRIL2025Focus.pdf?v=2.4'
  },
  {
    id: 3,
    title: 'PROPHETIC FOCUS FOR THE MONTH OF APRIL: I AM REDEEMED A WONDER TO MY WORLD - JOHN 3:8 (BANNER/FLYER)',
    date: '2025-04-01',
    type: 'Prophetic Focus',
    thumbnail: 'Images/prophetic-focus/flyer_april2025.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/APRIL2025Focusbanner.pdf?v=2.4'
  },
  {
    id: 4,
    title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF FAVOUR',
    date: '2025-04-8',
    type: 'Next',
    thumbnail: 'Images/events/dayoffavour.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/CovenantDayofFavour.pdf?v=2.4'
  },
  {
    id: 5,
    title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF LONG LIFE',
    date: '2025-04-21',
    type: 'Next',
    thumbnail: 'Images/special-invitations/longlife.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/CovenantDayofLongLifeMarch.pdf?v=2.4'
  },
  {
    id: 6,
    title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR BREAKING INVISIBLE BARRIERS SERVICE',
    date: '2025-03-01',
    type: 'Next',
    thumbnail: 'Images/special-invitations/breaking.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/BreakingInvisibleBarriersservice.pdf?v=2.4'
  },
  {
    id: 7,
    title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF BUSINESS & CAREER BREAKTHROUGH',
    date: '2025-02-01',
    type: 'Next',
    thumbnail: 'Images/special-invitations/business.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/BusinessbreaktroughMarch92025.pdf?v=2.4'
  },
  {
    id: 8,
    title: 'LOADING BAYS WITH ADDITIONAL BUSES FOR SUNDAY 9TH MARCH 2025 SERVICES',
    date: '2025-03-01',
    type: 'Others',
    thumbnail: 'Images/events/loadingbays.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/ADDITIONALLOADINGBAYADDRESSES2.pdf?v=2.4'
  },
  {
    id: 9,
    title: 'PROPHETIC FOCUS FOR THE MONTH OF MARCH: WHATEVER GOD CAN DO, FAITH CAN MAKE HAPPEN. - Mark 9:23',
    date: '2025-03-01',
    type: 'Prophetic Focus',
    thumbnail: 'Images/prophetic-focus/march2025.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/PropheticFocusforMarch2025.pdf?v=2.4'
  },
  {
    id: 10,
    title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF MARITAL BREAKTHROUGH',
    date: '2025-02-01',
    type: 'Next',
    thumbnail: 'Images/special-invitations/marital.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/maritalsettlement2025_050843.pdf?v=2.4'
  },
  {
    id: 11,
    title: 'NEXT SUNDAY AT FAITH TABERNACLE WILL BE OUR COVENANT DAY OF RESTORATION',
    date: '2025-02-01',
    type: 'Next',
    thumbnail: 'Images/events/restoration.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/COVENANTDAYOFrestorationFEB.pdf?v=2.4'
  },
  {
    id: 12,
    title: 'PROPHETIC FOCUS FOR THE MONTH OF FEBRUARY: MY INHERITANCE DEMANDS SANCTIFICATION FOR DELIVERY - ACTS 20:32',
    date: '2025-02-01',
    type: 'Prophetic Focus',
    thumbnail: 'Images/prophetic-focus/febuary2025.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/PropheticFocusforFebruary2025.pdf?v=2.4'
  },
  {
    id: 13,
    title: 'ZONAL CENTERS ADDRESS',
    date: '2025-01-01',
    type: 'Others',
    thumbnail: 'Images/prophetic-focus/zonalcenters.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/ZONAL_CENTERS_ADDRESS.pdf?v=2.4'
  },
  {
    id: 14,
    title: 'VIEWING CENTERS FOR ONE NIGHT WITH THE KING',
    date: '2025-01-01',
    type: 'Others',
    thumbnail: 'onenight.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/ONENIGHTWITHTHEKINGVIEWINGCENTERSF.pdf?v=2.4'
  },
  {
    id: 15,
    title: 'INTERCESSORY PRAYER GUIDELINES FOR PASTORS IN THIS CHURCH',
    date: '2025-01-01',
    type: 'Prayer Guidelines',
    thumbnail: 'Images/prayer-guidelines/pastors.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/IntercessoryPrayersguidelinesforPastorsinthisChurch.pdf?v=2.4'
  },
  {
    id: 16,
    title: 'NEW CONVERT’S RETENTION INTERCESSORY PRAYER GUIDELINES',
    date: '2025-01-01',
    type: 'Prayer Guidelines',
    thumbnail: 'converts.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/NEWCONVERT%E2%80%99SRETENTIONINTERCESSORYPRAYERGUIDELINES.pdf?v=2.4'
  },
  {
    id: 17,
    title: 'PERSONAL SPIRITUAL AWAKENING',
    date: '2025-01-01',
    type: 'Prayer Guidelines',
    thumbnail: 'personal.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/__PERSONALSPIRITUALAWAKENING.pdf?v=2.4'
  },
  {
    id: 18,
    title: 'INTERCESSORY PRAYER GUIDELINES FOR LIFE TRANSFORMING WORD IN OUR SERVICES',
    date: '2025-01-01',
    type: 'Prayer Guidelines',
    thumbnail: 'Images/prayer-guidelines/lifetransforming.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/__INTERCESSORYPRAYERGUIDELINESFORLIFETRANSFORMINWORDINOUSERVICES.pdf?v=2.4'
  },
  {
    id: 19,
    title: 'INTERCESSORY PRAYER GUIDELINES FOR CHURCH MEMBERS',
    date: '2025-01-01',
    type: 'Prayer Guidelines',
    thumbnail: 'members.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/__INTERCESSORYPRAYERGUIDELINESFORCHURCHMEMBERS.pdf?v=2.4'
  },
  {
    id: 20,
    title: 'SUPERNATURAL CHURCH GROWTH INTERCESSORY PRAYER GUIDELINES',
    date: '2025-01-01',
    type: 'Prayer Guidelines',
    thumbnail: 'Images/prayer-guidelines/churchgrowth.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/__SUPERNATURALCHURCHGROWTHINTERCESSORYPRAYERGUIDELINES.pdf?v=2.4'
  },
  {
    id: 21,
    title: 'INTERCESSORY PRAYER GUIDELINES TOWARDS IMPACTFUL SOUL WINNING OUTREACHES',
    date: '2025-01-01',
    type: 'Prayer Guidelines',
    thumbnail: 'impactful.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/__--INTERCESSORYPRAYERGUIDELINESTOWARDS.pdf?v=2.4'
  },
  {
    id: 22,
    title: 'WHY MUST WE CONTINUE TO GATHER SOULS INTO CHURCH?',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'gather.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/whymustwecontinuetogathersoulsintochurch.pdf?v=2.4'
  },
  {
    id: 23,
    title: 'WHY EVERY WINNER SHOULD BE AN ACTIVE MEMBER OF WSF',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'wsf.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/WHYEVERYWINNERMUSTBEANACTIVEMEMBEROFWSF.pdf?v=2.4'
  },
  {
    id: 24,
    title: 'STRIKING ENCOUNTERS WITH THE GOD OF MIRACLES AT WINNERS',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'Images/inspirational/striking.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/StrikingEncounterswithTheGodofMiraclesatWinners.pdf?v=2.4'
  },
  {
    id: 25,
    title: 'PROVEN STRATEGIES FOR CELL GROWTH AND REPLICATION',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'replication.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/ProvenStrategiesforCellGrowthandReplication.pdf?v=2.4'
  },
  {
    id: 26,
    title: 'GOD IS HERE AT WINNERS CONFIRMING HIS WORD AGAIN AND AGAIN',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'godishere.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/GODISHEREATWINNERSCONFIRMINGHISWORDAGAINANDAGAIN.pdf?v=2.4'
  },
  {
    id: 27,
    title: 'ONE WINNER ONE SOUL EVERY MONTH 2025',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'onewinner.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/OneWinneOneSouleveryMonth2025.pdf?v=2.4'
  },
  {
    id: 28,
    title: 'CALLING ALL WINNERS ON THE LINE FOR MIRACLE JOBS',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'calling.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/CallingAllWinnersontheLineforMiracleJOBS.pdf?v=2.4'
  },
  {
    id: 29,
    title: 'WHY ARE YOU ASKING US TO COME TO WINNERS?',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'whyasking.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/WHYAREYOUASKINGUSTOCOMETOWINNER.pdf?v=2.4'
  },
  {
    id: 30,
    title: 'WE SERVE A STORY CHANGING GOD',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'storychanging.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/WESERVEASTORYCHANGINGGOD.pdf?v=2.4'
  },
  {
    id: 31,
    title: "CALLED TO BE OUR BROTHERS' KEEPER",
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'keeper.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/CALLEDTOBEOURBROTHERSKEEPERS.pdf?v=2.4'
  },
  {
    id: 32,
    title: 'ENGAGING OUR SHARP SICKLE OF HARVEST',
    date: '2025-01-01',
    type: 'Inspirational',
    thumbnail: 'sharpsickle.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2025/ENGAGINGOURSHARPSICKLEOFHARVEST.pdf?v=2.4'
  },
  {
    id: 33,
    title: '2025: MY NEW ERA | ISAIAH 43:18-19',
    date: '2025-01-01',
    type: 'Year',
    thumbnail: '2025.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/2025_BANNER.pdf?v=2.4'
  },
  {
    id: 34,
    title: 'SHILOH 2024: EVER WINNING WISDOM | DECEMBER 10-15 | OFFICIAL FLIER',
    date: '2024-12-01',
    type: 'Shiloh',
    thumbnail: 'shiloh2024.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/WINNINGWISDOMSHILOH2024.pdf?v=2.4'
  },
  {
    id: 35,
    title: 'SHILOH 2024 INTERCESSORY PRAYER GUIDELINES',
    date: '2024-11-01',
    type: 'Shiloh',
    thumbnail: 'shiloh.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/Shiloh2024IntercessoryPrayerGuidelines.pdf?v=2.3'
  },
  {
    id: 36,
    title: 'PROPHETIC FOCUS FOR THE MONTH OF NOVEMBER 2024: GODLINESS IS PROFITABLE UNTO ALL THINGS - 1 TIMOTHY 4:8',
    date: '2024-11-01',
    type: 'Prophetic Focus',
    thumbnail: 'Images/prophetic-focus/november2024.png',
    downloadUrl: 'https://faithtabernacle.org.ng/PropheticFocusNovember2024.pdf?v=2.3'
  },
  {
    id: 37,
    title: 'ONE WEEK OF SACRIFICE FOR SOULS',
    date: '2024-09-01',
    type: 'Inspirational',
    thumbnail: 'oneweek.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/OneWeekofSacrificeforSouls.pdf?v=2.3'
  },
  {
    id: 38,
    title: 'PROPHETIC FOCUS FOR THE MONTH OF SEPTEMBER 2024: I AM REDEEMED A WONDER TO MY WORLD - ISAIAH 8:18',
    date: '2024-09-01',
    type: 'Prophetic Focus',
    thumbnail: 'wonder.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/PropheticFocusforSept2024.pdf?v=2.3'
  },
  {
    id: 39,
    title: 'PROPHETIC FOCUS FOR THE MONTH OF AUGUST 2024: I WILL RESTORE HEALTH UNTO THEE - JEREMIAH 30:17',
    date: '2024-08-01',
    type: 'Prophetic Focus',
    thumbnail: 'august.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/August2024Declaration.pdf?v=2.3'
  },
  {
    id: 40,
    title: 'DECLARING OPERATION COME AND SEE : AUGUST 5 - SEPTEMBER 1',
    date: '2024-07-01',
    type: 'Events',
    thumbnail: 'comeandsee.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/DeclaringOperationComeandSee2024.pdf?v=2.3'
  },
  {
    id: 41,
    title: 'PROPHETIC FOCUS FOR THE MONTH OF JULY 2024: ON MY WAY TO MY HIGH PLACES:DEUTORONOMY 32:12-13',
    date: '2024-07-01',
    type: 'Prophetic Focus',
    thumbnail: 'onmyway.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/July2024declaration.pdf?v=2.3'
  },
  {
    id: 42,
    title: 'NEXT SUNDAY AT FAITH TABERNACLE: COVENANT DAY OF FRUITFULNESS',
    date: '2024-07-01',
    type: 'Next',
    thumbnail: 'fruit.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/CovenantDayoffruitfulness280724.pdf?v=2.4'
  },
  {
    id: 43,
    title: 'DECLARING 4 WEEKS OF HARVEST OF REWARDS',
    date: '2024-06-01',
    type: 'Events',
    thumbnail: 'fourweeks.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/Declaring4WeeksofHarvestofRewards.pdf?v=2.3'
  },
  {
    id: 44,
    title: 'ONE CANNOT BE TRULY DEDICATED TO GOD AND NOT EMERGE A WONDER AT THE END',
    date: '2024-06-01',
    type: 'Inspirational',
    thumbnail: 'truly.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/1onecannotbetrulydedicated.pdf?v=2.3'
  },
  {
    id: 45,
    title: 'COME AND ENJOY PROPHETIC COVERING HERE AT WINNERS',
    date: '2024-06-01',
    type: 'Special Invitations',
    thumbnail: 'covering.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/COMEANDENJOYPROPHETICCOVERINGHEREATWINNERS.pdf?v=2.3'
  },
  {
    id: 46,
    title: 'WHAT MUST I DO TO DELIVER AT LEAST ONE ESTABLISHED SOULS IN THIS PROPHETIC SEASON?',
    date: '2024-06-01',
    type: 'Inspirational',
    thumbnail: 'whatmust.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/WhatmustIdotodelivermycovenantednumberofsouls.pdf?v=2.3'
  },
  {
    id: 47,
    title: 'TO MAKE THE MOST OF THIS PROPHETIC SEASON, EVERY WINNER MUST:',
    date: '2024-06-01',
    type: 'Inspirational',
    thumbnail: 'tomake.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/ToMakethemostofthispropheticSeason,EveryWinnermust.pdf?v=2.3'
  },
  {
    id: 48,
    title: 'ONE CANNOT BE TRULY DEDICATED TO GOD AND NOT EMERGE A WONDER AT THE END',
    date: '2024-06-01',
    type: 'Inspirational',
    thumbnail: 'tdedicated.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/onecannotbetrulydedicated.pdf?v=2.3'
  },
  {
    id: 49,
    title: 'THE LIBERATION COMMISSION IS STILL SPEAKING HERE AT WINNERS',
    date: '2024-06-01',
    type: 'Inspirational',
    thumbnail: 'libration.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/THELIBERATIONCOMMISSIONISSTILLSPEAKINGHEREATWINNERS.pdf?v=2.3'
  },
  {
    id: 50,
    title: 'A PROPHETIC ALERT TO ALL WINNERS',
    date: '2024-06-01',
    type: 'Inspirational',
    thumbnail: 'Images/inspirational/alert.png',
    downloadUrl: 'https://faithtabernacle.org.ng/2024/APROPHETICALERTTOALLWINNERSJune92024.pdf?v=2.3'
  }
];

// Featured data (subset of downloadsData)
const featuredData = downloadsData.slice(0, 50);

// Active filters state
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

// Search bar functionality
const searchInput = document.getElementById('searchInput');
const clearBtn = document.querySelector('.clear-icon');

if (searchInput && clearBtn) {
  function clearSearch() {
    searchInput.value = '';
    searchInput.focus();
    clearBtn.style.opacity = '0';
    renderFilteredCards(); // Re-render both sections with no search query
    renderFeaturedCards();
  }

  clearBtn.addEventListener('click', clearSearch);

  searchInput.addEventListener('input', function () {
    clearBtn.style.opacity = this.value ? '1' : '0';
    renderFilteredCards(this.value.trim()); // Pass search query to filter recent cards
    renderFeaturedCards(this.value.trim()); // Pass search query to filter featured cards
  });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function () {
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

// Toggle Filters Button for Mobile
function setupFiltersToggleButton() {
  const filtersToggleBtn = document.querySelector(".filters-toggle-btn");
  const filterControls = document.querySelector(".filter-controls");

  if (filtersToggleBtn && filterControls) {
    filtersToggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isActive = filterControls.classList.contains("active");

      // Close all filter group dropdowns and reset visibility
      document.querySelectorAll(".filter-group").forEach((group) => {
        group.classList.remove("active");
        group.classList.remove("hidden"); // Reset visibility of all filter groups
      });

      // Toggle visibility of filter controls
      if (isActive) {
        this.classList.remove("active");
        filterControls.classList.remove("active");
      } else {
        this.classList.add("active");
        filterControls.classList.add("active");
        filterControls.scrollTop = 0; // Scroll to top
      }
    });

    // Close filter controls when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".filters-toggle-btn") &&
        !e.target.closest(".filter-controls") &&
        filterControls.classList.contains("active")
      ) {
        filtersToggleBtn.classList.remove("active");
        filterControls.classList.remove("active");
        document.querySelectorAll(".filter-group").forEach((group) => {
          group.classList.remove("active");
          group.classList.remove("hidden"); // Reset visibility
        });
      }
    });

    // Prevent filter-controls clicks from closing the dropdown
    filterControls.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
}
// Initialize filters
function initFilters() {
  const allDates = downloadsData.map((item) => new Date(item.date));
  const uniqueYears = [...new Set(allDates.map((date) => date.getFullYear()))].sort(
    (a, b) => b - a
  );
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  document.querySelectorAll('.year-select').forEach((select) => {
    select.innerHTML = '<option value="">All Years</option>';
    uniqueYears.forEach((year) => {
      select.innerHTML += `<option value="${year}">${year}</option>`;
    });
  });

  document.querySelectorAll('.month-select').forEach((select) => {
    select.innerHTML = '<option value="">All Months</option>';
    monthNames.forEach((month, index) => {
      select.innerHTML += `<option value="${index}">${month}</option>`;
    });
  });

  setupFilterButtons();
}

// Set up filter buttons and dropdowns
function setupFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const filterType = this.dataset.type;
      activeFilters.currentType = filterType;

      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      document.querySelectorAll('.filter-group').forEach((group) => {
        if (group !== this.parentElement) {
          group.classList.remove('active');
        }
      });
      this.parentElement.classList.toggle('active');

      updateDateSelects();
      renderFilteredCards(searchInput ? searchInput.value.trim() : '');
      renderFeaturedCards(searchInput ? searchInput.value.trim() : '');
      updateScrollButtons();

      e.stopPropagation();
    });
  });

  document.querySelectorAll('.filter-group').forEach((group) => {
    const type = group.querySelector('.filter-btn').dataset.type;
    const yearSelect = group.querySelector('.year-select');
    const monthSelect = group.querySelector('.month-select');

    yearSelect.addEventListener('change', () => {
      activeFilters.dateFilters[type].year = yearSelect.value;
      activeFilters.dateFilters[type].month = '';
      monthSelect.value = '';
      if (type === activeFilters.currentType) {
        renderFilteredCards(searchInput ? searchInput.value.trim() : '');
        renderFeaturedCards(searchInput ? searchInput.value.trim() : '');
        updateScrollButtons();
      }
    });

    monthSelect.addEventListener('change', () => {
      activeFilters.dateFilters[type].month = monthSelect.value;
      if (type === activeFilters.currentType) {
        renderFilteredCards(searchInput ? searchInput.value.trim() : '');
        renderFeaturedCards(searchInput ? searchInput.value.trim() : '');
        updateScrollButtons();
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-group') && !e.target.closest('.dropdown-menu')) {
      document.querySelectorAll('.filter-group').forEach((group) => {
        group.classList.remove('active');
      });
    }
  });

  document.querySelectorAll('.year-select, .month-select').forEach((select) => {
    select.addEventListener('mousedown', function (e) {
      e.stopPropagation();
    });
  });
}

// Update date select values
function updateDateSelects() {
  const currentType = activeFilters.currentType;
  const { year, month } = activeFilters.dateFilters[currentType];

  document.querySelectorAll('.filter-group').forEach((group) => {
    const groupType = group.querySelector('.filter-btn').dataset.type;
    if (groupType === currentType) {
      group.querySelector('.year-select').value = year || '';
      group.querySelector('.month-select').value = month || '';
    }
  });
}

// Render filtered cards for recent documents
function renderFilteredCards(searchQuery = '') {
  const scroller = document.getElementById('downloads-scroller');
  if (!scroller) {
    console.error("Cannot render cards: 'downloads-scroller' element not found.");
    return;
  }

  const currentType = activeFilters.currentType;
  const { year, month } = activeFilters.dateFilters[currentType];

  let filtered = downloadsData.filter((item) => {
    // Apply type filter
    if (currentType !== 'all' && item.type !== currentType) return false;

    // Apply date filters
    const itemDate = new Date(item.date);
    if (year && itemDate.getFullYear() != year) return false;
    if (month !== '' && itemDate.getMonth() != month) return false;

    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
      );
    }

    return true;
  });

  scroller.innerHTML = '';

  if (filtered.length === 0) {
    scroller.innerHTML = '<p class="no-results">No matching documents found</p>';
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'download-card';
    card.innerHTML = `
      <img src="${item.thumbnail}">
      <div class="card-content">
        <h4>${item.title}</h4>
        <small>${new Date(item.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</small>
      </div>
      <div class="card-actions">
        <button class="action-btn download-btn" data-url="${item.downloadUrl}" target="_blank">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
        <button class="action-btn share-btn" data-url="${item.downloadUrl}" target="_blank">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    `;
    scroller.appendChild(card);
  });

  setupButtonListeners();
}

// Render featured cards with search and filter support
function renderFeaturedCards(searchQuery = '') {
  const scroller = document.getElementById('featured-scroller');
  if (!scroller) {
    console.error("Cannot render featured cards: 'featured-scroller' element not found.");
    return;
  }

  const currentType = activeFilters.currentType;
  const { year, month } = activeFilters.dateFilters[currentType];

  let filtered = featuredData.filter((item) => {
    // Apply type filter
    if (currentType !== 'all' && item.type !== currentType) return false;

    // Apply date filters
    const itemDate = new Date(item.date);
    if (year && itemDate.getFullYear() != year) return false;
    if (month !== '' && itemDate.getMonth() != month) return false;

    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
      );
    }

    return true;
  });

  scroller.innerHTML = '';

  if (filtered.length === 0) {
    scroller.innerHTML = '<p class="no-results">No featured documents found</p>';
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'download-card';
    card.innerHTML = `
      <img src="${item.thumbnail}">
      <div class="card-content">
        <h4>${item.title}</h4>
        <small>${new Date(item.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</small>
      </div>
      <div class="card-actions">
        <button class="action-btn download-btn" data-url="${item.downloadUrl}" target="_blank">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
        <button class="action-btn share-btn" data-url="${item.downloadUrl}" target="_blank">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    `;
    scroller.appendChild(card);
  });

  setupButtonListeners();
}

function setupButtonListeners() {
  console.log('Setting up button listeners...'); // Debug log
  const downloadsScroller = document.getElementById('downloads-scroller');
  const featuredScroller = document.getElementById('featured-scroller');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  // Scroll buttons for recent documents
  if (downloadsScroller && leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => {
      downloadsScroller.scrollBy({ left: -200, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 300);
    });

    rightBtn.addEventListener('click', () => {
      downloadsScroller.scrollBy({ left: 200, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 300);
    });

    downloadsScroller.addEventListener('scroll', updateScrollButtons);
  }

  // Download button event delegation
  document.querySelectorAll('.download-btn').forEach((btn) => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener('click', function (e) {
      console.log('Download button clicked:', this); // Debug log
      e.preventDefault();
      const modal = document.getElementById('downloadModal');
      const modalSubtitle = document.getElementById('modalSubtitle');
      const modalThumbnail = document.getElementById('modalThumbnail');
      const addToLibraryBtn = document.getElementById('addToLibraryBtn');
      const downloadNowBtn = document.getElementById('downloadNowBtn');

      if (!modal || !modalSubtitle || !modalThumbnail || !addToLibraryBtn || !downloadNowBtn) {
        console.error('Modal elements missing for download', {
          modal: !!modal,
          modalSubtitle: !!modalSubtitle,
          modalThumbnail: !!modalThumbnail,
          addToLibraryBtn: !!addToLibraryBtn,
          downloadNowBtn: !!downloadNowBtn
        });
        return;
      }

      window.currentDownloadUrl = this.dataset.url;
      window.currentCardTitle = this.closest('.download-card').querySelector('h4').textContent;
      window.currentThumbnail = this.closest('.download-card').querySelector('img').src;
      window.currentDownloadBtn = this;

      if (!window.currentDownloadUrl || window.currentDownloadUrl === '#' || window.currentDownloadUrl.trim() === '') {
        alert(`Download link for "${window.currentCardTitle}" is not available or invalid.`);
        return;
      }

      downloadNowBtn.disabled = false;
      downloadNowBtn.innerHTML = '<i class="fas fa-download"></i> Download Now';
      addToLibraryBtn.disabled = false;
      addToLibraryBtn.innerHTML = '<i class="fas fa-book"></i> Add to Library';
      modalSubtitle.textContent = window.currentCardTitle;
      
      if (window.currentThumbnail) {
        modalThumbnail.src = window.currentThumbnail;
        modalThumbnail.style.display = 'block';
        modalThumbnail.alt = `Thumbnail for ${window.currentCardTitle}`;
      } else {
        modalThumbnail.style.display = 'none';
      }

      console.log('Showing modal...'); // Debug log
      modal.style.display = 'flex';
      console.log('Modal display style:', modal.style.display); // Debug log
    });
  });

  // Share button functionality
  document.querySelectorAll('.share-btn').forEach((btn) => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener('click', async function () {
      console.log('Share button clicked:', this); // Debug log
      const shareUrl = this.dataset.url;
      if (shareUrl && shareUrl !== '#' && shareUrl.trim() !== '') {
        const shareData = {
          title: 'Check out this resource',
          text: 'I found this resource helpful and wanted to share it with you',
          url: shareUrl,
        };

        if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
          try {
            await navigator.share(shareData);
            console.log('Resource shared successfully');
          } catch (err) {
            console.error('Share failed:', err);
            try {
              await navigator.clipboard.writeText(shareUrl);
              alert('Link copied to clipboard!');
            } catch (copyErr) {
              console.error('Clipboard copy failed:', copyErr);
              alert('Unable to share or copy the link. Please try again.');
            }
          }
        } else {
          try {
            await navigator.clipboard.writeText(shareUrl);
            alert('Link copied to clipboard!');
          } catch (copyErr) {
            console.error('Clipboard copy failed:', copyErr);
            alert('Unable to copy the link. Please try again.');
          }
        }
      } else {
        alert('Share link is not available or invalid.');
      }
    });
  });
}

// Function to add file to library (using localStorage)
function addToLibrary(title, url) {
  console.log('Adding to library:', title, url); 
  const library = JSON.parse(localStorage.getItem('documentLibrary')) || [];
  if (!library.some(item => item.url === url)) {
    library.push({ title, url });
    localStorage.setItem('documentLibrary', JSON.stringify(library));
    alert(`"${title}" has been added to your library.`);
  } else {
    alert(`"${title}" is already in your library.`);
  }
}

function initializeModalListeners() {
  console.log('Initializing modal listeners...'); // Debug log
  const modal = document.getElementById('downloadModal');
  const addToLibraryBtn = document.getElementById('addToLibraryBtn');
  const downloadNowBtn = document.getElementById('downloadNowBtn');
  const closeModalBtn = document.getElementById('modalClose');
  const modalSubtitle = document.getElementById('modalSubtitle');

  // Check for missing elements
  if (!modal || !addToLibraryBtn || !downloadNowBtn || !closeModalBtn || !modalSubtitle) {
    console.error('Modal elements not found:', {
      modal: !!modal,
      addToLibraryBtn: !!addToLibraryBtn,
      downloadNowBtn: !!downloadNowBtn,
      closeModalBtn: !!closeModalBtn,
      modalSubtitle: !!modalSubtitle
    });
    return;
  }

  // Handle "Add to Library" action
  addToLibraryBtn.addEventListener('click', () => {
    console.log('Add to Library clicked'); // Debug log
    addToLibrary(window.currentCardTitle, window.currentDownloadUrl);
    modal.style.display = 'none';
    window.currentDownloadBtn = null;
  });

  // Handle "Download Now" action
  downloadNowBtn.addEventListener('click', () => {
    console.log('Download Now clicked'); // Debug log
    modal.style.display = 'none';
    if (window.currentDownloadBtn) {
      downloadFile(window.currentDownloadUrl, window.currentCardTitle, window.currentDownloadBtn);
    }
    window.currentDownloadBtn = null;
  });

  // Close modal when clicking the close button
  closeModalBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling to modal
    console.log('Modal close button clicked'); // Debug log
    modal.style.display = 'none';
    window.currentDownloadBtn = null;
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      console.log('Clicked outside modal to close'); // Debug log
      modal.style.display = 'none';
      window.currentDownloadBtn = null;
    }
  });

  // Debug: Log when listeners are added
  console.log('Modal listeners initialized:', {
    closeModalBtn: closeModalBtn,
    modal: modal
  });
}

// Function to download file
function downloadFile(downloadUrl, cardTitle, button) {
  console.log('Opening URL:', downloadUrl, cardTitle); // Debug log
  if (!downloadUrl || downloadUrl === '#' || downloadUrl.trim() === '') {
    console.error('Invalid download URL:', downloadUrl);
    alert(`Download link for "${cardTitle}" is not available or invalid.`);
    return;
  }
  window.open(downloadUrl, '_blank');
  console.log(`Opened in new tab: ${cardTitle} (${downloadUrl})`);
}

// Update scroll button visibility
function updateScrollButtons() {
  const scroller = document.getElementById('downloads-scroller');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  if (!scroller || !leftBtn || !rightBtn) return;

  const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
  leftBtn.classList.toggle('disabled', scroller.scrollLeft <= 0);
  rightBtn.classList.toggle('disabled', scroller.scrollLeft >= maxScrollLeft - 1);
}