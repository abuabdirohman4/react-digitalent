import React from 'react';

import ToDo from './useReducer/containers/ToDo';
// import ToDoWithReducer from './useReducer/containers/ToDoWithReducer.jsx';

// import NestedComponent from './containers/NestedComponent.jsx';
// import NestedComponentWithContext from './containers/NestedComponentWithContext.jsx';
// import NestedComponentWithContextPart2 from './containers/NestedComponentWithContextPart2.jsx';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
      {/* useReducer */}
      <ToDo />
      {/* <ToDoWithReducer /> */}

      {/* useContext */}
      {/* <NestedComponent /> */}
      {/* <NestedComponentWithContext /> */}
      {/* <NestedComponentWithContextPart2 /> */}
    </div>
  );
}