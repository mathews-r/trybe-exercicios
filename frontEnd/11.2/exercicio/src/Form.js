import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>
            Nome: 
            <input type='text' maxLength='40' required />
          </label>
          <label>
            Email:
            <input type='text' maxLength='50' required />
          </label>
          <label>
            CPF:
            <input type='text' maxLength='11' required />
          </label>
          <label>
            Endereço:
            <input type='text' maxLength='200' required />
          </label>
          <label>
            Cidade:
            <input type='text' maxLength='28' required />
          </label>

          <label htmlFor='radioHome'>
            Tipo:
            <input type='radio' name='radioHome' id='radioHome' required /> Casa
            <input type='radio' name='radioHome' id='radioHome' required /> Apartamento
          </label>
        </fieldset>

        <fieldset>
          <label>
            Resumo do curriculo:
            <textarea type="text" maxLength="1000" required></textarea>
          </label>
          <label>
            Cargo:
            <textarea type="text" maxLength="40" required></textarea>
          </label>
          <label>
            Descrição do cargo:
            <input type='text' maxLength='50' required />
          </label>
        </fieldset>
        <button type='submit'>Salvar</button>
        <button type='submit'>Limpar</button>
      </form>
    )
  }
}

export default Form;