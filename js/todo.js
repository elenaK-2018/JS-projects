export const todo = () => {
    const todoForm = document.getElementById('form-todo');
    const author = document.getElementById('author');
    const post = document.getElementById('post');
    const todoBtn = todoForm.querySelector('.todo__btn');
    const list = document.querySelector('.todo__list');
    const countElem = document.querySelector('.todo__count');   

    const base = {
        init() {
            this.todo = this.getTodoLS();         
        },
        employee: 'Петров Сергей Иванович',
        todo: [],
        // [
        //     {
        //         id: 'td1',
        //         author: 'Денис Петрович',
        //         post: 'Выполнить отгрузку пылесосов',
        //         ready: false,
        //     },
        //     {
        //         id: 'td2',
        //         author: 'Борис Фёдорович',
        //         post: 'Отправить бригаду починить оборудование',
        //         ready: true,
        //     }
        // ],
        check(id) {
            for (let i = 0; i < this.todo.length; i++) {
                if ( this.todo[i].id === id) {
                    this.todo[i].ready = true;
                }
            }
            this.setTodoLS();
        },
        addTodo(author, post) {
            const todo = {
                id: 'td' + (Date.now()),
                author,
                post,
                ready: false,
            };
    
            this.todo.push(todo);
            this.setTodoLS();
    
            return todo;
        },
        getTodoLS() {
            if (localStorage.getItem('todo')) {
                return JSON.parse(localStorage.getItem('todo'))
            }
        
            return [];    
        },    
        setTodoLS() {
            localStorage.setItem('todo', JSON.stringify(this.todo));
        }    
    };
    
    const addTodo = event => {
        event.preventDefault();
    
        const authorText = author.value;
        const postText = post.value;
    
        const objTodo = base.addTodo(authorText, postText);
        const todoLi = createTodo(objTodo);
    
        list.append(todoLi);
        todoForm.reset();
    };
    
    const createTodo = objTodo => {
        const todoItem = `
                <article class="post ${objTodo.ready ? 'post_complete' : ''}">
                    <h3 class="post__author">${objTodo.author}</h3>
                    <p class="post__todo">${objTodo.post}</p>
                    ${!objTodo.ready ?
                        `<button
                            class="post__ready" 
                            type="button"
                            data-id="${objTodo.id}"
                            >✔</button>` :
                        ''
                    }                        
                </article> 
        `;
    
        const li = document.createElement('li');
        li.classList.add('todo__list-item');
        li.innerHTML = todoItem;
    
        return li;
    };

    let counter = 0;

    const addCounter = () => {
        counter++; 
        countElem.textContent = counter; 
    }

    const resetCounter = () => {
        counter--; 
        countElem.textContent = counter; 
    }
    
    const renderTodo = () => {
        base.init();
        for (let i = 0; i < base.todo.length; i++) {
            const todoLi = createTodo(base.todo[i]);
            list.append(todoLi);
        }
    };
    
    const checkTodo = event => {

        const btn = event.target.closest('.post__ready');
    
        if (btn) {
            const post = btn.closest('.post');
            btn.remove();
            post.classList.add('post_complete');
            const id = btn.dataset.id;
            base.check(id);
            resetCounter();
        }  
    };
    
    todoForm.addEventListener('submit', addTodo );
    list.addEventListener('click', checkTodo);
    todoBtn.addEventListener('click', addCounter);      
    
    renderTodo();
};

