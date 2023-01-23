import "./styles.css"

export function ResponseOutput({response}){
    console.log(response[1])
    console.log(response[15])
    console.log(response[30])
    console.log(response[90])
    return (
        <div class="output">
            <h1 class="h1">VOCÊ RECEBERA:</h1>
            <hr/>
            <p>Amanhã: <em>R$ {response[1]===1000? "0,00": response[1]}</em></p>
            <p>Em 15 dias: <em>R$ {response[15]===1000? "0,00": response[15]}</em></p>
            <p>Em 30 dias: <em>R$ {response[30]===1000? "0,00": response[30]}</em></p>
            <p>Em 90 dias: <em>R$ {response[90]===1000? "0,00": response[90]}</em></p>
        </div>
    )
}