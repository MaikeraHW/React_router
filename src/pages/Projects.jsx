

function Projects(){

    const listaDeProjetos = [
        {id: 1, nome: "E-commerce com React"},
        {id: 2, nome: "Site Code Summit"},
        {id: 3, nome: "Loja MK 3D"}
    ]

    return (
        <>
        <section>
            <h1>Nossos Projetos</h1>
            <ul>
                {listaDeProjetos.map( p => <li key={p.id}>{p.nome}</li>)}
            </ul>
        </section>
        </>
    )
}

export default Projects