import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import AuthLayout from '../../components/AuthLayout/AuthLayout';

export default function LoginPage() {
  return (
    <AuthLayout
      title={'Happy to see you! Please log in to access your contacts.'}
      bottomText={
        <>
          New here? <Link to="/register">Register</Link> now!
        </>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}
