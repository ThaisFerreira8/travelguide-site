# Instruções para Deploy no GitHub

## 📋 Passos para Publicar o Site

### 1. Criar Repositório no GitHub
1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Nome: `travelguide-site` (ou qualquer nome desejado)
4. Marque como "Public"
5. Clique em "Create repository"

### 2. Fazer Upload dos Arquivos
1. No repositório criado, clique em "uploading an existing file"
2. Arraste todos os arquivos do projeto:
   - `index.html`
   - `about.html`
   - `contact.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Adicione uma mensagem de commit: "Initial commit - TravelGuide site"
4. Clique em "Commit changes"

### 3. Configurar GitHub Pages
1. No repositório, vá para "Settings"
2. Role até "Pages" no menu lateral
3. Em "Source", selecione "Deploy from a branch"
4. Escolha "main" como branch
5. Clique em "Save"

### 4. Acessar o Site
- O site estará disponível em: `https://[seu-usuario].github.io/[nome-do-repositorio]`
- Exemplo: `https://joaosilva.github.io/travelguide-site`

## 🔗 Links Necessários para o Projeto

### URL do Repositório
```
https://github.com/[seu-usuario]/[nome-do-repositorio]
```

### URL do Site
```
https://[seu-usuario].github.io/[nome-do-repositorio]
```

## ✅ Checklist de Verificação

- [ ] Repositório criado e público
- [ ] Todos os arquivos enviados
- [ ] GitHub Pages ativado
- [ ] Site acessível via URL
- [ ] Todas as páginas funcionando
- [ ] Formulário de contato funcionando
- [ ] Navegação responsiva
- [ ] Imagens carregando corretamente

## 🐛 Solução de Problemas

### Site não carrega
- Verifique se o GitHub Pages está ativado
- Aguarde alguns minutos para propagação
- Verifique se o arquivo `index.html` está na raiz

### Imagens não aparecem
- As imagens usam URLs do Unsplash (online)
- Verifique sua conexão com a internet
- As imagens podem demorar para carregar

### Formulário não funciona
- O formulário é apenas visual (não envia e-mails reais)
- Mostra mensagem de sucesso simulada
- Para funcionalidade real, seria necessário backend

## 📱 Teste em Dispositivos

1. **Desktop**: Teste em diferentes navegadores
2. **Tablet**: Verifique responsividade
3. **Mobile**: Teste menu hambúrguer
4. **Diferentes resoluções**: Use DevTools do navegador




