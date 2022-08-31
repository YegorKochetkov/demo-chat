import React, { useRef } from 'react';
import {
  Form,
  Button,
  Card
} from 'react-bootstrap';

export const SignUp: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>
            Sign Up
          </h2>

          <Form className='mb-4'>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                required
                ref={emailRef}
              />
            </Form.Group>
          </Form>

          <Form className='mb-4'>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                required
                ref={passwordRef}
              />
            </Form.Group>
          </Form>

          <Form className='mb-4'>
            <Form.Group id='password-confirm'>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type='password'
                required
                ref={passwordConfirmRef}
              />
            </Form.Group>
          </Form>

          <Button className='w-100' type='submit'>
            Sign Up
          </Button>
        </Card.Body>
      </Card>

      <div className='w-100 text-center mt-2'>
        Already have an account? Log In
      </div>
    </>
  );
}