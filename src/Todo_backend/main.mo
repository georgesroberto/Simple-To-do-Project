import Array "mo:base/Array";  

actor Todo {  
  // A list to hold todo items  
  var todos: [Text] = [];  
  
  // Add a new todo item  
  public func addTodo(task: Text): async Text {  
    todos := Array.append(todos, [task]);  
    return "Task added!";  
  };  
  
  // View all todos  
  public func getTodos(): async [Text] {  
    return todos;  
  };  
};