import styles from './Heading.module.css';
/*
  Aqui você está criando um tipo chamado HeadingProps.
  Ele define quais propriedades (props) o componente vai aceitar.
  Nesse caso: existe uma prop chamada children ela obrigatoriamente deve ser uma string.
  
*/

type HeadingProps = {
  children: string;
};

/*Aqui você cria e exporta uma função chamada Heading. Ela recebe as props do tipo HeadingProps. */
// O que é children?
// Em React, children representa o conteúdo colocado entre as tags do componente.

// {children} é desestruturação do objeto de props, ou seja, quando um componente React recebe props, ele recebe um objeto. Esse objeto é passado para a função do componente. E quando você desestrutura o objeto, você está dizendo, pegue a propriedade children de dentro do objeto.
export function Heading({children}: HeadingProps) {
  return (
   
    <h1 className={styles.heading}>{children}</h1>
    
  );
}
