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
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {matchedEmail.length > 0 ?
                    (
                        matchedEmail.map((submission) => (
                            <tr key={submission._id}>
                                <th></th>
                                <td></td>
                                <td>Sayan Ahmed Ayaz</td>
                                <td>Blue</td>
                            </tr>
                        ))
                    ) 
                    : 
                    (
                        <></>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MySubmissions;