import { authenticateUser } from './auth';
import { Request, Response, NextFunction } from 'express';
import { dbMock } from '../mocks/mockDB';
import { mockAuthUser } from '../mocks/mockData';

describe('authenticateUser', () => {
    test('should call the database with the correct query', async () => {
        // Arrange
        const req: Request = {
            headers: { 'x-api-key': 'test-key' },
        } as unknown as Request;
        const res: Response = { sendStatus: jest.fn() } as unknown as Response;
        const next: NextFunction = jest.fn();
        dbMock.users.findUnique.mockResolvedValueOnce(mockAuthUser);

        //Act
        await authenticateUser(req, res, next);

        // Assert
        expect(dbMock.users.findUnique).toHaveBeenCalledWith({
            where: {
                key: 'test-key',
            },
            select: {
                user_id: true,
            },
        });
    });

    test('should call next if api key is valid', async () => {
        // Arrange
        const req: Request = {
            headers: { 'x-api-key': 'test-key' },
        } as unknown as Request;
        const res: Response = { sendStatus: jest.fn() } as unknown as Response;
        const next: NextFunction = jest.fn();
        dbMock.users.findUnique.mockResolvedValueOnce(mockAuthUser);

        //Act
        await authenticateUser(req, res, next);

        // Assert
        expect(next).toHaveBeenCalled();
    });

    test('should return 401 if no api key is provided', async () => {
        // Arrange
        const req: Request = {
            headers: {},
        } as Request;
        const res: Response = { sendStatus: jest.fn() } as unknown as Response;
        const next: NextFunction = jest.fn();
        dbMock.users.findUnique.mockResolvedValueOnce(null);

        //Act
        await authenticateUser(req, res, next);

        // Assert
        expect(res.sendStatus).toHaveBeenCalledWith(401);
    });

    test('should return 403 if api key is not valid', async () => {
        // Arrange
        const req: Request = {
            headers: { 'x-api-key': 'invalid-key' },
        } as unknown as Request;
        const res: Response = { sendStatus: jest.fn() } as unknown as Response;
        const next: NextFunction = jest.fn();
        dbMock.users.findUnique.mockResolvedValueOnce(null);

        //Act
        await authenticateUser(req, res, next);

        // Assert
        expect(res.sendStatus).toHaveBeenCalledWith(403);
    });
});
