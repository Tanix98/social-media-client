import { logout } from '../js/api/auth/logout.js';

describe('logout function', () => {
  it('Clears the token from browser storage', () => {
    const accessToken = localStorage.getItem('accessToken');
    logout();
    expect(accessToken).toBeFalsy();
  });
});
