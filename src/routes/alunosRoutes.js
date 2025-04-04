const express = require("express");
const router = express.Router();

// Declarando uma lista de alunos
let alunos = [];

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Gestão de alunos API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Aluno:
 *       type: object
 *       required:
 *         - id
 *         - nome
 *         - email
 *         - senha
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador do aluno gerado automaticamente
 *         nome:
 *           type: string
 *           description: Nome do aluno
 *         email:
 *           type: string
 *           description: Email do aluno
 *         senha:
 *           type: string
 *           description: Senha do aluno
 *       example:
 *         id: 1
 *         nome: Johnson Doe
 *         email: johnson.doe@dominio.com
 *         senha: 123321
 */

/**
 * @swagger
 * /api/alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 *       500:
 *         description: Erro no servidor
 */

// Endpoint para a criação de um aluno
router.post("/alunos", (req, res) => {
  const aluno = req.body;
  alunos.push(aluno);
  res.status(201).send("Aluno criado com sucesso!");
});

/**
 * @swagger
 * /api/alunos:
 *   get:
 *     summary: Retorna uma lista com todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista dos alunos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

// Endpoint para a exibição dos alunos
router.get("/alunos", (req, res) => {
  res.json(alunos);
});

/**
 * @swagger
 * /api/alunos/{id}:
 *   put:
 *     summary: Atualiza o aluno pelo seu id
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Atualiza pelo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 *       404:
 *         description: Aluno não encontrado
 *       500:
 *         description: Erro no servidor
 */

// Endpoint para a atualização de um aluno
router.put("/alunos/:id", (req, res) => {
  const id = req.params.id;
  const alunoAtualizado = req.body;
  alunos = alunos.map((aluno) => (aluno.id === id ? alunoAtualizado : aluno));
  res.status(200).send("Aluno atualizado com sucesso!");
});

/**
 * @swagger
 * /api/alunos/{id}:
 *   delete:
 *     summary: Remove o usuário pelo id
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Remove pelo id
 *     responses:
 *       204:
 *         description: Aluno deletado com sucesso
 *       404:
 *         description: Aluno não encontrado
 *       500:
 *         description: Erro no servidor
 */

// Endpoint para a deleção de um aluno
router.delete("/alunos/:id", (req, res) => {
  const id = req.params.id;
  alunos = alunos.filter((aluno) => aluno.id !== id);
  res.status(204).send("Aluno deletado com sucesso!");
});

module.exports = router;
