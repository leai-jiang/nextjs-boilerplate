// 用于批量将 Tailwind spacing/size 类替换为像素写法的 Node.js 脚本
// 用法：node scripts/tailwind-px-to-arbitrary.js

const fs = require('fs');
const path = require('path');

// Tailwind spacing/size 对应表
const tailwindPxMap = {
  '0': 0,
  '0.5': 2,
  '1': 4,
  '1.5': 6,
  '2': 8,
  '2.5': 10,
  '3': 12,
  '3.5': 14,
  '4': 16,
  '5': 20,
  '6': 24,
  '7': 28,
  '8': 32,
  '9': 36,
  '10': 40,
  '11': 44,
  '12': 48,
  '14': 56,
  '16': 64,
  '20': 80,
  '24': 96,
  '28': 112,
  '32': 128,
  '36': 144,
  '40': 160,
  '44': 176,
  '48': 192,
  '52': 208,
  '56': 224,
  '60': 240,
  '64': 256,
  '72': 288,
  '80': 320,
  '96': 384,
};

// 匹配 Tailwind spacing/size 类的正则
const classRegex = new RegExp(
  String.raw`(?<=class(Name)?=\"[^\"]*)\b((?:[phmw][xytrbl]?|gap|mb|mt|ml|mr|pb|pt|pl|pr|px|py|w|h|min-h|min-w|max-h|max-w)-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96))\b`,'g'
);

// 递归查找所有 tsx/ts/js/jsx 文件
function walk(dir, exts = ['.tsx', '.ts', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, exts));
    } else if (exts.includes(path.extname(file))) {
      results.push(filePath);
    }
  });
  return results;
}

// 替换函数
function replaceClasses(content) {
  return content.replace(classRegex, (match, p1, p2, p3) => {
    // p2: 类名如 h-8
    // p3: 数值如 8
    const [prefix, num] = p2.split('-');
    const px = tailwindPxMap[num];
    if (typeof px === 'undefined') return match;
    return `${prefix}-[${px}px]`;
  });
}

// 主程序
const files = walk(path.join(__dirname, '../app'));
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const replaced = replaceClasses(content);
  if (content !== replaced) {
    fs.writeFileSync(file, replaced, 'utf8');
    console.log('Replaced:', file);
  }
});

console.log('批量替换完成！');
