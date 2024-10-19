import TaskManager from './components/TaskManager';

async function fetchTasks() {
  const res = await fetch('http://localhost:3000/api/tasks');
  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return res.json();
}

const Home = async () => {
  const initialTasks = await fetchTasks();

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Task Management App</h1>
      <TaskManager initialTasks={initialTasks} />
    </div>
  );
};

export default Home;
