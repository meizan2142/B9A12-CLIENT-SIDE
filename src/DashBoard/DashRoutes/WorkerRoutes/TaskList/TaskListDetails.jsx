import { useLoaderData, useParams } from "react-router-dom";

const TaskListDetails = () => {
    const singleTask = useLoaderData()
    console.log(singleTask);
    const { id } = useParams()
    // // console.log(id);
    return (
        <div>
            saif{id}
        </div>
    );
};

export default TaskListDetails;