import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully!!')
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="border col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>job details of : {job.job_title}</h2>
                    <p>{ job.company_name}</p>
                </div>
                <div className="border col-span-1">
                    <h2 className="text-2xl">side things</h2>
                    <button onClick={handleApplyJob} className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;