import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddAcademy = () => {

    let navigate = useNavigate();

    const [code, setCode] = useState('');
    const [title, setTitle] = useState('');
    const [cityLocation, setCityLocation] = useState('');
    const [studentsNumber, setStudentsNumber] = useState('');

    const addAcademy = async (event) => {
        event.preventDefault();

        const formData = {
            code: code,
            title: title,
            cityLocation: cityLocation,
            studentsNumber: studentsNumber,

        };

        try {

            const apiUrl = 'http://localhost:8080/rest/api/academies';

            // Esegui la richiesta POST all'API
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Dati inviati con successo!');
                navigate('/academiesList');

            } else {
                console.error('Errore durante l\'invio dei dati:', response.status);
            }
        } catch (error) {
            console.error('Errore durante la richiesta:', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={addAcademy}>
                <div className="mb-3">
                    <label htmlFor="code" className="form-label">
                        Code:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cityLocation" className="form-label">
                        CityLocation:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cityLocation"
                        value={cityLocation}
                        onChange={(e) => setCityLocation(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="studentsNumber" className="form-label">
                        studentsNumber:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="studentsNumber"
                        value={studentsNumber}
                        onChange={(e) => setStudentsNumber(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </form>
        </div>
    );

};

export default AddAcademy;
