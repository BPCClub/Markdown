const DESC = 'enter description here';

export const OPTION = Object.freeze({
  BOLD: "bold",
  ITALIC: "italic",
  SIZE: "type",
  STRIKE: "minus",
  LIST: "list",
  CHECK_BOX: "check-square",
  BLOCK_QUOTE: "chevron-right",
  CODE: "code",
  TABLE: "columns",
  LINK: "link",
  IMAGE: "image"
})
const END_QUOTES = "```"

export const TOOLBAR = Object.freeze({
  [OPTION.BOLD]: {
    text: "粗体 Ctrl+Shift+B",
    startTag: "**",
    endTag: "**"
  },
  [OPTION.ITALIC]: {
    text: "斜体 Ctrl+Shift+I",
    startTag: "*",
    endTag: "*"
  },
  [OPTION.SIZE]: {
    text: "标题 Ctrl+Shift+H",
    startTag: "#"
  },
  [OPTION.STRIKE]: {
    text: "删除线 Ctrl+Shift+S",
    startTag: "~~",
    endTag: "~~"
  },
  [OPTION.LIST]: {
    text: "无序列表 Ctrl+Shift+L",
    startTag: "- "
  },
  [OPTION.CHECK_BOX]: {
    text: "任务列表 Ctrl+Shift+C",
    startTag: "- [ ] "
  },
  [OPTION.BLOCK_QUOTE]: {
    text: "引用 Ctrl+Shift+Q",
    startTag: "> "
  },
  [OPTION.CODE]: {
    text: "代码块 Ctrl+Shift+D",
    startTag: '```javascript ',
    endTag: END_QUOTES
  },
  [OPTION.TABLE]: {
    text: "表格 Ctrl+Shift+T",
    startTag:
      `| Name | Heading |
|--|--|
| Foo  | Bar |`
  },
  [OPTION.LINK]: {
    text: "链接 Ctrl+Shift+K",
    startTag: `[${DESC}](`,
    endTag: ")"
  },
  [OPTION.IMAGE]: {
    text: "图片 Ctrl+Shift+G",
    startTag: `![${DESC}](`,
    endTag: ")"
  }
});

export const SAMPLE =
  `
Markdown [基础语法](https://s2m.dev/markdown/basic-grammar) ，[额外语法](https://s2m.dev/markdown/extra-grammar)

# 一级标题
## 二级标题
### 三级标题

换行需要空行
紧贴

空行

在 *Markdown* 中的文本一般情况下不进行缩进，所有文本默认。

*斜体* **粗体** ***粗斜体***

链接：<https://shift2modern.dev>

[Shift2Modern](https://shift2modern.dev)

[Shift2Modern2][1]

[1]: https://shift2modern.dev

![](https://r2.shift2modern.dev/shi-sheng-o_Zjjv2PJ9o-unsplash.jpg)

> 引用
>> 嵌套引用

| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

---

- 无序列表
- 无序列表
- 无序列表

1. 有序列表
2. 有序列表
3. 有序列表

  `;
