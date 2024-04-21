import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyCard from './MyCard';
import Image1 from '../assets/images/dog-1.jpg';
import Image2 from '../assets/images/dog-2.jpg';
import Image3 from '../assets/images/dog-3.jpg';    
import Image4 from '../assets/images/dog-4.jpg';

const Contenedor = () => {
  return (
    <Container fluid>
      <Row>
        <Col><MyCard
            image={Image1}
            title="Bartolo"
            cardText="Lleno de energia y listo para jugar. Dale un hogar a Bartolo muy amoroso como se lo merece."
            colorBadge="success"
            textBadge="Wolverine"
            /></Col>
        <Col><MyCard
            image={Image2}
            title="Messi"
            cardText="Es juguetón y amigable se lleva bien con los niños y otros animales. !Haz de Messi parte de tu familia hoy mismo"
            colorBadge="primary"
            textBadge="Mestizo"
            /></Col>
        <Col><MyCard
            image={Image3}
            title="Gohan"
            cardText="Un perro muy chico con un corazon muy grande. Hazte amigo de Gohan y experimenta un amor incondicional."
            colorBadge="danger"
            textBadge="Mestizo"
            /></Col>
        <Col><MyCard
            image={Image4}
            title="Princesa"
            cardText="Una compañera ideal dinamica adora los juegos en el parque. ¡Ayuda a Princesa a encontrar su hogar!."
            colorBadge="warning"
            textBadge="Collie Border"
            /></Col>
      </Row>
      <div className='texto-descripcion'>
        <p>Explora nuestra galeria de adopcíon de perros para encontrar a tu compañero perfecto. Tenemos una veriedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu amigo peludo para siempre.</p>
      </div>
    </Container>
  );
};
export default Contenedor;