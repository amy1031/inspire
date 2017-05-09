function TodoController() {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService()

	this.addTodoFromForm = function (e) {
		//	debugger
		e.preventDefault();
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target;

		//ADD IT TO THE ARRAY BELOW
		todosArray = todoService.getTodos(form.todo.value)
		todosArray.push(form.todo.value);

		todoService.saveTodos(todosArray);
		// FINAL ACTION OF ADDING A TODO

		drawTodos(todosArray)
		form.todo.value = "";
	}

	function drawTodos(data) {
		var elem = document.getElementById("todoList");
		var template = "";
		var itemTemplate = "";
		//debugger
		for (var i = 0; i < data.length; i++) {
			var item = data[i];
			template += `
					<p class="item">${item} <button type="button" onclick="app.controllers.todoController.uncheck('${item}')">X</button></p>
				`
		}

		if (data.length > 0) {
			var items = data.length;
			itemTemplate = `
			<h5>Items: ${items}</h5>`
		}

		return elem.innerHTML = template + itemTemplate;
	}

	this.uncheck = function uncheck(item) {
		//debugger
		for (var i = 0; i < todosArray.length; i++) {
			var todo = todosArray[i]
			if(item == todo) {
				todosArray.splice(todo, 1);
			}
		}
		todoService.saveTodos(todosArray);
		drawTodos(todosArray);
	}
}
