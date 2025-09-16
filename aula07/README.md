Faculdade de Tecnologia e Inovação Senac DF  
Brasília, 16 de setembro de 2025  
Anderson de Matos Guimarães  
Curso: Tecnólogo em Ciência de Dados  
Disciplina: Banco de Dados NoSQL  
Professor: Edgar Amoroso  

# FUNÇÃO AGGREGATE
```mongodb
Biblioteca> db.Emprestim.aggregate([
  {$match: {_id:1} }, //filtra o empréstimo desejado
  {$unwind: "emprestimos"}, //desagrega o array "emprestimos"
  {
    $lookup: {
    from: "Livros",
    localField: "emprestimos._id_livro",
    foreignField: "_id",
    as: "Livro"
  }
  }
]);
```
