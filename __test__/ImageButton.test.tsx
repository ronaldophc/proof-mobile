import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ImageButton from '../src/components/login/ImageButton';

describe('ImageButton Component', () => {
  it('renders correctly and calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const source = 'https://example.com/image.png';

    const { getByText, getByTestId } = render(<ImageButton onPress={onPressMock} source={source} />);

    // Checka se o texto foi renderizado corretamente
    expect(getByText('Entrar')).toBeTruthy();

    // Checka se a imagem foi renderizada corretamente
    const image = getByTestId('image-button-image');
    expect(image.props.source.uri).toBe(source);

    // Simula o clique no botão
    fireEvent.press(getByText('Entrar'));

    // Verifica se a função onPress foi chamada
    expect(onPressMock).toHaveBeenCalled();
  });
});