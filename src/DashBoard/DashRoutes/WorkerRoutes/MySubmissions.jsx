import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MySubmissions = () => {
    const { user } = useContext(AuthContext);
    const [newUser, setNewUser] = useState([])
    const submissions = useLoaderData()
    // console.log(submissions[0].email);
    const matchedEmail = submissions.filter(submission => submission.email === newUser.email);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user?.email}`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [user?.email])
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Current Date</th>
                    </tr>
                </thead>
                <tbody>
                    {matchedEmail.length > 0 ?
                        (
                            matchedEmail.map((submission) => (
                                <tr key={submission._id}>
                                    <td></td>
                                    <th>{submission._id}</th>
                                    <th>{submission.name}</th>
                                    <th>{submission.email}</th>
                                    <th>{submission.title2}</th>
                                    <th>{submission.details}</th>
                                    <th>{submission.currentDate}</th>
                                </tr>
                            ))
                        )
                        :
                        (
                                <tr>
                                    <td></td>
                                    <th></th>
                                    <th></th>
                                    <th>Email did not match</th>
                                </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default MySubmissions;