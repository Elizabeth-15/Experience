// Типы данных
// number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
// bigint для целых чисел произвольной длины.
// string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean для true/false.
// null для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// symbol для уникальных идентификаторов.
// И один не является «примитивным» и стоит особняком:
// object для более сложных структур данных.

// В чем разница между null и undefined
// undefined - часто указывает на ошибку или непреднамеренное отсутствие значения.
// null - обычно используется для намеренного указания на отсутствие значения.

// Разница между == и ===
// ==
// сравнивает значения с приведением типов. Это означает, что перед сравнением JavaScript пытается привести операнды к одному типу.
// Если типы операндов различаются, они будут преобразованы. Например, строка может быть преобразована в число или наоборот.

// ===
// сравнивает значения без приведения типов (строгое сравнение).
// для того чтобы оператор === вернул true, оба операнда должны быть одного и того же типа и иметь одно и то же значение.

// Переменные
// var: функциональная область видимости, переприсваивание разрешено.
// let: блочная область видимости, переприсваивание разрешено.
// const: блочная область видимости, переприсваивание запрещено.


// ===================================================

// Логические операторы || && ! !!

// let hour = 12;
// let minute = 30;
//
// if(hour == 12 && minute == 30) {
//     console.log(`${hour}:${minute}`)
// }

// Условия if else (else if() ) switch case

// let age = 18;
// let message;
//
// if (age < 3) {
//     message = 'Здравствуй, малыш!';
// } else if (age < 18) {
//     message = 'Привет!';
// } else if (age < 100) {
//     message = 'Здравствуйте!';
// } else {
//     message = 'Какой необычный возраст!';
// }

// console.log(message, 'message')

// let message1 = (age < 3) ? 'какой-то текст!' :
//     (age < 18) ? 'Привет' :
//         (age < 100) ? 'Здравствуй' :
//             'Какой необычный возраст!';
// console.log(message1, 'message1')


// let a = 2 + 2;

// switch (a) {
//     case 3: // if(a === 3)
//         alert( 'Маловато' );
//         break;
//     case 4: // if(a === 4)
//         alert( 'В точку!' );
//         break;
//     case 5: // if(a === 5)
//         alert( 'Перебор' );
//         break;
//     default:   // необязательный
//         alert( "Нет таких значений" );
// }

// Array methods

let items = [1,2,3,4,5,6]
const listItems = document.querySelector('.about-list')
const btnAdd = document.querySelector('.about-btn__add')
const btnRemove = document.querySelector('.about-btn__remove')
const btnFilter = document.querySelector('.about-btn__filter')
const btnMap = document.querySelector('.about-btn__map')

items.forEach((item, index)=> {
    const li = document.createElement('li')
    li.className = 'about-item';
    li.textContent = `Item ${item} index-${index}`;
    listItems.appendChild(li)
})

btnAdd.addEventListener('click', ()=> {
    // ********* METHOD PUSH *********
    const newItem = items.length ? items[items.length - 1] + 1 : 1; // Новый элемент будет на 1 больше последнего
    items.push(newItem);  // Добавить новый элемент в массив

    listItems.innerHTML = '';
    items.forEach((item,index)=>{
        const li = document.createElement('li');
        li.className = 'about-item';
        li.textContent = `Item ${item} index-${index}`;
        listItems.appendChild(li);
    })


    // ********* METHOD UNSHIFT *********
    // const newItem = items.length ? items[0] - 1 : 1; // Новый элемент будет на 1 меньше первого
    // items.unshift(newItem); // Добавить новый элемент в начало массива
    //
    // listItems.innerHTML = '';
    // items.forEach((item, index) => {
    //     const li = document.createElement('li');
    //     li.className = 'about-item';
    //     li.textContent = `Item ${item} index-${index}`;
    //     listItems.insertBefore(li, listItems.firstChild);
    // });
})

btnRemove.addEventListener('click', ()=> {
    // ********* METHOD POP *********
    items.pop();  // Удалить последний элемент из массива

    const lastItem = listItems.querySelector('.about-item:last-child');
    if (lastItem) {
        listItems.removeChild(lastItem);
    }

    // ********* METHOD SHIFT *********
    // items.shift(); // Удалить первый элемент из массива
    //
    // const firstItem = listItems.querySelector('.about-item:first-child');
    // if (firstItem) {
    //     listItems.removeChild(firstItem);
    // }
})

btnFilter.addEventListener("click", ()=> {
    items = items.filter(item => item % 2 === 0); // четкие
   // items = items.filter(item => item % 2 !== 0); // не четкие

    listItems.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'about-item';
        li.textContent = `Item ${item} index-${index}`;
        listItems.appendChild(li);
    });
});

btnMap.addEventListener('click', ()=> {
    items = items.map(item => item + 10);

    listItems.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'about-item';
        li.textContent = `Item ${item} index-${index}`;
        listItems.appendChild(li);
    });
})


// REST, SPREAD
// REST
let test = [1,2,3,4,5]
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}


// SPREAD
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // вывод: [1, 2, 3, 4, 5, 6]

// Копирование массива с помощью spread
let originalArray = [10, 20, 30];
let copyArray = [...originalArray];
console.log(copyArray); // вывод: [10, 20, 30]

// Деструктуризация
const person = {
    name: 'Alice',
    age: 25,
    family: {
        grandFather: {
            age: 23,
            name: 'eewkf'
        }
    }
};
console.log(person.name, 'name', person.age, 'age')
const { name, age, family } = person;
const {grandFather} = family
// const { age, name } = grandFather


// Object
let posts = [
    {
        id: 1,
        title: 'Test',
        body: 'Description',
    },
    {
        id: 2,
        title: 'Test 1',
        body: 'Description 1',
    },
    {
        id: 3,
        title: 'Test 2',
        body: 'Description 2',
    },
    {
        id: 4,
        title: 'Test 3',
        body: 'Description 3',
    },
]

function displayPosts() {
    const postList = document.querySelector('.post-list');
    const postError = document.querySelector('.post-error');

    postList.innerHTML = '';


    if (posts.length === 0) {
        // postError.style.display = 'block';
    }else {
        // postError.style.display = 'none';
        posts.forEach(post => {
            const newPost = document.createElement('li');
            newPost.classList.add('post-item');

            newPost.innerHTML = `
                    <div class="post-item__info">
                        <div><strong>Название:</strong> ${post.title}</div>
                        <div><strong>Описание:</strong> ${post.body}</div>
                    </div>
                    <button class="post-item__btn" onclick="deletePost(${post.id})">Удалить</button>
                `;
            postList.appendChild(newPost);
        });
    }
}

const formBtn = document.querySelector('.form-btn');
formBtn.addEventListener('click', (event)=> {
    // предатвращает перезагрузку страницы
    event.preventDefault()

    const nameInput = document.getElementById('name');
    const descriptionInput = document.getElementById('description');

    const name = nameInput.value.trim();
    const description = descriptionInput.value.trim();

    if (name && description) {
        const newPost = {
            id: Date.now(),
            title: name,
            description: description
        };

        posts.push(newPost);
        console.log(newPost, 'newPost')
        displayPosts();

        // Clear the input fields
        nameInput.value = '';
        descriptionInput.value = '';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
})
// function createPost() {
//     const nameInput = document.getElementById('name');
//     const descriptionInput = document.getElementById('description');
//
//     const name = nameInput.value.trim();
//     const description = descriptionInput.value.trim();
//
//     if (name && description) {
//         const newPost = {
//             title: name,
//             description: description
//         };
//
//         posts.push(newPost);
//         displayPosts();
//
//         // Clear the input fields
//         nameInput.value = '';
//         descriptionInput.value = '';
//     } else {
//         alert('Пожалуйста, заполните все поля.');
//     }
// }

const deletePost=(id)=> {
    posts = posts.filter(post => post.id !== id);
    displayPosts();
}

// Initial display of posts
displayPosts();



//
// GET request
// fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=5')
//     .then((response) => {
//       return  response.json()
//     })
//     .then(data => {
//         posts = data;
//         // console.log(posts, 'fetch posts')
//         displayPosts()
//     })
//     .catch(error => {
//         console.error('error fetch', error)
//     })
//     .finally(()=> {
//         console.log('finally очистка')
//     })
const loadingFetch = document.querySelector('.post-loading');
loadingFetch.style.display = 'block';
//
setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(data => {
            posts = data;
            // console.log(posts, 'fetch posts')
            displayPosts()
        })
        .catch(error => {
            console.error('error fetch', error)
            loadingFetch.style.display = 'none';
        })
        .finally(()=> {
            console.log('finally очистка')
            loadingFetch.style.display = 'none';
        })
}, 1000)
//
const formSelectLimit = document.querySelector('.form-select')

formSelectLimit.addEventListener('change', ()=> {
    const selectedLimit = formSelectLimit.value;

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${selectedLimit}`)
        .then(response => response.json())
        .then(data => {
            posts = data;
            displayPosts();
        })
        .catch(error => console.error('Error fetching posts:', error));
})
