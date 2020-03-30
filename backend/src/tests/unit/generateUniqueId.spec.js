const generateUniqueId = require('../../utils/generateUniqueId');

describe ('Generate Unique ID', () => {
    it ('should generate a Unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});