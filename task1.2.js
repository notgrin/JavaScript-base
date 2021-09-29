"use strict";
/*
1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
*/

//es5
/*
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(newText) {
    if (newText.length > 0) {
        this.text = newText
    }
}

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    highlighted = false;

}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(newHighlighted) {
    if (this.highlighted == false) {
        highlighted = newHighlighted;
        newHighlighted = true;
    }
}

let a = new AttachedPost('Daniel', 'Speechless', '10.11.2019')
alert(console.log(a.highlighted))
*/


//es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(newText) {
        if (newText.length > 0) {
            this.text = newText
        }
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        highlighted = false
    }

    makeTextHighlighted(newHighlighted) {
        if (this.highlighted == false) {
            newHighlighted = true;
            highlighted = newHighlighted;
        }
    }
}

let a = new Post('Daniel', 'Speechless', '10.11.2019')
let b = new AttachedPost('Daniel', 'Speechless', '10.11.2019')
