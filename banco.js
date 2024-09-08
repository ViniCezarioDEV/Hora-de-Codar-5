const user = prompt('Digite seu Nome');
var saldo = 500;
let extrato = [ {'Titulo':'Compras', 'Valor':70}, {'Titulo':'Lazer', 'Valor':100} ];

function inicio(){
    const choice = parseInt(prompt(`Olá ${user} Selecione uma opção:\n1. Ver Saldo\n2. Sacar dinheiro\n3. Depositar dinheiro\n4. Sair\n5. Ver extrato`
    ));
    senha();
}

function senha(){
    const SENHA = parseInt(prompt('Informe a senha'));
    if (SENHA == 3589){
        switch(choice){
            case 1:
                verSaldo();
                break;
            case 2:
                verExtrato();    
                break;
            case 3:
                sacarDinheiro();
                break;
            case 4:
                depositarDinheiro();    
                break;
            case 5:
                transferir();    
                break;
            case 6:
                alert(`${Nome}, foi um prazer ter você por aqui!`)
                break;
            default:
                erro();
                inicio();
        }
    }else{
        alert('Senha Incorreta');
        senha();
    }
}

function verSaldo(){
    alert(`Seu Saldo é: ${saldo}`);
    inicio();
}

function sacarDinheiro(){
    const VALOR_DO_SAQUE = parseInt(prompt(`Informe o valor a ser sacado (Saldo: ${saldo})`));
    if (VALOR_DO_SAQUE <= 0){
        alert('Sem saldo.');
        inicio();
    }else if (isNaN(VALOR_DO_SAQUE)){
        alert('Operação inválida');
        sacarDinheiro();
    }else{
        saldo -= VALOR_DO_SAQUE;
        alert(`Seu novo saldo é: ${saldo}`);
        inicio();
    }
}

function depositarDinheiro(){
    const VALOR_DO_DEPOSITO = parseInt(prompt(`Informe o valor a ser depositado`));
    if (VALOR_DO_DEPOSITO <= 0){
        alert('Operação não autorizada');
        depositarDinheiro();
    }else if (isNaN(VALOR_DO_DEPOSITO)){
        alert('Operação inválida');
        depositarDinheiro();
    }else{
        saldo += VALOR_DO_DEPOSITO;
        alert(`Seu novo saldo é: ${saldo}`);
        inicio();
    }
}

function verExtrato(){
    if (extrato){
        for (let dados in extrato){
            alert(`Despesa com: ${extrato[dados].Titulo}; Gasto Total: ${extrato[dados].Valor}`);
            
        }
    }
    inicio();
}

function transferir(){
    const NUMERO_DA_CONTA = parseInt(prompt('Informe o número da conta'));
    if ( isNaN(NUMERO_DA_CONTA) ){
        alert('Número de conta Inválido');
        transferir();
    }else{
        const VALOR_DA_TRANSFERENCIA = parseInt(prompt('Informe o valor a ser transferido'));
        if ( isNaN(VALOR_DA_TRANSFERENCIA) ){
            alert('Valor inválido');
            transferir();
        }else if (VALOR_DA_TRANSFERENCIA <= 0 || VALOR_DA_TRANSFERENCIA > saldo){
            alert('Transferência não autorizada');
            transferir();
        }else{
            saldo -= VALOR_DA_TRANSFERENCIA;
            alert(`Tranferência concluída com sucesso`)
            inicio();
        }
    }
}

function erro(){
    alert('Operação INVALIDA! tente novamente.');
}

inicio()