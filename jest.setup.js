import "@testing-library/jest-dom";

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
  key: jest.fn(),
  length: 0,
};

Object.defineProperty(window, "localStorage", { value: localStorageMock });
