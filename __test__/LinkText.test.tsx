import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LinkText from '../src/components/LinkText';
import { Linking } from 'react-native';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

describe('LinkText Component', () => {
  it('renders correctly and opens the correct URL on press', () => {
    const url = 'https://github.com/ronaldophc';
    const text = 'GitHub';

    const { getByText } = render(<LinkText url={url} text={text} />);

    // Checka se o texto foi renderizado
    expect(getByText(text)).toBeTruthy();

    // Simulta o clique no texto
    fireEvent.press(getByText(text));

    // Verifica se a função Linking.openURL foi chamada com o URL correto
    expect(Linking.openURL).toHaveBeenCalledWith(url);
  });
});