// // frontend/src/components/TaskItem.js
// import React, { useState } from 'react';

// const TaskItem = ({ task, onUpdate, onDelete }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTaskName, setEditedTaskName] = useState(task.taskName);

//   const handleUpdateClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Validate editedTaskName
//     if (!editedTaskName) {
//       alert('Task name cannot be empty');
//       return;
//     }

//     const updatedTask = { ...task, taskName: editedTaskName };
//     onUpdate(updatedTask);
//     setIsEditing(false);
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//   };

//   const handleDeleteClick = () => {
//     onDelete(task.id);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <div>
//           <input type="text" value={editedTaskName} onChange={(e) => setEditedTaskName(e.target.value)} />
//           <button onClick={handleSaveClick}>Save</button>
//           <button onClick={handleCancelClick}>Cancel</button>
//         </div>
//       ) : (
//         <div>
//           <span>{task.taskName}</span>
//           <button onClick={handleUpdateClick}>Edit</button>
//           <button onClick={handleDeleteClick}>Delete</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskItem;




// frontend/src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.taskName);

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Validate editedTaskName
    if (!editedTaskName) {
      alert('Task name cannot be empty');
      return;
    }

    const updatedTask = { ...task, taskName: editedTaskName };
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editedTaskName} onChange={(e) => setEditedTaskName(e.target.value)} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{task.taskName}</span>
          <button onClick={handleUpdateClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;




//12/5 9:30