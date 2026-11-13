(function () {
  'use strict';

  const I18N = {
    zh: {
      appTitle: 'LODA 门店地图',
      pageTitle: 'LODA 门店地图 | Branch Map',
      loading: '正在加载网点数据…',
      waitData: '门店数据正在清洗同步中（data/branches.json 尚未就绪），就绪后刷新即可查看。',
      locate: '离我最近',
      pickPoint: '地图选点',
      pickHint: '请在地图上点击任意位置，按该点计算最近门店',
      cancel: '取消',
      tabMap: '地图',
      tabList: '门店列表',
      searchPlaceholder: '搜索仓名 / 编码 / 邮编 / 业务员 / 电话…',
      allProvinces: '全部省份',
      branchCount: (n, total) => (n === total ? `共 ${n} 个站点` : `显示 ${n} / ${total} 个站点`),
      subSummary: (n, provCount) => `${n} 个网点 · ${provCount} 个省市`,
      refActive: '已按距离排序',
      clearRef: '清除定位',
      noResults: '没有匹配的门店，请尝试调整省份或搜索关键词。',
      noCoord: '暂无坐标',
      detailBtn: '详情',
      navBtn: '导航',
      openGmap: '打开 Google 地图',
      copyCoord: '复制经纬度',
      copied: '已复制经纬度',
      copyFail: '复制失败，请手动复制',
      zoomTip: '点击查看大图',
      noPhotoText: '门头图片暂未展示（待补图）',
      locateFail: '无法获取当前位置，可使用「地图选点」计算距离',
      labels: {
        contact: '联系方式',
        salesman: '业务员代码',
        mapLink: '地图链接',
        coords: '经纬度',
        postal: 'Postal Code',
        openLink: '点击打开地图'
      }
    },
    km: {
      appTitle: 'ផែនទីសាខា LODA',
      pageTitle: 'ផែនទីសាខា LODA | Branch Map',
      loading: 'កំពុងផ្ទុកទិន្នន័យសាខា…',
      waitData: 'ទិន្នន័យសាខាកំពុងរៀបចំ (data/branches.json មិនទាន់រួចរាល់)។',
      locate: 'ជិតខ្ញុំបំផុត',
      pickPoint: 'ជ្រើសលើផែនទី',
      pickHint: 'សូមចុចលើទីតាំងណាមួយលើផែនទី ដើម្បីគណនាសាខាជិតបំផុត',
      cancel: 'បោះបង់',
      tabMap: 'ផែនទី',
      tabList: 'បញ្ជីសាខា',
      searchPlaceholder: 'ស្វែងរកឈ្មោះឃ្លាំង / កូដ / លេខប្រៃសណីយ៍ / លេខទូរស័ព្ទ…',
      allProvinces: 'ខេត្ត/ក្រុងទាំងអស់',
      branchCount: (n, total) => (n === total ? `សរុប ${n} សាខា` : `បង្ហាញ ${n} / ${total} សាខា`),
      subSummary: (n, provCount) => `${n} សាខា · ${provCount} ខេត្ត/រាជធានី`,
      refActive: 'តម្រៀបតាមចម្ងាយ',
      clearRef: 'លុបទីតាំង',
      noResults: 'រកមិនឃើញសាខាដែលត្រូវគ្នាទេ។',
      noCoord: 'គ្មានកូអរដោនេ',
      detailBtn: 'ព័ត៌មាន',
      navBtn: 'នាំផ្លូវ',
      openGmap: 'បើកក្នុង Google Maps',
      copyCoord: 'ចម្លងកូអរដោនេ',
      copied: 'បានចម្លងកូអរដោនេ',
      copyFail: 'មិនអាចចម្លងបានទេ',
      zoomTip: 'ចុចដើម្បីមើលរូបធំ',
      noPhotoText: 'មិនទាន់មានរូបភាពមុខសាខា',
      locateFail: 'មិនអាចទាញទីតាំងបានទេ សូមប្រើ «ជ្រើសលើផែនទី»',
      labels: {
        contact: 'ទំនាក់ទំនង',
        salesman: 'ផ្នែកអ្នកលក់',
        mapLink: 'តំណភ្ជាប់ផែនទី',
        coords: 'រយៈទទឹង / រយៈបណ្តោយ',
        postal: 'Postal Code',
        openLink: 'បើកតំណភ្ជាប់ផែនទី'
      }
    },
    en: {
      appTitle: 'LODA Branch Map',
      pageTitle: 'LODA Branch Map',
      loading: 'Loading branches…',
      waitData: 'Branch dataset is still being prepared (data/branches.json not ready yet).',
      locate: 'Nearest',
      pickPoint: 'Pick Point',
      pickHint: 'Click anywhere on the map to find the nearest branches',
      cancel: 'Cancel',
      tabMap: 'Map',
      tabList: 'Branches',
      searchPlaceholder: 'Search branch / code / postal / salesman / phone…',
      allProvinces: 'All Provinces',
      branchCount: (n, total) => (n === total ? `${n} branches` : `${n} of ${total} branches`),
      subSummary: (n, provCount) => `${n} branches · ${provCount} provinces`,
      refActive: 'Sorted by distance',
      clearRef: 'Clear pin',
      noResults: 'No matching branches found.',
      noCoord: 'No coordinates',
      detailBtn: 'Details',
      navBtn: 'Navigate',
      openGmap: 'Open in Google Maps',
      copyCoord: 'Copy Coordinates',
      copied: 'Coordinates copied',
      copyFail: 'Copy failed',
      zoomTip: 'Click to enlarge',
      noPhotoText: 'Storefront photo pending',
      locateFail: 'Location unavailable. Try "Pick Point" on map.',
      labels: {
        contact: 'Contact',
        salesman: 'Saleman',
        mapLink: 'Map Link',
        coords: 'Coordinates',
        postal: 'Postal Code',
        openLink: 'Open Google Maps'
      }
    }
  };

  const state = {
    lang: 'zh',
    branches: [],
    filtered: [],
    selectedProvinces: new Set(), // empty = all
    search: '',
    selectedId: null,
    refPoint: null, // { lat, lon }
    pickMode: false,
    mobileView: 'map',
    map: null,
    clusterGroup: null,
    markersById: new Map(),
    refMarker: null
  };

  // DOM refs
  const el = {
    brandTitle: document.getElementById('brandTitle'),
    brandSub: document.getElementById('brandSub'),
    btnLocate: document.getElementById('btnLocate'),
    lblLocate: document.getElementById('lblLocate'),
    btnPickPoint: document.getElementById('btnPickPoint'),
    lblPickPoint: document.getElementById('lblPickPoint'),
    pickBanner: document.getElementById('pickBanner'),
    lblPickHint: document.getElementById('lblPickHint'),
    btnCancelPick: document.getElementById('btnCancelPick'),
    provinceChips: document.getElementById('provinceChips'),
    tabMap: document.getElementById('tabMap'),
    tabList: document.getElementById('tabList'),
    lblTabMap: document.getElementById('lblTabMap'),
    lblTabList: document.getElementById('lblTabList'),
    sidebar: document.getElementById('sidebar'),
    mapPane: document.getElementById('mapPane'),
    searchInput: document.getElementById('searchInput'),
    btnClearSearch: document.getElementById('btnClearSearch'),
    resultCount: document.getElementById('resultCount'),
    refStatus: document.getElementById('refStatus'),
    branchList: document.getElementById('branchList'),
    miniBar: document.getElementById('miniBar'),
    miniBarClickable: document.getElementById('miniBarClickable'),
    miniAvatarWrap: document.getElementById('miniAvatarWrap'),
    miniTitle: document.getElementById('miniTitle'),
    miniSub: document.getElementById('miniSub'),
    btnMiniDetail: document.getElementById('btnMiniDetail'),
    btnMiniNav: document.getElementById('btnMiniNav'),
    btnCloseMini: document.getElementById('btnCloseMini'),
    detailModal: document.getElementById('detailModal'),
    btnCloseModal: document.getElementById('btnCloseModal'),
    detailPhotoBox: document.getElementById('detailPhotoBox'),
    detailProvinceBadge: document.getElementById('detailProvinceBadge'),
    detailTitle: document.getElementById('detailTitle'),
    detailFields: document.getElementById('detailFields'),
    detailNavBtn: document.getElementById('detailNavBtn'),
    detailCopyCoordBtn: document.getElementById('detailCopyCoordBtn'),
    lightbox: document.getElementById('lightbox'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    btnCloseLightbox: document.getElementById('btnCloseLightbox'),
    toast: document.getElementById('toast')
  };

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function showToast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.remove('hidden');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.toast.classList.add('hidden'), 2200);
  }

  function getBranchId(b, idx) {
    return b.id ? String(b.id) : `${b.code || 'branch'}_${idx}`;
  }

  function hasValidCoord(b) {
    return Number.isFinite(b.lat) && Number.isFinite(b.lon) && !(b.lat === 0 && b.lon === 0);
  }

  function hasUsablePhoto(b) {
    if (!b.image) return false;
    if (b.photo_status && b.photo_status !== 'ok') return false;
    return true;
  }

  // Title rule:
  // km & en => Khmer name + "-" + code (fallback to Chinese name)
  // zh      => Chinese name + "-" + code (fallback to Khmer name)
  function getBranchTitle(b, lang = state.lang) {
    const code = (b.code || '').trim();
    const kmName = (b.name_km || '').trim();
    const zhName = (b.name_zh || '').trim();
    let base = '';
    if (lang === 'zh') {
      base = zhName || kmName || code;
    } else {
      base = kmName || zhName || code;
    }
    if (code && base && base !== code) {
      return `${base}-${code}`;
    }
    return base || code || '-';
  }

  function getProvinceKey(b) {
    return (b.province_zh || b.province_en || b.province_km || '其他').trim();
  }

  function getProvinceLabel(b, lang = state.lang) {
    if (lang === 'km') return (b.province_km || b.province_zh || b.province_en || '').trim();
    if (lang === 'en') return (b.province_en || b.province_km || b.province_zh || '').trim();
    return (b.province_zh || b.province_en || b.province_km || '').trim();
  }

  function getMapsUrl(b) {
    if (b.maps_url && b.maps_url.trim()) return b.maps_url.trim();
    if (hasValidCoord(b)) {
      return `https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lon}`;
    }
    return '';
  }

  function haversineKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function formatDistance(km) {
    if (!Number.isFinite(km)) return '';
    if (km < 1) return `${Math.round(km * 1000)} m`;
    return `${km.toFixed(km < 10 ? 2 : 1)} km`;
  }

  function getAvatarSrc(b) {
    if (b.avatar && b.avatar.trim()) return b.avatar.trim();
    return './assets/loda-logo.png';
  }

  function renderAvatarHtml(b, sizeClass = '') {
    const label = escapeHtml(getBranchTitle(b));
    const fallbackText = escapeHtml((b.code || 'L').slice(0, 3));
    const src = escapeHtml(getAvatarSrc(b));
    const isDefault = !b.avatar || !b.avatar.trim();
    const extraStyle = isDefault ? ' style="object-fit:contain;background:#ffffff;padding:4px"' : '';
    return `<img src="${src}" alt="${label}" loading="lazy"${extraStyle} onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'avatar-placeholder',textContent:'${fallbackText}'}))" />`;
  }

  function initMap() {
    state.map = L.map('map', {
      center: [12.15, 104.92], // Cambodia center
      zoom: 7,
      zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(state.map);

    if (typeof L.markerClusterGroup === 'function') {
      state.clusterGroup = L.markerClusterGroup({
        maxClusterRadius: 42,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        disableClusteringAtZoom: 15
      });
    } else {
      state.clusterGroup = L.layerGroup();
    }
    state.map.addLayer(state.clusterGroup);

    state.map.on('click', (e) => {
      if (!state.pickMode) return;
      setReferencePoint(e.latlng.lat, e.latlng.lng);
      setPickMode(false);
    });
  }

  function createPinIcon(branch, isActive) {
    const cls = [
      'pin-dot',
      hasUsablePhoto(branch) ? 'has-photo' : 'no-photo',
      isActive ? 'active-pin' : ''
    ]
      .filter(Boolean)
      .join(' ');
    const title = escapeHtml(getBranchTitle(branch));
    const labelHtml = isActive ? `<div class="pin-label">${title}</div>` : '';
    return L.divIcon({
      className: 'custom-pin',
      html: `<div style="position:relative">${labelHtml}<div class="${cls}"></div></div>`,
      iconSize: isActive ? [34, 34] : [26, 26],
      iconAnchor: isActive ? [17, 34] : [13, 26]
    });
  }

  function normalizeBranches(raw) {
    const list = Array.isArray(raw) ? raw : Array.isArray(raw?.branches) ? raw.branches : [];
    return list.map((item, idx) => {
      const lat = item.lat !== undefined && item.lat !== null && item.lat !== '' ? Number(item.lat) : NaN;
      const lonRaw = item.lon !== undefined ? item.lon : item.lng;
      const lon = lonRaw !== undefined && lonRaw !== null && lonRaw !== '' ? Number(lonRaw) : NaN;
      const b = {
        ...item,
        code: String(item.code ?? '').trim(),
        name_zh: String(item.name_zh ?? '').trim(),
        name_km: String(item.name_km ?? '').trim(),
        province_zh: String(item.province_zh ?? '').trim(),
        province_km: String(item.province_km ?? '').trim(),
        province_en: String(item.province_en ?? '').trim(),
        phone: String(item.phone ?? '').trim(),
        salesman: String(item.salesman ?? item.saleman ?? '').trim(),
        postal_code: String(item.postal_code ?? '').trim(),
        maps_url: String(item.maps_url ?? '').trim(),
        avatar: String(item.avatar ?? '').trim(),
        image: String(item.image ?? '').trim(),
        photo_status: String(item.photo_status ?? (item.image ? 'ok' : 'missing')).trim(),
        lat,
        lon
      };
      b._uid = getBranchId(b, idx);
      return b;
    });
  }

  async function loadData() {
    try {
      const res = await fetch('./data/branches.json', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      state.branches = normalizeBranches(data);
      renderAll();
      fitInitialBounds();
    } catch (err) {
      el.brandSub.textContent = I18N[state.lang].waitData;
      el.branchList.innerHTML = `<div class="empty-state">${escapeHtml(I18N[state.lang].waitData)}</div>`;
    }
  }

  function fitInitialBounds() {
    const coords = state.branches.filter(hasValidCoord).map((b) => [b.lat, b.lon]);
    if (coords.length > 0 && state.map) {
      state.map.fitBounds(L.latLngBounds(coords), { padding: [30, 30], maxZoom: 12 });
    }
  }

  function getProvinceGroups() {
    const map = new Map();
    for (const b of state.branches) {
      const key = getProvinceKey(b);
      if (!map.has(key)) {
        map.set(key, {
          key,
          zh: b.province_zh || key,
          km: b.province_km || key,
          en: b.province_en || key,
          count: 0
        });
      }
      map.get(key).count += 1;
    }
    const list = Array.from(map.values());
    list.sort((a, b) => {
      const isAPp = a.key.includes('金边') || a.en.toLowerCase().includes('phnom penh');
      const isBPp = b.key.includes('金边') || b.en.toLowerCase().includes('phnom penh');
      if (isAPp && !isBPp) return -1;
      if (!isAPp && isBPp) return 1;
      return b.count - a.count;
    });
    return list;
  }

  function renderProvinceChips() {
    const t = I18N[state.lang];
    const groups = getProvinceGroups();
    const isAll = state.selectedProvinces.size === 0;
    const parts = [];

    parts.push(
      `<button type="button" class="prov-chip ${isAll ? 'active' : ''}" data-prov="__ALL__">
        <span>${escapeHtml(t.allProvinces)}</span>
        <span class="chip-count">${state.branches.length}</span>
      </button>`
    );

    for (const g of groups) {
      const label = state.lang === 'km' ? g.km : state.lang === 'en' ? g.en : g.zh;
      const active = state.selectedProvinces.has(g.key);
      parts.push(
        `<button type="button" class="prov-chip ${active ? 'active' : ''}" data-prov="${escapeHtml(g.key)}">
          <span>${escapeHtml(label)}</span>
          <span class="chip-count">${g.count}</span>
        </button>`
      );
    }

    el.provinceChips.innerHTML = parts.join('');
    el.provinceChips.querySelectorAll('.prov-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-prov');
        if (key === '__ALL__') {
          state.selectedProvinces.clear();
        } else {
          if (state.selectedProvinces.has(key)) {
            state.selectedProvinces.delete(key);
          } else {
            state.selectedProvinces.add(key);
          }
        }
        renderProvinceChips();
        applyFilters(true);
      });
    });
  }

  function applyFilters(refitMap = false) {
    const q = state.search.trim().toLowerCase();
    let list = state.branches.filter((b) => {
      if (state.selectedProvinces.size > 0 && !state.selectedProvinces.has(getProvinceKey(b))) {
        return false;
      }
      if (!q) return true;
      const hay = [
        b.code,
        b.name_zh,
        b.name_km,
        b.province_zh,
        b.province_km,
        b.province_en,
        b.postal_code,
        b.salesman,
        b.phone
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });

    if (state.refPoint) {
      list = list
        .map((b) => ({
          branch: b,
          dist: hasValidCoord(b) ? haversineKm(state.refPoint.lat, state.refPoint.lon, b.lat, b.lon) : Infinity
        }))
        .sort((a, b) => a.dist - b.dist)
        .map((x) => {
          x.branch._distKm = x.dist;
          return x.branch;
        });
    } else {
      list.forEach((b) => {
        b._distKm = undefined;
      });
    }

    state.filtered = list;
    renderBranchList();
    renderMarkers();
    updateMetaText();

    if (refitMap) {
      const coords = list.filter(hasValidCoord).map((b) => [b.lat, b.lon]);
      if (coords.length > 0 && state.map) {
        state.map.fitBounds(L.latLngBounds(coords), { padding: [36, 36], maxZoom: 14 });
      }
    }
  }

  function updateMetaText() {
    const t = I18N[state.lang];
    el.resultCount.textContent = t.branchCount(state.filtered.length, state.branches.length);
    const provCount = getProvinceGroups().length;
    if (state.branches.length > 0) {
      el.brandSub.textContent = t.subSummary(state.branches.length, provCount);
    }
    if (state.refPoint) {
      el.refStatus.classList.remove('hidden');
      el.refStatus.innerHTML = `${escapeHtml(t.refActive)} · <a href="#" id="clearRefLink" style="color:inherit;text-decoration:underline">${escapeHtml(t.clearRef)}</a>`;
      const link = document.getElementById('clearRefLink');
      if (link) {
        link.addEventListener('click', (ev) => {
          ev.preventDefault();
          clearReferencePoint();
        });
      }
    } else {
      el.refStatus.classList.add('hidden');
      el.refStatus.textContent = '';
    }
  }

  function renderBranchList() {
    const t = I18N[state.lang];
    if (state.branches.length === 0) {
      el.branchList.innerHTML = `<div class="empty-state">${escapeHtml(t.waitData)}</div>`;
      return;
    }
    if (state.filtered.length === 0) {
      el.branchList.innerHTML = `<div class="empty-state">${escapeHtml(t.noResults)}</div>`;
      return;
    }

    const html = state.filtered
      .map((b) => {
        const selected = state.selectedId === b._uid ? 'selected' : '';
        const title = escapeHtml(getBranchTitle(b));
        const prov = escapeHtml(getProvinceLabel(b));
        const distHtml = Number.isFinite(b._distKm) ? `<span class="card-dist">${escapeHtml(formatDistance(b._distKm))}</span>` : '';
        const coordWarn = !hasValidCoord(b) ? `<span class="tag-pill tag-warn">${escapeHtml(t.noCoord)}</span>` : '';
        const phoneHtml = b.phone ? `<span class="tag-pill">${escapeHtml(b.phone)}</span>` : '';
        const postalHtml = b.postal_code ? `<span class="tag-pill">${escapeHtml(b.postal_code)}</span>` : '';

        return `
          <div class="branch-card ${selected}" data-uid="${escapeHtml(b._uid)}">
            <div class="card-avatar">${renderAvatarHtml(b)}</div>
            <div class="card-info">
              <div class="card-title-row">
                <div class="card-title" title="${title}">${title}</div>
                ${distHtml}
              </div>
              <div class="card-sub">
                <span class="tag-pill">${prov}</span>
                ${phoneHtml}
                ${postalHtml}
                ${coordWarn}
              </div>
            </div>
          </div>`;
      })
      .join('');

    el.branchList.innerHTML = html;
    el.branchList.querySelectorAll('.branch-card').forEach((card) => {
      card.addEventListener('click', () => {
        const uid = card.getAttribute('data-uid');
        const branch = state.filtered.find((x) => x._uid === uid) || state.branches.find((x) => x._uid === uid);
        if (branch) {
          selectBranchStep1(branch, true);
        }
      });
    });
  }

  function renderMarkers() {
    state.clusterGroup.clearLayers();
    state.markersById.clear();

    const markers = [];
    for (const b of state.filtered) {
      if (!hasValidCoord(b)) continue;
      const isActive = state.selectedId === b._uid;
      const marker = L.marker([b.lat, b.lon], {
        icon: createPinIcon(b, isActive),
        zIndexOffset: isActive ? 1000 : 0
      });

      // Two-step click on marker:
      // 1st click: select & show bottom mini bar (no popup blocking map)
      // 2nd click on already-selected marker: open full detail modal
      marker.on('click', () => {
        if (state.selectedId === b._uid) {
          openDetailModal(b);
        } else {
          selectBranchStep1(b, false);
        }
      });

      state.markersById.set(b._uid, marker);
      markers.push(marker);
    }

    if (typeof state.clusterGroup.addLayers === 'function') {
      state.clusterGroup.addLayers(markers);
    } else {
      markers.forEach((m) => state.clusterGroup.addLayer(m));
    }
  }

  function updateMarkerHighlights() {
    for (const [uid, marker] of state.markersById.entries()) {
      const b = state.filtered.find((x) => x._uid === uid);
      if (!b) continue;
      const isActive = uid === state.selectedId;
      marker.setIcon(createPinIcon(b, isActive));
      marker.setZIndexOffset(isActive ? 1000 : 0);
    }
  }

  // Step 1: Fly/focus on marker, highlight, show non-blocking bottom mini bar (no popup!)
  function selectBranchStep1(branch, switchMobileToMap = false) {
    state.selectedId = branch._uid;
    updateMarkerHighlights();

    // Update list card selection highlight
    el.branchList.querySelectorAll('.branch-card').forEach((card) => {
      card.classList.toggle('selected', card.getAttribute('data-uid') === branch._uid);
    });

    if (switchMobileToMap && window.innerWidth <= 820) {
      setMobileView('map');
    }

    if (hasValidCoord(branch) && state.map) {
      const marker = state.markersById.get(branch._uid);
      if (marker && typeof state.clusterGroup.zoomToShowLayer === 'function') {
        state.clusterGroup.zoomToShowLayer(marker, () => {
          state.map.flyTo([branch.lat, branch.lon], Math.max(state.map.getZoom(), 15), { duration: 0.45 });
        });
      } else {
        state.map.flyTo([branch.lat, branch.lon], 15, { duration: 0.45 });
      }
    }

    renderMiniBar(branch);
  }

  function renderMiniBar(branch) {
    const t = I18N[state.lang];
    el.miniAvatarWrap.innerHTML = renderAvatarHtml(branch);
    el.miniTitle.textContent = getBranchTitle(branch);

    const subParts = [getProvinceLabel(branch)];
    if (Number.isFinite(branch._distKm)) subParts.push(formatDistance(branch._distKm));
    if (branch.phone) subParts.push(branch.phone);
    if (!hasValidCoord(branch)) subParts.push(t.noCoord);
    el.miniSub.textContent = subParts.filter(Boolean).join(' · ');

    el.btnMiniDetail.textContent = t.detailBtn;
    el.btnMiniNav.textContent = t.navBtn;

    const mapsUrl = getMapsUrl(branch);
    if (mapsUrl) {
      el.btnMiniNav.href = mapsUrl;
      el.btnMiniNav.classList.remove('hidden');
    } else {
      el.btnMiniNav.classList.add('hidden');
    }

    el.miniBar.classList.remove('hidden');
  }

  function closeMiniBar() {
    state.selectedId = null;
    el.miniBar.classList.add('hidden');
    updateMarkerHighlights();
    el.branchList.querySelectorAll('.branch-card.selected').forEach((c) => c.classList.remove('selected'));
  }

  // Step 2: Open full detail modal
  function openDetailModal(branch) {
    const t = I18N[state.lang];
    const title = getBranchTitle(branch);
    el.detailProvinceBadge.textContent = getProvinceLabel(branch);
    el.detailTitle.textContent = title;

    if (hasUsablePhoto(branch)) {
      const src = escapeHtml(branch.image);
      el.detailPhotoBox.innerHTML = `
        <img id="detailPhotoImg" src="${src}" alt="${escapeHtml(title)}" />
        <span class="photo-zoom-tip">${escapeHtml(t.zoomTip)}</span>`;
      const imgEl = document.getElementById('detailPhotoImg');
      if (imgEl) {
        imgEl.addEventListener('click', () => openLightbox(branch.image, title));
        imgEl.addEventListener('error', () => {
          el.detailPhotoBox.innerHTML = `<div class="detail-photo-placeholder"><div class="ph-icon">🏪</div><div>${escapeHtml(t.noPhotoText)}</div></div>`;
        });
      }
    } else {
      el.detailPhotoBox.innerHTML = `
        <div class="detail-photo-placeholder">
          <div class="ph-icon">🏪</div>
          <div>${escapeHtml(t.noPhotoText)}</div>
        </div>`;
    }

    const mapsUrl = getMapsUrl(branch);
    const coordStr = hasValidCoord(branch) ? `${branch.lat}, ${branch.lon}` : '-';
    const labels = t.labels;

    const rows = [
      { label: labels.contact, value: branch.phone || '-' },
      { label: labels.salesman, value: branch.salesman || '-' },
      {
        label: labels.mapLink,
        html: mapsUrl
          ? `<a href="${escapeHtml(mapsUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(labels.openLink)} ↗</a>`
          : '-'
      },
      { label: labels.coords, value: coordStr },
      { label: labels.postal, value: branch.postal_code || '-' }
    ];

    el.detailFields.innerHTML = rows
      .map(
        (r) => `
        <div class="detail-row">
          <dt>${escapeHtml(r.label)}</dt>
          <dd>${r.html ? r.html : escapeHtml(r.value)}</dd>
        </div>`
      )
      .join('');

    el.detailNavBtn.textContent = t.openGmap;
    if (mapsUrl) {
      el.detailNavBtn.href = mapsUrl;
      el.detailNavBtn.classList.remove('hidden');
    } else {
      el.detailNavBtn.classList.add('hidden');
    }

    el.detailCopyCoordBtn.textContent = t.copyCoord;
    el.detailCopyCoordBtn.disabled = !hasValidCoord(branch);
    el.detailCopyCoordBtn.onclick = () => {
      if (!hasValidCoord(branch)) return;
      navigator.clipboard
        .writeText(coordStr)
        .then(() => showToast(t.copied))
        .catch(() => showToast(t.copyFail));
    };

    el.detailModal.classList.remove('hidden');
  }

  function closeDetailModal() {
    el.detailModal.classList.add('hidden');
  }

  function openLightbox(src, caption) {
    el.lightboxImg.src = src;
    el.lightboxImg.alt = caption;
    el.lightboxCaption.textContent = caption;
    el.lightbox.classList.remove('hidden');
  }

  function closeLightbox() {
    el.lightbox.classList.add('hidden');
    el.lightboxImg.src = '';
  }

  function setReferencePoint(lat, lon) {
    state.refPoint = { lat, lon };
    if (state.refMarker) {
      state.refMarker.setLatLng([lat, lon]);
    } else if (state.map) {
      state.refMarker = L.circleMarker([lat, lon], {
        radius: 8,
        color: '#ef4444',
        weight: 3,
        fillColor: '#ffffff',
        fillOpacity: 1
      }).addTo(state.map);
    }
    applyFilters(false);
    if (state.filtered.length > 0 && hasValidCoord(state.filtered[0])) {
      selectBranchStep1(state.filtered[0], false);
    }
  }

  function clearReferencePoint() {
    state.refPoint = null;
    if (state.refMarker && state.map) {
      state.map.removeLayer(state.refMarker);
      state.refMarker = null;
    }
    el.btnLocate.classList.remove('active');
    applyFilters(false);
  }

  function setPickMode(on) {
    state.pickMode = on;
    el.btnPickPoint.classList.toggle('active', on);
    el.pickBanner.classList.toggle('hidden', !on);
    if (state.map) {
      state.map.getContainer().style.cursor = on ? 'crosshair' : '';
    }
    if (on && window.innerWidth <= 820) {
      setMobileView('map');
    }
  }

  function setMobileView(view) {
    state.mobileView = view;
    el.tabMap.classList.toggle('active', view === 'map');
    el.tabList.classList.toggle('active', view === 'list');
    el.mapPane.classList.toggle('active-pane', view === 'map');
    el.sidebar.classList.toggle('active-pane', view === 'list');
    if (view === 'map' && state.map) {
      setTimeout(() => state.map.invalidateSize(), 120);
    }
  }

  function setLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    renderAll();
  }

  function renderAll() {
    const t = I18N[state.lang];
    document.title = t.pageTitle;
    el.brandTitle.textContent = t.appTitle;
    el.lblLocate.textContent = t.locate;
    el.lblPickPoint.textContent = t.pickPoint;
    el.lblPickHint.textContent = t.pickHint;
    el.btnCancelPick.textContent = t.cancel;
    el.lblTabMap.textContent = t.tabMap;
    el.lblTabList.textContent = t.tabList;
    el.searchInput.placeholder = t.searchPlaceholder;

    renderProvinceChips();
    applyFilters(false);

    if (state.selectedId) {
      const sel = state.branches.find((b) => b._uid === state.selectedId);
      if (sel) {
        renderMiniBar(sel);
        if (!el.detailModal.classList.contains('hidden')) {
          openDetailModal(sel);
        }
      }
    }
  }

  function bindEvents() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    el.searchInput.addEventListener('input', () => {
      state.search = el.searchInput.value;
      el.btnClearSearch.classList.toggle('hidden', !state.search);
      applyFilters(false);
    });

    el.btnClearSearch.addEventListener('click', () => {
      state.search = '';
      el.searchInput.value = '';
      el.btnClearSearch.classList.add('hidden');
      applyFilters(false);
    });

    el.btnLocate.addEventListener('click', () => {
      if (!navigator.geolocation) {
        showToast(I18N[state.lang].locateFail);
        return;
      }
      el.btnLocate.classList.add('active');
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setReferencePoint(pos.coords.latitude, pos.coords.longitude);
          if (state.map) state.map.setView([pos.coords.latitude, pos.coords.longitude], 13);
        },
        () => {
          el.btnLocate.classList.remove('active');
          showToast(I18N[state.lang].locateFail);
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    });

    el.btnPickPoint.addEventListener('click', () => setPickMode(!state.pickMode));
    el.btnCancelPick.addEventListener('click', () => setPickMode(false));

    el.tabMap.addEventListener('click', () => setMobileView('map'));
    el.tabList.addEventListener('click', () => setMobileView('list'));

    el.miniBarClickable.addEventListener('click', () => {
      const b = state.branches.find((x) => x._uid === state.selectedId);
      if (b) openDetailModal(b);
    });
    el.btnMiniDetail.addEventListener('click', () => {
      const b = state.branches.find((x) => x._uid === state.selectedId);
      if (b) openDetailModal(b);
    });
    el.btnCloseMini.addEventListener('click', closeMiniBar);

    el.btnCloseModal.addEventListener('click', closeDetailModal);
    el.detailModal.addEventListener('click', (e) => {
      if (e.target === el.detailModal) closeDetailModal();
    });

    el.btnCloseLightbox.addEventListener('click', closeLightbox);
    el.lightbox.addEventListener('click', (e) => {
      if (e.target === el.lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!el.lightbox.classList.contains('hidden')) closeLightbox();
        else if (!el.detailModal.classList.contains('hidden')) closeDetailModal();
        else if (state.pickMode) setPickMode(false);
      }
    });
  }

  initMap();
  bindEvents();
  setLanguage('zh');
  loadData();
})();
