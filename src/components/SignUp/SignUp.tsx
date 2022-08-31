import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useRef, useState } from 'react';
import {
  Form,
  Button,
  Card,
  Alert
} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signUp } from "../../helpers/handleAuth";
import { useAppDispatch } from "../../store/hooks";
import { setActiveUser, User } from "../../store/profileSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('Passwords don`t match');
    }

    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current!.value, passwordRef.current!.value);
      navigate('/');
    } catch (err: any) {
      setError('Failed to create an account: ' + JSON.stringify(err.code));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const user: User = {
        displayName: currentUser?.displayName || null,
        photoURL: currentUser?.photoURL || null,
        email: currentUser?.email || null,
      }

      dispatch(setActiveUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Container
      className='
        d-flex
        align-items-center
        justify-content-center
        p-4
      '
    >
      <div
        className='w-100'
        style={{ maxWidth: '400px'}}
      >
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4'>
              Sign Up
            </h2>
            {error &&
              <Alert variant='danger'>
                {error}
              </Alert>
            }

            <Form
              className='mb-4'
              onSubmit={(event) => handleSubmit(event)}
            >
              <Form.Group id='email' className='mb-4'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  required
                  ref={emailRef}
                  pattern='[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-z]{2,}'
                />
              </Form.Group>

              <Form.Group id='password' className='mb-4'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  required
                  ref={passwordRef}
                  pattern='[a-zA-Z0-9]{8,}'
                  title='Must be at least 8 characters'
                />
              </Form.Group>

              <Form.Group id='password-confirm' className='mb-4'>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type='password'
                  required
                  ref={passwordConfirmRef}
                />
              </Form.Group>

              <Button
                className='w-100'
                type='submit'
                disabled={loading}
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <div className='w-100 text-center mt-2'>
          Don't have an account? <Link to='/'>Log In</Link>
        </div>
      </div>
    </Container>
  );
}