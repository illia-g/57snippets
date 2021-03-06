/**
 * Сниппеты кода на чистом JS, без фреймворков
 *
 */


// Получить текущий год
new Date().getFullYear();

// хеш страницы
window.location.hash.substring(1);

// Добавить перемешивание к массиву
Array.prototype.shuffle = function() {
   var i = this.length;
   while (--i) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = this[i];
      this[i] = this[j];
      this[j] = temp;
   }

   return this;
};

// url decode на клиенте
var decode      = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };

// Удаление хеша из адреса
var loc = window.location.href;
  index = loc.indexOf('#');
if (index > 0) {
  window.location = loc.substring(0, index);
}


