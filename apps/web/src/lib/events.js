export const getEventImagesGlob = () => {
  return import.meta.glob('/src/assets/events/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, query: '?url' });
};

export function parseFolderName(folderName) {
  const parts = folderName.split('_');
  let year = '';
  let month = '';
  let nameParts = [];
  
  const monthMap = {
    jan: 'January', january: 'January',
    feb: 'February', february: 'February',
    mar: 'March', march: 'March',
    apr: 'April', april: 'April',
    may: 'May',
    jun: 'June', june: 'June',
    jul: 'July', july: 'July',
    aug: 'August', august: 'August',
    sep: 'September', september: 'September',
    oct: 'October', october: 'October',
    nov: 'November', november: 'November',
    dec: 'December', december: 'December'
  };

  parts.forEach(part => {
    const lower = part.toLowerCase();
    if (/^\d{4}$/.test(part)) {
      year = part;
    } else if (monthMap[lower]) {
      month = monthMap[lower];
    } else {
      nameParts.push(part.charAt(0).toUpperCase() + part.slice(1));
    }
  });

  if (!year) year = 'Unknown';
  
  let name = nameParts.join(' ');
  if (!name && month) {
    name = `${month} ${year}`;
  } else if (name) {
    name = `${name} ${year}`;
  } else if (!name && !month) {
    name = folderName;
  }

  return { year, month: month || 'Unknown', name };
}

export function getPastEventsData() {
  const eventImagesGlob = getEventImagesGlob();
  const rawEvents = {};

  for (const path in eventImagesGlob) {
    const parts = path.split('/');
    if (parts.length >= 2) {
      const folderName = parts[parts.length - 2];
      
      // ignore if it's directly in /src/assets/events (no subfolder)
      if (parts[parts.length - 3] === 'events' && parts[parts.length - 4] === 'assets') {
        if (!rawEvents[folderName]) {
          rawEvents[folderName] = { images: [] };
        }
        const url = eventImagesGlob[path].default || eventImagesGlob[path];
        rawEvents[folderName].images.push(url);
      }
    }
  }

  const pastEventsDataObj = {};
  for (const folderName in rawEvents) {
    const { year, month, name } = parseFolderName(folderName);
    
    if (!pastEventsDataObj[year]) {
      pastEventsDataObj[year] = { year, events: [] };
    }
    
    pastEventsDataObj[year].events.push({
      month,
      name,
      images: rawEvents[folderName].images
    });
  }

  return Object.values(pastEventsDataObj)
    .sort((a, b) => {
      if (a.year === 'Unknown') return 1;
      if (b.year === 'Unknown') return -1;
      return b.year.localeCompare(a.year);
    });
}

export function getAllEventsFlat() {
  const data = getPastEventsData();
  const flat = [];
  data.forEach(yearGroup => {
    yearGroup.events.forEach(ev => flat.push(ev));
  });
  return flat;
}
