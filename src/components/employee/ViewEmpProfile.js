import React from "react";
import { useParams } from "react-router-dom";
import { MDBContainer as Container,
          MDBBtn as Button, } from "mdb-react-ui-kit";
import { FaDownload } from "react-icons/fa";
import Header from "../common/Header";

const ViewEmpProfile = () => {
  const { id } = useParams();
  const employees = [
    {
      id: "1",
      Name: "Mohit",
      ContactNo: "1234567890",
      DOB: "7/3/1998",
      Address: "India",
      Gender: "Male",
      AadharNo: "342946704483",
      PanNo: "POI3652U",
      Bloodgroup: "AB+",
      Department: "XYZ",
      Qualification: "B.Tech",
      Position: "Manager",
      DateOfHiring:"7/3/1998",
      Salary: "5000",
      NetSalary: "8000",
      GrossSalary: "1200",
      allowance: "Yes",
      Deduction: "NO",
      PfEmployeeContribution: "1444",
      LoanAmount: "4440",
      LoanRepaymentAmount: "5550",
      Vacations: "10days",
    },
   
  ];

  const employeeToShow = employees.find((employee) => employee.id === id);

  if (!employeeToShow) {
    return <div>Employee not found.</div>;
  }

  const renderEmployeeRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">
        {key.replace(/([A-Z])/g, " $1").trim()}:
      </div>
      <div className="entity-value">{value}</div>
    </div>
  );


  const handleSalarySlipPdf =()=>{
    console.log("hiii");
  }

  return (
    <div>
      <Header />
      <h2 className="mb-4 text-center entity-column">Employee Details</h2>
      <Container
        className="detail w-75 text-center"
        style={{
          height: "730px",
          width: "50%",
          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.3), 0 6px 10px rgba(0, 0, 0, 0.23)",
          marginBottom: "0",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div>
          <div className="d-flex w-120 flex-column">
            <div className="d-flex entity-row">
              {renderEmployeeRow("id", employeeToShow.id)}
              {renderEmployeeRow("Name", employeeToShow.Name)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("ContactNo", employeeToShow.ContactNo)}
              {renderEmployeeRow("DOB", employeeToShow.DOB)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("Address", employeeToShow.Address)}
              {renderEmployeeRow("Gender", employeeToShow.Gender)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("AadharNo", employeeToShow.AadharNo)}
              {renderEmployeeRow("PanNo", employeeToShow.PanNo)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("Bloodgroup", employeeToShow.Bloodgroup)}
              {renderEmployeeRow("Department", employeeToShow.Department)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("Qualification", employeeToShow.Qualification)}
              {renderEmployeeRow("Position", employeeToShow.Position)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("DateOfHiring", employeeToShow.DateOfHiring)}
              {renderEmployeeRow("Salary", employeeToShow.Salary)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("NetSalary", employeeToShow.NetSalary)}
              {renderEmployeeRow("GrossSalary", employeeToShow.GrossSalary)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("Deduction", employeeToShow.Deduction)}
              {renderEmployeeRow("PfEmployeeContribution", employeeToShow.PfEmployeeContribution)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("LoanAmount", employeeToShow.LoanAmount)}
              {renderEmployeeRow("LoanRepaymentAmount", employeeToShow.LoanRepaymentAmount)}
            </div>
            <div className="d-flex entity-row">
              {renderEmployeeRow("allowance", employeeToShow.allowance)}
              {renderEmployeeRow("Vacations", employeeToShow.Vacations)}
            </div>
            {Object.entries(employeeToShow)
              .filter(
                ([key]) =>
                  ![
                    "id",
                    "Name",
                    "ContactNo",
                    "DOB",
                    "Address",
                    "Gender",
                    "AadharNo",
                    "PanNo", 
                    "Bloodgroup",
                    "Department",
                    "Qualification", 
                    "Position",
                    "DateOfHiring",
                    "Salary",
                    "NetSalary",
                    "GrossSalary",
                    "Deduction",
                    "PfEmployeeContribution",
                    "LoanAmount",
                    "LoanRepaymentAmount",
                    "allowance",
                    "Vacations",
                  ].includes(key)
              )
              .map(([key, value]) => renderEmployeeRow(key, value))}
          </div>
        </div>
        <div style={{ marginBottom: "10px", marginLeft:"990px"}}>
              <Button
                variant="primary"
                onClick={handleSalarySlipPdf}
                className="w-70" 
              >
                <FaDownload /> Salary Slip
              </Button>
             
            </div>
      </Container>
    </div>
  );
};

export default ViewEmpProfile;