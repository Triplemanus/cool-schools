import { fetchAllSchools } from './apiCalls';

describe('apiCalls', () => {
  let mockSchoolSearch;

  beforeEach(() => {
    mockSchoolSearch = {
      "numberOfSchools": 1,
      "numberOfPages": 1,
      "schoolList": []
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise(mockSchoolSearch)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    fetchAllSchools(mockSchoolSearch)
  });

})
