import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
const MySubmissions = () => {
    const { user } = useContext(AuthContext);
    const [newUser, setNewUser] = useState([]);
    const [submissions, setSubmissions] = useState([])
    const matchedEmail = submissions.filter(submission => submission.workerEmail === newUser.email);
    const submissionsCount = useLoaderData([])
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const numberOfPages = submissionsCount.count ? Math.ceil(submissionsCount.count / itemsPerPage) : 0;
    const pages = numberOfPages > 0 ? [...Array(numberOfPages).keys()] : [];


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user?.email}`)
            .then(res => res.json())
            .then(data => setNewUser(data));
    }, [user?.email]);
    // ?page=${currentPage}&size=${itemsPerPage}
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/submissions`)
            .then(res => res.json())
            .then(data => setSubmissions(data));
    }, []);

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
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
                                    <th>{submission.creatorName}</th>
                                    <th>{submission.creatorEmail}</th>
                                    <th>{submission.title2}</th>
                                    <th>{submission.details}</th>
                                    <th>{submission.currentDate}</th>
                                </tr>
                            ))
                        )
                        :
                        (
                            <tr>
                                <th>Email is not Matching</th>
                            </tr>
                        )}
                </tbody>
            </table>
            {
                matchedEmail.length > 0 && pages.length > 0 && (
                    <div className="mt-10 text-center space-x-3 mb-10">
                        <button onClick={handlePrevious}
                            className={currentPage > 0 ? "btn text-white font-bold btn-success" : "opacity-0 btn-disabled"}>Previous</button>
                        {
                            pages.map(page => <button onClick={() => setCurrentPage(page)}
                                className={currentPage === page ? "btn btn-active text-white font-bold" : "btn btn-info text-white font-bold"}
                                key={page}>{page}</button>)
                        }
                        <button onClick={handleNext}
                            className={currentPage < pages.length - 1 ? "btn text-white font-bold btn-success" : "opacity-0 btn-disabled"}>Next</button>
                    </div>
                )
            }
        </div>
    );
};
// () => setCurrentPage(page)
export default MySubmissions;