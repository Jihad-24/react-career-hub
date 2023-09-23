import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [Jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className="my-20">
            <div className="text-center">
            <h2 className="text-5xl">Featured Jobs : { Jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    Jobs.slice(0,dataLength).map(job=> <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === Jobs.length ? 'hidden':"text-center my-10"}>
                <button onClick={()=>setDataLength(Jobs.length)} className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;