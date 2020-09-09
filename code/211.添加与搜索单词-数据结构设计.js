
/*
*
如果数据结构中有任何与word匹配的字符串，则bool search（word）返回true，否则返回false。 单词可能包含点“。” 点可以与任何字母匹配的地方。

请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

实现词典类 WordDictionary ：

WordDictionary() 初始化词典对象
void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；
否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。
*/

function WordDictionary () {
  // 模拟Map  用word的长度来作为key, 
  // 如果有相同长度的字符，可以快速归类查找
  this.words = {}
}

WordDictionary.prototype.addWord = function (word) {
  if (!this.words[word.length]) {
    this.words[word.length] = [word]
  } else {
    this.words[word.length].push(word)
  }
}

WordDictionary.prototype.search = function (word) {
  if (!this.words[word.length]) {
    return false
  }
  // 普通字符串
  if (!word.includes('.')) {
    return this.words[word.length].includes(word)
  }

  // 否则创建一个正则表达式
  const reg = new RegExp(word)
  return this.words[word.length].some((item) => {
    return reg.test(item)
  })
}

const directory = new WordDictionary()
directory.addWord('abc')
directory.addWord('cdefg')
directory.addWord('hjk')

console.log(directory.search('c'))
console.log(directory.search('.fg'))
console.log(directory.search('.jk'))
console.log(directory.search('abc'))


