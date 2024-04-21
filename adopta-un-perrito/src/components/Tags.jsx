import Badge from 'react-bootstrap/Badge';


const Tags = ({colorBadge, textBadge}) => {
  return (
    <Badge className='botoncito' bg={colorBadge}>{textBadge}</Badge>
  );
};

export default Tags;