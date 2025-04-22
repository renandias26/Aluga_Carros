# 💵 API de Aluguel de Carros

Uma API REST baseada em NestJS para gerenciar um sistema de aluguel de carros. Esta aplicação fornece endpoints para gerenciamento de usuários, inventário de carros e autenticação.

## ✨ Funcionalidades

### 🙍🏻‍♂️ Gerenciamento de Usuários
  - Criar, atualizar e excluir usuários
  - Autenticação de usuários com JWT
  - Criptografia de senha usando bcrypt

### 🚗 Gerenciamento de Carros
  - Adicionar, atualizar e remover carros do inventário
  - Categorização de carros (Nível Baixo, Nível Médio, Nível Alto, Luxo)
  - Rastrear status de disponibilidade dos carros

### 🔒 Segurança
  - Autenticação baseada em JWT
  - Rotas protegidas com Guards
  - Middleware de registro de requisições
  - Interceptors para manipular respotas

## 🛠️ Tecnologias

- NestJS
- MongoDB com Mongoose
- TypeScript
- JWT para autenticação
- Docker para banco de dados
- Swagger para documentação da API