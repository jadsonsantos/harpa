'use client'
import { useEffect, useRef, useState } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  /**
   * Quando o valor muda (ex: pathname de navegação), o estado de
   * visibilidade é reiniciado para que a animação possa disparar de novo.
   * Útil para componentes que vivem em um layout compartilhado e não
   * desmontam ao trocar de página.
   */
  resetKey?: unknown
}

/**
 * Detecta quando um elemento entra na área visível da tela e mantém esse
 * estado como `true` após a primeira ocorrência (a animação de entrada não
 * deve repetir em scrolls subsequentes dentro da mesma navegação), a menos
 * que `resetKey` mude.
 */
const useScrollReveal = <T extends HTMLElement = HTMLElement>({
  threshold = 0.25,
  resetKey
}: UseScrollRevealOptions = {}) => {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    setIsVisible(false)

    // Sem suporte a IntersectionObserver (navegador antigo, ambiente de
    // teste, etc.): mostra o conteúdo direto em vez de deixá-lo invisível
    // para sempre.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    // Usuário pediu redução de movimento: mostra o conteúdo direto, sem
    // esperar o scroll (o CSS também garante isso de forma independente).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, resetKey])

  return { ref, isVisible }
}

export default useScrollReveal
