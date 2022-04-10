
import { Lunar } from 'lunar-javascript';
import dayjs from 'dayjs';
import Table from 'tty-table';
import { style } from 'tty-table';

import ASCII_NUMBERS from '../../utils/AsciiNumbers';

const COLORS = {
  HOLIDAY: 'bgGreen',
  WORKDAY: 'bgRed',
  TODAY: 'cyanBright',
  WEEKENDS_HEADER: 'red',
  JIEQI: 'magentaBright',
  LUNAR_MONTH: 'blue',
};

const WEEKDAY_NAME = ['日', '一', '二', '三', '四', '五', '六'];

const alignCenter = (txt, width) => {
  return txt.split('\n').map(l => {
    let space = '';
    let padding = Math.floor((width - l.length) / 2);
    while (padding-- > 0) {
      space += ' ';
    }
    const nl = space + l + space;
    return nl;
  }).join('\n');
}

const viewWidth = 20;
const renderDay = () => {
  const d = new Date();
  let s = '';
  const title = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 星期${WEEKDAY_NAME[d.getDay()]}`;
  s += style(title, 'blue', 'bold');
  s += '\n'

  const asciiDate = ASCII_NUMBERS[d.getDate()];
  s += style(alignCenter(asciiDate, viewWidth), 'bgYellow', 'bold');
  s += '\n'
  var lunar = Lunar.fromDate(d);
  const lunarText = `${lunar.getYearInGanZhi()}（${lunar.getYearShengXiao()}）年 ${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;
  s += style(lunarText, 'magenta', 'bold');

  const t = Table([[s]], {
    borderStyle: "solid",
    compact: true,
    align: "center",
    color: "white",
    marginTop: 0,
    marginLeft: 0
  })
  console.log(t.render());
}



export default renderDay