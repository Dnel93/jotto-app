import moxios from 'moxios';
import { getSeceretWord } from '.';

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('secretWord is returned', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    // TODO: Update to test app in Redux / context sections
    return getSeceretWord().then(secretWord => {
      expect(secretWord).toBe('party');
    });
  });
});
