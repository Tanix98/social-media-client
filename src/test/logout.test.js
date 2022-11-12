import { logout } from '../js/api/auth/logout.js';
import { save } from '../js/storage/save.js';

test('Logout function clears the token from browser storage', () => {
  logout();
  expect(save).toBeFalsy();
});
