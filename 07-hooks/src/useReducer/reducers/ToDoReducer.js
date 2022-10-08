// 2 parameter: stage, action
export default function ToDoReducer(todos, action) {
  // Kondisi berdasarkan property di dalam action <-- object

  // ASUMSI property di dalam action yang bersifat kondisi namnay adalah "type"
  switch (action.type) {
    case "nambahin":
      const newId = todos[todos.length - 1].id + 1;

      // ASUMSI pada saat menggunakan action.type nambahin
      // HARUS  memiliki action.name
      const objTodo = {
        id: newId,
        name: action.name,
        isCompleted: false,
      };

      // RETURN si state yang baru
      return [...todos, objTodo];
    case "selesain":
      // ASUMSI pada saat menggunakan action.type selesain
      // HARUS memiliki action.id

      // RETURN si state yang baru
      return todos.map((todo) => {
        // const newTodos = todos.map((todo) => {
        if (todo.id === action.id) {
          todo.isCompleted = true;
        }

        return todo;
      });

    // return newTodos;

    // Apabila aksi yang dilakukan adalah
    default:
      // berikan error
      throw Error("Unknown action");
  }
}
