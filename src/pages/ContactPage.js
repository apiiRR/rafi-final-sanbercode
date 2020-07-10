// ini adalah halaman yang berisi form

import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.inputName = React.createRef();
        this.inputEmail = React.createRef();
        this.inputMessage = React.createRef();
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        alert('Pesan terkirim')
    }


    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control name="name" type="text" ref={this.inputName} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control name="email" type="email" ref={this.inputEmail} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control name="message" as="textarea"rows="3" ref={this.inputMessage} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit">
                            Send
                        </Button>

                    </Form>
                </Content>
            </div>
        );
    }

}

export default ContactPage;