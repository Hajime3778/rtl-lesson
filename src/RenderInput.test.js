import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RenderInput from './RenderInput';
import userEvent from '@testing-library/user-event';

// renderを使用するたびにマウントされるため、アンマウントするために必要
afterEach(() => cleanup());

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<RenderInput />);
    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy();
  });
});

describe('Input form onchange event', () => {
  it('Should update input value', () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText('Enter');
    userEvent.type(inputValue, 'test');
    expect(inputValue.value).toBe('test');
  });
});

describe('Console button conditionally triggered', () => {
  it('Should not trigger output function', () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    userEvent.click(screen.getByRole('button'));
    expect(outputConsole).not.toHaveBeenCalled();
  });

  it('Should trigger output function', () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText('Enter');
    userEvent.type(inputValue, 'test');
    userEvent.click(screen.getByRole('button'));
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
