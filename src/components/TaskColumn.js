// // // frontend/src/components/TaskColumn.js
// // import React, { useState } from 'react';
// // import TaskItem from './TaskItem';
// // import TaskForm from './TaskForm';
// // import api from '../services/api';

// //   const TaskColumn = ({ title, tasks, onSelect, onUpdate, onDelete, onCreate }) => {
// //   const [isAddingTask, setIsAddingTask] = useState(false);
// //   const [isAddingProject, setIsAddingProject] = useState(false);
// //   const [isEditingProject, setIsEditingProject] = useState(false);
// //   const [editedProjectName, setEditedProjectName] = useState('');
// //   const [newProjectName, setNewProjectName] = useState('');

// //   const handleAddTaskClick = () => {
// //     setIsAddingTask(true);
// //   };

// //   const handleCancelAddTask = () => {
// //     setIsAddingTask(false);
// //   };

// //   const handleAddProjectClick = () => {
// //     setIsAddingProject(true);
// //   };

// //   const handleCancelAddProject = () => {
// //     setIsAddingProject(false);
// //   };

// //   const handleEditProjectClick = () => {
// //     setIsEditingProject(true);
// //     setEditedProjectName(title); // Set the current project name for editing
// //   };

// //   const handleSaveProjectClick = () => {
// //     // Validate project name
// //     if (!editedProjectName && !newProjectName) {
// //       alert('Project name cannot be empty');
// //       return;
// //     }

// //     if (isEditingProject) {
// //       onUpdate({ title: editedProjectName });
// //       setIsEditingProject(false);
// //     } else {
// //       onCreate({ title: newProjectName });
// //       setNewProjectName(''); // Clear the new project name field
// //       setIsAddingProject(false);
// //     }
// //   };

// //   const handleCancelEditProject = () => {
// //     setIsEditingProject(false);
// //   };

// //   const handleProjectCreate = async (newProject) => {
// //     try {
// //       const response = await api.post('/projects', newProject);
// //       onCreate(response.data);
// //       setIsAddingTask(false); // Close the form after creating the project
// //     } catch (error) {
// //       console.error('Error creating project:', error);
// //     }
// //   };

// //   const handleTaskCreate = async (newTask) => {
// //     try {
// //       const response = await api.post('/tasks', newTask);
// //       onCreate(response.data);
// //       setIsAddingTask(false); // Close the form after creating the task
// //     } catch (error) {
// //       console.error('Error creating task:', error);
// //     }
// //   };
  
// //     const handleProjectSelect = () => {
// //       onSelect({ title });
// //     };
  
// //     return (
// //       <div style={{ flex: 1, marginRight: '20px', borderRight: '2px solid #333', paddingRight: '20px' }}>
// //         <h2 onClick={title === 'Projects' ? null : handleProjectSelect}>{title}</h2>
// //         <div>
// //           {tasks.map((task) => (
// //             <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
// //           ))}
// //         </div>
// //         {title === 'Projects' && (
// //           <React.Fragment>
// //             {isAddingProject ? (
// //               <div>
// //                 <input type="text" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} />
// //                 <button onClick={handleSaveProjectClick}>Save</button>
// //                 <button onClick={handleCancelAddProject}>Cancel</button>
// //               </div>
// //             ) : (
// //               <button onClick={handleAddProjectClick}>Add Project</button>
// //             )}
// //           </React.Fragment>
// //         )}
// //         {isEditingProject ? (
// //           <div>
// //             <input type="text" value={editedProjectName} onChange={(e) => setEditedProjectName(e.target.value)} />
// //             <button onClick={handleSaveProjectClick}>Save</button>
// //             <button onClick={handleCancelEditProject}>Cancel</button>
// //           </div>
// //         ) : null}
// //         {title !== 'Projects' && (
// //           <React.Fragment>
// //             {isAddingTask ? (
// //               <TaskForm onCancel={handleCancelAddTask} onCreate={handleTaskCreate} />
// //             ) : (
// //               <button onClick={handleAddTaskClick}>Add Task</button>
// //             )}
// //           </React.Fragment>
// //         )}
// //       </div>
// //     );
// //   };
  
// //   export default TaskColumn;




// // frontend/src/components/TaskColumn.js
// import React, { useState } from 'react';
// import TaskItem from './TaskItem';
// import TaskForm from './TaskForm';
// import api from '../services/api';

// const TaskColumn = ({ title, items, onSelect, onUpdate, onDelete, onCreate }) => {
//   const [isAddingTask, setIsAddingTask] = useState(false);
//   const [isAddingProject, setIsAddingProject] = useState(false);
//   const [isEditingProject, setIsEditingProject] = useState(false);
//   const [editedProjectName, setEditedProjectName] = useState('');
//   const [newProjectName, setNewProjectName] = useState('');

//   const handleAddTaskClick = () => {
//     setIsAddingTask(true);
//   };

//   const handleCancelAddTask = () => {
//     setIsAddingTask(false);
//   };

//   const handleAddProjectClick = () => {
//     setIsAddingProject(true);
//   };

//   const handleCancelAddProject = () => {
//     setIsAddingProject(false);
//   };

//   const handleEditProjectClick = () => {
//     setIsEditingProject(true);
//     setEditedProjectName(title); // Set the current project name for editing
//   };

//   const handleSaveProjectClick = () => {
//     // Validate project name
//     if (!editedProjectName && !newProjectName) {
//       alert('Project name cannot be empty');
//       return;
//     }

//     if (isEditingProject) {
//       onUpdate({ title: editedProjectName });
//       setIsEditingProject(false);
//     } else {
//       onCreate({ title: newProjectName });
//       setNewProjectName(''); // Clear the new project name field
//       setIsAddingProject(false);
//     }
//   };

//   const handleCancelEditProject = () => {
//     setIsEditingProject(false);
//   };

//   const handleProjectCreate = async (newProject) => {
//     try {
//       const response = await api.post('/projects', newProject);
//       onCreate(response.data);
//       setIsAddingProject(false); // Close the form after creating the project
//     } catch (error) {
//       console.error('Error creating project:', error);
//     }
//   };

//   const handleTaskCreate = async (newTask) => {
//     try {
//       const response = await api.post('/tasks', newTask);
//       onCreate(response.data);
//       setIsAddingTask(false); // Close the form after creating the task
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleProjectSelect = () => {
//     onSelect({ title });
//   };

//   return (
//     <div style={{ flex: 1, marginRight: '20px', borderRight: '2px solid #333', paddingRight: '20px' }}>
//       <h2 onClick={title === 'Projects' ? null : handleProjectSelect}>{title}</h2>
//       <div>
//         {items.map((item) => (
//           <div key={item.id}>
//             {item.type === 'task' ? (
//               <TaskItem task={item} onUpdate={onUpdate} onDelete={onDelete} />
//             ) : (
//               <div>{item.title}</div>
//             )}
//           </div>
//         ))}
//       </div>
//       {title === 'Projects' && (
//         <React.Fragment>
//           {isAddingProject ? (
//             <div>
//               <input type="text" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} />
//               <button onClick={handleSaveProjectClick}>Save</button>
//               <button onClick={handleCancelAddProject}>Cancel</button>
//             </div>
//           ) : (
//             <button onClick={handleAddProjectClick}>Add Project</button>
//           )}
//         </React.Fragment>
//       )}
//       {isEditingProject ? (
//         <div>
//           <input type="text" value={editedProjectName} onChange={(e) => setEditedProjectName(e.target.value)} />
//           <button onClick={handleSaveProjectClick}>Save</button>
//           <button onClick={handleCancelEditProject}>Cancel</button>
//         </div>
//       ) : null}
//       {title !== 'Projects' && (
//         <React.Fragment>
//           {isAddingTask ? (
//             <TaskForm onCancel={handleCancelAddTask} onCreate={handleTaskCreate} />
//           ) : (
//             <button onClick={handleAddTaskClick}>Add Task</button>
//           )}
//         </React.Fragment>
//       )}
//     </div>
//   );
// };

// export default TaskColumn;




// import React, { useState } from 'react';
// import TaskItem from './TaskItem';
// import TaskForm from './TaskForm';
// import api from '../services/api';

//   const TaskColumn = ({ title, tasks, onSelect, onUpdate, onDelete, onCreate }) => {
//   const [isAddingTask, setIsAddingTask] = useState(false);
//   const [isAddingProject, setIsAddingProject] = useState(false);
//   const [isEditingProject, setIsEditingProject] = useState(false);
//   const [editedProjectName, setEditedProjectName] = useState('');
//   const [newProjectName, setNewProjectName] = useState('');

//   const handleAddTaskClick = () => {
//     setIsAddingTask(true);
//   };

//   const handleCancelAddTask = () => {
//     setIsAddingTask(false);
//   };

//   const handleAddProjectClick = () => {
//     setIsAddingProject(true);
//   };

//   const handleCancelAddProject = () => {
//     setIsAddingProject(false);
//   };

//   const handleEditProjectClick = () => {
//     setIsEditingProject(true);
//     setEditedProjectName(title); // Set the current project name for editing
//   };

//   const handleSaveProjectClick = () => {
//     // Validate project name
//     if (!editedProjectName && !newProjectName) {
//       alert('Project name cannot be empty');
//       return;
//     }

//     if (isEditingProject) {
//       onUpdate({ title: editedProjectName });
//       setIsEditingProject(false);
//     } else {
//       onCreate({ title: newProjectName });
//       setNewProjectName(''); // Clear the new project name field
//       setIsAddingProject(false);
//     }
//   };

//   const handleCancelEditProject = () => {
//     setIsEditingProject(false);
//   };

//   const handleProjectCreate = async (newProject) => {
//     try {
//       const response = await api.post('/projects', newProject);
//       onCreate(response.data);
//       setIsAddingTask(false); // Close the form after creating the project
//     } catch (error) {
//       console.error('Error creating project:', error);
//     }
//   };

//   const handleTaskCreate = async (newTask) => {
//     try {
//       const response = await api.post('/tasks', newTask);
//       onCreate(response.data);
//       setIsAddingTask(false); // Close the form after creating the task
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };
  
//     const handleProjectSelect = () => {
//       onSelect({ title });
//     };
  
//     return (
//       <div style={{ flex: 1, marginRight: '20px', borderRight: '2px solid #333', paddingRight: '20px' }}>
//         <h2 onClick={title === 'Projects' ? null : handleProjectSelect}>{title}</h2>
//         <div>
//           {tasks.map((task) => (
//             <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
//           ))}
//         </div>
//         {title === 'Projects' && (
//           <React.Fragment>
//             {isAddingProject ? (
//               <div>
//                 <input type="text" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} />
//                 <button onClick={handleSaveProjectClick}>Save</button>
//                 <button onClick={handleCancelAddProject}>Cancel</button>
//               </div>
//             ) : (
//               <button onClick={handleAddProjectClick}>Add Project</button>
//             )}
//           </React.Fragment>
//         )}
//         {isEditingProject ? (
//           <div>
//             <input type="text" value={editedProjectName} onChange={(e) => setEditedProjectName(e.target.value)} />
//             <button onClick={handleSaveProjectClick}>Save</button>
//             <button onClick={handleCancelEditProject}>Cancel</button>
//           </div>
//         ) : null}
//         {title !== 'Projects' && (
//           <React.Fragment>
//             {isAddingTask ? (
//               <TaskForm onCancel={handleCancelAddTask} onCreate={handleTaskCreate} />
//             ) : (
//               <button onClick={handleAddTaskClick}>Add Task</button>
//             )}
//           </React.Fragment>
//         )}
//       </div>
//     );
//   };
  
//   export default TaskColumn;





import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import api from '../services/api';

const TaskColumn = ({ title, tasks, onSelect, onUpdate, onDelete, onCreate, projects }) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [editedProjectName, setEditedProjectName] = useState('');
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddTaskClick = () => {
    setIsAddingTask(true);
  };

  const handleCancelAddTask = () => {
    setIsAddingTask(false);
  };

  const handleAddProjectClick = () => {
    setIsAddingProject(true);
  };

  const handleCancelAddProject = () => {
    setIsAddingProject(false);
  };

  const handleEditProjectClick = () => {
    setIsEditingProject(true);
    setEditedProjectName(title); // Set the current project name for editing
  };

  const handleSaveProjectClick = () => {
    // Validate project name
    if (!editedProjectName && !newProjectName) {
      alert('Project name cannot be empty');
      return;
    }

    if (isEditingProject) {
      onUpdate({ title: editedProjectName });
      setIsEditingProject(false);
    } else {
      onCreate({ title: newProjectName });
      setNewProjectName(''); // Clear the new project name field
      setIsAddingProject(false);
    }
  };

  const handleCancelEditProject = () => {
    setIsEditingProject(false);
  };

  const handleProjectCreate = async (newProject) => {
    try {
      const response = await api.post('/projects', newProject);
      onCreate(response.data);
      setIsAddingTask(false); // Close the form after creating the project
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleTaskCreate = async (newTask) => {
    try {
      const response = await api.post('/tasks', newTask);
      onCreate(response.data);
      setIsAddingTask(false); // Close the form after creating the task
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
  
  const handleProjectSelect = () => {
    onSelect(projects.find((project) => project.projectname === title)); // Find the project object by project name
  };
  
    return (
      
      <div style={{ flex: 1, marginRight: '20px', borderRight: '2px solid #333', paddingRight: '20px' }}>
        <h2 onClick={title === 'Projects' ? null : handleProjectSelect}>{title}</h2>
        <div>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
          ))}
        </div>
        {title === 'Projects' && (
          <React.Fragment>
            {isAddingProject ? (
              <div>
                <input type="text" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} />
                <button onClick={handleSaveProjectClick}>Save</button>
                <button onClick={handleCancelAddProject}>Cancel</button>
              </div>
            ) : (
              <button onClick={handleAddProjectClick}>Add Project</button>
            )}
          </React.Fragment>
        )}
        {isEditingProject ? (
          <div>
            <input type="text" value={editedProjectName} onChange={(e) => setEditedProjectName(e.target.value)} />
            <button onClick={handleSaveProjectClick}>Save</button>
            <button onClick={handleCancelEditProject}>Cancel</button>
          </div>
        ) : null}
        {title !== 'Projects' && (
          <React.Fragment>
            {isAddingTask ? (
              <TaskForm onCancel={handleCancelAddTask} onCreate={handleTaskCreate} />
            ) : (
              <button onClick={handleAddTaskClick}>Add Task</button>
            )}
          </React.Fragment>
        )}
      </div>
    );
  };
  
  export default TaskColumn;




