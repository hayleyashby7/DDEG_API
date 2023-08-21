import { authenticateUser } from './auth';
import { authDB } from '../database/db';

jest.mock('../database/db', () => ({
    authDB: {
        from: jest.fn(),
    },
}));

beforeAll(async () => {
    jest.resetAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});

describe('authenticateUser', () => {
    test('should return 401 if no api key is provided', async () => {
        // Arrange
        const req = {
            headers: {
                'x-api-key': '',
            },
        };
        const res = {
            sendStatus: jest.fn(),
        };
        const next = jest.fn();

        jest.spyOn(authDB, 'from').mockImplementation(() => ({
            select: () => ({
                eq: () => null,
            }),
        }));

        //Act
        await authenticateUser(req, res, next);

        // Assert
        expect(jest.spyOn(authDB, 'from')).toHaveBeenCalledTimes(0);
        expect(res.sendStatus).toHaveBeenCalledWith(401);
    });
    test('should return 403 if api key is not valid', async () => {
        // Arrange
        const req = {
            headers: {
                'x-api-key': 'not a valid key',
            },
        };
        const res = {
            sendStatus: jest.fn(),
        };
        const next = jest.fn();

        jest.spyOn(authDB, 'from').mockImplementation(() => ({
            select: () => ({
                eq: () => ({
                    error: 'Invalid key',
                    data: null,
                }),
            }),
        }));

        //Act
        await authenticateUser(req, res, next);

        // Assert
        expect(jest.spyOn(authDB, 'from')).toHaveBeenCalledTimes(1);
        expect(res.sendStatus).toHaveBeenCalledWith(403);
    });

    test('should call next if api key is valid', async () => {
        // Arrange
        const req = {
            headers: {
                'x-api-key': '123',
            },
        };
        const res = {
            sendStatus: jest.fn(),
        };
        const next = jest.fn();

        jest.spyOn(authDB, 'from').mockImplementation(() => ({
            select: () => ({
                eq: () => ({
                    error: null,
                    data: { id: 1, key: '123' },
                }),
            }),
        }));

        //Act
        await authenticateUser(req, res, next);

        // Assert
        expect(jest.spyOn(authDB, 'from')).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalled();
    });
});
