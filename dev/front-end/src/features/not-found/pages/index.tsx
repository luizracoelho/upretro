import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>404</h1>
            <h2>Não Encontrado</h2>

            <button type="button" onClick={() => navigate(-1)}>Voltar</button>
        </>
    );
}

export default NotFoundPage;