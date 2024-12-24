export default function ButtonReload() {
  return (
    <button 
      className="btn" 
      aria-label="Recargar recursos del sitio web"
      onClick={() => window.location.reload()}
    >
        Recargar
    </button>
  )
}
