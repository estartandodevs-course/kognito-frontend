import { notCapitalize } from './writing.variables';

/**
 * Deixa o texto com a primeira letra em maiúsculo e todo o resto em minúsculo.
 * @param text Texto a ser formatado.
 * @returns Texto formatado.
 */
const formatOneUpper = (text: string) => {
  const newText = text.toLowerCase();

  if (notCapitalize.indexOf(newText) !== -1) {
    return newText;
  }
  return `${newText.charAt(0).toUpperCase()}${newText.slice(1)}`;
};

/**
 * Retorna o texto capitalizado na primeira letra ou em todas as letras após o espaço.
 * @param text Texto a ser formatado.
 * @param upper Formato do capitalizer.
 * @returns Texto formatado.
 */
export const formatCapitalize = (text: string, upper: 'first' | 'all') => {
  if (upper === 'first') {
    return formatOneUpper(text);
  }

  const listText = text.split(' ').map((word) => formatOneUpper(word));
  return listText.join(' ');
};
