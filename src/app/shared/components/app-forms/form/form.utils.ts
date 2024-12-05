import { DataProps } from './form.types';

/**
 * Remove espaços em branco do início e do fim das chaves e valores de um objeto.
 * Se o valor de uma chave for um objeto, aplica a mesma formatação recursivamente.
 *
 * @param data O objeto a ser formatado, que pode conter chaves com valores do tipo string ou objetos aninhados do mesmo tipo.
 * @returns O objeto formatado, onde todas as chaves e valores têm espaços em branco removidos.
 */
export const trimmerData = (data: DataProps) => {
  const formattedObj: DataProps = {};

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'object') {
      // Aplica a recursividade se for `object`.
      formattedObj[key] = trimmerData(value);
    } else {
      formattedObj[key] = value.trim();
    }
  });

  return formattedObj;
};

/**
 * Remove chaves de um objeto cujos nomes contêm as strings especificadas.
 * A remoção ocorre de forma recursiva em objetos aninhados.
 *
 * @param data - O objeto a ser processado.
 * @param omitTo - Uma string ou lista de strings a ser procurada nos nomes das chaves.
 * @returns O objeto resultante com as chaves omitidas.
 */
export const omitKeys = (data: DataProps, omitTo: string | string[]) => {
  const formattedObj: DataProps = {};

  // Normaliza `omitTo` para sempre ser um array
  const omitList = Array.isArray(omitTo) ? omitTo : [omitTo];

  Object.entries(data).forEach(([key, value]) => {
    // Verifica se a chave contém qualquer uma das strings em `omitList`
    const shouldOmit = omitList.some((omitString) => key.includes(omitString));

    if (!shouldOmit) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Aplica a recursividade se for um objeto
        formattedObj[key] = omitKeys(value, omitList);
      } else {
        formattedObj[key] = value;
      }
    }
  });

  return formattedObj;
};
