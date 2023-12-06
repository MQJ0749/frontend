// // // frontend/src/components/TaskBoard.js
// // import React, { useState, useEffect } from 'react';
// // import TaskColumn from './TaskColumn';
// // import TaskForm from './TaskForm';
// // import api from '../services/api';

// // const TaskBoard = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [projects, setProjects] = useState([]); // Add projects state

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const tasksResponse = await api.get('/tasks');
// //       const projectsResponse = await api.get('/projects'); // Fetch projects data

// //       setTasks(tasksResponse.data);
// //       setProjects(projectsResponse.data);
// //     };

// //     fetchData();
// //   }, []);

// //   const handleTaskUpdate = async (updatedTask) => {
// //     const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
// //     const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? response.data : task));
// //     setTasks(updatedTasks);
// //   };

// //   const handleTaskDelete = async (taskId) => {
// //     await api.delete(`/tasks/${taskId}`);
// //     const updatedTasks = tasks.filter((task) => task.id !== taskId);
// //     setTasks(updatedTasks);
// //   };

// //   const handleTaskCreate = async (newTask) => {
// //     const response = await api.post('/tasks', newTask);
// //     setTasks([...tasks, response.data]);
// //   };

// //   const handleProjectCreate = async (newProject) => {
// //     const response = await api.post('/projects', newProject);
// //     setProjects([...projects, response.data]); // Update projects state
// //   };

// //   return (
// //     <div style={{ background: '#fff', padding: '20px' }}>
// //       <h1>Task Manager</h1>
// //       <div style={{ display: 'flex' }}>
// //         <TaskColumn title="Projects" tasks={projects} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="To Do" tasks={tasks.filter((task) => task.status === 'ToDo')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="In Progress" tasks={tasks.filter((task) => task.status === 'InProgress')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="In Review" tasks={tasks.filter((task) => task.status === 'InReview')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="Completed" tasks={tasks.filter((task) => task.status === 'Completed')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskBoard;


// // frontend/src/components/TaskBoard.js
// // import React, { useState, useEffect } from 'react';
// // import TaskColumn from './TaskColumn';
// // import TaskForm from './TaskForm';
// // import api from '../services/api';

// // const TaskBoard = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [projects, setProjects] = useState([]); // Add projects state

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const tasksResponse = await api.get('/tasks');
// //         const projectsResponse = await api.get('/projects'); // Fetch projects data

// //         setTasks(tasksResponse.data);
// //         setProjects(projectsResponse.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleTaskUpdate = async (updatedTask) => {
// //     try {
// //       const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
// //       const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? response.data : task));
// //       setTasks(updatedTasks);
// //     } catch (error) {
// //       console.error('Error updating task:', error);
// //     }
// //   };

// //   const handleTaskDelete = async (taskId) => {
// //     try {
// //       await api.delete(`/tasks/${taskId}`);
// //       const updatedTasks = tasks.filter((task) => task.id !== taskId);
// //       setTasks(updatedTasks);
// //     } catch (error) {
// //       console.error('Error deleting task:', error);
// //     }
// //   };

// //   const handleTaskCreate = async (newTask) => {
// //     try {
// //       const response = await api.post('/tasks', newTask);
// //       setTasks([...tasks, response.data]);
// //     } catch (error) {
// //       console.error('Error creating task:', error);
// //     }
// //   };

// //   const handleProjectCreate = async (newProject) => {
// //     try {
// //       const response = await api.post('/projects', newProject);
// //       setProjects([...projects, response.data]); // Update projects state
// //     } catch (error) {
// //       console.error('Error creating project:', error);
// //     }
// //   };

// //   return (
// //     <div style={{ background: '#fff', padding: '20px' }}>
// //       <h1>Task Manager</h1>
// //       <div style={{ display: 'flex' }}>
// //         <TaskColumn title="Projects" tasks={projects} onCreate={handleProjectCreate} />
// //         <TaskColumn title="To Do" tasks={tasks.filter((task) => task.status === 'ToDo')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="In Progress" tasks={tasks.filter((task) => task.status === 'InProgress')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="In Review" tasks={tasks.filter((task) => task.status === 'InReview')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="Completed" tasks={tasks.filter((task) => task.status === 'Completed')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskBoard;



// // import React, { useState, useEffect } from 'react';
// // import TaskColumn from './TaskColumn';
// // import TaskForm from './TaskForm';
// // import api from '../services/api';

// // const TaskBoard = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [projects, setProjects] = useState([]); // Add projects state

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const tasksResponse = await api.get('/tasks');
// //         const projectsResponse = await api.get('/projects'); // Fetch projects data

// //         setTasks(tasksResponse.data);
// //         setProjects(projectsResponse.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleTaskUpdate = async (updatedTask) => {
// //     try {
// //       const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
// //       const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? response.data : task));
// //       setTasks(updatedTasks);
// //     } catch (error) {
// //       console.error('Error updating task:', error);
// //     }
// //   };

// //   const handleTaskDelete = async (taskId) => {
// //     try {
// //       await api.delete(`/tasks/${taskId}`);
// //       const updatedTasks = tasks.filter((task) => task.id !== taskId);
// //       setTasks(updatedTasks);
// //     } catch (error) {
// //       console.error('Error deleting task:', error);
// //     }
// //   };

// //   const handleTaskCreate = async (newTask) => {
// //     try {
// //       const response = await api.post('/tasks', newTask);
// //       setTasks([...tasks, response.data]);
// //     } catch (error) {
// //       console.error('Error creating task:', error);
// //     }
// //   };

// //   const handleProjectCreate = async (newProject) => {
// //     try {
// //       const response = await api.post('/projects', newProject);
// //       setProjects([...projects, response.data]); // Update projects state
// //     } catch (error) {
// //       console.error('Error creating project:', error);
// //     }
// //   };

// //   return (
// //     <div style={{ background: '#fff', padding: '20px' }}>
// //       <h1>Task Manager</h1>
// //       <div style={{ display: 'flex' }}>
// //         <TaskColumn title="Projects" tasks={projects} onCreate={handleProjectCreate} />
// //         <TaskColumn title="To Do" tasks={tasks.filter((task) => task.status === 'ToDo')} onCreate={handleTaskCreate} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="In Progress" tasks={tasks.filter((task) => task.status === 'InProgress')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="In Review" tasks={tasks.filter((task) => task.status === 'InReview')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //         <TaskColumn title="Completed" tasks={tasks.filter((task) => task.status === 'Completed')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskBoard;


// // frontend/src/components/TaskBoard.js
// import React, { useState, useEffect } from 'react';
// import TaskColumn from './TaskColumn';
// import TaskForm from './TaskForm';
// import api from '../services/api';

// const TaskBoard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [projects, setProjects] = useState([]); // Add projects state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const tasksResponse = await api.get('/tasks');
//         const projectsResponse = await api.get('/projects'); // Fetch projects data

//         setTasks(tasksResponse.data);
//         setProjects(projectsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleTaskUpdate = async (updatedTask) => {
//     try {
//       const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
//       const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? response.data : task));
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleTaskDelete = async (taskId) => {
//     try {
//       await api.delete(`/tasks/${taskId}`);
//       const updatedTasks = tasks.filter((task) => task.id !== taskId);
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleTaskCreate = async (newTask) => {
//     try {
//       const response = await api.post('/tasks', newTask);
//       setTasks([...tasks, response.data]);
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleProjectCreate = async (newProject) => {
//     try {
//       const response = await api.post('/projects', newProject);
//       setProjects([...projects, response.data]); // Update projects state
//     } catch (error) {
//       console.error('Error creating project:', error);
//     }
//   };

//   return (
//     <div style={{ background: '#fff', padding: '20px' }}>
//       <h1>Task Manager</h1>
//       <div style={{ display: 'flex' }}>
//         <TaskColumn title="Projects" tasks={projects} onCreate={handleProjectCreate} />
//         <TaskColumn title="To Do" tasks={tasks.filter((task) => task.status === 'ToDo')} onCreate={handleTaskCreate} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
//         <TaskColumn title="In Progress" tasks={tasks.filter((task) => task.status === 'InProgress')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
//         <TaskColumn title="In Review" tasks={tasks.filter((task) => task.status === 'InReview')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
//         <TaskColumn title="Completed" tasks={tasks.filter((task) => task.status === 'Completed')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
//       </div>
//     </div>
//   );
// };

// export default TaskBoard;



// frontend/src/components/TaskBoard.js
// import React, { useState, useEffect } from 'react';
// import TaskColumn from './TaskColumn';
// import TaskForm from './TaskForm';
// import api from '../services/api';

// const TaskBoard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null); // Add selectedProject state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const tasksResponse = await api.get(`/tasks${selectedProject ? `?projectId=${selectedProject.id}` : ''}`);
//         const projectsResponse = await api.get('/projects');

//         setTasks(tasksResponse.data);
//         setProjects(projectsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [selectedProject]); // Include selectedProject as a dependency

//   const handleTaskUpdate = async (updatedTask) => {
//     try {
//       const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
//       const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? response.data : task));
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleTaskDelete = async (taskId) => {
//     try {
//       await api.delete(`/tasks/${taskId}`);
//       const updatedTasks = tasks.filter((task) => task.id !== taskId);
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleTaskCreate = async (newTask) => {
//     try {
//       const response = await api.post('/tasks', newTask);
//       setTasks([...tasks, response.data]);
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   // const handleProjectCreate = async (newProject) => {
//   //   try {
//   //     const response = await api.post('/projects', { projectName: newProject.title });
//   //     setProjects([...projects, response.data]); // Update projects state
//   //   } catch (error) {
//   //     console.error('Error creating project:', error);
//   //   }
//   // };
//   const handleProjectCreate = async (newProject) => {
//     try {
//       const response = await api.post('/projects', { projectName: newProject.title });
//       setProjects((prevProjects) => [...prevProjects, response.data]);
//     } catch (error) {
//       console.error('Error creating project:', error);
//     }
//   }
//   const handleProjectSelect = (project) => {
//     setSelectedProject(project);
//   };

//   return (
//     <div style={{ background: '#fff', padding: '20px' }}>
//       <h1>Task Manager</h1>
//       <div style={{ display: 'flex' }}>
//         <TaskColumn title="Projects" tasks={projects} onSelect={handleProjectSelect} onCreate={handleProjectCreate} />
//         <TaskColumn title="To Do" tasks={tasks.filter((task) => task.status === 'ToDo')} onCreate={handleTaskCreate} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
//         <TaskColumn title="In Progress" tasks={tasks.filter((task) => task.status === 'InProgress')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
//         <TaskColumn title="In Review" tasks={tasks.filter((task) => task.status === 'InReview')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
//         <TaskColumn title="Completed" tasks={tasks.filter((task) => task.status === 'Completed')} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
//       </div>
//     </div>
//   );
// };

// export default TaskBoard;






// frontend/src/components/TaskBoard.js
// import React, { useState, useEffect } from 'react';
// import TaskColumn from './TaskColumn';
// import TaskForm from './TaskForm';
// import api from '../services/api';

// const TaskBoard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const tasksResponse = await api.get(`/tasks${selectedProject ? `?projectId=${selectedProject.id}` : ''}`);
//         const projectsResponse = await api.get('/projects');
//         console.log('Projects Response:', projectsResponse.data);
//         setTasks(tasksResponse.data);
//         setProjects(projectsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [selectedProject]);

//   const handleTaskUpdate = async (updatedTask) => {
//     try {
//       const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
//       const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? response.data : task));
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleTaskDelete = async (taskId) => {
//     try {
//       await api.delete(`/tasks/${taskId}`);
//       const updatedTasks = tasks.filter((task) => task.id !== taskId);
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleTaskCreate = async (newTask) => {
//     try {
//       const response = await api.post('/tasks', newTask);
//       setTasks([...tasks, response.data]);
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleProjectCreate = async (newProject) => {
//     try {
//       const response = await api.post('/projects', { projectName: newProject.title });
//       setProjects((prevProjects) => [...prevProjects, response.data]);
//     } catch (error) {
//       console.error('Error creating project:', error);
//     }
//   };

//   const handleProjectSelect = (project) => {
//     setSelectedProject(project);
//   };

//   return (
//     <div style={{ background: '#fff', padding: '20px' }}>
//       <h1>Task Manager</h1>
//       <div style={{ display: 'flex' }}>
//         <TaskColumn
//           title="Projects"
//           tasks={projects}
//           onSelect={handleProjectSelect}
//           onCreate={handleProjectCreate}
//         />
//         <TaskColumn
//           title="To Do"
//           tasks={tasks.filter((task) => task.status === 'ToDo')}
//           onCreate={handleTaskCreate}
//           onUpdate={handleTaskUpdate}
//           onDelete={handleTaskDelete}
//         />
//         <TaskColumn
//           title="In Progress"
//           tasks={tasks.filter((task) => task.status === 'InProgress')}
//           onUpdate={handleTaskUpdate}
//           onDelete={handleTaskDelete}
//         />
//         <TaskColumn
//           title="In Review"
//           tasks={tasks.filter((task) => task.status === 'InReview')}
//           onUpdate={handleTaskUpdate}
//           onDelete={handleTaskDelete}
//         />
//         <TaskColumn
//           title="Completed"
//           tasks={tasks.filter((task) => task.status === 'Completed')}
//           onUpdate={handleTaskUpdate}
//           onDelete={handleTaskDelete}
//         />
//       </div>
//     </div>
//   );
// };

// export default TaskBoard;


//12/5 9:30

// frontend/src/components/TaskBoard.js
import React, { useState, useEffect } from 'react';
import TaskColumn from './TaskColumn';
import TaskForm from './TaskForm';
import api from '../services/api';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await api.get('/projects');
        setProjects(projectsResponse.data);

        if (selectedProject) {
          const tasksResponse = await api.get(`/tasks?projectId=${selectedProject.id}`);
          setTasks(tasksResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedProject]);

  const handleTaskUpdate = async (updatedTask) => {
    try {
      const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
      const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? response.data : task));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleTaskDelete = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTaskCreate = async (newTask) => {
    try {
      const response = await api.post('/tasks', newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleProjectCreate = async (newProject) => {
    try {
      const response = await api.post('/projects', { projectName: newProject.title });
      setProjects((prevProjects) => [...prevProjects, response.data]);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div style={{ background: '#fff', padding: '20px' }}>
      <h1>Task Manager</h1>
      <div style={{ display: 'flex' }}>
        <TaskColumn
          title="Projects"
          tasks={projects}
          onSelect={handleProjectSelect}
          onCreate={handleProjectCreate}
        />
        {/* Other TaskColumns for 'To Do', 'In Progress', 'In Review', 'Completed' */}
        <TaskColumn
          title="To Do"
          tasks={tasks.filter((task) => task.status === 'ToDo')}
          onCreate={handleTaskCreate}
          onUpdate={handleTaskUpdate}
          onDelete={handleTaskDelete}
        />
        {/* Add TaskColumns for 'In Progress', 'In Review', 'Completed' */}
           <TaskColumn
          title="In Progress"
           tasks={tasks.filter((task) => task.status === 'InProgress')}
           onUpdate={handleTaskUpdate}
           onDelete={handleTaskDelete}
         />
        <TaskColumn
           title="In Review"
           tasks={tasks.filter((task) => task.status === 'InReview')}
           onUpdate={handleTaskUpdate}
           onDelete={handleTaskDelete}
         />
         <TaskColumn
           title="Completed"
           tasks={tasks.filter((task) => task.status === 'Completed')}
           onUpdate={handleTaskUpdate}
           onDelete={handleTaskDelete}
         />
      </div>
    </div>
  );
};

export default TaskBoard;
