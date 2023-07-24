// JavaScript Document
//let myHeading = document.querySelector("h1");/*获取标题的引用，并把它储存在 myHeading 变量中*/
//myHeading.textContent = "Hello world!";/*把 myHeading 变量的属性 textContent （标题内容）修改为“Hello world!”*/
// 设置图片切换
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.png"){
	  myImage.setAttribute("src","images/firefox2.png");
  } else{
	  myImage.setAttribute("src","images/firefox.png");
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
//运行示例代码，弹出输入用户名的对话框，试着按下 取消 按钮。此时标题会显示为“Mozilla 酷毙了，null”。这是因为取消提示对话框后值将设置为 null，这是 JavaScript 中的一个特殊值，表示引用不存在。也可以不输入任何名字直接按 确认，你的标题会显示为“Mozilla 酷毙了，”，原因么显而易见。要避免这些问题，应该更新 setUserName() 来检查用户是否输入了 null 或者空名字。用人话说就是：如果 myName 没有值或值为 null，就再次从头运行setUserName()。如果有值（上面的表达式结果不为真），就把值存储到 localStorage 并且设置标题。
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}
/*function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla 酷毙了，" + myName;
}*///该函数首先调用了 prompt() 函数，与 alert() 类似会弹出一个对话框。但是这里需要用户输入数据，并在确定后将数据存储在 myName 变量里。接下来将调用 localStorage API，它可以将数据存储在浏览器中供后续获取。这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字。

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}/*使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在。若不存在，调用 setUserName() 创建。若存在（即用户上次访问时设置过），调用 getItem() 获取保存的名字*/

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
};/*第一次访问网页时，页面将询问用户名并发出一段个性化的信息。可随时点击按钮来改变用户名。告诉你一个额外的福利，因为用户名是保存在 localStorage 里的，网页关闭后也不会丢失，所以重新打开浏览器时所设置的名字信息将依然存在:)*/