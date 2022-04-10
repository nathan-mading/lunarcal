# lunarcal

A calendar command used to print the Chinese Lunar calendar and national holidays of a specific month in terminal.

[简体中文](docs/README_zh.md)

## Install

**npm**
```
npm install -g lunarcal
```

**brew**
```
brew install lunarcal
```

## Usage
---
general usage
```
$ lunarcal [options] [<month> <year>]
```


```
$ lunarcal --help
```
```
  usage:
    $ lunarcal [options] [<month> <year>]
  options:
    --view,         -V   Calendar view, default month view, available options: [y, m, d, w, h]
    --update,       -u   Sync national holidays with the repo
    --version,      -v   Print lunarcal installed version
    --week-start,        Specify week start day. 0: Sunday, 1: Monday, 5: Saturday; default Monday
    --compact,      -c   Print compact calendar in month view.
    --border,       -b   Print calendar with solid border in month view.
  examples:
  #1 Print current month view (default) 
    $ lunarcal
  #2 Print day view
    $ lunarcal --view=d
  #3 Print specified month view of June 2022, with border and week starts on Saturday
    $ lunarcal 6 2022 -b --week-start=5
```

## Layout Preview
*Month View:*

<img src=assets/images/month-view.png width=240 height=220 alt="Demo Month View" />

*Day View:*

<img src=assets/images/day-view.png width=180 height=162 alt="Demo Day View" />


## Donations $
You like lunarcal and you would like to show your support and help developing new features in the next releases? 

Scan QR-code to **Buy me a coffee** will be much obliged!

_Wechat_

<img src=assets/images/donate-wechat.jpeg width=200 height=200 alt="Donate Wechat" />

_Alipay_

<img src=assets/images/donate-alipay.jpeg width=200 height=200 alt="Donate Alipay" />


