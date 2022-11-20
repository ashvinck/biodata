import React from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditBiodata } from './EditBiodata';


export function BiodataTable({ Biodata, setBiodata }) {
    // Table styling 
    const styles = {
        textAlign: "center",
        justifyContent: "center",
        width: "100%",
        margin: "1%",
    };
    let temp = [...Biodata];

    return (
        <div>
            <h3 className="heading">BioData</h3>
            <div className=" table-responsive BiodataTable">
                <Table style={styles} striped bordered responsive>
                    <thead className="thead thead-dark">
                        <tr>
                            <th>S.no</th>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Gender</th>
                            <th>Designation</th>
                            <th>Edit and Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Biodata.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.Id}</td>
                                    <td>{value.FirstName}</td>
                                    <td>{value.LastName}</td>
                                    <td>{value.Email}</td>
                                    <td>{value.Gender}</td>
                                    <td>{value.Designation}</td>
                                    <td>
                                        <EditBiodata value={value} index={index} Biodata={Biodata} setBiodata={setBiodata} />
                                        {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                                        <button className="btn" onClick={() => {
                                            temp.splice(index, 1);
                                            setBiodata(temp);
                                        }}><FontAwesomeIcon icon={faTrash} /> </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
