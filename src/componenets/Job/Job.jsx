/* eslint-disable react/prop-types */
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ job_title}</h2>
                <p>{company_name}</p>
                <div className="gap-4 flex mt-2">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-5">
                    <h2 className="flex gap-2 font-medium"><MdLocationOn className="text-2xl"></MdLocationOn> {location}</h2>
                    <h2 className="flex gap-2 font-medium"><AiOutlineDollar className="text-xl"></AiOutlineDollar>Salary : {salary}</h2>
                </div>
                <div className="card-actions mt-6">
                    <Link to={`/job/${id}`}>
                        <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;