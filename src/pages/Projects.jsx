import styles from './projects.module.css'
import Article from "../components/Article"


function Projects(){

    const projetos = [

        {id: 1, nome: "Projeto 01", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 2, nome: "Projeto 02", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 3, nome: "Projeto 03", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 4, nome: "Projeto 04", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 1, nome: "Projeto 01", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 2, nome: "Projeto 02", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 3, nome: "Projeto 03", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 4, nome: "Projeto 04", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 1, nome: "Projeto 01", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 2, nome: "Projeto 02", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 3, nome: "Projeto 03", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 4, nome: "Projeto 04", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 1, nome: "Projeto 01", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 2, nome: "Projeto 02", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 3, nome: "Projeto 03", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 4, nome: "Projeto 04", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 1, nome: "Projeto 01", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 2, nome: "Projeto 02", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 3, nome: "Projeto 03", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 4, nome: "Projeto 04", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 1, nome: "Projeto 01", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 2, nome: "Projeto 02", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 3, nome: "Projeto 03", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 4, nome: "Projeto 04", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 1, nome: "Projeto 01", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 2, nome: "Projeto 02", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 3, nome: "Projeto 03", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},
        {id: 4, nome: "Projeto 04", descricao: "Aqui vai a longa descrição do projeto que deve aparecer na tela (viria via API)"},

    ]


    return (
        <>
        <h1 className={styles.projectsTitle}>Nossos projetos</h1>
        <section className={styles.projectsBody}>
        {projetos.map( (p) => <Article key={p.id} artName={p.nome} artDesc={p.descricao} /> )}
        </section>

        {/* <Article artName="Nome do Artigo" artLogo={`${<ion-icon name='diamond-outline'></ion-icon>}`} artDesc="Descrição do artigo"/> */}
        </>
    )
}

export default Projects