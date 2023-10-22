const formationList = document.querySelector(".formation-list");

const formacao = [
  "👨‍💻 Desenvolvedor Web Full Stack",
  "📚 Estudante de Análise e Desenvolvimento de Sistemas na UNINTER",
  "🎓 Fiz também em Direito e História na UFC (cursos incompletos)",
  "🚀 Proficiência em: JavaScript, React, Node, TypeScript, PostgreSQL, Express",
  "💼 Estagiário como Desenvolvedor Full Stack na STB Tecnologias, Fortaleza-CE",
  "🔵 Conhecimentos intermediários em Java e C#"
];

const listaFormatada = formacao.map(item => {
  return `<li>${item}</li>`;
});

formationList.innerHTML = listaFormatada.join("");