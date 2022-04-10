# lunarcal

命令行工具用于展示指定月份的农历、节气以及法定节假日等.

[English](../README.md)

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

## 预览
---
*月视图:*

<img src=../assets/images/month-view.png width=240 height=220 alt=Demo Month View />

*日视图:*

<img src=../assets/images/day-view.png width=180 height=162 alt=Demo Day View />


## 捐助￥
You like lunarcal and you would like to show your support and help developing new features in the next releases? 

**请我喝杯咖啡**, 万分感谢！

_微信赞赏码_

<img src=../assets/images/donate-wechat.jpeg width=200 height=200 alt="Donate Wechat" />

_支付宝_

<img src=../assets/images/donate-alipay.jpeg width=200 height=200 alt="Donate Alipay" />
