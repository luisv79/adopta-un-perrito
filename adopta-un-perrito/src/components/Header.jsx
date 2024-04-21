import Container from 'react-bootstrap/Container';

const Header = ({title}) => {
  return (
   <>
   <Container>
    <div className='titulo-principal'>
      <h1>{title}</h1>
    </div>
    </Container>
   

   </>
  );
};

export default Header;