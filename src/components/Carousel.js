// component yang menampilkan gambar portofolio

import React from 'react';
import Card from '../components/Card';
import assets from '../assets/images/assets.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    imgSrc: assets,
                },
                {
                    id: 1,
                    imgSrc: assets,
                },
                {
                    id: 2,
                    imgSrc: assets,
                },
            ]
        }
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;