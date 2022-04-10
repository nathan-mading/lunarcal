# lunarcal

A calendar command used to print the Chinese Lunar calendar and national holidays of a specific month in terminal.

[简体中文](docs/README_zh.md)

<img src=docs/demo.png width=300 height=300 alt=Demo />

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