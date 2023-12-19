(function() {
    let tasks = [];
    const createAppTitle = (title) => {
      const appTitle = document.createElement('h2');
      appTitle.textContent = title;
      return appTitle;
    }
    const createTodoItemForm = () => {
      const form = document.createElement('form');
        const input = document.createElement('input');
        const buttonWrapper = document.createElement('div');
        const button = document.createElement('button');
        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';
        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);
        button.disabled = true;
      input.addEventListener('input', () => {
        button.disabled = !input.value.trim();
      })
      return {
        form,
        input,
        button
      };
    }
    const createTodoList = () => {
      const list = document.createElement('ul');
      list.classList.add('list-group');
      return list;
    }
    const createTodoApp = (container, title, listName) => {
      const todoAppTitle = createAppTitle(title);
      const {
        form,
        input,
        button
      } = createTodoItemForm();
      const todoList = createTodoList();
      container.append(todoAppTitle, form, todoList);
      const saveTasksToLocalStorage = () => {
        const data = JSON.stringify(tasks);
        localStorage.setItem(listName, data);
      }
      const loadTasksFromLocalStorage = () => {
        const data = localStorage.getItem(listName);
        if (data) {
          tasks = JSON.parse(data);
          tasks.forEach((task) => {
            const todoItem = createTodoItem(task.id, task.name, task.done);
            todoList.append(todoItem.item);
            if (task.done) {
              todoItem.item.classList.add('list-group-item-success');
            }
            todoItem.doneButton.addEventListener('click', toggleTaskStatus.bind(null, todoItem, task));
            todoItem.deleteButton.addEventListener('click', deleteTask.bind(null, todoItem, task));
          });
        }
      };
      const toggleTaskStatus = (todoItem, task) => {
        todoItem.item.classList.toggle('list-group-item-success');
        task.done = !task.done;
        saveTasksToLocalStorage();
      }
      const deleteTask = (todoItem, task) => {
        if (confirm('Are you sure?')) {
          todoItem.item.remove();
          tasks = tasks.filter((t) => t.id !== task.id);
          saveTasksToLocalStorage();
        }
      }
      const addTask = (e) => {
        e.preventDefault();
        if (!input.value) return false;
        const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        const todoItem = createTodoItem(id, input.value, false);
        todoList.append(todoItem.item);
        const task = {
          id: id,
          name: input.value,
          done: false
        };
        tasks.push(task);
        saveTasksToLocalStorage();
        todoItem.doneButton.addEventListener('click', toggleTaskStatus.bind(null, todoItem, task));
        todoItem.deleteButton.addEventListener('click', deleteTask.bind(null, todoItem, task));
        input.value = '';
        button.disabled = true;
        return false;
      }
      form.addEventListener('submit', addTask);
      loadTasksFromLocalStorage();
    }
    const createTodoItem = (id, name, done) => {
      const item = document.createElement('li');
      item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      item.textContent = name;
      const buttonGroup = document.createElement('div');
      buttonGroup.classList.add('btn-group', 'btn-group-sm');
      const doneButton = document.createElement('button');
      doneButton.classList.add('btn', 'btn-success');
      doneButton.textContent = 'Готово';
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn', 'btn-danger');
      deleteButton.textContent = 'Удалить';
      buttonGroup.append(doneButton, deleteButton);
      item.append(buttonGroup);
      return {
        item,
        doneButton,
        deleteButton
      }
    }
    window.createTodoApp = createTodoApp;
  })();
