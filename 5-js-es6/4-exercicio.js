const listaDeAlunos = [
    { nome: 'Ana', nota: 5.0},
    { nome: 'Bruno', nota: 10.0},
    { nome: 'Maria', nota: 2.0},
    { nome: 'Marta', nota: 7.0},
    { nome: 'Cecília', nota: 6.0}
]

    console.log('\nMostre todos os alunos, seus nomes e suas notas: ')
    listaDeAlunos.forEach(l => console.log(`${l.nome} tem ${l.nota} nota`))
    
    console.log('\nMostre a média geral da turma: ')
    const mediaNotas = listaDeAlunos.reduce((total, aluno ) => total + aluno.nota,0)
    const media = somaNotas / listaDeAlunos.length
    console.log(`Média geral da turma: ${media}`)


    console.log('\nMostre o nome e nota dos alunos com nota abaixo de 7.0: ')
    const abaixoDeSete = listaDeAlunos.filter(l => l.nota < 7.0 )
    abaixoDeSete.forEach(l => console.log(`${l.nome} tem ${l.nota} nota`))



    console.log('\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0: ')
    const maiorOuIgualaSete = listaDeAlunos.filter(l => l.nota >= 7.0)
    maiorOuIgualaSete.forEach(l => console.log(`${l.nome} tem ${l.nota} nota`))
    
    
    console.log('\nMostre o nome e a nota do aluno Bruno: ')
    const BrunoEncotrado = listaDeAlunos.find(l => l.nome === 'Bruno')
    console.log(`${BrunoEncotrado.nome} tem ${BrunoEncotrado.nota} nota`)

    console.log('\nSome todas as notas: ')
    const somaNotas = listaDeAlunos.reduce((total, l) => total, l.nota, 0)
    console.log(`Total das notas: ${somaNotas}`)

    console.log('\nListe todos os nomes dos alunos, sem mostrar suas nota')
    const nomes = listaDeAlunos.map(l => l.nome)
    console.log(nomes)