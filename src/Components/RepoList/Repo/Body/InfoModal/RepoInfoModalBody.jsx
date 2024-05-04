import React from "react";
import './RepoInfoModalBody.css';
import { FaFileAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";


const RepoInfoModalBody = () => {
  return (
    <p className="RepoInfoModalBody">
        {'Click on files ( '}
        <FaFileAlt />
        {' ) and folders ( '}
        <FaFolder />
        {' ) to view their content.'}
    </p>
  )
}

export default RepoInfoModalBody