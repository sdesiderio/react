import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const UpdateAcademy = () => {

    let navigate = useNavigate();

    /*
    Lo hook userParams serve per recuperare
    un elemento da una rotta di navigazione
    */
    const { code } = useParams();

    const [title, setTitle] = useState('');
    const [cityLocation, setCityLocation] = useState('');
    const [studentsNumber, setStudentsNumber] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `http://localhost:8080/rest/api/academies/code/${code}`;

                const response = await fetch(apiUrl);

                if (response.ok) {
                    const jsonData = await response.json();
                    setTitle(jsonData.title);
                    setCityLocation(jsonData.cityLocation);
                    setStudentsNumber(jsonData.studentsNumber);


                } else {
                    console.error('Errore durante la richiesta:', response.status);
                }
            } catch (error) {
                console.error('Errore durante la richiesta:', error);
            }
        };
        fetchData();
    }, []);

    const updateAcademy = async (event) => {
        event.preventDefault();

        const formData = {
            code: code,
            title: title,
            cityLocation: cityLocation,
            studentsNumber: studentsNumber,

        };

        try {

            const apiUrl = 'http://localhost:8080/rest/api/academies';

            // Esegui la richiesta PUT all'API
            const response = await fetch(apiUrl, {
                method: 'PUT',
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
            <form onSubmit={updateAcademy}>
                <div className="mb-3">
                    <label htmlFor="code" className="form-label">
                        Code:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={code}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
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
                    Update
                </button>
            </form>
        </div>
    );

}

export default UpdateAcademy;
