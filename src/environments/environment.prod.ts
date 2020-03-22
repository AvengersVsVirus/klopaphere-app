export const environment = {
  production: true,
  apiUrl: "https://api.klopaphere.de",
  authConfig: {
    identity_client: "klopaphere-frontend",
    identity_server: "https://sso.klopaphere.de/auth/realms/Klopaphere",
    redirect_url: "appauth://callback",
    end_session_redirect_url: "appauth://endSession",
    scopes: "openid profile offline_access",
    usePkce: true
  }
};
