import React, { useContext } from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
import { CatContext } from '../../App';
const Home = () => {
    
    const [category, setCategory]=useContext(CatContext)
    return (
        <div >
            <Container>
            <ButtonGroup className="justify-content-md-center" size="lg" className="mb-2">
                <Button onClick={()=>setCategory("camera")}>Camera</Button>
                <Button onClick={()=>setCategory("android")}>Mobile</Button>
                <Button onClick={()=>setCategory("laptop")}>Laptop</Button>
                <Button onClick={()=>setCategory("All")}>All</Button>
            </ButtonGroup>
            </Container>

        </div>
    );
};

export default Home;