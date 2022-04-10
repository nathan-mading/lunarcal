
import { SolarMonth, Solar, HolidayUtil } from 'lunar-javascript';
import Table from 'tty-table';
const style = Table.style;

const COLORS = {
  HOLIDAY: 'bgGreen',
  WORKDAY: 'bgRed',
  TODAY: 'bold',
  WEEKENDS_HEADER: 'red',
  JIEQI: 'magentaBright',
  LUNAR_MONTH: 'blue',
};

const WEEKSTARTS = {
  1: ['一', '二', '三', '四', '五', '六', '日'],
  0: ['日', '一', '二', '三', '四', '五', '六'],
  5: ['六', '日', '一', '二', '三', '四', '五'],
}
const WEEKENDS = ['六', '日'];
const CELL_WIDTH = 6;

const renderCell = (d) => {
  if (!d) {
    return '';
  }
  var s = d.getDay() + '';
  var h = HolidayUtil.getHoliday(d.toYmd());
  if (h) {
    var holidayTxt = h.isWork() ? '班' : '休';
    if (s.length == 1) {
      s += ' ';
    }
    s += style(holidayTxt, h.isWork() ? COLORS.WORKDAY : COLORS.HOLIDAY, "white");
  }
  s += '\n';
  var dl = d.getLunar();
  var jq = dl.getJieQi();
  if (jq) {
    s += `${style(jq, COLORS.JIEQI)}`;
  } else {
    if (1 == dl.getDay()) {
      var txt = dl.getMonthInChinese() + '月';
      s += `${style(txt, COLORS.LUNAR_MONTH)}`;
    } else {
      s += dl.getDayInChinese();
    }
  }
  return s;
}

const getTableHeaders = (weekStart = 0) => {
  const WEEK = WEEKSTARTS[weekStart] || WEEKSTARTS[1];
  return WEEK.map((day) => {
    return {
      value: day,
      width: CELL_WIDTH,
      headerColor: WEEKENDS.includes(day) ? COLORS.WEEKENDS_HEADER : "white",
      formatter: renderCell
    };
  });
}

const getWeeksInMonth = (year, month, weekStart = 0) => {
  // Note: JS month is 0 based
  const jsMonth = month - 1;
  const weeks = [],
    firstDate = new Date(year, jsMonth, 1),
    lastDate = new Date(year, jsMonth + 1, 0),
    numDays = lastDate.getDate();
  let dayOfWeekCounter = firstDate.getDay() - weekStart;
  for (let date = 1; date <= numDays; date++) {
    if (dayOfWeekCounter === 0 || weeks.length === 0) {
      weeks.push([]);
    }
    weeks[weeks.length - 1].push(date);
    dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
  }
  return weeks.filter((w) => !!w.length);
}

function getTableData(year, month, weekStart = 0) {
  const weeks = getWeeksInMonth(year, month, weekStart);
  const mm = SolarMonth.fromYm(year, month);
  const days = mm.getDays();
  const rows = weeks.map(w => {
    return w.map(i => days[i - 1]);
  });
  // fill empty date with zeros
  while (rows[0].length < 7) {
    rows[0].unshift(0);
  }
  while (rows[rows.length - 1].length < 7) {
    rows[rows.length - 1].push(0);
  }
  return rows;
}

const getTableWidth = (options) => {
  let colWidth = CELL_WIDTH;
  if (options.border) {
    colWidth += 1;
  }
  return colWidth * 7
}

const alignPadding = (txt, options) => {
  const width = getTableWidth(options)
  let str = ''
  let paddingCount = Math.floor((width - txt.length) / 2);
  while (paddingCount) {
    str += ' ';
    paddingCount--;
  }
  return str + txt;
}

const renderMonth = (options = { weekStart: 0 }, m, y) => {
  const headers = getTableHeaders(options.weekStart);
  const today = new Date();
  const monthToRender = m || today.getMonth() + 1; // convert JS month to natural month
  const yearToRender = y || today.getFullYear();

  const rows = getTableData(yearToRender, monthToRender, options.weekStart);
  const t = Table(headers, rows, {
    borderStyle: options.border ? "solid" : "none",
    compact: options.compact,
    align: "center",
    color: "white",
    marginTop: 0,
    marginLeft: 0
  })
  console.log('\n');
  console.log(alignPadding(SolarMonth.fromYm(yearToRender, monthToRender).toFullString(), options));
  console.log(t.render())
}

export default renderMonth