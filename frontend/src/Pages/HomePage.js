import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Bienvenido a nuestra tienda</h1>
    <Link to="/productos">
      <button>Ver Productos</button>
    </Link>
  </div>
);

export default HomePage;
