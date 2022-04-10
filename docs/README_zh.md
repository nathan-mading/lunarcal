# lunarcal

命令行工具用于展示指定月份的农历、节气以及法定节假日等.

[English](../README.md)

<img src=demo.png width=300 height=300 alt=示例图 />

## 安装

**npm**
```
npm install -g lunarcal
```

**brew**
```
brew install lunarcal
```

## 使用
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