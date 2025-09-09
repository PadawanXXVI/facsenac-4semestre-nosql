// MongoDB Playground — Aula 04 (rodar com ▶ Run All)

// 1) Selecionar/criar o DB (sintaxe do Playground)
use("LOJA_DEPARTAMENTOS");

// 2) (opcional) apaga coleções se existirem para reexecutar sem erro
// db.getCollectionNames().includes("ELETRO")    && db.ELETRO.drop();
// db.getCollectionNames().includes("MOVEIS")    && db.MOVEIS.drop();
// db.getCollectionNames().includes("CAMA_MESA") && db.CAMA_MESA.drop();

// 3) Q2 — criar coleção ELETRO
db.createCollection("ELETRO");

// 4) Q3 — inserir em ELETRO
db.ELETRO.insertMany([
  { _id: 1,  Produto: "Geladeira", Fabricante: "Eletrolux", Detalhes: "DX-50 - 800 litros",                Preco: 4500.00 },
  { _id: 2,  Produto: "Geladeira", Fabricante: "Consul",    Detalhes: "FND-127 - 750 litros",              Preco: 4300.00 },
  { _id: 3,  Produto: "Geladeira", Fabricante: "Panasonic", Detalhes: "AXN-123 - 850 litros",              Preco: 4950.00 },
  { _id: 4,  Produto: "Geladeira", Fabricante: "Samsung",   Detalhes: "PPS-987 - 900 litros",              Preco: 5200.00 },
  { _id: 5,  Produto: "Geladeira", Fabricante: "Brastemp",  Detalhes: "BBT-187 - 780 litros",              Preco: 4700.00 },
  { _id: 6,  Produto: "Fogão",     Fabricante: "Eletrolux", Detalhes: "FX180 - 6 bocas - forno duplo",     Preco: 3760.00 },
  { _id: 7,  Produto: "Fogão",     Fabricante: "Consul",    Detalhes: "FND80 - 4 bocas",                   Preco: 2150.00 },
  { _id: 8,  Produto: "Fogão",     Fabricante: "Panasonic", Detalhes: "AXN210 - 6 bocas - forno elétrico", Preco: 4120.00 },
  { _id: 9,  Produto: "Fogão",     Fabricante: "Samsung",   Detalhes: "FPS982 - 6 bocas - forno duplo",    Preco: 3980.00 },
  { _id: 10, Produto: "Fogão",     Fabricante: "Brastemp",  Detalhes: "BBT191 - 6 bocas - forno elétrico", Preco: 4098.00 }
]);

// 5) Q4 — criar coleção MOVEIS
db.createCollection("MOVEIS");

// 6) Q5 — inserir em MOVEIS
db.MOVEIS.insertMany([
  { _id: 1, Produto: "Cama casal Queen",  Fabricante: "Ortobom", Detalhes: "Molas ensacadas", Preco: 3810.00 },
  { _id: 2, Produto: "Cama casal King",   Fabricante: "Ortobom", Detalhes: "Molas normais",   Preco: 4350.00 },
  { _id: 3, Produto: "Cama casal Padrão", Fabricante: "Ortobom", Detalhes: "Espuma",          Preco: 2900.00 },
  { _id: 4, Produto: "Cama casal Queen",  Fabricante: "Mundial",  Detalhes: "Molas ensacadas", Preco: 3280.00 },
  { _id: 5, Produto: "Cama casal King",   Fabricante: "Mundial",  Detalhes: "Molas normais",   Preco: 3970.00 },
  { _id: 6, Produto: "Cama casal Padrão", Fabricante: "Mundial",  Detalhes: "Espuma",          Preco: 2870.00 },
  { _id: 7, Produto: "Cama casal Queen",  Fabricante: "Emma",     Detalhes: "Molas ensacadas", Preco: 3550.00 },
  { _id: 8, Produto: "Cama casal King",   Fabricante: "Emma",     Detalhes: "Molas normais",   Preco: 4080.00 },
  { _id: 9, Produto: "Cama casal Padrão", Fabricante: "Emma",     Detalhes: "Espuma",          Preco: 2720.00 }
]);

// 7) Q6 — criar coleção CAMA_MESA
db.createCollection("CAMA_MESA");

// 8) Q7 — inserir em CAMA_MESA
db.CAMA_MESA.insertMany([
  { _id: 1, Produto: "Toalha Banho",     Fabricante: "Karsten",  Detalhes: "Gigante - estampada",         Preco: 120.00 },
  { _id: 2, Produto: "Toalha Banho",     Fabricante: "Mmartan",  Detalhes: "Normal - lisa",               Preco: 110.00 },
  { _id: 3, Produto: "Toalha Banho",     Fabricante: "Santista", Detalhes: "Gigante - lisa",              Preco: 105.00 },
  { _id: 4, Produto: "Conjunto Lençóis", Fabricante: "Karsten",  Detalhes: "Queen - 500 fios - 4 peças",  Preco: 280.00 },
  { _id: 5, Produto: "Conjunto Lençóis", Fabricante: "Mmartan",  Detalhes: "King - 500 fios - 4 peças",   Preco: 310.00 },
  { _id: 6, Produto: "Conjunto Lençóis", Fabricante: "Santista", Detalhes: "Normal - 500 fios - 4 peças", Preco: 190.00 },
  { _id: 7, Produto: "Colcha",           Fabricante: "Karsten",  Detalhes: "Queen - 500 fios",            Preco: 190.00 },
  { _id: 8, Produto: "Colcha",           Fabricante: "Mmartan",  Detalhes: "King - 500 fios",             Preco: 220.00 },
  { _id: 9, Produto: "Colcha",           Fabricante: "Santista", Detalhes: "Normal - 500 fios",           Preco: 130.00 }
]);

// 9) conferência rápida
db.getCollectionNames();
db.ELETRO.countDocuments();
db.MOVEIS.countDocuments();
db.CAMA_MESA.countDocuments();
