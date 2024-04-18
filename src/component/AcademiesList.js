import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AcademiesList = () => {

    let navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 'http://localhost:8080/rest/api/academies';

                const response = await fetch(apiUrl);

                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    console.error('Errore durante la richiesta:', response.status);
                }
            } catch (error) {
                console.error('Errore durante la richiesta:', error);
            }
        };
        fetchData();
    }, []);

    const removeAcademy = (code) => {
        fetch(`http://localhost:8080/rest/api/academies/code/${code}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(async () => {

                const apiUrl = 'http://localhost:8080/rest/api/academies';

                const response = await fetch(apiUrl);

                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                }

            });
    };

    const academyToUpdate = (code) => {

        navigate('/updateAcademy/' + code);

    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Title</th>
                    <th>City Location</th>
                    <th>Students Number</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((academy) => (
                    <tr key={academy.code}>
                        <td>{academy.code}</td>
                        <td>{academy.title}</td>
                        <td>{academy.cityLocation}</td>
                        <td>{academy.studentsNumber}</td>
                        <td>
                            <button className="btn btn-primary mr-2" onClick={() => academyToUpdate(academy.code)}>
                                Update
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => removeAcademy(academy.code)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AcademiesList;
