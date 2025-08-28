import { Redirect } from 'expo-router';
import LoginPage from './login';

export default function Index() {
  return <LoginPage />;
  // return <Redirect href="/splash" />;
}
