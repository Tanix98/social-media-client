import { login } from '../js/api/auth/login.js';
import { save } from '../js/storage/save.js';

describe('Login function', () => {
  it('returns a valid token when provided with valid credentials', async () => {
    await login('oysRos99836@stud.noroff.no', 'Password98');
    expect(save).toBeTruthy();
  });
});
