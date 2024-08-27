import React from "react";
import { updateDoc, doc } from "firebase/firestore"; 
import { firestoreDb } from "../Firebase/Config";
import { useAuth } from "../Contexts/AuthContext";


export default function ComplainCard({
  id, // Ensure to pass the id of the document
  category,
  createdBy,
  description,
  status,
  hostel,
  room,
  createdAt,
}) {
 const {currentUser: {email}} = useAuth();
  const isAdmin = email === "davidvictor297@gmail.com"; // Check if the current user is the admin

  // Function to update the status to "Closed"
  const closeComplaint = async () => {
    const complaintDoc = doc(firestoreDb, "complains", id);
    await updateDoc(complaintDoc, {
      status: "Closed",
    });
    alert("Complaint status updated to Closed");
  };

  return (
    <div className="card" style={{ color: "#000000" }}>
      <div className="card-header">
        <h2>{category}</h2>
      </div>
      <div className="card-body">
        <p>Description: {description}</p>
        <div className="card-footer">
          <div>Hostel: {hostel}</div>
          <div>Room: {room}</div>
          <div>Status: {status}</div>
          <div>Created At: {createdAt}</div>
          <div>
            Created By:{" "}
            <a href={`mailto:${createdBy}`} style={{ color: "blue" }}>
              {createdBy}
            </a>
          </div>
          {isAdmin && (
            <button onClick={closeComplaint} className="btn btn-danger mt-3">
              Close Complaint
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
