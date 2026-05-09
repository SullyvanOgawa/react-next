import type React from 'react';
import styles from './Heading.module.css';
/*
    Pense em Props (abreviação de properties) como os argumentos de uma função. Se você tem uma função em JavaScript para somar, você passa dados para ela: function soma(a, b) { return a + b; } soma(10, 5); // 10 e 5 são os dados que você enviou para a função.
    
    Componentes React são como funções que retornam visual (HTML). As Props são o jeito que você passa informações de um componente "pai" para um componente "filho". Por exemplo, se você tem um componente de botão e quer que ele mostre um texto específico, você pode passar esse texto como uma prop. Assim, o componente de botão pode ser reutilizado com diferentes textos sem precisar criar um novo componente para cada variação.
    
    As props tornam seus componentes reutilizáveis. Sem elas, você teria que criar um componente BotaoAzul, um BotaoVermelho, etc. Com props, você cria um único Botao e muda o comportamento dele conforme a necessidade. Em fim, Props são o meio de transporte de dados no React. Elas fluem de cima para baixo (do pai para o filho).

    O TypeScript entra para garantir que você não esqueça de passar uma prop importante ou que não passe um número onde deveria ser um texto.Aquele código que você viu (type HeadingProps = { ... }) é apenas um contrato. Ele diz: "Ei, se você quiser usar o componente Heading, você PRECISA passar essas informações aqui".

    O type HeadingProps é o contrato (ou o manual de instruções). Se você definiu que o Heading precisa de um title, o TypeScript vai dar erro se você tentar usar o componente sem passar esse title.

    O children é uma prop especial. Ele não é passado como um atributo comum, mas sim dentro das tags de abertura e fechamento. Por exemplo: <Heading>Meu Título</Heading>. O "Meu Título" é o conteúdo que será passado para a prop children. Isso é útil porque permite que você insira qualquer tipo de conteúdo dentro do componente, seja texto, outros componentes, ou até mesmo elementos HTML. O children é uma maneira flexível de compor seus componentes e criar interfaces mais complexas sem precisar definir props específicas para cada tipo de conteúdo que você deseja renderizar.

    Por que tipar o children?No TypeScript, quando você escreve type HeadingProps = { children: ReactNode }, você está dizendo: "Aceito que coloquem qualquer coisa dentro das minhas tags: texto, outros componentes, ícones, etc."
  
*/

type HeadingProps = {
  children: React.ReactNode; // Tudo o que o react aceita como filho, pode ser string, número, elemento JSX, etc. Se você quiser aceitar apenas string, use: children: string;
  // children: string; tipagem específica para uma children.
}

export function Heading({children}: HeadingProps) {
  return (
    
    <h1 className={styles.heading}>{children}</h1>
    
  );
}
