import { notCapitalize, regexRestrictMap } from './writing.variables';

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

/**
 * Formata um valor de nota para o formato de número com 2 casas decimais.
 *
 * A função remove caracteres não numéricos do valor, garante que o valor não ultrapasse
 * 1000 (equivalente a 10.00) e, em seguida, retorna o valor formatado como uma string
 * no formato "X,YY", onde X é a parte inteira e YY é a parte decimal.
 *
 * @param {string} value - O valor da nota a ser formatado. Pode conter caracteres não numéricos que serão removidos.
 * @returns {string} O valor formatado no formato "X,YY", onde X é a parte inteira e YY a parte decimal.
 */
export const formatGrade = (value: string): string => {
  // Remove caracteres não numéricos
  let newValue = value.replace(regexRestrictMap.text, '');

  // Garante que não ultrapasse o valor máximo (1000, equivalente a 10.00)
  newValue = Math.min(parseInt(newValue || '0'), 1000).toString();

  const integer = newValue.slice(0, -2) || '0';
  const decimal = newValue.slice(-2).padStart(2, '0');

  return `${integer},${decimal}`;
};

/**
 * Formata um CPF no formato "XXX.XXX.XXX-XX".
 *
 * A função remove caracteres não numéricos do valor, limita o CPF a no máximo 11 dígitos,
 * e aplica uma formatação gradual conforme o número de dígitos digitados, retornando o CPF
 * no formato correto conforme a quantidade de números inseridos.
 *
 * @param {string} value - O valor do CPF a ser formatado, podendo conter caracteres não numéricos.
 * @returns {string} O CPF formatado no formato "XXX.XXX.XXX-XX".
 */
export const formatCPF = (value: string): string => {
  let newValue = value.replace(regexRestrictMap.text, '');

  // Limita o CPF a no máximo 11 dígitos
  newValue = newValue.slice(0, 11);

  // Formatação gradual com uma única expressão regular
  if (newValue.length <= 3) return newValue;
  if (newValue.length <= 6) return newValue.replace(/(\d{3})(\d{1,})/, '$1.$2');
  if (newValue.length <= 9) return newValue.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');

  return newValue.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
};
