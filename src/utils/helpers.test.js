import {
  getDomain,
  getDomainName,
  isoStringToDatetime,
  sortArrayOfObjects
} from './helpers';

describe('utils - helpers', () => {
  describe('sort', () => {
    it('should receive an array of objects and sort it', () => {
      const unsortedArray = [{ id: 20 }, { id: 1 }, { id: 9 }, { id: 5 }];
      const sortedArray = sortArrayOfObjects(unsortedArray, 'id');

      expect(sortedArray).toEqual([{ id: 1 }, { id: 5 }, { id: 9 }, { id: 20 }]);
    });

    it('should fail on wrong type of param - first param', (done) => {
      try {
        sortArrayOfObjects('[{ id: 20 }, { id: 1 }]');
      } catch (error) {
        expect(error instanceof Error).toBe(true);
        expect(error.message).toEqual('param object must be of type object');
        return done();
      }
    });

    it('should fail on wrong type of param - second param', (done) => {
      try {
        sortArrayOfObjects([{ id: 20 }, { id: 1 }], null);
      } catch (error) {
        expect(error instanceof Error).toBe(true);
        expect(error.message).toEqual('param prop must be of type string');
        return done();
      }
    });
  });

  describe('isoStringToDatetime', () => {
    it('should transform isoString to a conventional date format', () => {
      const dateTime = isoStringToDatetime('2020-08-06T07:54:00.232Z');

      expect(dateTime).toEqual('6 August 2020');
    });

    it('should fail on wrong type of param - second param', (done) => {
      try {
        isoStringToDatetime(null);
      } catch (error) {
        expect(error instanceof Error).toBe(true);
        expect(error.message).toEqual('param isoString must be of type string');
        return done();
      }
    });
  });

  describe('getDomainName', () => {
    it('should receive an email and return the domain name', () => {
      const email = 'test@mail.com';
      const domainName = getDomainName(email);

      expect(domainName).toEqual('mail');
    });

    it('should fail on wrong type of param - first param', (done) => {
      try {
        getDomainName(null);
      } catch (error) {
        expect(error instanceof Error).toBe(true);
        expect(error.message).toEqual('param emailAddress must be of type string');
        return done();
      }
    });
  });

  describe('getDomain', () => {
    it('should receive an email and return the domain', () => {
      const email = 'test@mail.com';
      const domainName = getDomain(email);

      expect(domainName).toEqual('com');
    });

    it('should fail on wrong type of param - first param', (done) => {
      try {
        getDomain(null);
      } catch (error) {
        expect(error instanceof Error).toBe(true);
        expect(error.message).toEqual('param emailAddress must be of type string');
        return done();
      }
    });
  });
});