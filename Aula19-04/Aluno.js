class Aluno{
    nome;
    matricula;
    disciplina;

    constructor(nome, matricula, disciplina){
        this.nome = nome;
        this.matricula =  matricula;
        this.disciplina = disciplina;
    }  
    setNome(nome){ //setar o valor de um atributo
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    setMatricula(matricula){
        this.matricula = matricula;
    }
    getMatricula(){
        return this.matricula;
    }
    setDisciplina(disciplina){
        this.disciplina.push(disciplina);
    }
    getDisciplina(){
        return this.disciplina;
    }
    boletim(){
        for(let i=0; i<this.disciplina.length;i++){
        
        }
    }
}
module.exports = Aluno;