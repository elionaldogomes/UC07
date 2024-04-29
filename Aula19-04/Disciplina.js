class Disciplina{
    nome;
    codigo;
    ch;
    nota;
    constructor(nome, codigo, ch){
        this.nome = nome;
        this.codigo = codigo;
        this.ch = ch;
        this.nota = null;
    }
    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getCodigo(){
        return this.codigo;
    }
    setCH(ch){
        this.ch = ch;
    }
    getCH(){
        return this.ch;
    }
    setNota(nota){
        this.nota = nota
    }
    getNota(){
        return this.nota;
    }
}
module.exports = Disciplina;