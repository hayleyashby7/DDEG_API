import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import { db } from '../database/db';

jest.mock('../database/db', () => ({
    __esModule: true,
    db: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
    mockReset(dbMock);
});

export const dbMock = db as unknown as DeepMockProxy<PrismaClient>;
