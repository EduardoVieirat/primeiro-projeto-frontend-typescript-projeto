export default function useAuth() {
  function addToken(token: string) {
    localStorage.setItem("token", token);
  }

  function clearToken() {
    localStorage.removeItem("token");
  }

  function getToken(): string | null {
    return localStorage.getItem('token')
  }
  return {
    addToken,
    clearToken,
    getToken
  };
}
