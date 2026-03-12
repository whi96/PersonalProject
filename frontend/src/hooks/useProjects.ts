import {useState, useEffect} from "react"
import type { Project } from "../types/Project"
import { fetchProjects } from "../services/api"

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        console.error("Erro ao carregar projetos:", err)
        setError("Nao foi possivel carregar os projetos")
        } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return { projects, loading, error }
}
