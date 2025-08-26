import React from 'react';
import { render } from '@testing-library/react-native';
import RootLayout from '@/app/_layout';

// Mock do useFonts
jest.mock('expo-font', () => ({
  useFonts: jest.fn(),
}));

// Mock do componente Produtos
jest.mock('@/components/Produtos', () => ({
  Produtos: () => <></>, // ou um componente fictício: <Text>Produtos</Text>
}));

describe('RootLayout', () => {
  const mockUseFonts = require('expo-font').useFonts;

  it('não renderiza nada quando as fontes não estão carregadas', () => {
    mockUseFonts.mockReturnValue([false]);

    const { toJSON } = render(<RootLayout />);
    expect(toJSON()).toBeNull();
  });

  it('renderiza corretamente quando as fontes estão carregadas', () => {
    mockUseFonts.mockReturnValue([true]);

    const { getByTestId } = render(<RootLayout />);

    // Verifica se os elementos principais estão presentes
    expect(getByTestId('produtos-container')).toBeTruthy();
    expect(getByTestId('barra-topo')).toBeTruthy();
    expect(getByTestId('barra-base')).toBeTruthy();
  });
});