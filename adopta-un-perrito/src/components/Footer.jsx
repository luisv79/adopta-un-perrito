import Container from 'react-bootstrap/Container';

const Footer = ({titleFooter}) => {
    return (
        <>
        <Container fluid>
    <div className='titulo-footer'>
      <p>{titleFooter}</p>
    </div>
    </Container>
        </>
    );
    };

export default Footer;