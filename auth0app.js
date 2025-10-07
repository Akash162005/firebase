import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  // Use the Auth0 hook to handle authentication
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Simple React Auth0 Example</h1>

      {/* Check if user is authenticated */}
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
}

export default App;