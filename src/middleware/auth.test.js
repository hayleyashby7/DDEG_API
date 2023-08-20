import { authenticateUser, generateToken } from './auth';
import Jwt from 'jsonwebtoken';
import { config } from 'dotenv';

// Load environment variables for access token
config({ path: '.env' });

describe('generateToken', () => {
    test('generateToken should return a token', () => {
        // Arrange
        const user = {
            username: 'test',
        };

        // Act
        const token = generateToken(user);

        // Assert
        expect(token).toBeDefined();
    });

    test('generateToken should return a token that can be decoded', () => {
        // Arrange
        const user = {
            username: 'test',
        };

        // Act
        const token = generateToken(user);
        const decoded = Jwt.verify(token, process.env.TOKEN_SECRET);

        // Assert
        expect(decoded).toBeDefined();
        expect(decoded.username).toBe(user.username);
    });

    test('generateToken should return a token that expires in 30 minutes', () => {
        // Arrange
        const user = {
            username: 'test',
        };

        // Act
        const token = generateToken(user);
        const decoded = Jwt.verify(token, process.env.TOKEN_SECRET);

        // Assert
        expect(decoded).toBeDefined();
        expect(decoded.exp - decoded.iat).toBe(1800);
    });
});

describe('authenticateUser', () => {
    test('should return 401 if no token is provided', () => {
        // Arrange
        const req = {
            headers: {
                authorization: '',
            },
        };
        const res = {
            sendStatus: jest.fn(),
        };
        const next = jest.fn();

        //Act
        authenticateUser(req, res, next);

        // Assert
        expect(res.sendStatus).toHaveBeenCalledWith(401);
    });

    test('should return 403 if token is invalid', () => {
        // Arrange
        const req = {
            headers: {
                authorization: 'Bearer invalid-token',
            },
        };
        const res = {
            sendStatus: jest.fn(),
        };
        const next = jest.fn();

        //Act
        authenticateUser(req, res, next);

        // Assert
        expect(res.sendStatus).toHaveBeenCalledWith(403);
    });

    test('should call next if token is valid', () => {
        // Arrange
        const user = {
            username: 'test',
        };

        const token = generateToken(user);

        const req = {
            headers: {
                authorization: `Bearer ${token}`,
            },
            body: { username: 'test' },
        };

        const res = {
            sendStatus: jest.fn(),
        };

        const next = jest.fn();

        //Act
        authenticateUser(req, res, next);

        // Assert
        expect(next).toHaveBeenCalled();
    });
});
