import { logout } from '../js/api/auth/logout.js';
import { save } from '../js/storage/save.js';

describe('logout function', () => {
  it('Clears the token from browser storage', () => {
    logout();
    expect(save).toBeFalsy();
  });
});
