import "./styles.css"

export function FormInput({setAmount, setMdr, setInstallments}){
    return (
        <div class="input">
            <h1> Simule sua Antecipação</h1>

            <form>
                <p> Informe o valor da venda *</p>
                <input 
                    onChange={(event) => setAmount(event.target.value)}
                    type="number" 
                    min="1000"
                    
                />
                <p> Em quantas parcelas *</p>
                <input 
                    onChange={(event) => setInstallments(event.target.value)} 
                    type="number"
                    step="1"
                    min="1"
                    max="12"
                />
                <label>Máximo de 12 Pacelas</label>
                <p> Informe o percentual de MDR *</p>
                <input 
                    onChange={(event) => setMdr(event.target.value)} 
                    type="number"
                    step='0.01' 
                    min="0.01" 
                    max="100.00"
                />
            </form>
        </div>
    )
}