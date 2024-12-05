/**
 * Representa o corpo da requisição HTTP.
 */
export interface RequestBody {
  /**
   * ID do usuário associado à requisição.
   */
  userId?: string;

  /**
   * Dados enviados na requisição.
   */
  data?: string;
}

/**
 * Representa o corpo da resposta HTTP.
 */
export interface ResponseBody {
  /**
   * Indica se a operação foi bem-sucedida.
   */
  success: boolean;

  /**
   * Mensagem informativa sobre o resultado da operação.
   */
  message: string;
}
