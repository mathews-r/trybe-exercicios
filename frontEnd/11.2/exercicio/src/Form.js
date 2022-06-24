import React from 'react';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      curriculo: '',
      cargo: '',
      descricaoCargo: '',
    }
  }
  
  render() {
    return (
      <form>
        <fieldset>
          <label>
            Nome: 
            <input name='name' type='text' maxLength='40' required />
          </label>
          <label>
            Email:
            <input name='email' type='text' maxLength='50' required />
          </label>
          <label>
            CPF:
            <input name='cpf' type='text' maxLength='11' required />
          </label>
          <label>
            Endereço:
            <input name='adress' type='text' maxLength='200' required />
          </label>
          <label>
            Cidade:
            <input name='city' type='text' maxLength='28' required />
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
            <textarea name='curriculo' type="text" maxLength="1000" required></textarea>
          </label>
          <label>
            Cargo:
            <textarea  name='cargo' type="text" maxLength="40" required></textarea>
          </label>
          <label>
            Descrição do cargo:
            <input name='descricaoCargo' type='text' maxLength='50' required />
          </label>
        </fieldset>
        <button type='submit'>Salvar</button>
        <button type='submit'>Limpar</button>
      </form>
    )
  }
}

export default Form;