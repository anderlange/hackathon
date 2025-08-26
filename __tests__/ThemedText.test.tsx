import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemedText } from '../components/elementos/ThemedText';

describe('ThemedText', () => {
  it('renderiza o texto corretamente', () => {
    const { getByText } = render(<ThemedText>Olá, Anderson!</ThemedText>);
    expect(getByText('Olá, Anderson!')).toBeTruthy();
  });

  it('aplica o estilo padrão e permite sobrescrever com props.style', () => {
    const customStyle = { fontSize: 20, color: 'red' };
    const { getByText } = render(
      <ThemedText style={customStyle}>Texto personalizado</ThemedText>
    );

    const textComponent = getByText('Texto personalizado');
    const finalStyle = Array.isArray(textComponent.props.style)
      ? Object.assign({}, ...textComponent.props.style)
      : textComponent.props.style;

    expect(finalStyle.fontSize).toBe(20); // sobrescreveu
    expect(finalStyle.color).toBe('red'); // sobrescreveu
  });
});