import './Default.css';
type DefaultInputProps = {
  id: string;
  labelText: string;
  // labelText?: string; // torna o label opcional, caso queira usar o componente sem um label, ou com um label diferente do id
} & React.ComponentProps<'input'>; // && interseção, ou seja, o componente pode receber tanto as props que eu defini (id e labelText) quanto todas as props de um input normal (value, onChange, placeholder, etc)

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* {labelText ? <label htmlFor={id}>{labelText}</label> : ''} - Se labelText existir, renderiza o label, senão, renderiza uma string vazia */}
      <label htmlFor={id}>
        {labelText}
      </label>
      <input className="input" type={type} id={id} {...rest} />
    </>
  );
}

/*
    No seu código, DefaultInputProps é uma mistura. Imagine que você está criando um sanduíche:Sua parte: { id: string } (O recheio que você escolheu).Parte do React: ComponentProps<'input'> (O pão que já vem pronto com tudo que um input tem: value, onChange, placeholder, disabled, etc).O símbolo & (interseção) junta os dois. Isso significa que, ao usar o seu componente, o VS Code vai te sugerir tanto o seu id quanto todas as centenas de opções que um input comum já possui.2. O problema do "Telefone Sem Fio"No código original que você enviou, acontece algo curioso:typescriptexport function DefaultInput({ id, type }: DefaultInputProps) { 
    return (
        <>
        <label htmlFor={id}>{labelText}</label>
        <input type={type} id={id} {...rest} />
        </>
    );
    }
    Use o código com cuidado.Aqui, você recebe todas as propriedades, mas só entrega duas (id e type) para o input real.O que acontece na prática:Se você tentar usar o componente assim: <DefaultInput id="1" placeholder="Digite algo" />, o seu componente vai ignorar o placeholder, porque você não disse para o código pegar "o resto" das coisas e colocar no <input>.3. Como deixar esse código "Profissional"Para que seu componente seja realmente útil e aceite qualquer coisa (como um onChange ou um className), usamos o operador Rest (...props):tsx// 1. Pegamos o id, o type e guardamos TODO O RESTO em uma variável chamada 'rest'
    export function DefaultInput({ id, type, ...rest }: DefaultInputProps) {
    return (
        <>
        <label htmlFor={id}>{labelText}</label>
        { 2. Usamos o '...rest' para espalhar todas as outras propriedades no input }
        <input id={id} type={type} {...rest} />
        </>
    );
    }
    Use o código com cuidado.Por que isso é melhor?Acessibilidade: O label continua funcionando pelo id.Flexibilidade: Agora, se você quiser passar um onChange, onBlur, autoFocus ou qualquer atributo de input, ele vai funcionar automaticamente, sem você precisar mexer no componente de novo.Resumo Visualtype: Define o contrato (o que o componente pode receber).{ id, type }: Abre a caixa e pega itens específicos.htmlFor={id}: Conecta o texto ao campo (clicar no texto foca no campo).{...rest}: Garante que o componente se comporte como um input de verdade, aceitando comandos extras.
 */
