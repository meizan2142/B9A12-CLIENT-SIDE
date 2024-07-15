import { useLoaderData } from "react-router-dom";
import TaskListCard from "./TaskListCard";
const WorkerTaskList = () => {
    const tasksInfo = useLoaderData()
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                tasksInfo.map(taskInfo => <TaskListCard key={taskInfo._id} taskInfo={taskInfo}></TaskListCard>)
            }
        </div>
    );
};

export default WorkerTaskList;