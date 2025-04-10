import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage() {
  return (
    <AuthLayout
      title={
        "Let's get started! Create your account to start building your personal contact book."
      }
      bottomText={
        <>
          Already have an account? <Link to="/login">Login</Link> here!
        </>
      }
    >
      <RegistrationForm />
    </AuthLayout>
  );
}
