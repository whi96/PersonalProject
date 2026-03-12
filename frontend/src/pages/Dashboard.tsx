import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import { useProjects } from "../hooks/useProjects"

export default function Dashboard() {

  const { projects, loading, error } = useProjects()

  if (loading) {
    return <p>Carregando projetos...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <Header />

      <h1>Dashboard</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}

    </div>
  )
}