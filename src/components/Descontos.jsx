function Descontos(props){

    let desconto = props.descontoDoProduto

    return <h1>{desconto? "Desconto Aplicado" : "Não Tem Desconto"}</h1>
}

export default Descontos